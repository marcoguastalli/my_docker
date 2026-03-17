import * as express from 'express'
import { Express } from 'express'
import { Server } from 'http'
import * as compress from 'compression'
import helmet from 'helmet'
import * as hpp from 'hpp'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'

import { noCache } from './middlewares/NoCacheMiddleware'
import { CatEndpoints } from './cats/CatEndpoints'
import { RequestServices } from './types/CustomRequest'
import { addServicesToRequest } from './middlewares/ServiceDependenciesMiddleware'

import { ReleaseNotesController } from './releasenotes/ReleaseNotesController'
import { BookmarksController } from './bookmarks/BookmarksController'

import { upgradeAccountRoute } from './payments/PaymentsRoutes'
import { StripePaymentService } from './payments/impl/StripePaymentService'

/**
 * Abstraction around the raw Express.js server and Nodes' HTTP server.
 * Defines HTTP request mappings, basic as well as request-mapping-specific
 * middleware chains for application logic, config and everything else.
 */
export class ExpressServer {
    private server?: Express
    private httpServer?: Server

    constructor(
        private catEndpoints: CatEndpoints,
        private requestServices: RequestServices,
        private releaseNotesController: ReleaseNotesController,
        private bookmarksController: BookmarksController,
    ) {}

    public async setup(port: number) {
        const server = express()
        this.setupStandardMiddlewares(server)
        this.setupSecurityMiddlewares(server)
        this.setupServiceDependencies(server)
        this.configureApiEndpoints(server)

        this.httpServer = this.listen(server, port)
        this.server = server
        return this.server
    }

    public listen(server: Express, port: number) {
        console.info(`Starting server on port ${port}`)
        return server.listen(port)
    }

    public kill() {
        if (this.httpServer) this.httpServer.close()
    }

    private setupSecurityMiddlewares(server: Express) {
        server.use(hpp())
        server.use(helmet())
        server.use(helmet.referrerPolicy({ policy: 'same-origin' }))
        server.use(
            helmet.contentSecurityPolicy({
                directives: {
                    defaultSrc: ["'self'"],
                    styleSrc: ["'unsafe-inline'"],
                    scriptSrc: ["'unsafe-inline'", "'self'"],
                },
            }),
        )
    }

    private setupStandardMiddlewares(server: Express) {
        server.use(cookieParser())
        server.use(compress())

        const baseRateLimitingOptions = {
            windowMs: 15 * 60 * 1000, // 15 min in ms
            max: 1000,
            message: 'Our API is rate limited to a maximum of 1000 requests per 15 minutes, please lower your request rate',
        }
        server.use('/api/', rateLimit(baseRateLimitingOptions))
    }

    private setupServiceDependencies(server: Express) {
        const servicesMiddleware = addServicesToRequest(this.requestServices)
        server.use(servicesMiddleware)
    }

    private configureApiEndpoints(server: Express) {
        const strictRateLimit = rateLimit({
            windowMs: 15 * 60 * 1000, // 15 min in ms
            max: 200,
            message: 'This endpoint has a stricter rate limiting of a maximum of 200 requests per 15 minutes window, please lower your request rate',
        })

        // create application/json parser
        var jsonParser = bodyParser.json()
        // create application/x-www-form-urlencoded parser
        var urlencodedParser = bodyParser.urlencoded({ extended: false })

        server.get('/api/cat', noCache, jsonParser, this.catEndpoints.getAllCats)
        server.get('/api/statistics/cat', noCache, jsonParser, strictRateLimit, this.catEndpoints.getCatsStatistics)
        server.get('/api/cat/:catId', noCache, jsonParser, this.catEndpoints.getCatDetails)
        server.get('/app', noCache, jsonParser, this.releaseNotesController.getReleaseNotes)
        server.get('/app/bookmarks/all', noCache, jsonParser, this.bookmarksController.getAll)
        server.get('/app/bookmarks/:bookmarkId', noCache, jsonParser, this.bookmarksController.getById)

        server.post('/app/bookmarks/create', urlencodedParser, this.bookmarksController.create)
        server.post('/app/bookmarks/createFromJson', noCache, jsonParser, this.bookmarksController.createFromJson)

        server.get('/app/stripe', noCache, upgradeAccountRoute(new StripePaymentService('stripe')))
    }
}
