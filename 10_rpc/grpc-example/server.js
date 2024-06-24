const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "./posts.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const postsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

let posts = [
  {id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1"},
  {id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2"},
];

server.addService(postsProto.PostsService.service, {
  getAllPosts: (call, callback) => {
    callback(null, {posts});
  },
  getPost: (call, callback) => {
    const postId = call.request.id;
    const postItem = posts.find(({id}) => postId === id);
    callback(null, postItem);
  },
  deletePost: (call, callback) => {
    const postId = call.request.id;
    posts = posts.filter(({id}) => id !== postId);
    callback(null, {});
  },
  editPost: (call, callback) => {
    const postId = call.request.id;
    const postsItem = posts.find(({id}) => postId === id);
    postsItem.body = call.request.body;
    postsItem.postImage = call.request.postImage;
    postsItem.title = call.request.title;
    callback(null, postsItem);
  },
  addPost: (call, callback) => {
    let post = {id: Date.now(), ...call.request};
    posts.push(post);
    callback(null, post);
  },
});

server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("Server at port:", port);
      console.log("Server running at http://127.0.0.1:50051");
    }
);