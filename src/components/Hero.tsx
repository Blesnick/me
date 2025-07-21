import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Blessing_Nicholas_CV.pdf";
    link.download = "Blessing_Nicholas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast("CV download started!", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 2500,
      closeOnClick: true,
      style: {
        background: "#c18f59",
        color: "white",
        fontWeight: 500,
      },
    });
  };

  return (
    <section id="Hero" className="fh5co-top-banner">
      <div className="top-banner__inner site-container">
        <div className="top-banner__image">
          <img src="/images/top-banner-author.jpg" alt="Blessing Nicholas" />
        </div>
        <div className="top-banner__text">
          <div className="top-banner__text-up">
            <span className="brand-span">Hi, I'm</span>
            <h2 className="top-banner__h2">Blessing</h2>
          </div>
          <div className="top-banner__text-down">
            <h2 className="top-banner__h2">Nicholas</h2>
            <span className="brand-span">QA Engineer | SDET Enthusiast</span>
          </div>
          <p>
            To work in an environment that encourages growth and where I can
            utilize my skills as a Software Developer in Test (SDET).
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <a
              href="https://linkedin.com/in/blessing-nicholas-ab1921209/"
              className="brand-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              Connect on LinkedIn
            </a>
            <button
              onClick={handleDownload}
              className="brand-button"
              style={{ cursor: "pointer" }}
              aria-label="Download CV"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        hideProgressBar
        closeOnClick
        autoClose={2500}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Hero;
