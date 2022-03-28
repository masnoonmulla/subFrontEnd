import React from "react";
import "./home-page.css";
import Header from "../../components/Header";

function HomePage() {
  return (
    <>
      <Header />
      <div className="firstContainerDesc">
        <div className="firstInnerContainerDesc">
          <div className="firstMainContainerDesc">
            <div className="mainBlockContainer">
              <div className="firstImgContainer">
                <div className="firstImgCard">
                  <div className="imgDiv">
                    <img
                      src={require("../../assets/Artboard.png")}
                      className="imgStyle"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="firstDescContainer">
                <h1 className="firstDescTitle">Mission Statment</h1>

                <span className="subHeaderTitle">
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </span>

                <div className="buttonContainer">
                  <div className="firstButtonCon">
                    <a className="buttonWh">Login As Customer</a>
                  </div>

                  <div className="firstButtonCon">
                    <a className="buttonNew">Login As Artist</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondSection">
        <h2 className="howItWorksText"> How it Works ?</h2>
        <div className="howItWorksContainer">

          <div className="hwcard">
            <div className="hwContent">
              <div className="hwAvatar"> 
                <img className="imgStyle"   src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png" />
              </div>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>

          <div className="hwcard">
            <div className="hwContent">
              <div className="hwAvatar"> 
                <img className="imgStyle"   src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png" />
              </div>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>

          <div className="hwcard">
            <div className="hwContent">
              <div className="hwAvatar"> 
                <img className="imgStyle"   src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png" />
              </div>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>

        


        </div>
      </div>
    </>
  );
}

export default HomePage;
