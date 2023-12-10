import React, { useState, useEffect } from "react";
import style from "./HappyClients.module.css";
import leftarrow from "../../Assets/leftarrow.png";
import rightarrow from "../../Assets/rightarrow.png";
import janeCooper from "../../Assets/JaneCooper.png";
import davonLane from "../../Assets/DevonLane.png";
import RobertFox from "../../Assets/RobertFox.png";

function HappyClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const testimonialsData = [
      {
        name: "Jane Cooper",
        position: "CEO of Hunt",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
        image: janeCooper,
      },
      {
        name: "Devon Lane",
        position: "CEO of Hunt",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
        image: davonLane,
      },
      {
        name: "Robert Fox",
        position: "CEO of Hunt",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
        image: RobertFox,
      },{
        name: "Jane Cooper",
        position: "CEO of Hunt",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
        image: janeCooper,
      },
      {
        name: "Devon Lane",
        position: "CEO of Hunt",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
        image: davonLane,
      },
      {
        name: "Robert Fox",
        position: "CEO of Hunt",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
        image: RobertFox,
      }
    ];
    setTestimonials(testimonialsData);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={style.happyClient}>
      <div className={style.topPortion}>
        <h2>What says our happy Clients</h2>
        <div className={style.arrowPortion}>
          <div className={style.arrow} onClick={prevSlide}>
            <img src={leftarrow} alt="" className={style.img} />
          </div>
          <div className={style.arrow} onClick={nextSlide}>
            <img src={rightarrow} alt="" className={style.img} />
          </div>
        </div>
      </div>
      {/* carousel */}
      <div className={style.carousel}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={style.grid}
            style={{
              display:
                index === currentIndex || index === (currentIndex + 1) % testimonials.length || index === (currentIndex + 2) % testimonials.length
                  ? "block"
                  : "none",
            }}
          >
            <div className={style.imgcontainer}>
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h5>{testimonial.name}</h5>
            <h6>{testimonial.position}</h6>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HappyClients;
