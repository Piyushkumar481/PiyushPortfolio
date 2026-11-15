import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building applications with Java, Python, React, Spring Boot and REST APIs.",
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "Practising data structures, algorithms, debugging and writing maintainable code.",
  },
  {
    number: "03",
    title: "Open Source",
    description:
      "Contributing to real-world projects and collaborating through GitHub pull requests.",
  },
];

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">GET TO KNOW ME</span>
          <h2>
            More than just <span>code.</span>
          </h2>
          <p>
            A little about my background, interests and the work I enjoy doing.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-card-label">MY BACKGROUND</span>

            <h3>
              Building useful things.
              <br />
              Learning every day.
            </h3>

            <p>
              I'm Piyush Kumar, an Information Technology graduate from KIIT
              University. I enjoy developing software applications and
              understanding how different technologies work together to solve
              practical problems.
            </p>

            <p>
              My project experience includes full-stack application
              development, backend APIs, database integration and
              machine-learning-based applications. I've also contributed to
              OpenRemote through a pull request that was successfully merged.
            </p>

            <p>
              I'm continuing to strengthen my software engineering
              fundamentals, explore modern development tools and contribute
              to projects that help me grow as a developer.
            </p>

            <div className="about-education">
              <span className="education-icon">🎓</span>
              <div>
                <strong>B.Tech — Information Technology</strong>
                <span>KIIT University · 2022–2026</span>
              </div>
            </div>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div
                className="about-highlight-card"
                key={item.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <span className="highlight-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
