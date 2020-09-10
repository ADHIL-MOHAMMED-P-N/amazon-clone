import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            title="Goat Days (original title: Malayalam: ആടുജീവിതം Aadujeevitham) is a 2008 Malayalam novel about an abused migrant worker in Saudi Arabia written by Bahrain-based Indian author Benyamin (born Benny Daniel). "
            price="10"
            image="https://rukminim1.flixcart.com/image/352/352/jrqo70w0/book/1/7/5/aatujeevitham-original-imafdhfgvkbgfgha.jpeg?q=70"
            rating={5}
          />
          <Product
            title="PUMA Men's Bags - Shop from the wide range of PUMA Bags for Men. Ferrari, BMW, Mercedes, Red Bull & Porsche collection."
            price="30"
            image="https://ae01.alicdn.com/kf/HTB1JryHa7L0gK0jSZFxq6xWHVXaq/Original-New-Arrival-PUMA-Originals-Backpack-Unisex-Backpacks-Sports-Bags.jpg_640x640.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Sports Watch : Buy Sports Watches online for men & women at low prices in India.  Casio & more. Free Shipping ..."
            price="20"
            image="https://images-na.ssl-images-amazon.com/images/I/619xstmMPCL._AC_UX466_.jpg"
            rating={3}
          />
          <Product
            title="LG V30+ :LG V30 Plus smartphone runs on Android v7.1.2 (Nougat) operating system...."
            price="30"
            image="https://www.lg.com/hk_en/images/mobile-phone/md05885198/gallery/H930DS-Aurora-Black-128GB_Desk1_171009.jpg"
            rating={4}
          />
          <Product
            title="SONY DSLR : Discover Sony's wide range of full frame mirrorless interchangeable lens cameras. "
            price="1000"
            image="https://i.gadgets360cdn.com/products/cameras/large/1548235065_832_sony_nex-3k-14-2mp-dslr-camera.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="T Shirt :Explore trendy collection of printed & solid t-shirts & polos from top brands like US Polo, United Colors of Benetton, Jack & Jones & more ..."
            price="40"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcK3xLmwGwsdxIhSUkiG9Dl2rO17IDHIJ4AA&usqp=CAU"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
