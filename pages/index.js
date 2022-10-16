import React, { Component, useState } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import { Navbar } from "@material-tailwind/react";

import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection";
import OrganizationCard from "../components/OrganizationCard";
import Choices from "../components/Choices"
import Footer from "../components/Footer"
import SignIn from "../components/SignIn"

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
    return (
      <>
        <NavBar />
        <HeroSection />
        <Choices />
        <div className="bg-orange-600 py-10">
          <p className="text-5xl text-white font-black text-bold my-8 mx-12">Trending Projects</p>
          <div className="mx-12 flex flex-row">
            <OrganizationCard />
            <OrganizationCard />
            <OrganizationCard />
          </div>
        </div>
        <Footer />


      </>

      // <Layout>
      //   <div>
      //     <h3>Open Projects</h3>
      //     <Link route="/projects/new">
      //       <a>
      //         <Button
      //           floated="right"
      //           content="Create Project"
      //           icon="add circle"
      //           primary
      //         />
      //       </a>
      //     </Link>
      //     {this.renderProjects()}
      //   </div>
      // </Layout>
    );
  }
}

export default ProjectIndex;
