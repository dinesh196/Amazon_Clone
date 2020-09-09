import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_3000x1200._CB405103024_.jpg"
          alt="Prime"
        ></img>

        <div className="home_row">
          <Product
            id="2121212"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="1212213"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="838303"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="9384398"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          {/* {/* <Product /> */}
          <Product
            id="408349"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />{" "}
          */}
        </div>
        <div className="home_row">
          <Product
            id="49027583"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          {/* <Product /> */}
          {/* <Product />
          <Product /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
