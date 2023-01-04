const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Post model to whatever makes sense in this case
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
