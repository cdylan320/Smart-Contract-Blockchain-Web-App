export default function FreelancerCard(freelancer) { 
  freelancer = freelancer.freelancer;
  return (
    <div
      className="max-w-sm mx-auto rounded overflow-hidden shadow-lg"
      key={freelancer.name}
    >
      <img
        className="w-full"
        src={freelancer.picture}
        alt={"Portrait" + `${freelancer.name}`}
      />
      <div className="px-6 pt-2">
        <div className="font-bold text-xl mb-2">{freelancer.name}</div>
      </div>
      <div className="px-6 flow-root">
        {Array.from(Array(freelancer.review), (star) => {
          return (
            <span
              className="float-left mr-1 py-1 text-sm font-semibold text-gray-700 mb-2"
              key={star}
            >
              &#9733;
            </span>
          );
        })}
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded float-right">
          <a href={freelancer.resume} target="_blank">
            Resume
          </a>
        </button>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{freelancer.description}</p>
        <p className="text-base text-grey-600">{freelancer.charge + " ETH"}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {freelancer.services.map((service) => {
          return (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={service}
            >
              {service}
            </span>
          );
        })}
      </div>
      <div className="px-6 py-4">
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
          Accept
        </button>
      </div>
    </div>
  );
}
