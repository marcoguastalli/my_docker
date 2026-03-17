import {PaymentService} from './../PaymentService'

export class StripePaymentService implements PaymentService {
    name: string

    constructor(name: string) {
        this.name = name
    }

    chargeUserMonthly(userId: number, monthlyAmount: number): boolean {
        console.log(this.name)
        return true
    }

}