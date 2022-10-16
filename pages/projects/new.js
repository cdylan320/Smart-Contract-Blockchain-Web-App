import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";

import web3 from "../../ethereum/web3";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Router } from "../../routes";

class ProjectNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false,
    name: "",
    description: "",
    image: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createProject(
          this.state.minimumContribution,
          this.state.name,
          this.state.description,
          this.state.image
        )
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <div className="flex flex-row w-full">
          <Card className="w-1/3 mt-20">
            <CardHeader
              variant="gradient"
              color="orange"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Create Project
              </Typography>
            </CardHeader>
            <CardBody className="text-left">
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <label>Name</label>
                  <Input
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                  />
                  <label>Description</label>
                  <Input
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                  />
                  <label>Image URL</label>
                  <Input
                    value={this.state.image}
                    onChange={(event) => this.setState({ image: event.target.value })}
                  />
                  <label>Minimum Contribution</label>
                  <Input
                    label="wei"
                    labelPosition="right"
                    value={this.state.minimumContribution}
                    onChange={(event) =>
                      this.setState({ minimumContribution: event.target.value })
                    }
                  />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button loading={this.state.loading} color="orange">
                  Create!
                </Button>
              </Form>
            </CardBody>
          </Card>
          <img
            src="/createproject.png"
            alt="car"
            className="w-2/3 rounded-md"
          />
        </div>

      </Layout>
    );
  }
}

export default ProjectNew;
