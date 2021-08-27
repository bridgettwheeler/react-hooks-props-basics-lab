import React from "react";

function About(props) {
  if (!props.bio) {
    return null
  } else {}
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> {props.bio} </p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.linkedin}> Linkedin </a> 
      <a href={props.github}> Github </a>
      

    </div>
  );
}

export default About;
