import React from 'react'
import Form from './Form'
import { CiLocationOn } from "react-icons/ci";
const CommonInput = ({ details }) => {
    console.log(details)
    return (
        <form>
            <div>
                <input type={details.type} placeholder={details.placeholder} required/>
            </div>

        </form>

    )
}

export default CommonInput