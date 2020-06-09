import React from "react";
import MenuList from "./menu/menuTop";
import Logo from "./menu/logoTop";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.OpenMenu = this.OpenMenu.bind(this);
  }

  OpenMenu(e) {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }
  render() {
    let menuOpen = this.state.open ? " open" : "";
    return (
      <header >
     
          <nav className="navbar navbar-expand-lg navbar-light" id="se-navbar">
        
              <Logo />
              <button
                className="nav-icon-toggle navbar-toggler"
                data-toggle="collapse"
                data-target="#se-nav"
                aria-controls="se-nav"
                aria-expanded="true"
                aria-label="Toggle navigation"
                onClick={this.OpenMenu}
              >
                <span className="nav-icon-toggle__box">
                  <span className="nav-icon-toggle__inner"></span>
                </span>
              </button>
              <div
                className={`collapse navbar-collapse ${menuOpen}`}
                id="se-nav"
              >
                <MenuList />
              </div>
        
          </nav>
   
      </header>
    );
  }}
