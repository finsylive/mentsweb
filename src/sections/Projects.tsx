import mentsHome from "@/assets/images/Home Page V3.png";
import mentsLeaderboardWork from "@/assets/images/leaderboard - Work.png";
import mentsLeaderboard from "@/assets/images/leaderboard.png";
import mentsSearch from "@/assets/images/Search Page-3.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Ments",
    year: "2025",
    title: "Swipe through Startups/Project Profiles",
    results: [
      { title: "Detailed project profiles - Startups, Research Projects, and more" },
      { title: "Track your favorite projects and connect with them" },
      { title: "See  details like open positions, progress made and more" },
    ],
    link: "#",
    image: mentsLeaderboardWork,
  },
  {
    company: "Ments",
    year: "2025",
    title: "Leaderboard",
    results: [
      { title: "Find our what ideas people like the most" },
      { title: "Win exciting rewards, and funding opportunities." },
      { title: "Filter through top projects based on your interest" },
    ],
    link: "#",
    image: mentsLeaderboard,
  },
  {
    company: "Ments",
    year: "2025",
    title: "Requirements",
    results: [
      { title: "Find requirements that match your skills" },
      { title: "Connect with Startups and Projects which require your skills" },
      { title: "Robust search feature to find Projects, People, and work" },
    ],
    link: "#",
    image: mentsSearch,
  },
  {
    company: "Ments",
    year: "2025",
    title: "Environments",
    results: [
      { title: "Topic based discussions" },
      { title: "Personalized content at your fingertips" },
      { title: "Exchange of ideas and insights between students and experts" },
    ],
    link: "#",
    image: mentsHome,
  },
];

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Ments Mobile Showcase
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Screens
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
          Explore the mobile experience of Ments with these interactive screens.
        </p>
        
        {/* Adding a wrapper with relative positioning and height */}
        <div className="mt-10 md:mt-20 relative" style={{ height: `${portfolioProjects.length * 100}vh` }}>
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky bottom-0 h-screen flex flex-col lg:block"
              style={{ 
                zIndex: portfolioProjects.length - index, // Higher index = lower z-index
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 h-full flex flex-col">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
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
                </div>
                <div className="flex mt-6 flex-1 items-start justify-center overflow-hidden max-h-[100vh] lg:max-h-none lg:items-center">
                  <div className="w-[90%] lg:w-full flex">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto scale-100 object-top object-cover lg:scale-100 lg:object-contain"
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

