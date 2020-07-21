import React, { useState, useEffect } from "react";
import UserPage from "./UserPage";
import { Grommet, Main, Box } from "grommet";
import theme from "../portfolioTheme";
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  const [user, setUser] = useState(null);
  // const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/celentanoad')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  // const toggleDarkMode = () => {
  //   if (darkMode) setDarkMode(false);
  //   else if (!darkMode) setDarkMode(true);
  // }

  if (!user) return <div />;

  return (
    <Grommet theme={theme} themeMode="dark" full>
      <Box background="background-contrast">
        <Layout>
          <SEO title="Home" />
          <UserPage user={user} />
        </Layout>
      </Box>
    </Grommet>
  )
}

export default IndexPage;
