import React from 'react'
import Header from '../Header/Header';
import LeftSection from '../LeftSection/LeftSection';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
  <>
    <LeftSection/>
    <Header/>

  {/* Page Loader */}
  {/* <div className="page-loader-wrapper">
    <div className="loader"></div>
  </div> */}
  {/* <div id="main_content"> */}
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
    <div id="rightsidebar" className="right_sidebar">
      <a href="#" className="p-3 settingbar float-right">
        <i className="fa fa-close" />
      </a>
      <div className="p-4">
        <div className="mb-4">
          <h6 className="font-14 font-weight-bold text-muted">Font Style</h6>
          <div className="custom-controls-stacked font_setting">
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="font"
                defaultValue="font-opensans"
              />
              <span className="custom-control-label">Open Sans Font</span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="font"
                defaultValue="font-montserrat"
                defaultChecked=""
              />
              <span className="custom-control-label">
                Montserrat Google Font
              </span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="font"
                defaultValue="font-roboto"
              />
              <span className="custom-control-label">Robot Google Font</span>
            </label>
          </div>
        </div>
        <hr />
        <div className="mb-4">
          <h6 className="font-14 font-weight-bold text-muted">
            Dropdown Menu Icon
          </h6>
          <div className="custom-controls-stacked arrow_option">
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="marrow"
                defaultValue="arrow-a"
              />
              <span className="custom-control-label">A</span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="marrow"
                defaultValue="arrow-b"
              />
              <span className="custom-control-label">B</span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="marrow"
                defaultValue="arrow-c"
                defaultChecked=""
              />
              <span className="custom-control-label">C</span>
            </label>
          </div>
          <h6 className="font-14 font-weight-bold mt-4 text-muted">
            SubMenu List Icon
          </h6>
          <div className="custom-controls-stacked list_option">
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="listicon"
                defaultValue="list-a"
                defaultChecked=""
              />
              <span className="custom-control-label">A</span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="listicon"
                defaultValue="list-b"
              />
              <span className="custom-control-label">B</span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                name="listicon"
                defaultValue="list-c"
              />
              <span className="custom-control-label">C</span>
            </label>
          </div>
        </div>
        <hr />
        <div>
          <h6 className="font-14 font-weight-bold mt-4 text-muted">
            General Settings
          </h6>
          <ul className="setting-list list-unstyled mt-1 setting_switch">
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">Night Mode</span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-darkmode"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">
                  Fix Navbar top
                </span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-fixnavbar"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">Header Dark</span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-pageheader"
                  defaultChecked=""
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">
                  Min Sidebar Dark
                </span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-min_sidebar"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">Sidebar Dark</span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-sidebar"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">Icon Color</span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-iconcolor"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">
                  Gradient Color
                </span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-gradient"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">Box Shadow</span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-boxshadow"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">RTL Support</span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-rtl"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
            <li>
              <label className="custom-switch">
                <span className="custom-switch-description">Box Layout</span>
                <input
                  type="checkbox"
                  name="custom-switch-checkbox"
                  className="custom-switch-input btn-boxlayout"
                />
                <span className="custom-switch-indicator" />
              </label>
            </li>
          </ul>
        </div>
        <hr />
        <div className="form-group">
          <label className="d-block">
            Storage <span className="float-right">77%</span>
          </label>
          <div className="progress progress-sm">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={77}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "77%" }}
            />
          </div>
          <button type="button" className="btn btn-primary btn-block mt-3">
            Upgrade Storage
          </button>
        </div>
      </div>
    </div>
    <div className="theme_div">
      <div className="card">
        <div className="card-body">
          <ul className="list-group list-unstyled">
            <li className="list-group-item mb-2">
              <p>Default Theme</p>
              <Link to="/">
                <img
                  src="assets/images/themes/default.png"
                  className="img-fluid"
                />
              </Link>
            </li>
            <li className="list-group-item mb-2">
              <p>Night Mode Theme</p>
              <a href="project-dark/index.html">
                <img
                  src="assets/images/themes/dark.png"
                  className="img-fluid"
                />
              </a>
            </li>
            <li className="list-group-item mb-2">
              <p>RTL Version</p>
              <a href="project-rtl/index.html">
                <img src="assets/images/themes/rtl.png" className="img-fluid" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="user_div">
      <h5 className="brand-name mb-4">
        HHG
        <a href="#" className="user_btn">
          <i className="icon-logout" />
        </a>
      </h5>
      <div className="card-body">
        <a href="page-profile.html">
          <img
            className="card-profile-img"
            src="assets/images/sm/avatar1.jpg"
            alt=""
          />
        </a>
        <h6 className="mb-0">Peter Richards</h6>
        <span>peter.richard@gmail.com</span>
        <div className="d-flex align-items-baseline mt-3">
          <h3 className="mb-0 mr-2">9.8</h3>
          <p className="mb-0">
            <span className="text-success">
              1.6% <i className="fa fa-arrow-up" />
            </span>
          </p>
        </div>
        <div className="progress progress-xs">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "15%" }}
            aria-valuenow={15}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow={20}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "30%" }}
            aria-valuenow={30}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="progress-bar bg-orange"
            role="progressbar"
            style={{ width: "5%" }}
            aria-valuenow={20}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="progress-bar bg-indigo"
            role="progressbar"
            style={{ width: "13%" }}
            aria-valuenow={20}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <h6 className="text-uppercase font-10 mt-1">Performance Score</h6>
        <hr />
        <p>Activity</p>
        <ul className="new_timeline">
          <li>
            <div className="bullet pink" />
            <div className="time">11:00am</div>
            <div className="desc">
              <h3>Attendance</h3>
              <h4>Computer Class</h4>
            </div>
          </li>
          <li>
            <div className="bullet pink" />
            <div className="time">11:30am</div>
            <div className="desc">
              <h3>Added an interest</h3>
              <h4>“Volunteer Activities”</h4>
            </div>
          </li>
          <li>
            <div className="bullet green" />
            <div className="time">12:00pm</div>
            <div className="desc">
              <h3>Developer Team</h3>
              <h4>Hangouts</h4>
              <ul className="list-unstyled team-info margin-0 p-t-5">
                <li>
                  <img src="assets/images/xs/avatar1.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar3.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar4.jpg" alt="Avatar" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="bullet green" />
            <div className="time">2:00pm</div>
            <div className="desc">
              <h3>Responded to need</h3>
              <a href="#">“In-Kind Opportunity”</a>
            </div>
          </li>
          <li>
            <div className="bullet orange" />
            <div className="time">1:30pm</div>
            <div className="desc">
              <h3>Lunch Break</h3>
            </div>
          </li>
          <li>
            <div className="bullet green" />
            <div className="time">2:38pm</div>
            <div className="desc">
              <h3>Finish</h3>
              <h4>Go to Home</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* <div id="left-sidebar" className="sidebar ">
      <h5 className="brand-name">
        HHG{" "}
        <a href="#" className="menu_option float-right">
          <i
            className="fa fa-bars"
            data-toggle="tooltip"
            data-placement="left"
            title="Grid & List Toggle"
          />
        </a>
      </h5>
      <nav id="left-sidebar-nav" className="sidebar-nav">
        <ul className="metismenu">
          <li className="g_heading">Project</li>
          <li className="active">
            <a href="index-2.html">
              <i className="fa fa-dashboard" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="project-list.html">
              <i className="fa fa-list-ol" />
              <span>Project list</span>
            </a>
          </li>
          <li>
            <a href="project-taskboard.html">
              <i className="fa fa-calendar-check-o" />
              <span>Taskboard</span>
            </a>
          </li>
          <li>
            <a href="project-ticket.html">
              <i className="fa fa-list-ul" />
              <span>Ticket List</span>
            </a>
          </li>
          <li>
            <a href="project-ticket-details.html">
              <i className="icon-tag" />
              <span>Ticket Details</span>
            </a>
          </li>
          <li>
            <a href="project-clients.html">
              <i className="fa fa-user" />
              <span>Clients</span>
            </a>
          </li>
          <li>
            <a href="project-todo.html">
              <i className="fa fa-check-square-o" />
              <span>Todo List</span>
            </a>
          </li>
          <li className="g_heading">App</li>
          <li>
            <a href="app-calendar.html">
              <i className="fa fa-calendar" />
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="app-chat.html">
              <i className="fa fa-comments" />
              <span>Chat</span>
            </a>
          </li>
          <li>
            <a href="app-contact.html">
              <i className="fa fa-address-book" />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="app-filemanager.html">
              <i className="fa fa-folder" />
              <span>FileManager</span>
            </a>
          </li>
          <li>
            <a href="app-setting.html">
              <i className="fa fa-gear" />
              <span>Setting</span>
            </a>
          </li>
          <li>
            <a href="page-gallery.html">
              <i className="fa fa-photo" />
              <span>Gallery</span>
            </a>
          </li>
          <li>
            <a href="#" className="has-arrow arrow-c">
              <i className="fa fa-lock" />
              <span>Authentication</span>
            </a>
            <ul>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="register.html">Register</a>
              </li>
              <li>
                <a href="forgot-password.html">Forgot password</a>
              </li>
              <li>
                <a href="404.html">404 error</a>
              </li>
              <li>
                <a href="500.html">500 error</a>
              </li>
            </ul>
          </li>
          <li className="g_heading">Support</li>
          <li>
            <a href="#">
              <i className="fa fa-support" />
              <span>Need Help?</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-tag" />
              <span>ContactUs</span>
            </a>
          </li>
        </ul>
      </nav>
    </div> */}
    <div className="page">
      <div id="page_top" className="section-body top_dark">
        <div className="container-fluid">
          <div className="page-header">
            <div className="left">
              <a href="#" className="icon menu_toggle mr-3">
                <i className="fa  fa-align-left" />
              </a>
              <h1 className="page-title">Dashboard</h1>
            </div>
            <div className="right">
              <div className="input-icon xs-hide mr-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-icon-addon">
                  <i className="fa fa-search" />
                </span>
              </div>
              {/* <div class="notification d-flex">
                      <div class="dropdown d-flex">
                          <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i class="fa fa-language"></i></a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a class="dropdown-item" href="#"><img class="w20 mr-2" src="assets/images/flags/us.svg">English</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><img class="w20 mr-2" src="assets/images/flags/es.svg">Spanish</a>
                              <a class="dropdown-item" href="#"><img class="w20 mr-2" src="assets/images/flags/jp.svg">japanese</a>
                              <a class="dropdown-item" href="#"><img class="w20 mr-2" src="assets/images/flags/bl.svg">France</a>
                          </div>
                      </div>
                      <div class="dropdown d-flex">
                          <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i class="fa fa-envelope"></i><span class="badge badge-success nav-unread"></span></a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <ul class="right_chat list-unstyled w350 p-0">
                                  <li class="online">
                                      <a href="#;" class="media">
                                          <img class="media-object" src="assets/images/xs/avatar4.jpg" alt="">
                                          <div class="media-body">
                                              <span class="name">Donald Gardner</span>
                                              <div class="message">It is a long established fact that a reader</div>
                                              <small>11 mins ago</small>
                                              <span class="badge badge-outline status"></span>
                                          </div>
                                      </a>
                                  </li>
                                  <li class="online">
                                      <a href="#;" class="media">
                                          <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                          <div class="media-body">
                                              <span class="name">Wendy Keen</span>
                                              <div class="message">There are many variations of passages of Lorem Ipsum</div>
                                              <small>18 mins ago</small>
                                              <span class="badge badge-outline status"></span>
                                          </div>
                                      </a>                            
                                  </li>
                                  <li class="offline">
                                      <a href="#;" class="media">
                                          <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                          <div class="media-body">
                                              <span class="name">Matt Rosales</span>
                                              <div class="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                                              <small>27 mins ago</small>
                                              <span class="badge badge-outline status"></span>
                                          </div>
                                      </a>                            
                                  </li>
                                  <li class="online">
                                      <a href="#;" class="media">
                                          <img class="media-object " src="assets/images/xs/avatar3.jpg" alt="">
                                          <div class="media-body">
                                              <span class="name">Phillip Smith</span>
                                              <div class="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                                              <small>33 mins ago</small>
                                              <span class="badge badge-outline status"></span>
                                          </div>
                                      </a>                            
                                  </li>                        
                              </ul>
                              <div class="dropdown-divider"></div>
                              <a href="#" class="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                          </div>
                      </div>
                      <div class="dropdown d-flex">
                          <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i class="fa fa-bell"></i><span class="badge badge-primary nav-unread"></span></a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <ul class="list-unstyled feeds_widget">
                                  <li>
                                      <div class="feeds-left"><i class="fa fa-check"></i></div>
                                      <div class="feeds-body">
                                          <h4 class="title text-danger">Issue Fixed <small class="float-right text-muted">11:05</small></h4>
                                          <small>WE have fix all Design bug with Responsive</small>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="feeds-left"><i class="fa fa-user"></i></div>
                                      <div class="feeds-body">
                                          <h4 class="title">New User <small class="float-right text-muted">10:45</small></h4>
                                          <small>I feel great! Thanks team</small>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="feeds-left"><i class="fa fa-thumbs-o-up"></i></div>
                                      <div class="feeds-body">
                                          <h4 class="title">7 New Feedback <small class="float-right text-muted">Today</small></h4>
                                          <small>It will give a smart finishing to your site</small>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="feeds-left"><i class="fa fa-question-circle"></i></div>
                                      <div class="feeds-body">
                                          <h4 class="title text-warning">Server Warning <small class="float-right text-muted">10:50</small></h4>
                                          <small>Your connection is not private</small>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="feeds-left"><i class="fa fa-shopping-cart"></i></div>
                                      <div class="feeds-body">
                                          <h4 class="title">7 New Orders <small class="float-right text-muted">11:35</small></h4>
                                          <small>You received a new oder from Tina.</small>
                                      </div>
                                  </li>                                   
                              </ul>
                              <div class="dropdown-divider"></div>
                              <a href="#" class="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                          </div>
                      </div>
                      <div class="dropdown d-flex">
                          <a class="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2" data-toggle="dropdown"><i class="fa fa-user"></i></a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                              <a class="dropdown-item" href="page-profile.html"><i class="dropdown-icon fe fe-user"></i> Profile</a>
                              <a class="dropdown-item" href="app-setting.html"><i class="dropdown-icon fe fe-settings"></i> Settings</a>
                              <a class="dropdown-item" href="#"><span class="float-right"><span class="badge badge-primary">6</span></span><i class="dropdown-icon fe fe-mail"></i> Inbox</a>
                              <a class="dropdown-item" href="#"><i class="dropdown-icon fe fe-send"></i> Message</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="dropdown-icon fe fe-help-circle"></i> Need help?</a>
                              <a class="dropdown-item" href="login.html"><i class="dropdown-icon fe fe-log-out"></i> Sign out</a>
                          </div>
                      </div>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="section-body mt-3">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="mb-4">
                <h4>Welcome Peter Richards!</h4>
                <small>
                  Measure How Fast You’re Growing Monthly Recurring Revenue.{" "}
                  <a href="#">Learn More</a>
                </small>
              </div>
            </div>
          </div>
          <div className="row clearfix row-deck">
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Active Task</h3>
                </div>
                <div className="card-body">
                  <h5 className="number mb-0 font-32 counter">31</h5>
                  <span className="font-12">
                    Measure How Fast... <a href="#">More</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Pending Tasks</h3>
                </div>
                <div className="card-body">
                  <h5 className="number mb-0 font-32 counter">245</h5>
                  <span className="font-12">
                    Measure How Fast... <a href="#">More</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Upcoming Events</h3>
                </div>
                <div className="card-body">
                  <h5 className="number mb-0 font-32 counter">17</h5>
                  <span className="font-12">
                    Measure How Fast... <a href="#">More</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">New Message</h3>
                </div>
                <div className="card-body">
                  <h5 className="number mb-0 font-32 counter">12</h5>
                  <span className="font-12">
                    Measure How Fast... <a href="#">More</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Open Requests</h3>
                </div>
                <div className="card-body">
                  <h5 className="number mb-0 font-32 counter">19</h5>
                  <span className="font-12">
                    Measure How Fast... <a href="#">More</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Hours Spent</h3>
                </div>
                <div className="card-body">
                  <h5 className="number mb-0 font-32 counter">284</h5>
                  <span className="font-12">
                    Measure How Fast... <a href="#">More</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix row-deck">
            <div className="col-xl-12 col-lg-12" style={{ display: "none" }}>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Sales Analytics</h3>
                  <div className="card-options">
                    <button
                      className="btn btn-sm btn-outline-secondary mr-1"
                      id="one_month"
                    >
                      1M
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary mr-1"
                      id="six_months"
                    >
                      6M
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary mr-1"
                      id="one_year"
                    >
                      1Y
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary mr-1"
                      id="ytd"
                    >
                      YTD
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      id="all"
                    >
                      ALL
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="apex-timeline-chart" />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Current Projects Status</h3>
                  {/* <div class="card-options">
                              <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                              <a href="#" class="card-options-fullscreen" data-toggle="card-fullscreen"><i class="fe fe-maximize"></i></a>
                              <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                          </div> */}
                </div>
                <div className="card-body">
                  <div className="d-sm-flex justify-content-between">
                    <div className="font-12">
                      as of 10th to 17th of Jun 2019
                    </div>
                    <div className="selectgroup w250">
                      <label className="selectgroup-item">
                        <input
                          type="radio"
                          name="intensity"
                          defaultValue="Day"
                          className="selectgroup-input"
                          defaultChecked=""
                        />
                        <span className="selectgroup-button">1D</span>
                      </label>
                      <label className="selectgroup-item">
                        <input
                          type="radio"
                          name="intensity"
                          defaultValue="Week"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">1W</span>
                      </label>
                      <label className="selectgroup-item">
                        <input
                          type="radio"
                          name="intensity"
                          defaultValue="Month"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">1M</span>
                      </label>
                      <label className="selectgroup-item">
                        <input
                          type="radio"
                          name="intensity"
                          defaultValue="Year"
                          className="selectgroup-input"
                        />
                        <span className="selectgroup-button">1Y</span>
                      </label>
                    </div>
                  </div>
                  <div id="chart-combination" style={{ height: 205 }} />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-6 col-xl-3 col-md-6">
                      <h5>05</h5>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>35%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Yesterday</small>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar bg-gray"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow={42}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="text-uppercase font-10">
                        New Tickets
                      </span>
                    </div>
                    <div className="col-6 col-xl-3 col-md-6">
                      <h5>18</h5>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>61%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Yesterday</small>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar bg-gray"
                          role="progressbar"
                          style={{ width: "61%" }}
                          aria-valuenow={42}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="text-uppercase font-10">
                        Open Tickets
                      </span>
                    </div>
                    <div className="col-6 col-xl-3 col-md-6">
                      <h5>06</h5>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>100%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Yesterday</small>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar bg-gray"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={42}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="text-uppercase font-10">
                        Solved Tickets
                      </span>
                    </div>
                    <div className="col-6 col-xl-3 col-md-6">
                      <h5>11</h5>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>87%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Yesterday</small>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar bg-gray"
                          role="progressbar"
                          style={{ width: "87%" }}
                          aria-valuenow={42}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="text-uppercase font-10">Unresolved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Project Statistics</h3>
                  {/* <div class="card-options">
                              <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fa fa-chevron-up"></i></a>
                              <a href="#" class="card-options-fullscreen" data-toggle="card-fullscreen"><i class="fa fa-maximize"></i></a>
                              <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fa fa-x"></i></a>
                          </div> */}
                </div>
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col-4 border-right pb-4 pt-4">
                      <label className="mb-0 font-13">Total Project</label>
                      <h4 className="font-30 font-weight-bold text-col-blue counter">
                        42
                      </h4>
                    </div>
                    <div className="col-4 border-right pb-4 pt-4">
                      <label className="mb-0 font-13">On Going</label>
                      <h4 className="font-30 font-weight-bold text-col-blue counter">
                        23
                      </h4>
                    </div>
                    <div className="col-4 pb-4 pt-4">
                      <label className="mb-0 font-13">Pending</label>
                      <h4 className="font-30 font-weight-bold text-col-blue counter">
                        8
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-vcenter mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>35%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Design Team</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-azure"
                              role="progressbar"
                              style={{ width: "35%" }}
                              aria-valuenow={42}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>25%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Developer Team
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>15%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Marketing</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-orange"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow={36}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>20%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Management</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-indigo"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>11%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Other</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-pink"
                              role="progressbar"
                              style={{ width: "11%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-body">
        <div className="container-fluid">
          <div className="row clearfix row-deck" style={{ display: "none" }}>
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Transaction History</h3>
                  {/* <div class="card-options">
                              <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                              <div class="item-action dropdown ml-2">
                                  <a href="#" data-toggle="dropdown" aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                                  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-174px, 25px, 0px); top: 0px; left: 0px; will-change: transform;">
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-eye"></i> View Details </a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-share-alt"></i> Share </a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-cloud-download"></i> Download</a>
                                      <div class="dropdown-divider"></div>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-copy"></i> Copy to</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-folder"></i> Move to</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-edit"></i> Rename</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-trash"></i> Delete</a>
                                  </div>
                              </div>
                          </div> */}
                </div>
                <table className="table card-table mt-2">
                  <tbody>
                    <tr>
                      <td className="w60">
                        <img
                          className="avatar"
                          src="assets/images/xs/avatar1.jpg"
                          alt="Avatar"
                        />
                      </td>
                      <td>
                        <p className="mb-0 d-flex justify-content-between">
                          <span>Payment from #2583</span> <strong>$300</strong>
                        </p>
                        <span className="text-muted font-13">Feb 21, 2019</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w60">
                        <img
                          className="avatar"
                          src="assets/images/xs/avatar2.jpg"
                          alt="Avatar"
                        />
                      </td>
                      <td>
                        <p className="mb-0 d-flex justify-content-between">
                          <span>Payment from #1245</span> <strong>$1200</strong>
                        </p>
                        <span className="text-muted font-13">
                          March 14, 2019
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w60">
                        <img
                          className="avatar"
                          src="assets/images/xs/avatar3.jpg"
                          alt="Avatar"
                        />
                      </td>
                      <td>
                        <p className="mb-0 d-flex justify-content-between">
                          <span>Payment from #8596</span> <strong>$780</strong>
                        </p>
                        <span className="text-muted font-13">
                          March 18, 2019
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w60">
                        <img
                          className="avatar"
                          src="assets/images/xs/avatar4.jpg"
                          alt="Avatar"
                        />
                      </td>
                      <td>
                        <p className="mb-0 d-flex justify-content-between">
                          <span>Payment from #1526</span> <strong>$841</strong>
                        </p>
                        <span className="text-muted font-13">
                          April 27, 2019
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w60">
                        <img
                          className="avatar"
                          src="assets/images/xs/avatar5.jpg"
                          alt="Avatar"
                        />
                      </td>
                      <td>
                        <p className="mb-0 d-flex justify-content-between">
                          <span>Payment from #4859</span> <strong>$235</strong>
                        </p>
                        <span className="text-muted font-13">
                          March 18, 2019
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Customer Satisfaction</h3>
                  {/* <div class="card-options">
                              <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                              <div class="item-action dropdown ml-2">
                                  <a href="#" data-toggle="dropdown" aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                                  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-174px, 25px, 0px); top: 0px; left: 0px; will-change: transform;">
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-eye"></i> View Details </a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-share-alt"></i> Share </a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-cloud-download"></i> Download</a>
                                      <div class="dropdown-divider"></div>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-copy"></i> Copy to</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-folder"></i> Move to</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-edit"></i> Rename</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-trash"></i> Delete</a>
                                  </div>
                              </div>
                          </div> */}
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-baseline">
                    <h1 className="mb-0 mr-2">9.8</h1>
                    <p className="mb-0">
                      <span className="text-success">
                        1.6% <i className="fa fa-arrow-up" />
                      </span>
                    </p>
                  </div>
                  <h6 className="text-uppercase font-10">Performance Score</h6>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-orange"
                      role="progressbar"
                      style={{ width: "5%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-indigo"
                      role="progressbar"
                      style={{ width: "13%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-vcenter mb-0">
                    <tbody>
                      <tr>
                        <td className="tx-medium">
                          <i className="fa fa-circle text-blue" /> Excellent
                        </td>
                        <td className="text-right">3,007</td>
                        <td className="text-right">50%</td>
                      </tr>
                      <tr>
                        <td className="tx-medium">
                          <i className="fa fa-circle text-success" /> Very Good
                        </td>
                        <td className="text-right">1,674</td>
                        <td className="text-right">25%</td>
                      </tr>
                      <tr>
                        <td className="tx-medium">
                          <i className="fa fa-circle text-info" /> Good
                        </td>
                        <td className="text-right">125</td>
                        <td className="text-right">6%</td>
                      </tr>
                      <tr>
                        <td className="tx-medium">
                          <i className="fa fa-circle text-orange" /> Fair
                        </td>
                        <td className="text-right">98</td>
                        <td className="text-right">5%</td>
                      </tr>
                      <tr>
                        <td className="tx-medium">
                          <i className="fa fa-circle text-indigo" /> Poor
                        </td>
                        <td className="text-right">512</td>
                        <td className="text-right">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Overall Rating</h3>
                  {/* <div class="card-options">
                              <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                              <div class="item-action dropdown ml-2">
                                  <a href="#" data-toggle="dropdown" aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                                  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-174px, 25px, 0px); top: 0px; left: 0px; will-change: transform;">
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-eye"></i> View Details </a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-share-alt"></i> Share </a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-cloud-download"></i> Download</a>
                                      <div class="dropdown-divider"></div>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-copy"></i> Copy to</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-folder"></i> Move to</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-edit"></i> Rename</a>
                                      <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-trash"></i> Delete</a>
                                  </div>
                              </div>
                          </div> */}
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-baseline">
                    <h2 className="font-28 mr-2">4.2</h2>
                    <div className="font-14">
                      <i className="fa fa-star text-orange" />
                      <i className="fa fa-star text-orange" />
                      <i className="fa fa-star text-orange" />
                      <i className="fa fa-star text-orange" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <p className="mb-0 font-12">
                    Overall the quality or your support team’s efforts Rating.
                  </p>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-vcenter mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <strong>5.0</strong>
                        </td>
                        <td>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </td>
                        <td className="text-right">432</td>
                        <td className="text-right">58%</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>4.0</strong>
                        </td>
                        <td>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </td>
                        <td className="text-right">189</td>
                        <td className="text-right">42%</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>3.0</strong>
                        </td>
                        <td>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </td>
                        <td className="text-right">125</td>
                        <td className="text-right">23%</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>2.0</strong>
                        </td>
                        <td>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </td>
                        <td className="text-right">89</td>
                        <td className="text-right">18%</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>1.0</strong>
                        </td>
                        <td>
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </td>
                        <td className="text-right">18</td>
                        <td className="text-right">11%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Project Summary</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Client Name</th>
                          <th>Team</th>
                          <th>Project</th>
                          <th>Project Cost</th>
                          <th>Payment</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#AD1245</td>
                          <td>Sean Black</td>
                          <td>
                            <ul className="list-unstyled team-info sm margin-0 w150">
                              <li>
                                <img
                                  src="assets/images/xs/avatar1.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar2.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar3.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar4.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li className="ml-2">
                                <span>2+</span>
                              </li>
                            </ul>
                          </td>
                          <td>Angular Admin</td>
                          <td>$14,500</td>
                          <td>Done</td>
                          <td>
                            <span className="tag tag-success">Delivered</span>
                          </td>
                        </tr>
                        <tr>
                          <td>#DF1937</td>
                          <td>Sean Black</td>
                          <td>
                            <ul className="list-unstyled team-info sm margin-0 w150">
                              <li>
                                <img
                                  src="assets/images/xs/avatar1.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar2.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar3.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar4.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li className="ml-2">
                                <span>2+</span>
                              </li>
                            </ul>
                          </td>
                          <td>Angular Admin</td>
                          <td>$14,500</td>
                          <td>Pending</td>
                          <td>
                            <span className="tag tag-success">Delivered</span>
                          </td>
                        </tr>
                        <tr>
                          <td>#YU8585</td>
                          <td>Merri Diamond</td>
                          <td>
                            <ul className="list-unstyled team-info sm margin-0 w150">
                              <li>
                                <img
                                  src="assets/images/xs/avatar1.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar2.jpg"
                                  alt="Avatar"
                                />
                              </li>
                            </ul>
                          </td>
                          <td>One page html Admin</td>
                          <td>$500</td>
                          <td>Done</td>
                          <td>
                            <span className="tag tag-orange">Submit</span>
                          </td>
                        </tr>
                        <tr>
                          <td>#AD1245</td>
                          <td>Sean Black</td>
                          <td>
                            <ul className="list-unstyled team-info sm margin-0 w150">
                              <li>
                                <img
                                  src="assets/images/xs/avatar1.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar2.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar3.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar4.jpg"
                                  alt="Avatar"
                                />
                              </li>
                            </ul>
                          </td>
                          <td>Wordpress One page</td>
                          <td>$1,500</td>
                          <td>Done</td>
                          <td>
                            <span className="tag tag-success">Delivered</span>
                          </td>
                        </tr>
                        <tr>
                          <td>#GH8596</td>
                          <td>Allen Collins</td>
                          <td>
                            <ul className="list-unstyled team-info sm margin-0 w150">
                              <li>
                                <img
                                  src="assets/images/xs/avatar1.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar2.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar3.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="assets/images/xs/avatar4.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li className="ml-2">
                                <span>2+</span>
                              </li>
                            </ul>
                          </td>
                          <td>VueJs Application</td>
                          <td>$9,500</td>
                          <td>Done</td>
                          <td>
                            <span className="tag tag-success">Delivered</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section-body"> */}
        {/* <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <a href="#">Project Managerial</a>
              </div>
              <div className="col-md-6 col-sm-12 text-md-right">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#">Documentation</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer> */}
        
        {/* </div> */}
      </div>
    {/* </div> */}
    <Footer/>
  
</>

  )
}
export default Dashboard;