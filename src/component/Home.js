import React from "react";
import Product from "./Product";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home banner"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Very easy true story"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vQrwOYdTL.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Crucial RAM 16GB DDR4 2666 MHz"
            price={79.95}
            image="https://images-na.ssl-images-amazon.com/images/I/61fz1%2BE%2BqqL._AC_SL1024_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Patriot Viper 4 Blackout Series DDR4 16GB"
            price={79.95}
            image="https://images-na.ssl-images-amazon.com/images/I/91AaJxpi58L._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Lenovo ThinkPad E15 15.6” Full HD IPS 1920 x 1080 Laptop"
            price={834.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61oWqHJmifL._AC_SL1000_.jpg"
            rating={2}
          />
          <Product
            id="5"
            title="Acer Nitro 5 Gaming Laptop"
            price={819.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="SAMSUNG 870 EVO 1TB 2.5 Inch SATA III Internal SSD "
            price={119.99}
            image="https://images-na.ssl-images-amazon.com/images/I/911ujeCkGfL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
