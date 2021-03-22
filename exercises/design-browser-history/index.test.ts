import { BrowserHistory } from "./index";

describe(
    "Design Browser History. Homepage - leetcode.com. " +
        "Visit google.com, facebook.com and youtube.",
    () => {
        let browserHistory: BrowserHistory;
        beforeEach(() => {
            browserHistory = new BrowserHistory("leetcode.com");
            browserHistory.visit("google.com");
            browserHistory.visit("facebook.com");
            browserHistory.visit("youtube.com");
        });
        test(`Back (1) -> We are on "facebook.com"`, () => {
            expect(browserHistory.back(1)).toEqual("facebook.com");
        });
        describe("When Back(1):", () => {
            beforeEach(() => {
                browserHistory.back(1);
            });
            test(`Back (1) -> We are on "google.com"`, () => {
                expect(browserHistory.back(1)).toEqual("google.com");
            });
            test(`Back (2) -> We are on "leetcode.com"`, () => {
                expect(browserHistory.back(2)).toEqual("leetcode.com");
            });
            test(`Back (3) -> We are on "leetcode.com"`, () => {
                expect(browserHistory.back(3)).toEqual("leetcode.com");
            });
            test(`Forward (1) -> We are on "youtube.com"`, () => {
                expect(browserHistory.forward(1)).toEqual("youtube.com");
            });
            test(`Forward (2) -> We are on "youtube.com"`, () => {
                expect(browserHistory.forward(2)).toEqual("youtube.com");
            });
        });
    }
);
