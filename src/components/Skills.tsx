import React from "react";

const skills = [
  "Cypress.io UI Test Automation",
  "API Testing (Postman, Newman)",
  "Testsigma",
  "Cucumber Framework",
  "Manual Testing",
  "WebdriverIO (WDIO)",
  "Performance Testing (K6)",
  "JavaScript, Mocha",
  "Selenium, Appium",
  "SQL",
  "TestRail, JIRA, ZOHO, Trello",
  "CI/CD (Git, Jenkins)",
  "GraphQL API Testing",
  "Cross-Browser Testing",
];

const Skills: React.FC = () => {
  return (
    <section id="Skills" className="fh5co-books">
      <div className="site-container">
        <h2 className="universal-h2 universal-h2-bckg">Core Skills</h2>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {skills.map((skill, index) => (
            <div
              className="single-skill"
              key={index}
              style={{
                padding: "1rem",
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <h4
                className="single-skill__title"
                style={{ fontSize: "1rem", margin: 0, color: "#444" }}
              >
                {skill}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
