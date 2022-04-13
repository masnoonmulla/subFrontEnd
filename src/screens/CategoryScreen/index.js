import React from "react";
import Header from "../../components/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./categoryScreen.css";

function CategoryScreen() {
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
              <p className="catText"> Sneakers</p>
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
              <div className="panelDivs"></div>
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
              <div className="panelDivs"></div>
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
              <div className="panelDivs"></div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default CategoryScreen;
