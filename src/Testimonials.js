import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quotes, setQuotes] = useState([]);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: 'Jane Doe',
    },
    {
      quote: 'I highly recommend this product to everyone!',
      author: 'John Smith',
    },
    {
      quote: 'This product has completely changed my life!',
      author: 'Bob Johnson',
    },
  ];
  const fetchData = async () => {
    const { data } = await axios('https://type.fit/api/quotes');
    // console.log(data);
    setQuotes(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="container">
      <h1>Testimonial App</h1>

      <>
        <div className="testimonials">
          <div className="testimonials-quote">{quotes[currentIndex].text}</div>
          <div className="testimonials-author">
            - {quotes[currentIndex].author}
          </div>
        </div>
      </>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
