import React from 'react';
import {
  Text,
  Heading
} from "grommet";
import { Link } from "gatsby"
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import './UserPage.css';

const UserPage = ({user}) => (
    <div className="main">
     
      <br></br>
      <Heading color="brand" level="1" id="about"> My Story </Heading>
      <Text>{user.basics.summary}</Text> <br/><br/>
      <Link to="/resume/" color="accent">View Resume</Link> <br />
      <br></br>
      <br></br>
      <Heading color="brand"> Skills </Heading>
      <Skills />
      <Heading color="brand" id="projects"> Projects </Heading>
      <Projects />
    </div>
);
 
export default UserPage;