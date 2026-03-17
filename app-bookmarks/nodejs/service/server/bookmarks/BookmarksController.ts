import { NextFunction, Request, Response } from 'express'
import * as HttpStatus from 'http-status-codes'
import { BookmarksService } from './BookmarksService'

/**
 * Controller
 */
export class BookmarksController {
    static bookmarksService: BookmarksService

    constructor() {
        BookmarksController.bookmarksService = new BookmarksService()
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BookmarksController.bookmarksService.getAll()
            if (result) {
                res.json(result)
            } else {
                res.sendStatus(HttpStatus.NOT_FOUND)
            }
        } catch (err) {
            next(err)
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookmarkId = req.params.bookmarkId
            if (Number(bookmarkId) > 0) {
                const result = await BookmarksController.bookmarksService.getById(Number(bookmarkId))
                if (result) {
                    res.json(result)
                } else {
                    res.sendStatus(HttpStatus.NOT_FOUND)
                }
            } else {
                res.sendStatus(HttpStatus.NOT_FOUND)
            }
        } catch (err) {
            next(err)
        }
    }

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let jsonResponse: any = {}
            jsonResponse.title = req.body.title
            jsonResponse.uri = req.body.uri
            jsonResponse.folder = req.body.folder
            jsonResponse.icon = req.body.icon
            jsonResponse.status = req.body.status
            jsonResponse.create_time = req.body.create_time
            jsonResponse.update_time = req.body.update_time
            res.json(jsonResponse);
        } catch (err) {
            next(err)
        }
    }

    public createFromJson = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let _json: any = {}
            _json.title = req.body.title
            _json.uri = req.body.uri
            _json.folder = req.body.folder
            _json.icon = req.body.icon
            _json.status = req.body.status
            _json.create_time = req.body.create_time
            _json.update_time = req.body.update_time

            await BookmarksController.bookmarksService.save(_json)
            res.json(_json)
                
        } catch (err) {
            next(err)
        }
    }

}
