import { useState } from "react"
import { Button } from "@material-tailwind/react";

import NavBar from "../components/NavBar"
import Profile from "../components/Profile"
import InvestorDashboard from "../components/InvestorDashboard"
import OrganizorDashboard from "../components/OrganizorDashboard";

export default function Dashboard() {
    const [currentTab, setTab] = useState("Profile");

    return (
        <>
            <NavBar />
            <div className="flex flex-row">
                <div className="flex flex-col ml-6 mt-8 text-grey-600">
                    <div role="button" onClick={() => setTab("Profile")} className="text-6xl font-black">Profile</div>
                    <div className="text-2xl my-8 font-bold ">
                        <div role="button" onClick={() => setTab("Organizer")} className="my-4">Organizer</div>
                        <div role="button" onClick={() => setTab("Investor")} className="my-4">Investor</div>
                        <div role="button" onClick={() => setTab("Freelancer")} className="my-4">Freelancer</div>
                    </div>
                </div>
                {currentTab == "Profile" && (<><Profile /></>)}
                {currentTab == "Organizer" && (<div className="mx-auto"><OrganizorDashboard/> </div>)}
                {currentTab == "Investor" && (<div className="mx-auto"><InvestorDashboard/> </div>)}
                {currentTab == "Freelancer" && (<><Profile /><Button variant="filled" color="orange" className="absolute top-[20%] right-[15%] max-h-10">Edit</Button></>)}
            </div>

        </>
    )
}