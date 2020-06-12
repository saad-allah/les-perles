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

      <header>
        <nav className="navbar navbar-expand-lg navbar-light" id="se-navbar">

              <Logo />
            <button
              className="navbar-toggler"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
               onClick={this.OpenMenu}
               >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className={`collapse navbar-collapse ${menuOpen}`}
                id="navbarSupportedContent"
              >
            <MenuList />
            </div>

        </nav>
    </header>
    );
  }}
