import React from "react"


import './Card-info.css';

export default function CardInfo() {
    return(
        <div className="card-wrapper">
            <img alt="business woman" className="card-img" src="./business-woman.jpeg"></img>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <span>Laurasmith.com</span>
            <div className="card-btns">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}