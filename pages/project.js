import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Project from "../components/Project"
import NavBar from "../components/NavBar"

class ProjectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedProjects().call();

    return { projects };
  }
  renderProjects() {
    const items = this.props.projects.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/projects/${address}`}>
            <a>View Project</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return ([NavBar(), Project()]
    );
  }
}

export default ProjectIndex;
