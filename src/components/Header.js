import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="" className="logo">
        Subjective
      </a>

      <div className="searchBarNew">
        <div className="navInrSearchInput">
          <div className="navSearchIcon"></div>
          <input
            type="text"
            className="navSearchInput"
            placeholder="Search Sneakers,Designers...."
          ></input>
        </div>
      </div>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#work"> Favourites </a>
        </li>
        <li>
          <a href="#about">Orders</a>
        </li>
        <li>
          <a href="#careers">Login</a>
        </li>
      </ul>
    </header>
    //   <div className="desktopHeaderNav">
    //   <nav className="navBarMain">
    //     <div className="navBarLeft">
    //       <div className="navBrandName">
    //         <p className="navtext">Subjective</p>
    //       </div>
    //     </div>
    //     <div className="navSearchBar">
    //       <div className="navInrSearchBar">
    //        
    //         <div>
    //           <div className="navInrSearchInput">
    //             <div className="navSearchIcon">
    //               {/* Search Icon Goes Here */}
    //             </div>
    //             <input
    //               type="text"
    //               className="navSearchInput"
    //               placeholder="Search Sneakers,Designers...."
    //             ></input>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <ul className="menuList">
    //       <div style={{display:'flex'}}>
    //         <li className="menuListItem">
    //           <p className="listItemText">Favorites</p>
    //         </li>
    //         <li className="menuListItem">
    //           <p className="listItemText">Orders</p>
    //         </li>
    //         <li className="menuListItem">
    //           <p className="listItemText">Login</p>
    //         </li>
    //       </div>
    //     </ul>
    //   </nav>
    // </div>
  );
}

export default Header;
