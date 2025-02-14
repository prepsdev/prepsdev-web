import { Code2, MonitorSmartphone, Server } from "lucide-react"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <section id="main">
        <h1>Your Solution for Professional Websites</h1>
        <p>
          As a passionate web developer, I build <b>modern and high-performance</b> websites
          that help freelancers, startups, and businesses succeed online.
        </p>
        <Link
          href="https://wa.me/6289666075500" className="mt-6 px-6 py-3 border bg-neutral-200 text-black rounded text-lg font-medium transition hover:bg-gray-100" target="_blank"
          rel="noopener noreferrer">
          Lets Work Together
        </Link>
      </section>
      <section id="about">
        <h2>What can I do?</h2>
        <p>Everything you need to build great products on the web.</p>

        <div className="about-grid">
          <div className="about-card">
            <div className="neon-line neon-red"></div>
            <div className="about-card-content">
              <MonitorSmartphone className="mx-auto text-foreground w-12 h-12 mb-4" />
              <h3>Front End</h3>
              <p>
                Crafting <i>modern, responsive,</i> and <i>high-performance</i> user interfaces that deliver
                <i> seamless experiences</i> across all devices.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="neon-line neon-green"></div>
            <div className="about-card-content">
              <Code2 className="mx-auto text-foreground w-12 h-12 mb-4" />
              <h3>Back End</h3>
              <p>
                Building the <i>foundation</i> that powers <i>seamless interactions,</i> ensuring
                <i> speed, security,</i> and <i>reliability</i> behind every click.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="neon-line neon-blue"></div>
            <div className="about-card-content">
              <Server className="mx-auto text-foreground w-12 h-12 mb-4" />
              <h3>Fullstack</h3>
              <p>
                Creating <i>complete digital solutions</i> from <i>concept to launch,</i> blending
                <i> performance, design,</i> and <i>functionality</i> into one <i>seamless experience.</i>
              </p>
            </div>
          </div>
        </div>
        <p>No matter the challenge, I craft solutions that work beautifully and efficiently.</p>
      </section>

      <section id="service" className="flex flex-col items-center justify-center text-center h-auto pt-5 pb-20 mx-5">
        <h2 className="text-4xl font-bold">Which Side Are You On?</h2>
        <p className="m-2 text-gray-400 text-lg max-w-2xl">
          No wrong choices here. <i>Just pick your side and start building.</i>
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-6 mt-6 max-w-full">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mx-auto" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 invert mx-auto" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="w-12 h-12 mx-auto" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" alt="Codeigniter" className="w-12 h-12 mx-auto" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Nodejs" className="w-12 h-12 mx-auto" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-12 h-12 mx-auto" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-12 h-12 mx-auto" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" className="w-12 h-12 mx-auto" />
        </div>
      </section>

    </>
  )
}

export default Home