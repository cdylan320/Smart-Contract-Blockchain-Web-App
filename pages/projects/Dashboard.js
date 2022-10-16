import { useState } from "react";

import { Link } from "../../routes";

import NavBar from "../../components/NavBar";
import Profile from "../../components/Profile";
import InvestorDashboard from "../../components/InvestorDashboard";
import OrganizerDashboard from "../../components/OrganizerDashboard";
import { Button } from "@material-tailwind/react";

export default function Dashboard() {
  const [currentTab, setTab] = useState("Profile");

  const selectedNavStyle = {
    color: "orange"
  }

  const unselectedNavStyle = {
    color: "black"
  }

  return (
    <>
      <NavBar loggedIn={true}/>
      <div className="flex flex-row">
        <div className="flex flex-col ml-6 mt-8 text-grey-600">
          <div
            role="button"
            onClick={() => setTab("Profile")}
            className="text-6xl font-black hover:text-orange-600"
            style={currentTab === "Profile" ? selectedNavStyle : unselectedNavStyle}
          >
            Profile
          </div>
          <div className="text-2xl my-8 font-bold ">
            <div
              role="button"
              onClick={() => setTab("Organizer")}
              className="my-4 hover:text-orange-600"
              style={currentTab === "Organizer" ? selectedNavStyle : unselectedNavStyle}
            >
              Organizer
            </div>
            <div
              role="button"
              onClick={() => setTab("Investor")}
              className="my-4 hover:text-orange-600"
              style={currentTab === "Investor" ? selectedNavStyle : unselectedNavStyle}
            >
              Investor
            </div>
            <div
              role="button"
              onClick={() => setTab("Freelancer")}
              className="my-4 hover:text-orange-600"
              style={currentTab === "Freelancer" ? selectedNavStyle : unselectedNavStyle}
            >
              Freelancer
            </div>
          </div>
        </div>
        {currentTab == "Profile" && (
          <>
            <Profile />
          </>
        )}
        {currentTab == "Organizer" && (
          <div className="mx-auto">
            <OrganizerDashboard />
            <Link to="/projects/new">
              <button class="absolute top-[20%] right-[13%] bg-orange-500 hover:bg-orange-700 max-h-10 text-white font-bold py-2 px-4 rounded">
                Create Project
              </button>
            </Link>
          </div>
        )}
        {currentTab == "Investor" && (
          <div className="mx-auto">
            <InvestorDashboard />
          </div>
        )}
        {currentTab == "Freelancer" && (
          <>
            <Profile />
            <Button
              variant="filled"
              color="orange"
              className="absolute top-[20%] right-[13%] bg-orange-500 hover:bg-orange-700 max-h-10 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </Button>
          </>
        )}
      </div>
    </>
  );
}
