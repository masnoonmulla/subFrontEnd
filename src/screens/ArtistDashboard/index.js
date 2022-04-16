import React from "react";
import Header from "../../components/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Sheet from "react-modal-sheet";
import "./artisit-dashboard.css";

function ArtistDashboard() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Header />
      <div className="containerAtDb">
        <div className={`itemAtDB1 atDetail`}>
          <div className="detailWrapper">
            <div className="itemWrapper">
              <div className="avaOutDiv">
                <img
                  className="artavStyle"
                  src={require("../../assets/sneakersCat.jpg")}
                />
                <p className="atrinfo"> Javed Chaursiya</p>
                <p className="prfileLink"> View Profile</p>
              </div>
            </div>
            <div className={`itemWrapper`}>
              <div className="statsContainer">
                <div className="statsItem">
                  <p>
                    {" "}
                    Tickets Sold : <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    Orders Accepted: <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    Orders Completed: <span className="numStyle">
                      {" "}
                      32{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div className="statsContainer">
                <div className="statsItem">
                  <p>
                    {" "}
                    Rating & Reviews : <span className="numStyle">
                      {" "}
                      32{" "}
                    </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    Revenue Stats : <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    New Orders : <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={`itemWrapper artDiv3`}>
              <div className="ctaBox1">
                <img src="https://res.cloudinary.com/subjective/image/upload/v1650095747/email_black_24dp_ofaaex.svg" />

                <p className="ctaBoxText"> Messages</p>
              </div>
              <div className="ctaBox1">
                <img src="https://res.cloudinary.com/subjective/image/upload/v1650095727/notifications_black_24dp_1_gc7fr7.svg" />
                <p className="ctaBoxText"> Notifications</p>
              </div>
              <div className="ctaBox1">
                <img src="https://res.cloudinary.com/subjective/image/upload/v1650095703/toll_black_24dp_wqudmp.svg" />
                <p className="ctaBoxText"> Manage Tokens</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="itemAtDB2">
          
        </div> */}
        {/* <div className="itemAtDB"></div> */}
      </div>
      <div className="secondContainer">
        <div className="tableContainer">
          <Tabs selectedTabClassName="selectedTab">
            <TabList className="tabStyle">
              <Tab>
                <p className="categoryText"> All Orders (12) </p>
              </Tab>
              <Tab>
                <p className="categoryText">New Orders (11) </p>
              </Tab>
              <Tab>
                <p className="categoryText">Orders Completed (10)</p>
              </Tab>
            </TabList>

            <TabPanel>

              <table className="table">
                <thead>
                  <tr>
                    <th>Ticket No</th>
                    <th>Client Name</th>
                    <th>Description/Brief</th>
                    <th>Media</th>
                    <th>Timeline</th>
                    <th>Status</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

            </TabPanel>
            <TabPanel>
          
            <table className="table">
                <thead>
                  <tr>
                    <th>Ticket No</th>
                    <th>Client Name</th>
                    <th>Description/Brief</th>
                    <th>Media</th>
                    <th>Timeline</th>
                    <th>Status</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
             
            <table className="table">
                <thead>
                  <tr>
                    <th>Ticket No</th>
                    <th>Client Name</th>
                    <th>Description/Brief</th>
                    <th>Media</th>
                    <th>Timeline</th>
                    <th>Status</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                  <tr className="clmDiv">
                    <td data-label="Contact ID">IQC36631</td>
                    <td data-label="Power"> Jhon Doe  </td>
                    <td  className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                    <td data-label="Value">  View Image   </td>
                    <td data-label="Power"> 1-2 Weeks </td>
                    <td data-label="Expiration"> Completed</td>
                    <td data-label="">
                      <a href="#" className="btn btn__active">
                        View Order
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
          </Tabs>
        </div>
        <div className="cardsContainer">
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
                  src="https://res.cloudinary.com/subjective/image/upload/v1650090204/Explore_from_a_wide_range_of_artist_and_find_the_perfect_match.-01_gv7uoc.png"
                />
              </div>
              Explore from a wide range of artist and find the perfect match.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistDashboard;
