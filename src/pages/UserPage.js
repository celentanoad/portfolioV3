import React from 'react';
import {
  Text,
  Heading
} from "grommet";

import Projects from '../components/Projects';
import Skills from '../components/Skills';
import PageHeader from '../components/header';
import PageFooter from '../components/Footer';
import './UserPage.css';

const UserPage = ({user}) => (
    <div className="main">
      <Heading color="accent-2" id="about"> My Story </Heading>
        <Text>
            {user.basics.summary}
        </Text>
      <Heading color="accent-2"> Skills </Heading>
      <Skills />
      <Heading color="accent-2" id="projects"> Projects </Heading>
      <Projects />
    </div>
);
 
export default UserPage;