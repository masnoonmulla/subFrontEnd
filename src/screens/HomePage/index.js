import React from "react";
import "./home-page.css";
import Header from "../../components/Header";
import Carousel from "react-grid-carousel";

function HomePage() {
  return (
    <>
      <Header />

      <div className="columnsNew">
        <div className="left-div left-text">
          <div className="firstImgCard">
            <div className="imgDiv">
              <img
                src={require("../../assets/Artboard.png")}
                className="imgStyle"
              ></img>
            </div>
          </div>
        </div>

        <div className="right-div right-text">
          <div className="firstDescContainer">
            <h1 className="firstDescTitle">Mission Statment</h1>

            <span className="subHeaderTitle">
            Art is a medium of expression for us. We at Subjective believe in being true to ourselves and embodying our own uniqueness. Wear who you are!
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

      <div className="secondSection">
        <h2 className="howItWorksText"> How it Works ?</h2>
        <div className="howItWorksContainer">
          <div className="hwcard">
            <div className="hwContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://res.cloudinary.com/subjective/image/upload/v1650090204/Explore_from_a_wide_range_of_artist_and_find_the_perfect_match.-01_gv7uoc.png"
                />
              </div>
              Explore from a wide range of artist and find the perfect match.
            </div>
          </div>

          <div className="hwcard">
            <div className="hwContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://res.cloudinary.com/subjective/image/upload/v1650090204/Choose_a_product_you_want_to_customize-01_lcw7db.png"
                />
              </div>
              Choose a product you want to customise
            </div>
          </div>

          <div className="hwcard">
            <div className="hwContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://res.cloudinary.com/subjective/image/upload/v1650090204/Purchase_a_slot_or_join_the_waitlist_-01_gn4c1j.png"
                />
              </div>
              Purchase a slot or join the waitlist!
            </div>
          </div>

          <div className="hwcard">
            <div className="hwContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://res.cloudinary.com/subjective/image/upload/v1650090564/connec_ehuiek.png"
                />
              </div>
              Connect with the artist and watch.
            </div>
          </div>



        </div>
      </div>

      <div className="thirdSection">
        <h2 className="howItWorksText"> Customization Categories </h2>
        <div className="howItWorksContainer">
          <div className="catGroupHome">
            <img
              className="avaStyleHome"
              src={require("../../assets/sneakersCat.jpg")}
            />

            <p className="categoryText"> Sneakers</p>
          </div>

          <div className="catGroupHome">
            <img
              className="avaStyleHome"
              src={require("../../assets/t-shirt.jpg")}
            />

            <p className="categoryText">Clothing</p>
          </div>

          <div className="catGroupHome">
            <img
              className="avaStyleHome"
              src={require("../../assets/bagcat.jpg")}
            />

            <p className="categoryText">Bag</p>
          </div>
        </div>
      </div>

      <div className="fouthSection">
        <h2 className="featuredArtistText"> Featured Artist </h2>

        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <div className="card">
              <div className="header">
                <div className="avatar">
                  <img
                    src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="user-meta has-text-centered">
                  <h3 className="username">Jhon Doe</h3>
                  <h5 className="position">Sneaker,Bag Customiser</h5>
                </div>
                <div className="user-bio has-text-centered">
                  <p>
                    {" "}
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p className="sugButton"> #fanart </p>
                  <p className="sugButton"> #fanart </p>
                  <p className="sugButton"> #fanart </p>
                </div>

                <div className="ratingRow">
                  <div className="ratingCol">
                    <img
                      src={require("../../assets/starRating.png")}
                      style={{ width: 120 }}
                      alt=""
                    />
                    <p> Rating </p>
                  </div>
                  <div className="ratingCol">
                    <p> Price Range: 5k-10K </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="header">
                <div className="avatar">
                  <img
                    src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="user-meta has-text-centered">
                  <h3 className="username">Jane Doe</h3>
                  <h5 className="position">Sneaker,Bag Customiser</h5>
                </div>
                <div className="user-bio has-text-centered">
                  <p>
                    {" "}
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p className="sugButton"> #fanart </p>
                  <p className="sugButton"> #fanart </p>
                  <p className="sugButton"> #fanart </p>

                 
                </div>
                <div className="ratingRow">
                    <div className="ratingCol">
                      <img
                        src={require("../../assets/starRating.png")}
                        style={{ width: 120 }}
                        alt=""
                      />
                      <p> Rating </p>
                    </div>
                    <div className="ratingCol">
                      <p> Price Range: 5k-10K </p>
                    </div>
                  </div>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card">
              <div className="header">
                <div className="avatar">
                  <img
                    src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="user-meta has-text-centered">
                  <h3 className="username">Jim Doe</h3>
                  <h5 className="position">Sneaker,Bag Customiser</h5>
                </div>
                <div className="user-bio has-text-centered">
                  <p>
                    {" "}
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p className="sugButton"> #fanart </p>
                  <p className="sugButton"> #fanart </p>
                  <p className="sugButton"> #fanart </p>
                </div>


                <div className="ratingRow">
                  <div className="ratingCol">
                    <img
                      src={require("../../assets/starRating.png")}
                      style={{ width: 120 }}
                      alt=""
                    />
                    <p> Rating </p>
                  </div>
                  <div className="ratingCol">
                    <p> Price Range: 5k-10K </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="fifthSection">
        <h2 className="howItWorksText"> How to sell your Art</h2>
        <div className="howItWorksContainer">
          <div className="hwfcard">
            <div className="hwfiftContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png"
                />
                <p>Step 1</p>
              </div>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>

          <div className="hwfcard">
            <div className="hwfiftContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png"
                />
                <p>Step 2</p>
              </div>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>

          <div className="hwfcard">
            <div className="hwfiftContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png"
                />
                <p>Step 3</p>
              </div>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>

          <div className="hwfcard">
            <div className="hwfiftContent">
              <div className="hwAvatar">
                <img
                  className="avaStyleHome"
                  src="https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png"
                />
                <p>Step 4</p>
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
