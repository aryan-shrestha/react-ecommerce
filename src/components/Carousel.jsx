import React from "react";

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide mb-4">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            className="d-block w-100"
            alt="..."
            style={{ height: "50vh", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            className="d-block w-100"
            alt="..."
            style={{ height: "50vh", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            className="d-block w-100"
            alt="..."
            style={{ height: "50vh", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
