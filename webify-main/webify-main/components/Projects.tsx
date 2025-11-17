import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "project apple",
      description:
        "i have made an ui for a website name apple. Built with Next.js and Node.js.",
      image: "/download1.png",
      link: "https://edulearn.com",
      technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC"],
    },
    {
      title: "project orange",
      description:
        "Full-featured e-commerce solution with real-time inventory, payment processing, and order management.",
      image: "/istockphoto-1351746589-612x612.jpg",
      link: "https://shopsmart.com",
      technologies: ["React", "Express", "PostgreSQL", "Stripe"],
    },
    {
      title: "TaskFlow",
      description:
        "Project management tool with real-time collaboration, task tracking, and team analytics dashboard.",
      image: "/istockphoto-1351746589-612x612.jpg",
      link: "https://taskflow.com",
      technologies: ["Vue.js", "Firebase", "TypeScript", "Chart.js"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition group"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
