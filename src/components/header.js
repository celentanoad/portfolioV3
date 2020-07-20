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
// import theme from '../theme';

const sections = [
  { name: "About", path: '/about' },
  { name: "Projects", path: '/projects' },
  { name: "Contact", path: '/contact' }
];

const PageHeader = () => {
  return (
    <>
    <Header pad="small">
      <Box direction="row" align="center" gap="small">
        <Heading color="accent" level="2" margin="small">Alanna Celentano</Heading>
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
              <Anchor href="#about" label="About" color="accent"/>
              <Anchor href="#projects" label="Projects" color="accent" />
              <Anchor href="#contact" label="Contact" color="accent"/>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
    <hr></hr>
  </>
  );
};
 
export default PageHeader;