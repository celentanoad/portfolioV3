import React from 'react';
import { Heading, Grid, Carousel, Image, Box, Text } from 'grommet';
import { Deploy, Code } from 'grommet-icons';
import { Button, Divider } from 'semantic-ui-react';
import "./Projects.css"


const Project = (props) => {
  const { animate, multiple, ...rest } = props;

  return (
    <div> 
      <Divider />
      <Heading size="medium" textAlign="center" margin="medium">{props.project.displayName.replace(/-/g, ' ')}
      </Heading>
          <Box
            pad="small"
            flex={true}
            align="center"
            background={{ color: "brand", opacity: "strong" }}
          >
            {props.project.images.length < 2 ?
              <Image src={props.project.images[0].resolutions.mobile.url} alt={props.project.displayName} fit="contain" />
            :
            <Carousel controls={false} play={5000} a11yTitle="Carousel of project images">
              {props.project.images.map(image => {
                return <Image src={image.resolutions.mobile.url} alt={props.project.displayName} fit="contain"/>
              })}
            </Carousel>
            }
            <Text textAlign="center">{props.project.summary}</Text>
            <Text>-----------------------</Text>
          <Grid
            columns={{
              count: 3,
              size: 'auto'
            }}
              gap="small"
          >
            {[...props.project.languages, ...props.project.libraries].map(item => {
              return  <Text size="small" color="text-strong" textAlign="center">
               {item}
              </Text>
            })}
            </Grid>
            <div className="Styled">
                <Button animated href={props.project.website} target="_blank" margin="medium">
                  <Button.Content visible><Deploy color="accent"/></Button.Content>
                  <Button.Content hidden>Deployed Site</Button.Content>
                </Button>
                <Button animated color="accent" href={props.project.githubUrl} target="_blank" margin="medium">
                  <Button.Content visible><Code color="accent"/></Button.Content>
                  <Button.Content hidden>Source Code</Button.Content>
                </Button>
            </div>
          </Box>
        </div>
  )
}
 
export default Project;