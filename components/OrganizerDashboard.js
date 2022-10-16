import ProjectDashboardCard from "./ProjectDashboardCard";

export default function OrganizerDashboard() {
  return (
    <div className="py-10 text-center">
          <p className="text-5xl font-black text-bold my-8 mx-12">Projects You Created</p>
          <div>
            <ProjectDashboardCard/>
            <ProjectDashboardCard/>
            <ProjectDashboardCard/>
          </div>
    </div>
  );
}