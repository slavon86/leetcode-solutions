export class Cashier {
    private n: number;
    private discount: number;
    private count: number;
    private priceTable: Map<number, number>;
    constructor(
        n: number,
        discount: number,
        products: number[],
        prices: number[]
    ) {
        this.n = n;
        this.discount = discount;
        this.count = 0;
        this.priceTable = new Map();
        for (let index = 0; index < products.length; index++) {
            this.priceTable.set(products[index], prices[index]);
        }
    }

    getBill(product: number[], amount: number[]): number {
        let cost = 0;
        for (let index = 0; index < product.length; index++) {
            // @ts-ignore
            cost += this.priceTable.get(product[index]) * amount[index];
        }
        if (++this.count % this.n === 0) {
            cost -= (this.discount * cost) / 100;
        }
        return cost;
    }
}
