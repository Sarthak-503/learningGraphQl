import mongoose from "mongoose";

type LectureType ={
  videoUrl: {
    "480p": string;
    "720p":string,
    "1080p":string,
  };
  position:number;
  title:string;
  description:string;
  resources:{
    title:string;
    key:string;
  }[];
  duration:string;
  slug?:string;
  course: mongoose.Schema.Types.ObjectId;
  section: mongoose.Schema.Types.ObjectId;
  instructor: mongoose.Schema.Types.ObjectId;
  isPublished:boolean;
  isPreview:boolean;
  createdAt: Date;
  updatedAt: Date;
  _id:mongoose.Schema.Types.ObjectId;
}


// Define the Lecture schema
const lectureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    position: { type: Number, required: true },
    resource: [
      {
        id: { type: String, required: true, sparse: true },
        title: { type: String, required: true },
        url: { type: String, required: true, unique: true },
      },
    ],
    videoUrl: {
      "480p": { type: String, required: true },
      "720p": { type: String, required: true },
      "1080p": { type: String, required: true },
    },
    duration: { type: Number, required: true },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPublished: { type: Boolean, required: true },
    isPreview: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

lectureSchema.index({
  section:1,
  position:1
},
{
  unique:true
})

export const Lecture =mongoose.models?.Lecture || mongoose.model("Lecture", lectureSchema);
  
export type {LectureType};
