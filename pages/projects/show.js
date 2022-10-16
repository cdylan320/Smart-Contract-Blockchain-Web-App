import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Project from "../../ethereum/project";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";
import ProjectSpec from "../../components/ProjectSpec";
import NavBar from "../../components/NavBar";

class ProjectShow extends Component {
  static async getInitialProps(props) {
    const project = Project(props.query.address);
    const summary = await project.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      name: summary[5],
      description: summary[6],
      image: summary[7],
    };
  }
  render() {
    const {
      address,
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager,
      name,
      description,
      image,
    } = this.props;
    return (
      // <Layout>
      //   <h3>Project Show</h3>
      //   <Grid>
      //     <Grid.Row>
      //       <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
      //       <Grid.Column width={6}>
      //         <ContributeForm address={this.props.address} />
      //       </Grid.Column>
      //     </Grid.Row>

      //     <Grid.Row>
      //       <Grid.Column>
      //         <Link route={`/projects/${this.props.address}/requests`}>
      //           <a>
      //             <Button primary>View Requests</Button>
      //           </a>
      //         </Link>
      //       </Grid.Column>
      //     </Grid.Row>
      //   </Grid>
      // </Layout>
      <>
        <NavBar />
        <ProjectSpec
          image={image}
          name={name}
          mini={minimumContribution}
          approvals={approversCount}
          manager={manager}
          description={description}
        />
      </>
    );
  }
}

export default ProjectShow;
