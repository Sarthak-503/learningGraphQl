import mongoose from 'mongoose';

// Define the Lead schema
const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    leadStatus: { type: String, required: true },
    goodToBeCalled: { type: Boolean, default: false },
    status: { type: String, required: true },
    dateOfGeneration: { type: Date, default: Date.now },
    typeOfLead: { type: String, required: true },
  },
  { timestamps: true }
);

export const Lead = mongoose.models?.Lead || mongoose.model('Lead', leadSchema);
