import React from 'react';
import { Accordion, AccordionPanel, Anchor, Image, Box, Text } from 'grommet';
import { Deploy, Code } from 'grommet-icons';
import threes from '../images/threes.png';
import steamCollector from '../images/steam-collector.png';
import bestBarcade from '../images/best-barcade.png';
import hyruleStays2 from '../images/hyrule-stays2.png';
import "./Projects.css"

const Projects = (props) => {
  const { animate, multiple, ...rest } = props;
  return (
        <Box {...rest}>
          <Accordion animate={animate} multiple={multiple}>
            <AccordionPanel label="Steam Collector" background="text">
              <Box background="brand" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "brand", opacity: "strong" }}
                  >
                <Text size="large" margin="small" color="text-strong" textAlign="center"> MongoDB | Express | React | Node.js</Text>
                <Image src={steamCollector} alt="Steam Collector" fit="contain"/>
                <div className="Styled">
                  <Anchor color="accent!" href="https://steam-collector.herokuapp.com/" margin="medium"><Deploy color="accent!"/></Anchor> 
                  <Anchor color="accent!" href={props.user.projects[2].githubUrl} margin="medium"><Code color="accent!" /></Anchor>
                </div>
                </Box>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Hyrule Stays" background="text">
              <Box background="brand" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "brand", opacity: "strong" }}
                >
                <Text size="large" margin="small" color="text-strong" textAlign="center"> Javascript | MongoDB | Node.js | OAuth </Text>
                <Image src={hyruleStays2} alt="Hyrule Stays" fit="contain"/>
                <div className="Styled">
                  <Anchor color="accent!" href={props.user.projects[1].website} margin="medium"><Deploy color="accent!"/></Anchor> 
                  <Anchor color="accent!" href={props.user.projects[1].githubUrl} margin="medium"><Code color="accent!" /></Anchor>
                </div>
                </Box>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="The Best Barcade" background="text">
              <Box background="brand" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "brand", opacity: "strong" }}
                >
                <Text size="large" margin="small" color="text-strong" textAlign="center"> Python | Django | Amazon Web Services | PostgreSQL</Text>
                <Image src={bestBarcade} alt="The Best Barcade" fit="contain"/>
                <div className="Styled">
                  <Anchor color="accent!" href="https://thebestbarcade.herokuapp.com/" margin="medium"><Deploy color="accent!"/></Anchor> 
                  <Anchor color="accent!" href={props.user.projects[0].githubUrl} margin="medium"><Code color="accent!" /></Anchor>
                </div>
                </Box>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Threes" background="text">
              <Box background="brand" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "brand", opacity: "strong" }}
                >
                <Text size="large" margin="small" color="text-strong" textAlign="center"> Javascript | HTML | CSS </Text>
                <Image src={threes} alt="Threes game" fit="contain"/>
                <div className="Styled">
                  <Anchor color="accent!" href={props.user.projects[3].website} margin="medium"><Deploy color="accent!"/></Anchor> 
                  <Anchor color="accent!" href={props.user.projects[3].githubUrl} margin="medium"><Code color="accent!" /></Anchor>
                </div>
                </Box>
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
    );
};
 
export default Projects;