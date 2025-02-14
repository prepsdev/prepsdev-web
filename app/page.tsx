import { Code2, MonitorSmartphone, Server } from "lucide-react"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <section id="main" className="flex flex-col items-center justify-center text-center h-auto pt-72 pb-44 mx-5">
        <h1 className="text-5xl font-bold">Your Solution for Professional Websites</h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl">
          As a passionate web developer, I build <b className="text-white">modern and high-performance</b> websites
          that help freelancers, startups, and businesses succeed online.
        </p>
        <Link
          href="/"
          className="mt-6 px-6 py-3 border bg-white text-black rounded text-lg font-medium transition hover:bg-gray-100"
        >
          Lets Work Together
        </Link>
      </section>
      <section id="about" className="flex flex-col items-center justify-center text-center h-auto pt-20 pb-20 mx-5">
        <h2 className="text-4xl font-bold">What can i do?</h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl">
          Everything you need to build great products on the web.
        </p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl w-full">
          <div className="relative p-2 border border-neutral-700 rounded-lg shadow-lg z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-sm z-10"></div>
            <div className="py-10 px-6 text-center bg-gradient-to-t from-black to-neutral-900 rounded-md">
              <MonitorSmartphone className="mx-auto text-white w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-white">Front End</h3>
              <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                Crafting <i>modern, responsive,</i> and <i>high-performance</i> user interfaces that deliver <i>seamless experiences</i> across all devices.
              </p>
            </div>
          </div>
          <div className="relative p-2 border border-neutral-700 rounded-lg shadow-lg z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent blur-sm z-10"></div>
            <div className="py-10 px-6 text-center bg-gradient-to-t from-black to-neutral-900 rounded-md">
              <Code2 className="mx-auto text-white w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-white">Back End</h3>
              <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                Building the <i>foundation</i> that powers <i>seamless interactions,</i> ensuring <i>speed, security,</i> and <i>reliability</i> behind every click.
              </p>
            </div>
          </div>
          <div className="relative p-2 border border-neutral-700 rounded-lg shadow-lg z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm z-10"></div>
            <div className="py-10 px-6 text-center bg-gradient-to-t from-black to-neutral-900 rounded-md">
              <Server className="mx-auto text-white w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-white">Fullstack</h3>
              <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                Creating <i>complete digital solutions</i> from <i>concept to launch,</i> blending <i>performance, design,</i> and <i>functionality</i> into one <i>seamless experience.</i>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="greeting" className="flex flex-col items-center justify-center text-center h-auto pt-20 pb-20 mx-5">
        <div className="p-2 border border-neutral-700 rounded-lg shadow-lg">
          <div className="py-10 px-6 text-center bg-gradient-to-t from-black to-neutral-900 rounded-md">
            <h2 className="text-4xl font-bold text-white">Hello, prepsdev here.</h2>
            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
              A passionate web developer with a knack for building high-performance websites that help freelancers, startups, and businesses succeed online.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home