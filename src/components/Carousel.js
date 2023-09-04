import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption " style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×700/?donuts"
              className="d-block w-100 h-50"
              alt="..."
              style={{
                filter: "brightness(50% )",
                objectFit: "contain !important",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?pizza"
              className="d-block w-100 h-50"
              alt="..."
              style={{
                filter: "brightness(50% )",
                objectFit: "contain !important",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?pasta"
              className="d-block w-100 h-50"
              alt="..."
              style={{
                filter: "brightness(50% )",
                objectFit: "contain !important",
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
