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
  "padding": rhythm(4),
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
  "paddingRight": rhythm(3),
});

const SiteTitle = g.h1({
  "display": "inline-block",
})
const Links = g.ul({
  "listStyleType": "none",
  "padding": 0,
  "textAlign": "right",
});

const Li = g.li({
  "marginBottom": rhythm(1),
})

const Footer = g.footer({
  "textAlign": "right",
  "fontSize": "0.75em"
})

const activeLink = css({
  "color": "#000000",
  "fontWeight": 400,
}).toString();

export default ({ children, location }) => {
  let illustrationLinkClass = "";
  if (location.pathname === "/" || location.pathname.startsWith("/illustrations/")) {
    illustrationLinkClass = activeLink;
  }
  return (
      <App>
        <AppBody>
          <Sidebar>
            <Link to={`/`}>
              <SiteTitle>test site</SiteTitle>
            </Link>
            <Links>
              <Li>
                <Link className={illustrationLinkClass} to={`/`}>
                  illustration
                </Link>
              </Li>
              <Li>
                <Link activeClassName={activeLink} to={`/narratives/`}>
                  narrative
                </Link>
              </Li>
              <Li>
                <Link activeClassName={activeLink} to={`/studies/`}>
                  studies
                </Link>
              </Li>
              <Li>
                <Link activeClassName={activeLink} to={`/about/`}>
                  about
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