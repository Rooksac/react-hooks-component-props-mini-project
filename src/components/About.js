import React from "react";

function About({image, about}) {
    return (
        <aside>
            {image ? <img alt="blog logo" src={image}></img> : <img src="https://via.placeholder.com/215"/>}
            <p>{about}</p>
        </aside>
    )
}

export default About;