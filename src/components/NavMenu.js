import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import Fade from 'material-ui/transitions/Fade';

export default class NavMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    let children = React.Children.map(this.props.children, (child) => {
      return (<MenuItem button component={props => child} />);
    })

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'nav-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="nav-menu"
          component="nav"
          anchorEl={this.state.anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onClick={this.handleClose}
          transition={Fade}
        >
          {children}
        </Menu>
      </div>
    );
  }
}