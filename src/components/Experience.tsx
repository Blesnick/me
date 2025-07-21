import React from "react";

interface Job {
  company: string;
  role: string;
  period: string;
  desc: string;
  logo: string;
  link?: string;
}

const jobs: Job[] = [
  {
    company: "Mobilise Global",
    role: "QA Specialist Consultant",
    period: "Jun 2021 – Present",
    desc: "Build and manage Testsigma automated test cases for both Mobile and Web. Manage test automation environments (Android & iOS), collaborate with DevOps and PMs, and ensure product quality.",
    logo: "mobilise.png",
    link: "https://www.mobiliseglobal.com",
  },
  {
    company: "Kobo360",
    role: "QA Engineer I",
    period: "Dec 2021 – May 2025",
    desc: "Manage CI/CD pipelines, create Cypress+Cucumber test automation, collaborate with DevOps and PMs, and ensure product quality.",
    logo: "kobo360.png",
    link: "https://kobo360.com",
  },
  {
    company: "Indicina",
    role: "QA Engineer",
    period: "Jun 2021 – Dec 2021",
    desc: "Performed manual and API testing using Postman and Cypress. Participated in Agile sprints and maintained test automation suites.",
    logo: "indicina.co.png",
    link: "https://indicina.co",
  },
  {
    company: "Monniply",
    role: "Software Tester",
    period: "Nov 2019 – Jun 2021",
    desc: "Reviewed software requirements, executed UI and usability testing, and collaborated with designers and developers.",
    logo: "monniply.png",
  },
  {
    company: "Zuri Int'l",
    role: "QA Intern",
    period: "Mar 2019 – Nov 2019",
    desc: "Tested new software applications, documented bugs, and participated in product review meetings.",
    logo: "zuri.png",
    link: "https://zuri.team",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="Experience" className="fh5co-blog">
      <div className="site-container">
        <h2 className="universal-h2 universal-h2-bckg">Experience</h2>
        <div
          className="experience-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="single-experience-card"
              style={{
                padding: "1.5rem",
                border: "1px solid #eee",
                borderRadius: "8px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "240px",
              }}
            >
              <div>
                <h4 style={{ marginBottom: "0.25rem", fontWeight: 600 }}>
                  {job.role} <br />
                  <span style={{ fontWeight: 400, color: "#555" }}>
                    @{job.company}
                  </span>
                </h4>
                <span style={{ fontSize: "0.9rem", color: "#888" }}>
                  {job.period}
                </span>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  {job.desc}
                </p>
              </div>
              {job.logo && (
                <div style={{ marginTop: "1rem" }}>
                  <a
                    href={job.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/images/${job.logo}`}
                      alt={job.company}
                      style={{
                        height: "40px",
                        width: "auto",
                        objectFit: "contain",
                        borderRadius: "4px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      }}
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
