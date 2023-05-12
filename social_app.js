class User {
  constructor(name, email, password, dateOfBirth, location, profilePicture) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.location = location;
    this.profilePicture = profilePicture;
    this.posts = [];
    this.groups = [];
  }

  createPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.push(post);
  }

  likePost(post) {
    post.addLike(this);
  }

  commentPost(post, content) {
    const comment = new Comment(this, content);
    post.addComment(comment);
  }

  replyToComment(comment, content) {
    const reply = new Comment(this, content);
    comment.addReply(reply);
  }

  joinGroup(group) {
    group.addMember(this);
    this.groups.push(group);
  }

  leaveGroup(group) {
    group.removeMember(this);
    const userIndex = this.groups.indexOf(group);
    if (userIndex !== -1) {
      this.groups.splice(userIndex, 1);
    }
  }
}

class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = [];
    this.comments = [];
  }

  addLike(user) {
    this.likes.push(user);
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.replies = [];
    this.likes = [];
  }

  addReply(reply) {
    this.replies.push(reply);
  }
}
// Create user objects
const user1 = new User('LAKSHMIKANT', 'fullstacktrainer@gmail.com', 'password123', '12/10/1998', 'Bengaluru', 'lucky.jpg');
const user2 = new User('bipul', 'bipul@gmail.com', 'password456', '01/01/1990', 'Delhi', 'bipul.jpg');
const user3 = new User('ram', 'ram@gmail.com', 'password789', '05/05/1995', 'Mumbai', 'ram.jpg');

// Create a post
const post = new Post('My First Post', 'This is the content of my post.', user1);
console.log(post, "post");
// Users like and comment on the post
user2.likePost(post);
console.log(user2,"like post")



user3.commentPost(post, 'Great post!');
console.log(user3, "comment post")

// User1 replies to the comment
user1.replyToComment(post.comments[0], 'Thank you for your feedback!');
console.log(user1, "reply comment")