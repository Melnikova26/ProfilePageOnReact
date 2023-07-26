import { Link, NavLink } from "react-router-dom";
import st from "./header.module.scss";
const Header = () => {
  return (
    <header>
      <div
        className={`row row-nopadding d-flex justify-content-between align-items-center ${st.top}`}
      >
        <Link
          to="/"
          className="col-sm-5 text-sm-start text-center col-12 nav-link"
        >
          <div className="d-flex align-items-center">
            <div className={`me-2 ${st.back_img}`}>
              <img src="./icons/back.svg" alt="Back" />
            </div>
            <div className={`${st.logo}`}>
              <span className="fw-medium">User pages</span> - Profile
            </div>
          </div>
        </Link>

        <nav className="col-sm-7 col-12">
          <ul className="nav justify-content-sm-end justify-content-center">
            <li className={`nav-item ${st.item}`}>
              <a
                href="#no_scroll"
                className="nav-link d-flex flex-column align-items-center nav-link-color"
              >
                <div className={st.img}>
                  <img src="./icons/statistics.svg" alt="Statistics" />
                </div>
                <div>Statistics</div>
              </a>
            </li>

            <li className={`nav-item ${st.item}`}>
              <a
                href="#no_scroll"
                className="nav-link d-flex flex-column align-items-center nav-link-color"
              >
                <div className={st.img}>
                  <img src="./icons/invoices.svg" alt="Invoices" />
                </div>
                <div>Invoices</div>
              </a>
            </li>

            <li className={`nav-item ${st.item}`}>
              <a
                href="#no_scroll"
                className="nav-link d-flex flex-column align-items-center nav-link-color"
              >
                <div className={st.img}>
                  <img src="./icons/schedule.svg" alt="Schedule" />
                </div>
                <div>Schedule</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={st.bottom}>
        <nav
          className={`row row-nopadding d-flex justify-content-between ${st.nav}`}
        >
          <div className="col-sm-6 header__nav-left">
            <ul className="nav justify-content-sm-start justify-content-center">
              <li className={`nav-item ${st.nav_item}`}>
                <NavLink
                  end
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#F1F1F1" : "inherit",
                  })}
                  to="/"
                  className={`nav-link px-3 w-100 h-100 py-0 px-3 nav-link-color nav-link-hover ${st.nav_link} ${st.nav_activity}`}
                >
                  <span>Activity</span>
                </NavLink>
              </li>

              <li className={`nav-item ${st.nav_item}`}>
                <NavLink
                  end
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#F1F1F1" : "inherit",
                  })}
                  to="/map"
                  className={`nav-link w-100 h-100 py-0 px-3 nav-link-color nav-link-hover ${st.nav_link} ${st.nav_map}`}
                >
                  <span>Map</span>
                </NavLink>
              </li>

              <li className={`nav-item ${st.nav_item}`}>
                <NavLink
                  end
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#F1F1F1" : "inherit",
                  })}
                  to="/timer"
                  className={`nav-link w-100 h-100 py-0 px-3 nav-link-color nav-link-hover ${st.nav_link} ${st.nav_time}`}
                >
                  <span>Time</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={`col-sm-6 ${st.nav_right}`}>
            <ul className="nav justify-content-sm-end justify-content-center">
              <li className={`nav-item ${st.nav_item}`}>
                <a
                  className={`nav-link w-100 h-100 py-0 px-3 nav-link-color nav-link-hover ${st.nav_link} ${st.nav_notes}`}
                  href="#no_scroll"
                >
                  <span>Notes</span>
                </a>
              </li>

              <li className={`nav-item ${st.nav_item}`}>
                <a
                  className={`nav-link w-100 h-100 py-0 px-3 nav-link-color nav-link-hover ${st.nav_link} ${st.nav_friends}`}
                  href="#no_scroll"
                >
                  <span>Friends</span>
                </a>
              </li>

              <li className={`nav-item ${st.nav_item}`}>
                <a
                  className={`nav-link w-100 h-100 py-0 px-3 nav-link-color nav-link-hover ${st.nav_link} ${st.nav_photos}`}
                  href="#no_scroll"
                >
                  <span>Photos</span>
                </a>
              </li>

              <li className={`py-0 px-2 nav-item ${st.nav_item}`}>
                <a
                  className={`nav-link w-100 h-100 py-0 px-3 nav-link-color nav-link-hover ${st.nav_link} ${st.nav_settings}`}
                  href="#no_scroll"
                >
                  &nbsp;
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
