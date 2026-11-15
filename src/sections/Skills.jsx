import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages I use to solve programming problems.",
    skills: ["Java", "Python", "C", "C++", "JavaScript"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Developing application logic and backend services.",
    skills: ["Spring Boot", "Flask", "REST APIs", "Node.js", "Express"],
  },
  {
    number: "04",
    title: "Databases",
    description: "Working with relational and NoSQL databases.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    number: "05",
    title: "Tools & Data Science",
    description: "Development tools, deployment and data processing.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Azure",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">MY TECH STACK</span>
          <h2>
            Tools I work <span>with.</span>
          </h2>
          <p>
            Technologies and tools I've used while building projects and
            developing my software engineering skills.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-count">
                  {String(group.skills.length).padStart(2, "0")} SKILLS
                </span>
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
