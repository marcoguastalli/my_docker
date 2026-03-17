export interface PaymentService {
	chargeUserMonthly: (userId: number, monthlyAmount: number) => boolean
}