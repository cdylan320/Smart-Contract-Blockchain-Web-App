export default function ProjectSpec(props) {
  return (
    <div className="bg-orange-200 p-10">
      <div className="p-10">
        <h1 className="text-5xl font-semibold">{props.name}</h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="mt-10 col-span-2">
            <img
              src={props.image}
              alt="img-blur-shadow"
              className="max-w-3xl max-h-md rounded-lg"
            />
          </div>
          <div className="p-5 mt-10 bg-white text-xl rounded-lg drop-shadow-md">
            <div>{props.mini} ETHS</div>
            <div className="my-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className={"h-4 bg-green-600 rounded-full dark:bg-green-500"}
                style={{ width: (props.balance / props.mini) * 100 }}
              ></div>
            </div>
            <div className="text-sm mt-2 font-thin">
              {props.approvals} supporters
            </div>
            <a href="#">
              <div className="border-2 bg-orange-400 border-orange-300 p-3 font-semibold text-sm align-middle mt-3 text-center text-white">
                Support NEED TO HOOK
              </div>
            </a>
            <div
              className="border-2 border-orange-300 p-3 bg-orange-200 font-semibold text-sm align-middle mt-3 text-white text-center cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);

              }}
            >
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
        <p className="mt-3 mb-10 text-xl">{props.description}</p>
      </div>
    </div>
  );
}
