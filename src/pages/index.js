import { Link } from "gatsby"
import React, { useState, useEffect } from "react";
import UserPage from "./UserPage";
import { Grommet, Main } from "grommet";
import theme from "../theme";
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/celentanoad')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) return <div />;

  return (
    <Layout>
    <SEO title="Home" />
    <Grommet theme={theme} full>
      <Main background="light-3">
        <UserPage user={user} />
      </Main>
    </Grommet>
    <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage;
