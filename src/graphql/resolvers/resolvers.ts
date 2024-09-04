import { getAllLeads, getAllUsers, getUserById } from '../../controllers/user.js';
import { getAllCourses, getAllLectures, getCourseById, getCoursesOfUser } from '../../controllers/course.js';
import { CourseType } from '../../models/courseModel.js';
import { LectureType } from '../../models/lectureModel.js';

type SampleUserType ={
    name:string;
    age:number;
    gender:string;
}

const myUsers: SampleUserType[] = [];

export const graphQLResolvers =  {
    
    Mutation:{
      newUser:(_:any,{name,age,gender}:SampleUserType)=>{
        // console.log(name,age,gender);
        myUsers.push({
          name,
          age,
          gender
        })
        return "Users Added Successfully";
      }
    },
    Query:{
      hello:() => "Hello World",
      wow:() =>"34",
      users:getAllUsers,
      user: getUserById,
      courses:getAllCourses,
      course:getCourseById,
      lectures:getAllLectures,
      leads:getAllLeads,
      sampleUsers:()=>myUsers,
    },
    Course:{
      instructor:async(course:CourseType) => {
      return await getUserById(course.instructor)
      }
    },
    User:{
      courses: getCoursesOfUser,
    },
    Lecture:{
      videoUrl:(lecture:LectureType)=>{
        // console.log( lecture.videoUrl['480p'])
        return {
          _480p: lecture.videoUrl['480p'],
          _720p:lecture.videoUrl["720p"],
          _1080p:lecture.videoUrl["1080p"],
        }
      }
    },

  }