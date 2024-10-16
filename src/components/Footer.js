import React,{ useEffect} from "react";
import { Link } from "react-router-dom";

import { useScreenSize } from "../customHooks/ScreenSizeContext";
const Footer = () => {
  const { screenSize,setFooterHeight } = useScreenSize();
  const { screenWidth } = screenSize;
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 
  useEffect(() => {
    const handleResize = () => {
      const footer = document.querySelector(".footer_sec");
      if (footer) {
        const height = footer.getBoundingClientRect().height;
        setFooterHeight(height);
        
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setFooterHeight]);




  return (
    <footer className="footer_sec">
      <section className="footer_center _max_width_center">
        <figure className="footer_logo">
          {screenWidth <= 686 ? (
            <>
              <img
                className="footer_logo_img"
                loading="lazy"
                
                alt="footerImgwhysintthisworkinggg"
              />{" "}
              <p>
                <span>&copy; </span>copyright - 2025
              </p>
            </>
          ) : (
            <img
              className="footer_logo_img"
              loading="lazy"
              
              alt="footerImg"
              style={{ paddingTop: "0.5rem" }}
            />
          )}
        </figure>
        <nav className="footer_navList">
          <section className="footer_nav_section">
            <header>
              <h1 className="footer_navList_h1">SITEMAP</h1>
            </header>

            <ul className="footer_navList_ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/cart"}>Menu</Link>
              </li>
              <li>
                <Link to={"/reservations"}>Reservations</Link>
              </li>
              <li>
                <Link to={"/orderonline"}>Order Online</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </section>
          <section className="footer_nav_section">
            <header>
              <h1 className="footer_navList_h1">CONTACT US</h1>
            </header>
            <ul className="footer_navList_ul">
              <li>
                <Link>123 Fake Ave, Chicago, IL 60602</Link>
              </li>
              <li>
                <Link>+1 (012) 345-6789</Link>
              </li>
              <li>
                <Link>info@littlelemon.com</Link>
              </li>
            </ul>
          </section>
          <section className="footer_nav_section">
            <header>
              <h1 className="footer_navList_h1">CONNECT WITH US</h1>
            </header>
            <ul className="footer_navList_ul">
              <li>
                <Link>FaceBook</Link>
              </li>
              <li>
                <Link>Instagram</Link>
              </li><li>
                <Link>X</Link>
              </li><li>
                <Link>YouTube</Link>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
