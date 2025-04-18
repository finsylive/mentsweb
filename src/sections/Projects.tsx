import dattvaYaan from "@/assets/images/dattva-yaan.jpeg";
import founderGang from "@/assets/images/foundersGang.png";
import neuroKind from "@/assets/images/neuro-kind.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  // {
  //   company: "FoundersGang",
  //   year: "2024",
  //   title: "A place for founders, to build connect and thrive",
  //   results: [
  //     { title: "A place to showcase your startup" },
  //     { title: "Get weekly new updates" },
  //     { title: "Tool and resources tailored to needs to entrepreneurs" },
  //   ],
  //   link: "https://www.foundersgang.com",
  //   image: founderGang,
  // },
  {
    title: "Swipe through Startups/Project Profiles",
    results: [
      { title: "Track your favorite startups, research project and connect with them" },
      { title: "See  details like open positions, progress made and more" },
    ],
    link: "https://dvaann.web.app/",
    image: dattvaYaan,
  },
  {
    title: "Leaderboard",
    results: [
      { title: "Find our what ideas people like the most based on filter" },
      { title: "Win exciting rewards, and funding opportunities." },
    ],
    link: "#",
    image: mentsLeaderboard,
  },
  {
    title: "Requirements",
    results: [
      { title: "Find requirements that match your skills" },
      { title: "Robust search feature to find Projects, People, and work" },
    ],
    link: "#",
    image: mentsSearch,
  },
  {
    title: "Environments",
    results: [
      { title: "Topic based discussions with personlised content" },
      { title: "Exchange of ideas and insights between students and experts" },
    ],
    link: "#",
    image: mentsHome,
  },
];

export const Projects = () => {  // Changed from ProjectsSection to Projects
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          App Showcase
        </h2>
        
        {/* Adding a wrapper with relative positioning and height */}
        <div className="mt-10 md:mt-20 relative" style={{ height: `${portfolioProjects.length * 100}vh` }}>
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky bottom-0 h-90vh] flex flex-col lg:block"
              style={{ 
                zIndex: portfolioProjects.length - index, // Higher index = lower z-index
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </button>
                  </a>
                </div>
                <div className="flex mt-6 flex-1 items-start justify-center overflow-hidden max-h-[45vh] lg:max-h-none lg:items-center">
                  <div className="w-[70%] lg:w-full flex">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto scale-110 object-top object-cover lg:scale-100 lg:object-contain"
                      priority={true}
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
