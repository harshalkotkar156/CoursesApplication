import React, { useState } from "react";
import Card from "./Card";


function Cards(props)
{
    let courses = props.courses;
    let category = props.category;
    const [likeCourse,setlikeCourses] = useState([]);

    
    function getCourses(){

        
        if(category=== "All")
        {
            let allCourses=[];
            Object.values(courses).forEach( (courseCategory) =>{
                courseCategory.forEach((course) =>{
                    allCourses.push(course);
                })
            })
    
            return allCourses;     
        }else{
            return courses[category];
        }
       
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} likeCourse={likeCourse} setlikeCourses={setlikeCourses} />
                ))
            }
        </div>
    )
    

}

export default Cards;