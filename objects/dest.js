const course = {
    coursename: "js",
    price: "99",
    courseinstructor: "aryan"
}
//console.log(course.courseinstructor) ya
//const  {courseinstructor} = course
//console.log(courseinstructor); -arayn ya

const  {courseinstructor: instructor} = course //destructure done by changing the name
console.log(instructor); 



