import { Cashier } from "./index";

describe("Apply discount every n orders", () => {
    let cashier: Cashier;
    beforeEach(() => {
        cashier = new Cashier(
            3,
            50,
            [1, 2, 3, 4, 5, 6, 7],
            [100, 200, 300, 400, 300, 200, 100]
        );
    });
    test("returns 500.0, bill = 1 * 100 + 2 * 200 = 500.", () => {
        expect(cashier.getBill([1, 2], [1, 2])).toBeCloseTo(500.0);
    });
    describe("When getBill([1, 2],[1, 2]):", () => {
        beforeEach(() => {
            cashier.getBill([1, 2], [1, 2]);
        });
        test("returns 4000.0", () => {
            expect(cashier.getBill([3, 7], [10, 10])).toBeCloseTo(4000.0);
        });
        describe("When getBill([3, 7], [10, 10]):", () => {
            beforeEach(() => {
                cashier.getBill([3, 7], [10, 10]);
            });
            test(
                "return 800.0, The bill was 1600.0 but as this is the third customer, " +
                    "he has a discount of 50% which means his bill" +
                    " is only 1600 - 1600 * (50 / 100) = 800.",
                () => {
                    expect(
                        cashier.getBill(
                            [1, 2, 3, 4, 5, 6, 7],
                            [1, 1, 1, 1, 1, 1, 1]
                        )
                    ).toBeCloseTo(800.0);
                }
            );
            describe("When getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1]) :", () => {
                beforeEach(() => {
                    cashier.getBill(
                        [1, 2, 3, 4, 5, 6, 7],
                        [1, 1, 1, 1, 1, 1, 1]
                    );
                });
                test("returns 4000.0", () => {
                    expect(cashier.getBill([4], [10])).toBeCloseTo(4000.0);
                });
                describe("When getBill([4], [10]) :", () => {
                    beforeEach(() => {
                        cashier.getBill([4], [10]);
                    });
                    test("returns 4000.0", () => {
                        expect(cashier.getBill([7, 3], [10, 10])).toBeCloseTo(
                            4000.0
                        );
                    });
                    describe("When getBill([7, 3], [10, 10]) :", () => {
                        beforeEach(() => {
                            cashier.getBill([7, 3], [10, 10]);
                        });
                        test(
                            "return 7350.0, Bill was 14700.0 but as " +
                                "the system counted three more customers, he will " +
                                "have a 50% discount and the bill becomes 7350.0",
                            () => {
                                expect(
                                    cashier.getBill(
                                        [7, 5, 3, 1, 6, 4, 2],
                                        [10, 10, 10, 9, 9, 9, 7]
                                    )
                                ).toBeCloseTo(7350.0);
                            }
                        );
                        describe("When getBill([7,5,3,1,6,4,2],[10,10,10,9,9,9,7]) :", () => {
                            beforeEach(() => {
                                cashier.getBill(
                                    [7, 5, 3, 1, 6, 4, 2],
                                    [10, 10, 10, 9, 9, 9, 7]
                                );
                            });
                            test("returns 2500.0", () => {
                                expect(
                                    cashier.getBill([2, 3, 5], [5, 3, 2])
                                ).toBeCloseTo(2500.0);
                            });
                        });
                    });
                });
            });
        });
    });
});
