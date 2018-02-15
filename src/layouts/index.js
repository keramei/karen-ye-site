import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";
import glamorous from "glamorous";

const App = g.div({
  "display": "flex",
  "margin": `0 auto`,
  "padding": rhythm(2),
});

const Content = g.div({
  "flex": 1,
});

const Sidebar = g.div({
  "paddingRight": rhythm(1.5),
  // "width": "100px",
});

const Links = g.ul({
  "listStyleType": "none",
  "padding": 0,
  "textTransform": "uppercase",
  "textAlign": "right",
});

const Li = g.li({
  "marginBottom": 0,
})

const activeLink = css({
  "fontWeight": "bold",
}).toString();

const inactiveLink = css({
  "color": "#000000",
}).toString();

export default ({ children }) => (
  <App>
    <Sidebar>
      <Link to={`/`}>
        <g.H1
          display={`inline-block`}
          fontStyle={`normal`}
        >
          TEST SITE
        </g.H1>
      </Link>
      <Links>
        <Li>
          <Link className={inactiveLink} activeClassName={activeLink} exact to={`/`}>
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
  </App>
);