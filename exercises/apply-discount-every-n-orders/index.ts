export class Cashier {
    private n: number;
    private discount: number;
    private prices: number[];
    private products: number[];
    private count: number;

    constructor(
        n: number,
        discount: number,
        products: number[],
        prices: number[]
    ) {
        this.n = n;
        this.discount = discount;
        this.products = products;
        this.prices = prices;
        this.count = 0;
    }

    getBill(product: number[], amount: number[]): number {
        let coast = 0;
        this.count = this.count + 1;
        for (let index = 0; index < product.length; index++) {
            coast =
                coast +
                this.prices[this.products.indexOf(product[index])] *
                    amount[index];
        }
        if (this.count % this.n === 0) {
            coast = coast - (this.discount * coast) / 100;
            this.count = 0;
        }
        return coast;
    }
}
