export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "Redux",
        "Material-UI",
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "DevOps & Tools",
      technologies: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Jest",
        "Cypress",
        "Webpack",
        "Linux",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
