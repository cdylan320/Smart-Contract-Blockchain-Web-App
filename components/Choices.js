export default function Choices() {
    return (
        <div className="container-fluid footer">
            <div className="p-10 m-10">
                <div className="grid grid-cols-3 gap-2">
                    <div className="grid grid-cols-1 place-content-center justify-center content-center mx-auto px-8 space-y-2">
                        <div className="mx-auto">
                            <div className="w-10 mx-auto">
                                <img
                                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                                    src="management.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mx-auto">
                            <h4 className="text-lg font-semibold">Manage</h4>
                        </div>
                        <div className="mx-auto text-center px-10 text-sm font-thin">Begin getting the funds you need for the projects you need.</div>
                        <div className="mx-auto text-sm text-orange-400">Learn more.</div>
                    </div>
                    <div className="grid grid-cols-1 place-content-center justify-center content-center mx-auto px-8 space-y-2">
                        <div className="mx-auto">
                            <div className="w-10 mx-auto">
                                <img
                                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                                    src="hand.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mx-auto">
                            <h4 className="text-lg font-semibold">Invest</h4>
                        </div>
                        <div className="mx-auto text-center px-10 text-sm font-thin">Help support the NPO you believe in achieve their goal.</div>
                        <div className="mx-auto text-sm text-orange-400">Learn more.</div>
                    </div>
                    <div className="grid grid-cols-1 place-content-center justify-center content-center mx-auto px-8 space-y-2">
                        <div className="mx-auto">
                            <div className="w-10 mx-auto">
                                <img
                                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                                    src="engineer.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mx-auto">
                            <h4 className="text-lg font-semibold">Apply</h4>
                        </div>
                        <div className="mx-auto text-center px-10 text-sm font-thin">Offer your skillset to a project and people that need your expertise.</div>
                        <div className="mx-auto text-sm text-orange-400">Learn more.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
