import { useState } from "react"

import { Link } from "../routes";

import NavBar from "../components/NavBar"
import Profile from "../components/Profile"

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
                {currentTab == "Organizer" && (<Link to="/projects/new"><button class="absolute top-[20%] right-[13%] bg-orange-500 hover:bg-orange-700 max-h-10 text-white font-bold py-2 px-4 rounded">
                    Create Project
                </button></Link>)}
                {currentTab == "Investor" && (<h1>hello</h1>)}
                {currentTab == "Freelancer" && (<><Profile /><button class="absolute top-[20%] right-[13%] bg-orange-500 hover:bg-orange-700 max-h-10 text-white font-bold py-2 px-4 rounded">
                    Edit
                </button></>)}
            </div>

        </>
    )
}