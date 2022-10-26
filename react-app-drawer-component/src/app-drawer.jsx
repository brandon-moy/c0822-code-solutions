import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.state = { showMenu: false };
  }

  showMenu(event) {
    this.setState({ showMenu: true });
  }

  hideMenu(event) {
    this.setState({ showMenu: false });
  }

  render() {
    const menu = this.state.showMenu ? 'show-modal' : '';
    const offscreen = this.state.showMenu ? 'onscreen' : 'offscreen';
    return (
      <div className="container">
        <i className="fa-solid fa-bars" onClick={this.showMenu}></i>
        <div className={`menu column ${offscreen}`}>
          <h2 className="menu-title">Menu</h2>
          <a className="link" href="#" onClick={this.hideMenu}>About</a>
          <a className="link" href="#" onClick={this.hideMenu}>Contact Us</a>
          <a className="link" href="#" onClick={this.hideMenu}>Sign In</a>
        </div>
        <div className={`modal-background ${menu}`} onClick={this.hideMenu}></div>
      </div>
    );
  }
}
