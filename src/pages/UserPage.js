import React from 'react';
import {
  Text,
  Heading,
  Box
} from "grommet";
import { Link } from "gatsby"
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import './UserPage.css';

const UserPage = ({user}) => (
      <>
      <br></br>
      <Heading color="accent!" level="1" id="about"> My Story </Heading>
      <Text>{user.basics.summary}</Text> <br/><br/>
      <Box 
        pad="xsmall"
        background="brand"
        round
        width="small"
        >
        <Box background="text" round pad="small" align="center">
          <Link to="/resume/"> View Resume </Link>
        </Box>
      </Box>
      <br></br>
      <br></br>
      <Heading color="accent!"> Skills </Heading>
      <Skills />
      <Heading color="accent!" id="projects"> Projects </Heading>
      <Projects />
      </>
);
 
export default UserPage;