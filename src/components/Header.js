import React from 'react';
import  "./Header.css";

function Header() {
  return (
    <div className="desktopHeaderNav">
    <nav className="navBarMain">
      <div className="navBarLeft">
        <div className="navBrandName">
          <p className="navtext">Subjective</p>
        </div>
      </div>
      <div className="navSearchBar">
        <div className="navInrSearchBar">
          {/* This div is for Search List Box navSearchResults */}
          <div>
            <div className="navInrSearchInput">
              <div className="navSearchIcon">
                {/* Search Icon Goes Here */}
              </div>
              <input
                type="text"
                className="navSearchInput"
                placeholder="Search Sneakers,Designers"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <ul className="menuList">
        <div style={{display:'flex'}}>
          <li className="menuListItem">
            <p className="listItemText">Favorites</p>
          </li>
          <li className="menuListItem">
            <p className="listItemText">Orders</p>
          </li>
          <li className="menuListItem">
            <p className="listItemText">Login</p>
          </li>
        </div>
      </ul>
    </nav>
  </div>
  )
}

export default Header