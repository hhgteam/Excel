import React from 'react'
import { Link } from "react-router-dom";
function LeftSection() {
  return (
    <>





    <div id="left-sidebar" className="sidebar ">
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
            <Link to="/">
              <i className="fa fa-dashboard" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/Project">
              <i className="fa fa-list-ol" />
              <span>Project list</span>
            </Link>
          </li>
          <li>
            <a href="project-taskboard.html">
              <i className="fa fa-calendar-check-o" />
              <span>Taskboard</span>
            </a>
          </li>
          <li>
            <Link to="/Ticket-List">
              <i className="fa fa-list-ul" />
              <span>Ticket List</span>
            </Link>
          </li>
          <li>
            <a href="project-ticket-details.html">
              <i className="icon-tag" />
              <span>Ticket Details</span>
            </a>
          </li>
          <li>
            <Link to="/Client">
              <i className="fa fa-user" />
              <span>BusinessUnit</span>
            </Link>
          </li>
          <li>
            <Link to="/FunctionalGroup">
              <i className="fa fa-user" />
              <span>FunctionalGroup</span>
            </Link>
          </li>
          <li>
            <Link to="/Project">
              <i className="fa fa-user" />
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link to="/RecourceDetail">
              <i className="fa fa-user" />
              <span>RecourceDetail</span>
            </Link>
          </li>
          <li>
            <Link to="/ProjectRecourceDetail">
              <i className="fa fa-user" />
              <span>ProjectReso...Detail</span>
            </Link>
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
                <Link to='/Login'>Login</Link>
              </li>
              <li>
                <Link to='/Register'>Register</Link>
              </li>
              <li>
              <Link to='/Forgot-Password'>Forgot password</Link>
              </li>
              <li>
                <Link to='/Error404'>404 error</Link>
              </li>
              <li>
                <Link to='/Error500'>500 error</Link>
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
    </div>
    </>
  )
}

export default LeftSection