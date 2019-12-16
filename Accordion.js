import React from "react";

class Accordion extends React.Component {
  state = {
    currentIndex: null
  };

  handleButtonClick(index) {
    this.setState({ currentIndex: index});
  }

  renderLi() {
    if(!this.props.sections){
      return <li></li>
    }
    return this.props.sections.map((prop, index) => (
      <li key={index}>
        <button onClick={() => this.handleButtonClick(index)}>
          {prop.title}
        </button>
        {/* test to see if content renders  */}
        {this.state.currentIndex === index ? this.renderContent() : null}
      </li>
    ));
  }


  renderContent() {
    const currentP = this.props.sections[this.state.currentIndex];
    return <p className="content">{currentP.content}</p>;
  }

  render() {
    return <div>{this.renderLi()}</div>;
  }
}

export default Accordion;
