import { useState } from "react";
import AsideHeader from "./../aside-header/Aside-header";
import st from "./aside.module.scss";
function Aside() {
  const [message, setMessage] = useState("");
  const getMessage = (event) => {
    setMessage(event.target.value);
  };
  const sendMessage = (event) => {
    event.preventDefault();
    setMessage("");
  };
  return (
    <aside
      className={`col-md-4 col-lg-3 d-flex flex-shrink-lg-1 flex-shrink-md-0 flex-column ${st.profile}`}
    >
      <div
        className={`w-100 d-flex flex-column align-items-center ${st.info} ${st.box}`}
      >
        <div className={`mb-3 ${st.avatar}`}>
          <img
            className="w-100 h-100 rounded-circle"
            src="./img/avatar.png"
            alt="Avatar"
          />
        </div>
        <div className={`text-center ${st.name}`}>Hanna Dorman</div>
        <div className="mb-3 text-center">UX/UI designer</div>
        <div className="d-flex">
          <a href="#no_scroll" className="me-2">
            <div className={st.item}>
              <img src="./icons/telegram.svg" alt="Telegram" />
            </div>
          </a>
          <a href="#no_scroll" className="me-2">
            <div className={st.item}>
              <img src="./icons/hh.svg" alt="hh.ru" />
            </div>
          </a>
          <a href="#no_scroll">
            <div className={st.item}>
              <img src="./icons/twitter.svg" alt="Twitter" />
            </div>
          </a>
        </div>
      </div>

      <div
        className={`w-100 d-flex flex-column align-items-center ${st.navigation} ${st.box}`}
      >
        <AsideHeader header="Navigation" />
        <nav className="w-100">
          <ul className={`nav d-flex flex-column ${st.items}`}>
            <li
              className={`nav-item p-3 pb-0 d-flex align-items-center ${st.elem}`}
            >
              <div className={st.item_icon}>
                <img src="./icons/profile.svg" alt="Profile" />
              </div>
              <a href="#no_scroll" className="nav-link ps-3 p-0 nav-link-color">
                My profile
              </a>
            </li>
            <li
              className={`nav-item p-3 pb-0 d-flex align-items-center justify-content-between ${st.elem}`}
            >
              <div className="d-flex align-items-center">
                <div className={st.item_icon}>
                  <img src="./icons/balance.svg" alt="Balance" />
                </div>
                <a
                  href="#no_scroll"
                  className="nav-link ps-3 p-0 nav-link-color"
                >
                  Balance
                </a>
              </div>
              <div className={st.balance}>$ 1,430</div>
            </li>
            <li
              className={`nav-item p-3 pb-0 d-flex align-items-center justify-content-between ${st.elem}`}
            >
              <div className="d-flex align-items-center">
                <div className={st.item_icon}>
                  <img src="./icons/connections.svg" alt="Connections" />
                </div>
                <a
                  href="#no_scroll"
                  className="nav-link ps-3 p-0 nav-link-color"
                >
                  Connections
                </a>
              </div>
              <div className={`${st.connections} ${st.circle}`}>29</div>
            </li>
            <li className={`nav-item p-3 d-flex align-items-center ${st.elem}`}>
              <div className={st.item_icon}>
                <img src="./icons/friends.svg" alt="Friends" />
              </div>
              <a href="#no_scroll" className="nav-link ps-3 p-0 nav-link-color">
                Friends
              </a>
            </li>
            <li
              className={`nav-item p-3 pb-0 d-flex align-items-center justify-content-between ${st.elem}`}
            >
              <div className="d-flex align-items-center">
                <div className={st.item_icon}>
                  <img src="./icons/event.svg" alt="Events" />
                </div>
                <a
                  href="#no_scroll"
                  className="nav-link ps-3 p-0 nav-link-color"
                >
                  Events
                </a>
              </div>
              <div className={`${st.events} ${st.circle}`}>45</div>
            </li>
            <li className={`nav-item p-3 d-flex align-items-center ${st.elem}`}>
              <div className={st.item_icon}>
                <img src="./icons/settings.svg" alt="Account settings" />
              </div>
              <a href="#no_scroll" className="nav-link ps-3 p-0 nav-link-color">
                Account settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <section className={`w-100 $st.form ${st.box}`}>
        <AsideHeader header="Share your thoughts" />
        <form onSubmit={sendMessage} className="pt-2 p-3 $st.form-item">
          <textarea
            className={`mb-2 form-control ${st.form_message}`}
            required
            aria-label="With textarea"
            placeholder="Enter your message..."
            value={message}
            onChange={getMessage}
          ></textarea>
          <button
            type="submit"
            className={`w-100 border-0 btn btn-primary ${st.form_button}`}
          >
            Save
          </button>
        </form>
      </section>
    </aside>
  );
}

export default Aside;
