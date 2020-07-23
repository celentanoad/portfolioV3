import React from 'react';
import { Box, Footer, Image, Main, Text, Anchor, Heading, Grid } from 'grommet';


const PageFooter = () => (
    <Main elevation="large" pad="medium" gap="small" align="center" background="border">
      <Heading color="text" margin="none" level="2" alignSelf="center" id="contact">Contact</Heading>
      <Grid 
        columns={{
          count: 3,
          size: "auto"
        }}
        gap="small"
      >
        <Box align="center">
          Github
          <Anchor href="https://github.com/celentanoad">
          <Image src="https://i.imgur.com/kO7lRkL.png" alt="GitHub" width="25px" />
          </Anchor>
        </Box>
        <Box align="center">
          Email
          <Anchor href="mailto:celentanoad91@gmail.com" color="accent2">celentanoad91@gmail.com</Anchor>
        </Box>
        <Box align="center">
          LinkedIn
          <Anchor href="https://www.linkedin.com/in/alanna-celentano">
          <Image src="https://i.imgur.com/DZfppKt.png" alt="LinkedIn" width="25px" />
          </Anchor>
        </Box>
      </Grid>
 
      <Box flex />
    <Footer justify="center" pad="small" level>
      <Text textAlign="center" size="small">
        © Alanna Celentano, 2020
      </Text>
    </Footer>
    </Main>
);

export default PageFooter;