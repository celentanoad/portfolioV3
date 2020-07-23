import React from "react";
import {
  Anchor,
  Box,
  Text,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Heading
} from "grommet";
import { FormDown } from 'grommet-icons';

const sections = [
  { name: "About", path: '/about' },
  { name: "Projects", path: '/projects' },
  { name: "Contact", path: '/contact' }
];

const Header = () => {
  return (
    <>
    <Header pad="small" background="accent">
      <Box direction="row" align="center" gap="small">
        <Heading color="text" level="2" margin="small">Alanna Celentano</Heading>
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === "small" ? (
            <Menu
            plain
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
          >
            {({ drop, hover }) => {
              const color = hover && !drop ? 'background' : undefined;
              return (
                <Box
                  direction="row"
                  gap="small"
                  pad="small"
                  background={hover && drop ? 'light-2' : undefined}
                >
                  <Text color={color}>Menu</Text>
                  <FormDown color={color} />
                </Box>
              );
            }}
          </Menu>
          ) 
          : (
            <Nav direction="row">
              <Anchor href="#about" label="About" color="text"/>
              <Anchor href="#projects" label="Projects" color="text" />
              <Anchor href="#contact" label="Contact" color="text"/>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
    <hr></hr>
  </>
  );
};
 
export default Header;