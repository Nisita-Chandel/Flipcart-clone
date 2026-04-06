import { FaBriefcase, FaUsers, FaRocket, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Build Your Future With Us 🚀
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Join a team where innovation meets passion. Grow, learn, and create amazing experiences.
        </p>

        {/* Glow effect */}
        <div className="absolute w-72 h-72 bg-purple-400 opacity-30 blur-3xl rounded-full top-0 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* WHY JOIN */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[{
            icon: <FaRocket />,
            title: "Growth",
            desc: "Level up your career with real-world projects.",
          }, {
            icon: <FaUsers />,
            title: "Team Culture",
            desc: "Work with supportive and talented teammates.",
          }, {
            icon: <FaBriefcase />,
            title: "Flexibility",
            desc: "Remote-friendly & flexible working hours.",
          }].map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-indigo-600 text-5xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* JOB LIST */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
            Open Positions
          </h2>

          <div className="space-y-10">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-md hover:scale-105 transition">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Didn't Find Your Role?
        </motion.h2>
        <p className="mb-6 opacity-90">
          Send your resume and we'll contact you when something matches.
        </p>
        <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 transition">
          Send Resume
        </button>
      </div>
    </div>
  );
};

export default Career;
