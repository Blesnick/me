import React from "react";

const About: React.FC = () => {
  return (
    <section id="About" className="fh5co-about-me">
      <div className="about-me-inner site-container">
        <article className="portfolio-wrapper">
          <div className="portfolio__img">
            <img
              src="/images/about-me.jpg"
              className="about-me__profile"
              alt="Blessing Nicholas profile"
            />
          </div>
          <div className="portfolio__bottom">
            <div className="portfolio__name">
              <span>B</span>
              <h2 className="universal-h2">lessing Nicholas</h2>
            </div>
            <p>
              Software Tester with a passion for automation, quality
              engineering, and CI/CD excellence.
            </p>
          </div>
        </article>

        <div className="about-me__text">
          <div className="about-me-single-slide">
            <h2 className="universal-h2 universal-h2-bckg">Objective</h2>
            <p>
              To work in a professional environment that encourages growth and
              excellence, and where I can apply my skills as a Software
              Developer in Test (SDET) to deliver high-quality, efficient
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="about-me-bckg"></div>
    </section>
  );
};

export default About;
