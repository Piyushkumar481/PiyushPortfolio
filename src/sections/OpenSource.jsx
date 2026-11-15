import { motion } from "framer-motion";
import { ArrowUpRight, GitPullRequest, CheckCircle2 } from "lucide-react";

function OpenSource() {
  return (
    <section className="opensource-section" id="opensource">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">COMMUNITY CONTRIBUTIONS</p>
          <h2 className="section-title">Open Source Contributions</h2>
          <p className="opensource-intro">
            Contributing to real-world projects and collaborating with
            open-source communities.
          </p>

          <div className="opensource-card">
            <div className="opensource-card-top">
              <div className="opensource-icon">
                <GitPullRequest size={25} />
              </div>

              <span className="merged-badge">
                <CheckCircle2 size={15} />
                Merged
              </span>
            </div>

            <h3>OpenRemote</h3>
            <p className="opensource-role">
              Open-source IoT Platform
            </p>

            <h4>Manager Login Redirect Fix</h4>
            <p className="opensource-description">
              Contributed a fix addressing manager login redirect behavior.
              The change was submitted through a pull request and merged
              into the OpenRemote codebase.
            </p>

            <div className="opensource-meta">
              <span>Pull Request #3519</span>
              <span>Java</span>
              <span>GitHub</span>
            </div>

            <a
              className="opensource-link"
              href="https://github.com/openremote/core/pull/3519"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Merged Pull Request
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OpenSource;
