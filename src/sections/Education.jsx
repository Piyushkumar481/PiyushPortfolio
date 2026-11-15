import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Information Technology",
    institution: "KIIT University",
    period: "2022 – 2026",
    score: "CGPA: 7.84 / 10",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Gyan Jyoti Residential Public School, Patna",
    period: "2022",
    score: "75.6% — CBSE",
  },
  {
    degree: "Secondary (Class X)",
    institution: "St. John's Academy, Patna",
    period: "2020",
    score: "83.3% — CBSE",
  },
];

const certifications = [
  "IBM DevOps and Software Engineering Professional Certificate",
  "IBM — Python for Data Science",
  "Infosys Springboard — Principles of Generative AI",
  "Google Analytics 4 Certification",
  "Palo Alto Networks — Cybersecurity Fundamentals",
  "Udemy — Mastering Data Structures and Algorithms using C and C++",
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">MY BACKGROUND</p>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="education-intro">
            My academic background and certifications that support my
            technical learning and development.
          </p>

          <div className="education-layout">
            <div className="education-column">
              <div className="education-heading">
                <GraduationCap size={22} />
                <h3>Education</h3>
              </div>

              <div className="education-timeline">
                {education.map((item, index) => (
                  <div className="education-item" key={item.degree}>
                    <span className="education-dot"></span>
                    <span className="education-period">{item.period}</span>
                    <h4>{item.degree}</h4>
                    <p>{item.institution}</p>
                    <span className="education-score">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications-column">
              <div className="education-heading">
                <Award size={22} />
                <h3>Certifications</h3>
              </div>

              <div className="certification-list">
                {certifications.map((certification, index) => (
                  <div className="certification-card" key={certification}>
                    <span className="certification-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{certification}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
