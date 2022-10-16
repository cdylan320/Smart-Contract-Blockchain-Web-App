import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Project from "../../../ethereum/project";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

class RequestNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    loading: false,
    errorMessage: "",
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const project = Project(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await project.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });
      Router.pushRoute(`/projects/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <div className="flex flex-row w-full">
          <img
            src="/createproject.png"
            alt="car"
            className="w-2/3 rounded-md"
          />
          <Card className="w-1/3 mt-20">
            <CardHeader
              variant="gradient"
              color="orange"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Create Request
              </Typography>
            </CardHeader>
            <CardBody className="text-left">
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <label>Description</label>
                  <Input
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Value in Ether</label>
                  <Input
                    value={this.state.value}
                    onChange={(event) => this.setState({ value: event.target.value })}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Recipient</label>
                  <Input
                    value={this.state.recipient}
                    onChange={(event) =>
                      this.setState({ recipient: event.target.value })
                    }
                  />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>
                  Create!
                </Button>
              </Form>
            </CardBody>
          </Card>

        </div>
        <Link route={`/projects/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>

      </Layout>
    );
  }
}

export default RequestNew;
