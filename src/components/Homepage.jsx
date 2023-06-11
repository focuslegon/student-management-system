import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

const img = {
    img1: 'img/school.png',
    img2: 'img/school2.jpg',
};
const HomePage = () => {
  return (
    <div className="homepage">
         <NavBar />
      <h1>Welcome to My Website</h1>
      <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error culpa repudiandae totam voluptatibus cumque ex, ab voluptates tempora perspiciatis exercitationem atque dolor porro obcaecati nam consectetur a! Soluta, ullam?</p>
      <div className="image-container">
        <img src={img.img1}  alt="1" loading="lazy" />
      </div>
      </section>

      <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error culpa repudiandae totam voluptatibus cumque ex, ab voluptates tempora perspiciatis exercitationem atque dolor porro obcaecati nam consectetur a! Soluta, ullam?</p>
      <div className="image-container">
        <img src={img.img2}  alt="1" loading="lazy" />
      </div>
      </section>

      <Link to="/register">Get Started</Link>
    </div>
  );
}

export default HomePage;
