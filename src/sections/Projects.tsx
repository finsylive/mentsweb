import dattvaYaan from "@/assets/images/dattva-yaan.jpeg";
import founderGang from "@/assets/images/foundersGang.png";
import neuroKind from "@/assets/images/neuro-kind.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "FoundersGang",
    year: "2024",
    title: "A place for founders, to build connect and thrive",
    results: [
      { title: "A place to showcase your startup" },
      { title: "Get weekly new updates" },
      { title: "Tool and resources tailored to needs to entrepreneurs" },
    ],
    link: "https://www.foundersgang.com",
    image: founderGang,
  },
  {
    company: "Dattva Yaan",
    year: "2025",
    title: "Digital Dominance Platform for Manufacturers",
    results: [
      { title: "Helped manufacturers establish digital presence" },
      { title: "Increased brand value through tailored solutions" },
      { title: "Streamlined website development and digital marketing" },
    ],
    link: "https://dvaann.web.app/",
    image: dattvaYaan,
  },
  {
    company: "neuro kind",
    year: "2025",
    title: "AI-Powered Mental Health Diagnosis Platform",
    results: [
      { title: "Provides affordable mental health diagnosis in India" },
      { title: "Adheres to strict WHO Guidelines for accuracy" },
      { title: "Reduces dependency on costly professional reports" },
    ],
    link: "https://mental-health-test.tiiny.site",
    image: neuroKind,
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
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
          See some Projects that are growing in our community
        </p>
        <div className="mt-10  md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky top-16"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
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
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-md-0 lg:mt-0
                    lg:absolute lg:h-full"
                    priority={true}
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
