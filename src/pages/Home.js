import React from "react";
import "./Home.css";
import mainVideo from "../mainpage_imgs/cssa_video.mp4";
import { useMediaQuery } from "react-responsive";
const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: "850px" });
  const VideoBackground = () => {
    return (
      <video autoPlay loop muted className="background-video">
        <source src={mainVideo} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>
    );
  };
  return (
    <div className="home_page">
    <div className="home_container">
      { !isMobile && <VideoBackground />}
      <h1 className="floating-text home_float">Chinese Students</h1>
      <br />
      <h1 className="floating-text home_float">and Scholars Association</h1>
      {/* <div className="about">
        <h2 className="about_title">关于我们</h2>
        <p className="about_text">
          丰富的社团和活动，给你更多元化的大学生活；无限的挑战和机会，让你跳出框架重新定义自我；在香槟的留学旅途，有cssa的温暖相伴，我们不孤独。
        </p>
      </div> */}
      
    </div>
    <footer className="footer">
        <p>© 2021 CSSA</p>
      </footer>
    </div>
  );
};

export default Home;
