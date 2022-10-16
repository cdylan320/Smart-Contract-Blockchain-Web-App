import ProjectDashboardCard from "./ProjectDashboardCard";

export default function OrganizerDashboard() {
  // const getInitialProps = async () => {
  //   const projects = await factory.methods.getDeployedProjects().call();
  //   const projectMeta = projects.map(async (address) => {
  //     return await getSummary(address);
  //   });
  //   const result = await Promise.all(projectMeta);
  //   return { projects: projects, projectMeta: result };
  // };
  // const resultArray = getInitialProps();
  return (
    <div className="py-10 text-center">
      <p className="text-5xl font-black text-bold my-8 mx-12">
        Projects You Created
      </p>
      <div>
        <ProjectDashboardCard />
        <ProjectDashboardCard />
        <ProjectDashboardCard />
      </div>
    </div>
  );
}
