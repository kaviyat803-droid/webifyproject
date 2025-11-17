import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6 text-gray-700">
            Hello! m steve jobs, a Full-stack Developer based in Chennai. I
            specialize in building modern web applications with a focus on user
            experience and performance.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            With 3+ years of experience in web development, Ive had the
            opportunity to work on diverse projects ranging from e-commerce
            platforms to educational technology solutions.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Background
          </h2>
          <p className="text-lg mb-4 text-gray-700">
            I graduated from Anna University with a degree in Computer Science.
            Currently, I work as a Senior Developer at TechCorp, where I lead
            the frontend development team and mentor junior developers.
          </p>
        </div>
        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/your-istockphoto-1351746589-612x612.jpg"
            alt="steve jobs"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
