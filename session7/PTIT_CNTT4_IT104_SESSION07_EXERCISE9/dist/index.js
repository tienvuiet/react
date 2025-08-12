class User {
    constructor(id, posts = [], followers = []) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }
    createPost(content) {
        const postId = this.posts.length + 1;
        const newPost = new Post(postId, this.id, content);
        this.posts.push(newPost);
    }
    comment(post, commentContent) {
        const commentId = post.comments.length + 1;
        const newComment = new Commentt(commentId, this.id, commentContent);
        post.addComment(newComment);
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(post) {
        post.addLike(this);
    }
    viewFeed() {
        let feed = [];
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
    constructor(id, userId, content, likes = [], comments = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = likes;
        this.comments = comments;
    }
    addLike(user) {
        this.likes.push(user);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Commentt {
    constructor(id, userId, content, replies = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
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
