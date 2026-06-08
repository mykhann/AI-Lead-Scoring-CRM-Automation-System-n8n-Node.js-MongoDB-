import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    company: String,
    message: String,

    score: {
      type: String,
      enum: ["HOT", "WARM", "COLD"],
    },

    reason: String,
    status: {
      type: String,
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);