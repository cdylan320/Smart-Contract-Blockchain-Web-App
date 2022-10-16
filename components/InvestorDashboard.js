import ProjectDashboardCard from "./ProjectDashboardCard";

export default function InvestorDashboard() {
  return (
    <div className="py-10 text-center">
          <p className="text-5xl font-black text-bold my-8 mx-12">Projects You Support</p>
          <div>
            <ProjectDashboardCard investor={true}/>
            <ProjectDashboardCard investor={true}/>
            <ProjectDashboardCard investor={true}/>
          </div>
    </div>
  );
}