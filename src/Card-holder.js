import React from "react"
import './Card-holder.css';
import CardInfo from "./card-info.js"
import About from "./About"
import Interests from "./Interests"
import Socials from "./Socials";

export default function CardHolder() {
    return(
        <div className="card-holder">
           <CardInfo /> 
           <About />
           <Interests />
           <Socials />
        </div>
    )
}