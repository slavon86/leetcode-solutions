import { Cashier } from "./index";

describe("Apply discount every n orders", () => {
    let cashier: Cashier;
    test("Scenario 1", () => {
        cashier = new Cashier(
            3,
            50,
            [1, 2, 3, 4, 5, 6, 7],
            [100, 200, 300, 400, 300, 200, 100]
        );
        expect(cashier.getBill([1, 2], [1, 2])).toBeCloseTo(500.0);
        expect(cashier.getBill([3, 7], [10, 10])).toBeCloseTo(4000.0);
        expect(
            cashier.getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1])
        ).toBeCloseTo(800.0);
        expect(cashier.getBill([4], [10])).toBeCloseTo(4000.0);
        expect(cashier.getBill([7, 3], [10, 10])).toBeCloseTo(4000.0);
        expect(
            cashier.getBill([7, 5, 3, 1, 6, 4, 2], [10, 10, 10, 9, 9, 9, 7])
        ).toBeCloseTo(7350.0);
        expect(cashier.getBill([2, 3, 5], [5, 3, 2])).toBeCloseTo(2500.0);
    });
    test("Scenario 2", () => {
        cashier = new Cashier(
            5,
            40,
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [11, 2.5, 30, 4.2, 3, 12, 7, 11.5, 8.3, 50]
        );
        expect(cashier.getBill([1, 3, 4], [2, 3, 1])).toBeCloseTo(116.2);
        expect(cashier.getBill([3, 7, 9, 10], [1, 1, 2, 1])).toBeCloseTo(103.6);
        expect(
            cashier.getBill([1, 2, 3, 4, 5, 6, 7], [1, 2, 1, 3, 1, 1, 2])
        ).toBeCloseTo(87.6);
        expect(cashier.getBill([4], [11])).toBeCloseTo(46.2);
        expect(cashier.getBill([7, 9], [12, 5])).toBeCloseTo(75.3);
        expect(
            cashier.getBill([7, 5, 3, 1, 6, 4, 2, 9], [5, 6, 11, 9, 9, 9, 7, 2])
        ).toBeCloseTo(661.9);
        expect(cashier.getBill([3, 5], [5, 3])).toBeCloseTo(159.0);
        expect(cashier.getBill([1, 10], [5, 2])).toBeCloseTo(155.0);
        expect(cashier.getBill([7, 2, 9], [1, 3, 1])).toBeCloseTo(22.8);
        expect(cashier.getBill([2, 3], [5, 2])).toBeCloseTo(43.5);
        expect(cashier.getBill([3, 4, 8, 10], [5, 3, 2, 2, 3])).toBeCloseTo(
            285.6
        );
        expect(cashier.getBill([2], [5])).toBeCloseTo(12.5);
    });
});
