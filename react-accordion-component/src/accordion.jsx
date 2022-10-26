import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { display: null };
  }

  handleClick(event) {
    const id = event.target.id;
    if (this.state.display === id) {
      this.setState({ display: null });
    } else {
      this.setState({ display: id });
    }
  }

  render() {
    const languages = this.props.language;
    const languageList = languages.map(language => {
      const display = this.state.display === language.abr ? '' : 'hidden';
      return (
      <div className="section" key={language.abr}>
        <div className="header" id={language.abr} onClick={this.handleClick}>{language.name}</div>
        <p className={`description ${display}`}>{language.description}</p>
      </div>
      );
    }
    );
    return (
      <div className="accordion">{languageList}</div>
    );
  }
}
