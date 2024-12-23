import React from "react";
import Card from "./Card";


function Cards(props)
{
    let courses = props.courses;
    
    function getCourses(){

        // console.log("Printing coursess ");
        // console.log(courses);
        let allCourses=[];
        Object.values(courses).forEach( (courseCategory) =>{
            courseCategory.forEach((course) =>{
                allCourses.push(course);
            })
        })

        return allCourses;
    }
    return(
        <div>
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} />
                ))
            }
        </div>
    )
    
   

}

export default Cards;