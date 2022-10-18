import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Project from "../ethereum/project";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const project = Project(this.props.address);

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await project.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });
      Router.replaceRoute(`/projects/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label className="text-2xl text-orange-600">
            Amount to Contribute
          </label>
          <div class="ui focus input">
            <Input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
              labelPosition="right"
              placeholder="ether"
              className="text-2xl text-orange-600"
            />
            <button
              loading={this.state.loading}
              className="bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded ml-0 mt-3"
            >
              Submit
            </button>
          </div>
        </Form.Field>
      </Form>
    );
  }
}

export default ContributeForm;
