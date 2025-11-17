export default function Hero() {
  return (
    <div className="py-20 text-center bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Hey, Im steve jobs 👋
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Im Steve Jobs, and Ive spent my career at Apple crafting experiences that seamlessly blend technology and design. 
      As a UI/UX designer, I focus on creating intuitive, user-centered designs that make technology feel natural and empowering.
       My passion is in making complex systems simple and beautiful, ensuring every product not only works but connects with people on a deeper level. 
       At Apple, we design with the user in mind, and Im committed to continuing that legacy through innovative, thoughtful design.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          my developed ui design
        </a>
        <a
          href="https://www.linkedin.com/pulse/steve-job-founder-apple-inc-kharis-publishing-bqhsf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
