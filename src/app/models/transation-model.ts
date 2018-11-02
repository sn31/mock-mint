export class Transaction {
    constructor(
        public account: string,
        public amount: number,
        public category: string,
        public date: string,
        public description: string,
        public type: string
    ){}
}