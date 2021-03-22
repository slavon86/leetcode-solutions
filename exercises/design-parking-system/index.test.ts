import { ParkingSystem } from "./index";

describe("Design Parking System", () => {
    let parkingSystem: ParkingSystem;
    beforeEach(() => {
        parkingSystem = new ParkingSystem(1, 1, 0);
    });
    test("Possible to park type 1 car", () => {
        expect(parkingSystem.addCar(1)).toEqual(true);
    });
    test("Possible to park type 2 car", () => {
        expect(parkingSystem.addCar(2)).toEqual(true);
    });
    test("Impossible to park type 3 car", () => {
        expect(parkingSystem.addCar(3)).toEqual(false);
    });
    describe("When one type 1 car is parked:", () => {
        beforeEach(() => {
            parkingSystem.addCar(1);
        });
        test("Impossible to park one more type 1 car", () => {
            expect(parkingSystem.addCar(1)).toEqual(false);
        });
    });
});
