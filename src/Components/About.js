import React from "react";

function About() {
  return (
    <div className="accordion my-4" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            iNotebook
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            iNotebook is a simple application that people can use in their daily
            life to keep track of important events by saving their notes in
            iNotebook
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Developer
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            This application is developed by <strong>Aditya Singh</strong>. you
            can get in touch with him using his email{" "}
            <strong>adisingh925@gmail.com</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Contribution
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            The iNotebook repository is publicly available in github including
            backend, any interested developer who wants to contribute can
            contact on above email or can reach out to me on my github{" "}
            <strong>adisingh925</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
