import React from "react";

import {FcLike} from "react-icons/fc";

function Card(props)
{
    let course = props.course;
    return (
        <div>
            <div>
                <img src={course.image.url} alt="" />


            </div>

            <div>
                <button>
                    <FcLike></FcLike>
                </button>
            </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    )
}

export  default Card;