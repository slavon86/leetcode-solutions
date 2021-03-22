interface Tweet {
    userId: number;
    tweetId: number;
}

export class Twitter {
    private tweets: Tweet[];
    private followers: number[][];
    constructor() {
        this.tweets = [];
        this.followers = [];
    }

    postTweet(userId: number, tweetId: number): void {
        this.tweets.unshift({
            userId: userId,
            tweetId: tweetId,
        });
    }

    getNewsFeed(userId: number): number[] {
        const result: number[] = [];
        const neededUserIds: number[] = [];
        neededUserIds.push(userId);
        if (this.followers[userId] !== undefined) {
            for (let j = 0; j < this.followers[userId].length; j++) {
                neededUserIds.push(this.followers[userId][j]);
            }
        }

        for (let i = 0; i < this.tweets.length; i++) {
            for (let k = 0; k < neededUserIds.length; k++) {
                if (this.tweets[i].userId === neededUserIds[k]) {
                    result.push(this.tweets[i].tweetId);
                    if (result.length === 10) {
                        return result;
                    }
                }
            }
        }
        return result;
    }

    follow(followerId: number, followeeId: number): void {
        if (followerId === followeeId) {
            return;
        }
        if (this.followers[followerId] === undefined) {
            this.followers[followerId] = [];
        }
        if (this.followers[followerId].indexOf(followeeId) === -1) {
            this.followers[followerId].push(followeeId);
        }
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.followers[followerId] === undefined) {
            return;
        }
        if (this.followers[followerId].indexOf(followeeId) !== -1) {
            this.followers[followerId].splice(
                this.followers[followerId].indexOf(followeeId),
                1
            );
        }
    }
}
