export default function ProjectSpec(props) {
  return (
    <div className="bg-orange-200 p-10">
      <div className="p-10 mb-10">
        <h1 className="text-6xl font-semibold mt-10">{props.name}</h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="mt-10 col-span-2">
            <img
              src={props.image}
              alt="img-blur-shadow"
              className="w-100 h-110"
            />
          </div>
          <div className="p-5 mt-10 bg-white rounded-md drop-shadow-md">
            <div>{props.mini} ETHS</div>
            <div className="border-dotted border-2 border-orange-300 font-thin text-sm align-middle mt-2">
              <div className="w-3/5 bg-orange-300 p-3 h-100"></div>
            </div>
            <div className="text-sm mt-2 font-thin">
              {props.approvals} approvals
            </div>
            <a href="http://www.reddit.com">
              <div className="border-dotted border-2 bg-orange-400 border-orange-300 p-3 font-semibold text-sm align-middle mt-3 text-center text-white">
                Invest
              </div>
            </a>
            <div className="border-dotted border-2 border-orange-300 p-3 bg-orange-200 font-semibold text-sm align-middle mt-3 text-white text-center">
              Share
            </div>
            {/* <div>
                        <h4 className="font-semibold text-2xl">Approvals: 6 | Requests: 10</h4>
                        <h4 className="font-semibold">Requests: 10</h4>
                    </div> */}
            <div className="text-sm font-thin mb-5 mt-2">
              Managed by {props.manager}.
            </div>
          </div>
        </div>
        <p className="mt-3 mb-10 text-2xl">Description: {props.description}</p>
      </div>
    </div>
  );
}
