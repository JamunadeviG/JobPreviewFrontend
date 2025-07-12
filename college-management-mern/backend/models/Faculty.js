import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String },
    email: { type: String, unique: true },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
  },
  { timestamps: true }
);

const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;