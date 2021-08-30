import React from "react";

function Links(props) {
    return (
        <div id="links">
            <h3>Links</h3>
            <a href={props.linkedin}> Linkedin </a> 
            <a href={props.github}> Github </a>

        </div> 
    );   
}

export default Links;
