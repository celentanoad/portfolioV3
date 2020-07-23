import React from 'react';
import {
  Text,
  Heading,
  Box,
  Anchor
} from "grommet";
import { Link } from "gatsby"
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import './UserPage.css';

const UserPage = ({user}) => (
      <>
      <br></br>
      <Heading color="accent2" level="1" id="about" textAlign="center"> My Story </Heading>
      <Text textAlign="center">{user.basics.summary}</Text> <br/><br/>
      <div align="center">
        <Box 
          pad="xsmall"
          background="brand"
          round
          width="small"
          >
            <Box background="#EEEEEE" round pad="small" align="center">
              <Anchor href="https://drive.google.com/file/d/1u-WdGqTeEOXO6CopKwLVCnnA1rh_nm9E/view" target="_blank">View Resume</Anchor>
              {/* <Link to="/resume/"> View Resume </Link> */}
            </Box>
        </Box>
      </div>
      <br></br>
      <br></br>
      <Heading color="accent2" textAlign="center"> Skills </Heading>
      <Skills user={user} />
      <br></br>
      <br></br>
      <Heading color="accent2" id="projects" textAlign="center"> Projects </Heading>
      <Projects user={user}/>
      </>
);
 
export default UserPage;