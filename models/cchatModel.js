import mongoose from "mongoose";
const ContentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Content", ContentSchema);
