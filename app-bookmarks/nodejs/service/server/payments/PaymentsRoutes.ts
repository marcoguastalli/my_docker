import { Request, Response, NextFunction } from 'express'
import {PaymentService} from './PaymentService'

type ExpressRouteFunc = (req: Request, res: Response, next?: NextFunction) => void | Promise<void>

export function upgradeAccountRoute(paymentService: PaymentService): ExpressRouteFunc {
    return async function (req: Request, res: Response) {
        const userId = 27
        const amount: number = 12.3
        const result = paymentService.chargeUserMonthly(userId, amount)
        res.json(result)
    }

}


