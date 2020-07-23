import React, { useState, useEffect } from "react";
import UserPage from "./UserPage";
import { Grommet, Box, Button } from "grommet";
import theme from "../portfolioTheme";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState("dark");

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/celentanoad')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  
  const toggleDarkMode = () => {
    if (darkMode === "dark") setDarkMode("light");
    else setDarkMode("dark");
  }

  if (!user) return <div />;

  return (
    <Grommet theme={theme} themeMode={darkMode} full>
      <Box background="background-contrast">
        <Layout>
          <SEO title="Home" />
          <Button label="Toggle Dark Mode" onClick={toggleDarkMode}></Button>
          {user ?
          <UserPage user={user} />
          :
          <></>
          }
        </Layout>
      </Box>
    </Grommet>
  )
}

export default IndexPage;
