import React from "react";

import {FcLike} from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { useState } from "react";

function Card(props)
{
    
    let course = props.course;
  
    let setlikeCourses = props.setlikeCourses;
    let likeCourse =props.likeCourse;
    function clickHandler()
    {
      
        if(likeCourse.includes(course.id)) {
            //pehle se like hua pada tha
            setlikeCourses( (prev) => prev.filter((cid)=>  ( cid !== course. id)));

            toast.warning("like removed");
        }
        else{
            //pehlese like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likeCourse.length === 0) {
                setlikeCourses([course.id]);
            }
            else{
                setlikeCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Sucessfully");
        }
    }
    

    return (
        <div className="w-[300px] rounded-md overflow-hidden bg-[#2a2b45] bg-opacity-90 ">
            <div className="relative">
                <img src={course.image.url} alt="" />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-36  grid place-items-center">
                    <button onClick={clickHandler}>
                        
                       

                        {
                            likeCourse.includes(course.id) ? (<FcLike fontSize='1.75rem'></FcLike>) : ( <FcLikePlaceholder fontSize='1.75rem' />)
                        }

                    </button>

                </div>                                                                                
            </div>

             

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>

                <p className="mt-2 text-white">{((course.description).substring(0,90)) + "..."}</p>
                {/* //str.substring(0, length); */}
            </div>
        </div>
    )
}

export  default Card;