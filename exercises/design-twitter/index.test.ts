import { Twitter } from "./index";

describe("Design Twitter", () => {
    let twitter: Twitter;

    beforeEach(() => {
        twitter = new Twitter();
    });
    test("Returns empty post-list of user 1, user 2, user 3.", () => {
        expect(twitter.getNewsFeed(1)).toEqual([]);
        expect(twitter.getNewsFeed(2)).toEqual([]);
        expect(twitter.getNewsFeed(3)).toEqual([]);
    });

    describe("When user 1 posts tweet:", () => {
        beforeEach(() => {
            twitter.postTweet(1, 5);
        });
        test("User 1 gets own tweet 5 in the feed.", () => {
            expect(twitter.getNewsFeed(1)).toEqual([5]);
        });
        test("User 2 gets empty list.", () => {
            expect(twitter.getNewsFeed(2)).toEqual([]);
        });
        describe("When user 1 adds one more tweet:", () => {
            beforeEach(() => {
                twitter.postTweet(1, 6);
            });
            test("User 1 gets own tweets 6 and 5 in the feed.", () => {
                expect(twitter.getNewsFeed(1)).toEqual([6, 5]);
            });
            test("User 2 gets empty list.", () => {
                expect(twitter.getNewsFeed(2)).toEqual([]);
            });
            describe("When user 2 follow user 1:", () => {
                beforeEach(() => {
                    twitter.follow(2, 1);
                });
                test("User 2 gets tweets 6 and 5 in the feed.", () => {
                    expect(twitter.getNewsFeed(2)).toEqual([6, 5]);
                });
                describe("When user 2 posts tweet 7:", () => {
                    beforeEach(() => {
                        twitter.postTweet(2, 7);
                    });
                    test("User 2 gets tweets 7, 6, 5 in the feed.", () => {
                        expect(twitter.getNewsFeed(2)).toEqual([7, 6, 5]);
                    });
                    test("User 1 gets tweets 6 and 5 in the feed.", () => {
                        expect(twitter.getNewsFeed(1)).toEqual([6, 5]);
                    });
                    describe("When user 2 unfollow user 1:", () => {
                        beforeEach(() => {
                            twitter.unfollow(2, 1);
                        });
                        test("User 2 gets own tweet 7 in the feed.", () => {
                            expect(twitter.getNewsFeed(2)).toEqual([7]);
                        });
                        test("User 1 gets tweets 6 and 5 in the feed.", () => {
                            expect(twitter.getNewsFeed(1)).toEqual([6, 5]);
                        });
                    });
                });
            });
        });
    });
});
