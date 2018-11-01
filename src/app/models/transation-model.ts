export class Transaction {
    constructor(
        public accountName: string,
        public amount: number,
        public category: string,
        public date: string,
        public description: string,
        public transactionType: string
    ){}
}