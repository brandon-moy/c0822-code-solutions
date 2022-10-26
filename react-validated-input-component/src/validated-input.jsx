import React from 'react';

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.checkPassword = this.checkPassword.bind(this);
    this.returnMessage = this.returnMessage.bind(this);
    this.state = ({
      longEnough: false,
      hasUpperCase: false,
      specialCharacter: false,
      hasNumber: false,
      length: 0
    });
  }

  checkPassword(event) {
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const password = event.target.value;
    let specialCharacterCount = 0;
    let numberCount = 0;
    let upperCaseCount = 0;
    for (let i = 0; i < specialCharacters.length; i++) {
      if (password.includes(specialCharacters[i])) {
        specialCharacterCount++;
      }
    }

    for (let j = 0; j < password.length; j++) {
      if (Number.isInteger(parseInt(password[j]))) {
        numberCount++;
      }
      if (password[j] === password[j].toUpperCase()) {
        upperCaseCount++;
      }
    }

    if (specialCharacterCount) {
      this.setState({ specialCharacter: true });
    } else {
      this.setState({ specialCharacter: false });
    }

    if (numberCount) {
      this.setState({ hasNumber: true });
    } else {
      this.setState({ hasNumber: false });
    }

    if (upperCaseCount) {
      this.setState({ hasUpperCase: true });
    } else {
      this.setState({ hasUpperCase: false });
    }

    if (password.length > 7) {
      this.setState({ longEnough: true, length: password.length });
    } else {
      this.setState({ longEnough: false, length: password.length });
    }
  }

  returnMessage() {
    if (!this.state.length) return 'A password is required.';
    if (!this.state.longEnough) return 'Your password is too short.';
    if (!this.state.hasUpperCase) return 'Your password needs to have an Uppercase letter.';
    if (!this.state.hasNumber) return 'Your passwords needs to have a number.';
    if (!this.state.specialCharacter) return 'Your password needs a special character such as !, @, #, $ or %.';
    return '';
  }

  render() {
    const message = this.returnMessage();
    const icon = message === '' ? 'fa-check' : 'fa-x';
    return (
      <div>
        <input type="password" onChange={this.checkPassword}></input>
        <i className={`fa-solid ${icon}`}></i>
        <p className="message">{message}</p>
      </div>
    );
  }
}
