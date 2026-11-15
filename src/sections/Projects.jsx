import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "TripWise",
    category: "FULL STACK DEVELOPMENT • AI INTEGRATION",
    description:
      "An AI-powered smart travel planning platform built with React and Java Spring Boot. Integrated Google Gemini AI using Spring AI to connect the backend with generative AI capabilities and support intelligent travel assistance. Includes secure authentication and PostgreSQL database integration.",
    technologies: [
      "React 19",
      "Java 21",
      "Spring Boot 3",
      "Spring AI",
      "Google Gemini",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Docker",
      "Azure",
    ],
    status: "In Development",
    github: "https://github.com/Piyushkumar481/TripWise",
  },
  {
    number: "02",
    name: "RetireWell",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A personal finance and retirement planning assistant built to help users explore financial planning through a web application.",
    technologies: [
      "React",
      "Python",
      "Flask",
      "SQL",
      "REST APIs",
    ],
    status: "Personal Project",
    github: "https://github.com/Piyushkumar481/RetireWell",
  },
  {
    number: "03",
    name: "MoodSync",
    category: "MUSIC RECOMMENDATION SYSTEM",
    description:
      "A mood-based music recommendation system that uses Spotify data and similarity-based recommendations to suggest songs.",
    technologies: [
      "Python",
      "Flask",
      "Spotify API",
      "Pandas",
      "Scikit-learn",
    ],
    status: "Personal Project",
    github: "https://github.com/Piyushkumar481/MoodSync",
  },
  {
    number: "04",
    name: "Spam Message Detector",
    category: "MACHINE LEARNING",
    description:
      "A Flask-based application that accepts a text message and uses a trained machine learning model to classify whether the message is spam.",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
    ],
    status: "Personal Project",
    github: "https://github.com/Piyushkumar481/spam_detector",
  },
  {
    number: "05",
    name: "Cafe Website",
    category: "WEB DEVELOPMENT",
    description:
      "A restaurant website concept featuring a visual landing page, navigation menu, background imagery and prominent ordering and contact buttons.",
    technologies: [
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    status: "Personal Project",
    github: "https://github.com/Piyushkumar481/cafe",
  },
];

export default function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">SELECTED WORK</span>

          <h2>
            Projects I've <span>built.</span>
          </h2>

          <p>
            A selection of applications and experiments where I've put my
            technical skills into practice.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} GitHub repository`}
                  >
                    View Repository
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
