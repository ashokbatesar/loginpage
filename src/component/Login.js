import React, { Component } from "react";
import axios from "axios";
import Field from "./Fields";

const fields = {
  sections: [
    [
      {
        name: "username",
        type: "text",
        placeholder: "Enter ur Name"
      },
      {
        name: "password",
        type: "password",
        placeholder: "Enter ur password"
      }
    ]
  ]
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  submitForm = e => {
    alert("Form Submitted");
    var apiBaseUrl = "http://localhost:3000/api/";
    //var self = this;
    var payload = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(apiBaseUrl + "login", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successfull");
        } else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert("username password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <form>
          {fields.sections.map((section, sectionIndex) => {
            return (
              <div>
                {section.map((field, i) => {
                  return (
                    <Field
                      {...field}
                      key={i}
                      value={this.state[field.name]}
                      onChange={e =>
                        this.setState({ [field.name]: e.target.value })
                      }
                    />
                  );
                })}
              </div>
            );
          })}
          <button id="sendData" type="submit" onClick={e => this.submitForm(e)}>
            LogIN
          </button>
        </form>
      </div>
    );
  }
}
