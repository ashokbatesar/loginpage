import React, { Component } from "react";

export default class Fields extends Component {
  render() {
    return (
    <div>
        <input
            className="form-control"
            id={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            required="required"
            value={this.props.value}
            onChange={e => this.props.onChange(e)}

            />



    </div>
    
    )
  }
}
