import React from "react";
import Header from "../../components/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Sheet from "react-modal-sheet";
import "./categoryScreen.css";

function CategoryScreen() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Header />

      <div className="rootCentredDiv">
        <Tabs selectedTabClassName="selectedTab">
          <TabList className="tabStyle">
            <Tab>
              <div className="catGroup">
                <img
                  className="avaStyle"
                  src={require("../../assets/sneakersCat.jpg")}
                />
              </div>
              
              <p className="categoryText"> Sneakers</p>
            </Tab>
            <Tab>
              <div className="catGroup">
                <img
                  className="avaStyle"
                  src={require("../../assets/t-shirt.jpg")}
                />
              </div>
              <p className="categoryText">Clothing</p>
            </Tab>
            <Tab>
              <div className="catGroup">
                <img
                  className="avaStyle"
                  src={require("../../assets/bagcat.jpg")}
                />
              </div>
              <p className="categoryText">Bag</p>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panelRoot">
              <p className="catText"> Sneaker Customizers </p>
            </div>
            <div className="panelContent">
              <div className="panelFliter">
                <div className="containerMain">
                  <div className="items">
                    Sort By:
                    <select name="cars" id="cars" className="dropDwnstyle">
                      <option value="volvo">Top Rated</option>
                      <option value="saab">Top Rated</option>
                      <option value="opel">Top Rated</option>
                      <option value="audi">Top Rated</option>
                    </select>
                  </div>
                  <div className="items">
                    Price Range:
                    <span className="hiddenele"> hidden element </span>
                    <input
                      className="rangeSliderStyle"
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="50"
                    />
                  </div>
                  <div className="items">
                    Style Tags:
                    <span className="hiddenele"> hidden element </span>
                    <ul>
                      <li className="tagsItem">Fan Art</li>
                      <li className="tagsItem">Painted</li>
                      <li className="tagsItem">Anime</li>
                      <li className="tagsItem">Illustration</li>
                      <li className="tagsItem">Trending</li>
                      <li className="tagsItem">Abstract</li>
                      <li className="tagsItem">View More</li>
                    </ul>
                  </div>
                  <div className="items">
                    Category:
                    <span className="hiddenele"> hidden element </span>
                    <ul className="listCat">
                      <li className="catItem">
                        <input type="checkbox" /> Sneakers Customizers
                      </li>
                      <li className="catItem">
                        <input type="checkbox" /> Clothing
                      </li>
                      <li className="catItem">
                        <input type="checkbox" /> Bag
                      </li>
                    </ul>
                  </div>
                  <div className="items">
                    Availbilty:
                    <select name="cars" id="cars" className="dropDwnstyle">
                      <option value="volvo">1-2 Weeks</option>
                      <option value="saab">1-2 Weeks</option>
                      <option value="opel">1-2 Weeks</option>
                      <option value="audi">1-2 Weeks</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="panelDivs">
                <div className="containerArtist">
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panelRoot">
              <p className="catText"> Clothing</p>
            </div>
            <div className="panelContent">
              <div className="panelFliter">
                <div className="containerMain">
                  <div className="items">
                    Sort By:
                    <select name="cars" id="cars" className="dropDwnstyle">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="items">
                    Price Range:
                    <span className="hiddenele"> hidden element </span>
                    <input
                      className="rangeSliderStyle"
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="50"
                    />
                  </div>
                  <div className="items">
                    Style Tags:
                    <span className="hiddenele"> hidden element </span>
                    <ul>
                      <li className="tagsItem">Fan Art</li>
                      <li className="tagsItem">Painted</li>
                      <li className="tagsItem">Anime</li>
                      <li className="tagsItem">Illustration</li>
                      <li className="tagsItem">Trending</li>
                      <li className="tagsItem">Abstract</li>
                      <li className="tagsItem">View More</li>
                    </ul>
                  </div>
                  <div className="items">
                    Category:
                    <span className="hiddenele"> hidden element </span>
                    <ul className="listCat">
                      <li className="catItem">
                        <input type="checkbox" /> Sneakers Customizers
                      </li>
                      <li className="catItem">
                        <input type="checkbox" /> Clothing
                      </li>
                      <li className="catItem">
                        <input type="checkbox" /> Bag
                      </li>
                    </ul>
                  </div>
                  <div className="items">
                    Availbilty:
                    <select name="cars" id="cars" className="dropDwnstyle">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="panelDivs">
                <div className="containerArtist">
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panelRoot">
              <p className="catText"> Bag</p>
            </div>
            <div className="panelContent">
              <div className="panelFliter">
                <div className="containerMain">
                  <div className="items">
                    Sort By:
                    <select name="cars" id="cars" className="dropDwnstyle">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="items">
                    Price Range:
                    <span className="hiddenele"> hidden element </span>
                    <input
                      className="rangeSliderStyle"
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="50"
                    />
                  </div>
                  <div className="items">
                    Style Tags:
                    <span className="hiddenele"> hidden element </span>
                    <ul>
                      <li className="tagsItem">Fan Art</li>
                      <li className="tagsItem">Painted</li>
                      <li className="tagsItem">Anime</li>
                      <li className="tagsItem">Illustration</li>
                      <li className="tagsItem">Trending</li>
                      <li className="tagsItem">Abstract</li>
                      <li className="tagsItem">View More</li>
                    </ul>
                  </div>
                  <div className="items">
                    Category:
                    <span className="hiddenele"> hidden element </span>
                    <ul className="listCat">
                      <li className="catItem">
                        <input type="checkbox" /> Sneakers Customizers
                      </li>
                      <li className="catItem">
                        <input type="checkbox" /> Clothing
                      </li>
                      <li className="catItem">
                        <input type="checkbox" /> Bag
                      </li>
                    </ul>
                  </div>
                  <div className="items">
                    Availbilty:
                    <select name="cars" id="cars" className="dropDwnstyle">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="panelDivs">
                <div className="containerArtist">
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                  <div className="itemCard">
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
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
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
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <div className="button-bar">
          <button  className="buttonFilt" onClick={() => setOpen(true)}>Filter</button>
          </div>
        </Tabs>

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <div className="containerMain">
                <div className="items">
                  Sort By:
                  <select name="cars" id="cars" className="dropDwnstyle">
                    <option value="volvo">Top Rated</option>
                    <option value="saab">Top Rated</option>
                    <option value="opel">Top Rated</option>
                    <option value="audi">Top Rated</option>
                  </select>
                </div>
                <div className="items">
                  Price Range:
                  <span className="hiddenele"> hidden element </span>
                  <input
                    className="rangeSliderStyle"
                    type="range"
                    min="1"
                    max="100"
                    defaultValue="50"
                  />
                </div>
                <div className="items">
                  Style Tags:
                  <span className="hiddenele"> hidden element </span>
                  <ul>
                    <li className="tagsItem">Fan Art</li>
                    <li className="tagsItem">Painted</li>
                    <li className="tagsItem">Anime</li>
                    <li className="tagsItem">Illustration</li>
                    <li className="tagsItem">Trending</li>
                    <li className="tagsItem">Abstract</li>
                    <li className="tagsItem">View More</li>
                  </ul>
                </div>
                <div className="items">
                  Category:
                  <span className="hiddenele"> hidden element </span>
                  <ul className="listCat">
                    <li className="catItem">
                      <input type="checkbox" /> Sneakers Customizers
                    </li>
                    <li className="catItem">
                      <input type="checkbox" /> Clothing
                    </li>
                    <li className="catItem">
                      <input type="checkbox" /> Bag
                    </li>
                  </ul>
                </div>
                <div className="items">
                  Availbilty:
                  <select name="cars" id="cars" className="dropDwnstyle">
                    <option value="volvo">1-2 Weeks</option>
                    <option value="saab">1-2 Weeks</option>
                    <option value="opel">1-2 Weeks</option>
                    <option value="audi">1-2 Weeks</option>
                  </select>
                </div>
              </div>
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
      </div>
    </>
  );
}

export default CategoryScreen;
