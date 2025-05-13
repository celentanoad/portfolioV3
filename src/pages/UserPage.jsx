import React from 'react';
import {
  Text,
  Heading,
  Box,
  Anchor
} from "grommet";
import { Divider } from 'semantic-ui-react';
import Project from '../components/Project';
import Skills from '../components/Skills';
import './UserPage.css';

function UserPage ({user}) {
  if (!user) return <div />;
  return (
      <>
      <br></br>
      <Heading color="accent2" level="1" id="about" textAlign="center"> My Story </Heading>
      <Divider />
      <Text textAlign="center">{user.basics.summary}</Text> <br/><br/>
      <div align="center">
        <Box 
          pad="xsmall"
          background="brand"
          round
          width="small"
          >
            <Box background="#EEEEEE" round pad="small" align="center">
              <Anchor href="https://docs.google.com/document/d/1HrXDHFm8Q0NbEfXLf1r2HSvjqtD1At1TgQUYoj6ECXg/edit?usp=sharing" target="_blank">View Resume</Anchor>
              {/* <Link to="/resume/"> View Resume </Link> */}
            </Box>
        </Box>
      </div>
      <br></br>
      <br></br>
      <Heading color="accent2" textAlign="center"> Skills </Heading>
      <Divider />
      <Skills user={user} />
      <br></br>
      <br></br>
      <Heading color="accent2" id="projects" textAlign="center"> Projects </Heading>
      {user.projects.map(project => {
        return <Project project={project}/>
      })}
    </>
      
  );
}
 
export default UserPage;