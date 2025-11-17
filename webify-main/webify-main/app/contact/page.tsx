import React from "react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full p-3 rounded-lg border border-gray-200 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           transition duration-200"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full p-3 rounded-lg border border-gray-200 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           transition duration-200"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full p-3 rounded-lg border border-gray-200 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           transition duration-200"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full p-3 rounded-lg border border-gray-200 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           transition duration-200"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg
                         hover:bg-indigo-700 font-medium transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Other Ways to Connect
            </h2>
            <div className="flex justify-center space-x-8">
              {/* Email */}
              <a
                href="mailto:romario.kavin@gmail.com"
                className="group flex flex-col items-center"
              >
                <span className="text-gray-800 font-medium mb-1">Email</span>
                <span className="text-gray-600 text-sm group-hover:text-indigo-600 transition duration-200">
                  romario.kavin@gmail.com
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/romariokavin"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <span className="text-gray-800 font-medium mb-1">LinkedIn</span>
                <span className="text-gray-600 text-sm group-hover:text-indigo-600 transition duration-200">
                  /romariokavin
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/romariokavin"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <span className="text-gray-800 font-medium mb-1">GitHub</span>
                <span className="text-gray-600 text-sm group-hover:text-indigo-600 transition duration-200">
                  @romariokavin
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
