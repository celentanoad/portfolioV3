import React from "react";
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Heading
} from "grommet";
import { HashLink as Link } from 'react-router-hash-link';
import theme from '../theme';

const sections = [
  { name: "About", path: '/about' },
  { name: "Projects", path: '/projects' },
  { name: "Contact", path: '/contact' }
];

const PageHeader = () => {
  
  
  return (
    <Grommet theme={theme}>
    <Header background="dark-1" pad="small">
      <Box direction="row" align="center" gap="small">
        <Heading color="accent-1" level="2">Alanna Celentano</Heading>
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === "small" ? (
            <Menu
              label="Menu"
              items={[
                { label: "About", onClick: () => {
                  document.getElementById("about").scrollIntoView()
                } },
                { label: "Projects", onClick: () => {
                  document.getElementById("projects").scrollIntoView()
                } },
                { label: "Contact", onClick: () => {
                  document.getElementById("contact").scrollIntoView()
                } }
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#about" label="About" />
              <Anchor href="#projects" label="Projects" />
              <Anchor href="#contact" label="Contact" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
  );
};
 
export default PageHeader;