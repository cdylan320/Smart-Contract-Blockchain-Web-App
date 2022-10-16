
export default function Profile() {
  return (
    <div className="bg-orange-200 p-10 w-full my-12 mx-12">
      <div className="bg-orange-100 p-10 m-10 rounded-md">
        <h3 className="mb-4 text-md font-semibold">Personal Information</h3>
        <div className="mb-2 text-sm">
          First name
        </div>
        <div className="border-dotted border-2 rounded-md border-orange-300 p-3 font-thin text-sm mb-5">
          Patrick
        </div>
        <div className="mb-2 text-sm">
          Last Name
        </div>
        <div className="border-dotted border-2 rounded-md border-orange-300 p-3 font-thin text-sm mb-5">
          Chao
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div className="mb-2 text-sm">
              Email
            </div>
            <div className="border-dotted border-2 rounded-md border-orange-300 p-3 font-thin text-sm mb-5">
              patrick@gmail.com
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm">
              Phone
            </div>
            <div className="border-dotted border-2 rounded-md border-orange-300 p-3 font-thin text-sm mb-5">
              911
            </div>
          </div>
        </div>

        <h3 className="mb-4 text-md font-semibold">Work Experience</h3>
        <div className="grid grid-cols-2 gap-6 mb-3">
          <div>
            <div className="mb-2 text-sm">
              Company
            </div>
            <div className="border-dotted border-2 rounded-md border-orange-300 p-3 font-thin text-sm mb-5">
              NEtflix
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm">
              Role
            </div>
            <div className="border-dotted border-2 rounded-md border-orange-300 p-3 font-thin text-sm mb-5">
              Watching Testor
            </div>
          </div>
        </div>
        <div className="mb-2 text-sm">
          Description
        </div>
        <div className="border-dotted border-2 rounded-md border-orange-300 p-3 font-thin text-sm mb-5 pb-8">
          I watched netflix kdramas
        </div>

      </div>
    </div>
  );
}
