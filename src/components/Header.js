import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { GoogleLogout } from 'react-google-login';

const CLIENT_ID = '442672740622-69rg2oook8g6r8u7ebjuc6vd47ugm65q.apps.googleusercontent.com';

function Header() {
  let history = useNavigate();
  let token = localStorage.getItem('token');

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
          {
            token ?
              <GoogleLogout
                buttonText="Logout"
                render={renderProps => (
                  <a href="#" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</a>
                )}
                onLogoutSuccess={(response) => {
                  console.log({ response });
                  localStorage.removeItem("token");
                  history("/", { replace: true })
                }}
                onFailure={(response) => console.log({ response })}
                cookiePolicy={'single_host_origin'}
                clientId={CLIENT_ID}
              />
              :
              <Link to={'/login'}>Login</Link>
          }
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
