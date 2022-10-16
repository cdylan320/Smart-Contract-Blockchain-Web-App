import React, { Component } from "react";
import factory from "../ethereum/factory";
import Project from "../ethereum/project";
import CardProp from "../components/CardProp";
import HomePage from "./projects/homepage";

const getSummary = async (address) => {
  const summary = await Project(address).methods.getSummary().call();
  return summary;
};

class ProjectIndex extends Component {
  static async getInitialProps() {
    const projects = await factory.methods.getDeployedProjects().call();
    const projectMeta = projects.map(async (address) => {
      return await getSummary(address);
    });
    const result = await Promise.all(projectMeta);
    return { projects: projects, projectMeta: result };
  }
  renderProjects() {
    console.log("Project Meta", this.props.projectMeta);
    console.log(this.props.projects);
    return this.props.projectMeta.map((summary, index) => {
      console.log(summary[4]);
      console.log(this.props.projects[index]);
      return (
        <CardProp
          minimumContribution={summary[0]}
          title={summary[5]}
          description={summary[6]}
          image={summary[7]}
          address={this.props.projects[index]}
        />
      );
    });
  }
  render() {
    return <HomePage />;
  }
}

export default ProjectIndex;
