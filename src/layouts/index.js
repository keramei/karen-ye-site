import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { Grid, Row, Col } from 'react-flexbox-grid';

import { rhythm } from "../utils/typography";

import MediaQuery from "react-responsive";

import NavMenu from "../components/NavMenu"

css.global('html, body', { "backgroundColor": "rgb(250,245,249)" });

const App = g.div({
  "display": "flex",
  "flexDirection": "column",
  "margin": `0 auto`,
  "padding": rhythm(2),
  "maxWidth": "1200px",
});

const AppBody = g.div({
  "display": "flex",
  "flex": 1,
});

const Sidebar = g.nav({
  "position": "fixed",
});

const SiteTitle = g.h1({
  "fontWeight": 300,
  "fontSize": "3.0rem",
})

const Links = g.ul({
  "listStyleType": "none",
  "padding": 0,
  "textAlign": "right",
  "fontSize": '1.25rem',
});

const NavLink = g(Link)({
  "fontWeight": 300,
  "paddingLeft": "8px",
  "paddingRight": "8px",
});

const Footer = g.footer({
  "textAlign": "right",
  "fontSize": "0.75rem"
});

const sidebarContainer = css({
  "paddingRight": rhythm(1.5),
  "width": "13rem",
  "flex": "0 0 auto",
}).toString();

const content = css({
  "flex": "1 1 auto",
  "overflow": "auto",
}).toString();

const activeLink = css({
  "color": "#000000",
}).toString();

export default ({ children, location }) => {
  let illustrationLinkClass = "";
  if (location.pathname === "/" || location.pathname.startsWith("/illustrations/")) {
    illustrationLinkClass = activeLink;
  }

  let navLinks = [
    <li key="nl1"><NavLink className={illustrationLinkClass} to={`/`}>illustration</NavLink></li>,
    <li key="nl2"><NavLink activeClassName={activeLink} to={`/narratives/`}>sequential</NavLink></li>,
    <li key="nl3"><NavLink activeClassName={activeLink} to={`/studies/`}>studies</NavLink></li>,
    <li key="nl4"><NavLink activeClassName={activeLink} to={`/about/`}>about</NavLink></li>
  ];

  return (
      <App>
        <MediaQuery query="(max-width: 47.999rem)">
          <header>
            <Grid fluid>
              <Row>
                <Col xs={9}><Link to={`/`}><SiteTitle>test site</SiteTitle></Link></Col>
                <Col xs={3}>
                  <NavMenu>{navLinks}</NavMenu>
                </Col>
              </Row>
            </Grid>
          </header>
        </MediaQuery>
        <AppBody>
          <MediaQuery query="(min-width: 48rem)">
            <div class={sidebarContainer}>
              <Sidebar>
                <Link to={`/`}><SiteTitle>test site</SiteTitle></Link>
                <Links>{navLinks}</Links>
              </Sidebar>
            </div>
          </MediaQuery>
          <div class={content}>
            {children()}
          </div>
        </AppBody>
        <Footer>
          Copyright © {new Date().getFullYear()} keramei. All rights reserved.
        </Footer>
      </App>
  );
}