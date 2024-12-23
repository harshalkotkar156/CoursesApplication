import React, { useEffect, useState } from "react";

import Card from "./Card";


function Cards({courses})
{

    

    // function getAllCourses()
    // {
    //     Object.values(courses).forEach( (courseCategory) =>{
    //         courseCategory.forEach((course) =>{
    //             allCourses.push(course);
    //         })
    //     })

    //     return allCourses;

    // }
    let allCourses=[];

    const getCourses =() =>{
        Object.values(courses).forEach( (courseCategory) =>{
            courseCategory.forEach((course) =>{
                allCourses.push(course);
            })
        })

        return allCourses;
    }

  
    // function print()
    // {
    //     console.log("Hey");
    //     console.log(allCourses.length);
    // }    

    
    // function print()
    // {
    //     console.log(allCourses.length);
    //     console.log('aalo');
    // }
    
    return (
        <div>
        { 
            getCourses.map( (course) => {
                <Card course={course}/>
            })
        }
        {/* <button onClick={print()}>click here</button> */}

        </div>
    )

}

export default Cards;