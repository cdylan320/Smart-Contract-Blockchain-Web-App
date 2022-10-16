export default function ProjectDashboardCard() {
  return (
    <div class="flex justify-center my-5">
      <div class="flex flex-col md:flex-row md:max-w-xl text-left rounded-lg bg-white shadow-lg">
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Project 1 Name</h5>
          <p class="text-gray-700 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex items-center">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>

        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-r-lg"
          src="/hands.jpg"
          alt="Planting dirt"
        />
      </div>
    </div>
  );
}
