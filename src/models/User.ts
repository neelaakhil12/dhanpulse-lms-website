import mongoose, { Schema, models, Model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    enrolledCourses: [{ type: String }], // Array of course IDs (e.g., 'basic', 'silver')
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User: Model<any> = models.User || mongoose.model("User", UserSchema);

export default User;
