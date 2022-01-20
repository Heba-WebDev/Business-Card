import React from "react"
import './Card-holder.css';
import CardInfo from "./card-info.js"
import About from "./About"
import Interests from "./Interests"

export default function CardHolder() {
    return(
        <div className="card-holder">
           <CardInfo /> 
           <About />
           <Interests />
        </div>
    )
}