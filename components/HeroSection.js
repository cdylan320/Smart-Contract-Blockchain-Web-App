export default function HeroSection() {
  return (
    // CREDIT: https://devdojo.com/zoltan/tailwind-css-hero-section, https://larainfo.com/blogs/tailwind-css-simple-hero-section-examples
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Fund non-profit projects confidently.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The online crowdfunding platform that guarantees non-profit projects will follow through.</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <img className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                src="/hero-full.jpg" alt="Hero Image"/>
        </div>
      </div>
    </section>
  )
}
