import React from 'react'

function Header() {
  return (
    <>
  
  <div id="header_top" className="header_top">
      <div className="container">
        <div className="hleft">
          <a className="header-brand" href="#">
            <img className="img-fluid" src="assets/images/HHGlogo.png" />
            {/* <i class="fa fa-soccer-ball-o brand-logo"></i> */}
          </a>
          <div className="dropdown">
            <a href="#" className="nav-link user_btn">
              <img
                className="avatar"
                src="assets/images/user.png"
                alt=""
                data-toggle="tooltip"
                data-placement="right"
                title="User Menu"
              />
            </a>
            <a href="page-search.html" className="nav-link icon xs-hide">
              <i className="fa fa-search" />
            </a>
            <a
              href="app-calendar.html"
              className="nav-link icon app_inbox xs-hide"
            >
              <i className="fa fa-calendar" />
            </a>
            <a href="app-contact.html" className="nav-link icon xs-hide">
              <i className="fa fa-id-card-o" />
            </a>
            <a href="app-chat.html" className="nav-link icon xs-hide">
              <i className="fa fa-comments-o" />
            </a>
            <a
              href="app-filemanager.html"
              className="nav-link icon app_file xs-hide"
            >
              <i className="fa fa-folder-o" />
            </a>
            <a
              href="#"
              className="nav-link icon theme_btn xs-hide"
            >
              <i
                className="fa fa-paint-brush"
                data-toggle="tooltip"
                data-placement="right"
                title="Themes"
              />
            </a>
          </div>
        </div>
        <div className="hright">
          <div className="dropdown">
            <a href="#" className="nav-link icon settingbar">
              <i
                className="fa fa-gear fa-spin"
                data-toggle="tooltip"
                data-placement="right"
                title="Settings"
              />
            </a>
            <a href="#" className="nav-link icon menu_toggle">
              <i className="fa  fa-align-left" />
            </a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Header