import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} color={user.color} city={user.city}/>
      <About bio={user.bio} />
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
