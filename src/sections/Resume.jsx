import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";

export default function Resume() {
  const resumePath = "/resume/Piyush_Kumar_Resume.pdf";

  return (
    <section className="resume-section" id="resume">
      <div className="section-container">
        <motion.div
          className="resume-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-icon">
            <FileText size={34} />
          </div>

          <p className="section-label">MY RESUME</p>

          <h2 className="section-title">
            Let's Review My <span>Resume.</span>
          </h2>

          <p className="resume-description">
            Explore my educational background, technical skills,
            projects and professional experience.
          </p>

          <div className="resume-actions">
            <a
              href={resumePath}
              download="Piyush_Kumar_Resume.pdf"
              className="resume-download"
            >
              <Download size={19} />
              Download Resume
            </a>

            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-preview"
            >
              <Eye size={19} />
              View Resume
            </a>
          </div>

          <span className="resume-format">PDF DOCUMENT</span>
        </motion.div>
      </div>
    </section>
  );
}
