class User {
    constructor(public id: number, public posts: Post[] = [], public followers: User[] = []) { }
    createPost(content: string) {
        const postId = this.posts.length + 1
        const newPost = new Post(postId, this.id, content)
        this.posts.push(newPost);
    }
    comment(post: Post, commentContent: string) {
        const commentId = post.comments.length + 1
        const newComment = new Commentt(commentId, this.id, commentContent)
        post.addComment(newComment)
    }
    follow(user: User) {
        this.followers.push(user)
    }
    likePost(post: Post) {
        post.addLike(this)
    }
    viewFeed(): Post[] {
        let feed: Post[] = [];
        for (const followedUser of this.followers) {
            feed = feed.concat(followedUser.posts);
        }
        return feed;
    }
    displayFeed() {
        const feed = this.viewFeed();
        console.log(`Feed của user #${this.id}:`);
        feed.forEach(post => {
            console.log(`[Post #${post.id} từ user #${post.userId}]: ${post.content}`);
        });
    }
}
class Post {
    constructor(public id: number, public userId: number, public content: string, public likes: User[] = [], public comments: Commentt[] = [],) { }
    addLike(user: User) {
        this.likes.push(user)
    }
    addComment(comment: Commentt) {
        this.comments.push(comment)
    }
}
class Commentt {
    constructor(public id: number, public userId: number, public content: string, public replies: Commentt[] = []) { }
    addReply(reply: Commentt) {
        this.replies.push(reply)
    }
}


const userA = new User(1);
const userB = new User(2);
const userC = new User(3);
userA.createPost("ádfasfd A!");
userA.createPost("ádfasfdasasdf A");
userB.createPost("fasfasdfm B");
userC.follow(userA);
userC.follow(userB);
userC.likePost(userA.posts[0]);
userC.comment(userA.posts[1], "123adsf");
const cmt = userA.posts[1].comments[0]; 
const reply = new Commentt(1, userA.id, "Thank");
cmt.addReply(reply);
userC.displayFeed();