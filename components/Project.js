
export default function Profile() {
    return (
      <div className="bg-orange-200 p-10">
        <div className="p-10">
            <h1 className="text-6xl font-semibold mt-10">Project Title</h1>
            <div className="grid grid-cols-3 gap-5">
                <div className="mt-10 col-span-2">
                    <div className="w-100 h-96 bg-orange-500"></div>
                    <p className="mt-3">Description</p>

                </div>
                <div className="pt-10">
                    <div className="border-dotted border-2 border-orange-300 bg-orange-300 p-3 font-thin text-sm align-middle mt-10">
                    Goal Bar
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="border-dotted border-2 border-orange-300 p-3 font-thin text-sm align-middle mt-3">
                        Invest
                        </div>
                        <div className="border-dotted border-2 border-orange-300 p-3 font-thin text-sm align-middle mt-3">
                        Share
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  