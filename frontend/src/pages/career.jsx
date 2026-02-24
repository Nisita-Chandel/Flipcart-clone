import { FaBriefcase, FaUsers, FaRocket, FaMapMarkerAlt } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    description:
      "We are looking for a React developer who can build modern and responsive web applications.",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Delhi, India",
    type: "Full-Time",
    description:
      "Seeking a Node.js developer with experience in REST APIs and database management.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-Time",
    description:
      "Creative designer required to design user-friendly and modern interfaces.",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Team 🚀
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          We’re building innovative solutions and looking for passionate people
          to grow with us.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Work With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
            <FaRocket className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p className="text-gray-600">
              Work on exciting projects and grow your career with mentorship and learning.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
            <FaUsers className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Great Team Culture</h3>
            <p className="text-gray-600">
              Collaborate with passionate and talented people in a supportive environment.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
            <FaBriefcase className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
            <p className="text-gray-600">
              Remote-friendly roles with flexible working hours.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Open Positions
          </h2>

          <div className="space-y-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                  {job.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                  <span>|</span>
                  <span>{job.type}</span>
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="py-16 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6">
        <h2 className="text-3xl font-bold mb-4">
          Don’t see a role that fits?
        </h2>
        <p className="mb-6">
          Send us your resume and we’ll get in touch when something matches your skills.
        </p>
        <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Send Resume
        </button>
      </div>
    </div>
  );
};

export default Career;