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

const Content = g.div({
  "flex": 1,
});

const Sidebar = g.nav({
  "flex": "0 0 auto",
  "order": -1,
  "paddingRight": rhythm(1.5),
});

const SiteTitle = g.h1({
  "display": "inline-block",
  "fontWeight": "bold",
})
const Links = g.ul({
  "listStyleType": "none",
  "padding": 0,
  "textAlign": "right",
});

const Li = g.li({
  "marginBottom": 0,
  "fontFamily": "'Julius Sans One', 'Source Sans Pro', sans-serif"
})

const Footer = g.footer({
  "textAlign": "right",
  "fontSize": "0.75em"
})

const activeLink = css({
  "fontWeight": "bold",
  "color": "#000000",
}).toString();

const inactiveLink = css({
  "color": "#000000",
}).toString();

export default ({ children, location }) => {
  let illustrationLinkClass = inactiveLink;
  if (location.pathname === "/" || location.pathname.startsWith("/illustrations/")) {
    illustrationLinkClass = activeLink;
  }
  return (
      <App>
        <AppBody>
          <Sidebar>
            <Link to={`/`}>
              <SiteTitle>Test Site</SiteTitle>
            </Link>
            <Links>
              <Li>
                <Link className={illustrationLinkClass} to={`/`}>
                  Illustration
                </Link>
              </Li>
              <Li>
                <Link className={inactiveLink} activeClassName={activeLink} to={`/narratives/`}>
                  Narrative
                </Link>
              </Li>
              <Li>
                <Link className={inactiveLink} activeClassName={activeLink} to={`/studies/`}>
                  Study
                </Link>
              </Li>
              <Li>
                <Link className={inactiveLink} activeClassName={activeLink} to={`/about/`}>
                  About
                </Link>
              </Li>

            </Links>
          </Sidebar>
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