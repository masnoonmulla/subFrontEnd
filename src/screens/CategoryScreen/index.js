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
              <div className="panelFliter"></div>
              <div className="panelDivs"></div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panelRoot">
              <p className="catText"> Clothing</p>
            </div>
            <div className="panelContent">
              <div className="panelFliter"></div>
              <div className="panelDivs"></div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panelRoot">
              <p className="catText"> Bag</p>
            </div>
            <div className="panelContent">
              <div className="panelFliter"></div>
              <div className="panelDivs"></div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default CategoryScreen;
