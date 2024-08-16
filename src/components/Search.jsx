import React from "react";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
    };
  }
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.props.search(this.state.title, this.state.type);
    }
    console.log(this.state.type)
  };

  handleOnChange = (event) => {
    //set name for target element name should be assign
    this.setState({ [event.target.name]: event.target.value });
    
  };

  render() {
    //const {title,type} = this.state
    return (
      <div className="row">
        <input
          placeholder="title"
          type="search"
          name="title"
          className="validate"
          value={this.state.title}
          onChange={this.handleOnChange}
          onKeyDown={this.handleKeyDown}
        />
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value=""
            onKeyDown={this.handleKeyDown}
            onChange={this.handleOnChange}
            checked={this.state.type===""}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="movie"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleOnChange}
            checked={this.state.type==="movie"}
          />
          <span>Movies</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="series"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleOnChange}
            checked={this.state.type==="series"}
          />
          <span>Series</span>
        </label>

        <button
          onClick={() => {
            this.props.search(this.state.title, this.state.type);
          }}
        >
          Send
        </button>
      </div>
    );
  }
}

export { Search };
