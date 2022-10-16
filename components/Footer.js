export default function Footer() {
  return (
    <footer>
      <div className="container-fluid footer bg-orange-400">
        <div className="p-8">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="grid grid-cols-1">
              <h3 className="font-bold text-xl">Guaranteed Good</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col space-y-3 font-light">
                <h6 className="font-semibold text-lg">Contact Information</h6>
                <div>pp ipsum</div>
                <div>pp ipsum</div>
              </div>
              <div className="flex flex-col space-y-3 font-light">
                <h6 className="font-semibold text-lg">About Us</h6>
                <div>pp ipsum</div>
                <div>pp ipsum</div>
                <div>pp ipsum</div>
              </div>
              <div className="flex flex-col space-y-3 font-light">
                <h6 className="font-semibold text-lg">Calhacks</h6>
                <div>pp ipsum</div>
                <div>pp ipsum</div>
                <div>pp ipsum</div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4 font-light text-sm">
              <p>@ 2022 Guaranteed good</p>
              <p className="flex space-x-4">
                <div>Terms of Service</div>
                <div>Privacy Policy</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
