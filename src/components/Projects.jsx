import React from 'react';
import { Accordion, AccordionPanel, Anchor, Image, Box, Text, Grommet } from 'grommet';
import theme from '../portfolioTheme';
import threes from '../images/threes.png';
import steamCollector from '../images/steam-collector.png';
import bestBarcade from '../images/best-barcade.png';
import hyruleStays2 from '../images/hyrule-stays2.png';

const Projects = (props) => {
    const { animate, multiple, ...rest } = props;
    return (
      <Grommet theme={theme}>
        <Box {...rest}>
          <Accordion animate={animate} multiple={multiple}>
            <AccordionPanel label="Steam Collector">
              <Box background="dark-2" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "neutral-2", opacity: "strong" }}
                >
                <Text size="large" margin="small"> MongoDB | Express | React | Node.js</Text>
                <Image src={steamCollector} alt="Steam Collector" fit="contain"/>
                <Anchor color="accent-4" href="" label="View the deployed project" />
                <Anchor color="accent-4" href="" label="View the source code" />
                </Box>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Hyrule Stays">
              <Box background="dark-2" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "neutral-2", opacity: "strong" }}
                >
                <Text size="large" margin="small"> Javascript | MongoDB | Node.js | OAuth </Text>
                <Image src={hyruleStays2} alt="Hyrule Stays" fit="contain"/>
                <Anchor color="accent-4" href="" label="View the deployed project" />
                <Anchor color="accent-4" href="" label="View the source code" />
                </Box>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="The Best Barcade">
              <Box background="dark-2" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "neutral-2", opacity: "strong" }}
                >
                <Text size="large" margin="small"> Python | Django | Amazon Web Services | PostgreSQL</Text>
                <Image src={bestBarcade} alt="The Best Barcade" fit="contain"/>
                <Anchor color="accent-4" href="" label="View the deployed project" />
                <Anchor color="accent-4" href="" label="View the source code" />
                </Box>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Threes">
              <Box background="dark-2" overflow="auto" height="medium">
                <Box 
                  height="medium" 
                  flex={false} 
                  align="center" 
                  background={{ color: "neutral-2", opacity: "strong" }}
                >
                <Text size="large" margin="small"> Javascript | HTML | CSS </Text>
                <Image src={threes} alt="Threes game" fit="contain"/>
                <Anchor color="accent-4" href="" label="View the deployed project" />
                <Anchor color="accent-4" href="" label="View the source code" />
                </Box>
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
      </Grommet>
    );
};
 
export default Projects;