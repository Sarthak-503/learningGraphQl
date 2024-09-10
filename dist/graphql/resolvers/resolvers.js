import { getAllColumn, getAllLeads, getAllUsers, getUserById } from '../../controllers/user.js';
import { getAllCourses, getAllLectures, getCourseById, getCoursesOfUser } from '../../controllers/course.js';
const myUsers = [];
export const graphQLResolvers = {
    Mutation: {
        newUser: (_, { name, age, gender }) => {
            // console.log(name,age,gender);
            myUsers.push({
                name,
                age,
                gender
            });
            return "Users Added Successfully";
        }
    },
    Query: {
        hello: () => "Hello World",
        wow: () => "34",
        users: getAllUsers,
        user: getUserById,
        courses: getAllCourses,
        course: getCourseById,
        lectures: getAllLectures,
        leads: getAllLeads,
        columns: getAllColumn,
        sampleUsers: () => myUsers,
    },
    Course: {
        instructor: async (course) => {
            return await getUserById(course.instructor);
        }
    },
    User: {
        courses: getCoursesOfUser,
    },
    Lecture: {
        videoUrl: (lecture) => {
            // console.log( lecture.videoUrl['480p'])
            return {
                _480p: lecture.videoUrl['480p'],
                _720p: lecture.videoUrl["720p"],
                _1080p: lecture.videoUrl["1080p"],
            };
        }
    },
};
