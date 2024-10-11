import mongoose from 'mongoose';


const leadSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    countryISOCode: { type: String, required: true },
    countryCode: { type: String, required: true },
    addressLine1: { type: String, required: true },
    source: { type: String, required: true },
    companyName: { type: String, required: true },
    industry: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    timeOfContact: { type: String, required: true },
    leadId: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    createdDt: { type: String, required: true },
    leadType: { type: String, required: true },
    message: { type: String, required: true }
    
  },
  { timestamps: true }
);

export const Lead = mongoose.models?.Lead || mongoose.model('Lead', leadSchema);
