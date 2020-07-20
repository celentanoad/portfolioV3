import React from 'react';

import { Box, Footer, Grommet, Image, Main, Text, Anchor, Heading, Grid } from 'grommet';
import theme from '../theme';


const PageFooter = () => (
  <Grommet theme={theme}>
    <Main elevation="large" pad="medium" gap="small">
      <Heading color="accent-1" margin="none" level="2">Contact</Heading>
      <Grid 
        columns={{
          count: 3,
          size: "auto"
        }}
        gap="small"
      >
        <Box textAlign="center">
          Github
          <Anchor href="https://github.com/celentanoad">
          <Image src="https://i.imgur.com/kO7lRkL.png" alt="GitHub" width="25px" />
          </Anchor>
        </Box>
        <Box>
          Email
          <Anchor href="mailto:celentanoad91@gmail.com">celentanoad91@gmail.com</Anchor>
        </Box>
        <Box>
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
  </Grommet>
);

export default PageFooter;