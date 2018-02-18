import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";
import glamorous from "glamorous";

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

const SidebarContainer = g.div({
  "paddingRight": rhythm(1.5),
  "width": "13rem",
});

const Content = g.div({
  "flex": "1 1 auto",
  "overflow": "auto",
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

const NavLink = glamorous(Link)({
  "fontWeight": 300,
});

const Footer = g.footer({
  "textAlign": "right",
  "fontSize": "0.75rem"
});

const activeLink = css({
  "color": "#000000",
}).toString();

export default ({ children, location }) => {
  let illustrationLinkClass = "";
  if (location.pathname === "/" || location.pathname.startsWith("/illustrations/")) {
    illustrationLinkClass = activeLink;
  }
  return (
      <App>
        <AppBody>
          <SidebarContainer>
            <Sidebar>
              <Link to={`/`}>
                <SiteTitle>test site</SiteTitle>
              </Link>
              <Links>
                <li><NavLink className={illustrationLinkClass} to={`/`}>illustration</NavLink></li>
                <li><NavLink activeClassName={activeLink} to={`/narratives/`}>sequential</NavLink></li>
                <li><NavLink activeClassName={activeLink} to={`/studies/`}>studies</NavLink></li>
                <li><NavLink activeClassName={activeLink} to={`/about/`}>about</NavLink></li>
              </Links>
            </Sidebar>
          </SidebarContainer>
          <Content>
            {children()}
          </Content>
        </AppBody>
        <Footer>
          Copyright © {new Date().getFullYear()} keramei. All rights reserved.
        </Footer>
      </App>
  );
}