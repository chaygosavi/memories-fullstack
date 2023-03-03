import { Schema, model } from "mongoose";

const postSchema = Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const PostMessageModel = model("PostMessage", postSchema);
