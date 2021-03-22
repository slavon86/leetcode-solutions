export class Cashier {
    constructor(
        n: number,
        discount: number,
        prices: number[],
        products: number[]
    ) {
        return;
    }

    getBill(product: number[], amount: number[]): number {
        return 0;
    }
}

const obj = new Cashier(
    3,
    50,
    [1, 2, 3, 4, 5, 6, 7],
    [100, 200, 300, 400, 300, 200, 100]
);

console.log(obj.getBill([1, 2], [1, 2]));
