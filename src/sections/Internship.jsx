import { motion } from "framer-motion";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

export default function Internship() {
  return (
    <section className="internship-section" id="experience">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">PROFESSIONAL EXPERIENCE</p>
          <h2 className="section-title">Internship Experience</h2>

          <div className="internship-card">
            <div className="internship-top">
              <div className="internship-icon">
                <BriefcaseBusiness size={25} />
              </div>
              <span className="internship-type">Virtual Internship</span>
            </div>

            <h3>Infosys Springboard</h3>
            <h4>Artificial Intelligence Virtual Intern</h4>

            <p className="internship-domain">
              Domain: Artificial Intelligence
            </p>

            <ul className="internship-points">
              <li>
                Gained practical exposure to Artificial Intelligence
                concepts, techniques, and real-world applications.
              </li>
              <li>
                Explored AI-driven problem-solving approaches and
                emerging AI technologies.
              </li>
              <li>
                Strengthened technical knowledge through structured
                learning activities and practical exercises.
              </li>
            </ul>

            <div className="internship-tags">
              <span>Artificial Intelligence</span>
              <span>AI Applications</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
