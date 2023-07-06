import ContentItem from "../content-item/Content-item";
import Aside from "../aside/Aside";
import st from "./main-content.module.scss";

const MainContent = () => {
  return (
    <div className="row row-nopadding wrapper flex-md-nowrap justify-content-md-between flex-md-row flex-column-reverse">
      <main className={`col-md-8 col-lg-9 flex-shrink-1 ${st.content}`}>
        <ContentItem header="Himalayan sunset" time="49 minutes ago" hasExpand>
          <div className={`mb-3 ${st.img}`}>
            <img className="w-100" src="./img/wallpaper.png" alt="Wallpaper" />
          </div>
          <div className={st.descr}>
            <div className={`d-flex align-items-center ${st.subheader}`}>
              <div className={`me-2 ${st.icon}`}>
                <img src="./icons/comment.svg" alt="comment" />
              </div>
              <div className={st.name}>
                <span>Jason Anderson</span> commented:
              </div>
            </div>

            <div className={`mb-3 ps-2 ${st.comment}`}>
              <div className={`mb-3 ${st.text}`}>
                Don’t sit and wait. Get out there, feel life. Touch the sun, and
                immerse in the sea. Keep love in your heart. A life without it
                is like a sunless garden when the flowers are dead. Because
                summer is passion, memories, light breeze, the sun that appears
                on the skin and caresses the face.
              </div>
              <div className={st.author}>– Jason, 10:30 am</div>
            </div>
            <div className={`d-flex ${st.footer}`}>
              <div className={`d-flex align-items-center ${st.item}`}>
                <div className={`me-2 ${st.icon}`}>
                  <img src="./icons/eyes.svg" alt="Eye" />
                </div>
                <div className={st.view_count}>432</div>
              </div>
              <div className={`d-flex align-items-center ${st.item}`}>
                <div className={`me-2 ${st.icon}`}>
                  <img src="./icons/comment.svg" alt="Comment" />
                </div>
                <div className={st.view_count}>47</div>
              </div>
            </div>
          </div>
        </ContentItem>
        <ContentItem header="Sunset Sunset Sunset" time="53 minutes ago">
          <div className={`mb-3 ${st.img}`}>
            <img className="w-100" src="./img/wallpaper.png" alt="Wallpaper" />
          </div>
          <div className={st.descr}>
            <div className={`d-flex align-items-center ${st.subheader}`}>
              <div className={`me-2 ${st.icon}`}>
                <img src="./icons/comment.svg" alt="comment" />
              </div>
              <div className={st.name}>
                <span>Jason Anderson</span> commented:
              </div>
            </div>

            <div className={`mb-3 ps-2 ${st.comment}`}>
              <div className={`mb-3 ${st.text}`}>
                Don’t sit and wait. Get out there, feel life. Touch the sun, and
                immerse in the sea. Keep love in your heart. A life without it
                is like a sunless garden when the flowers are dead. Because
                summer is passion, memories, light breeze, the sun that appears
                on the skin and caresses the face.
              </div>
              <div className={st.author}>– Jason, 10:30 am</div>
            </div>
            <div className={`d-flex ${st.footer}`}>
              <div className={`d-flex align-items-center ${st.item}`}>
                <div className={`me-2 ${st.icon}`}>
                  <img src="./icons/eyes.svg" alt="Eye" />
                </div>
                <div className={st.view_count}>432</div>
              </div>
              <div className={`d-flex align-items-center ${st.item}`}>
                <div className={`me-2 ${st.icon}`}>
                  <img src="./icons/comment.svg" alt="Comment" />
                </div>
                <div className={st.view_count}>47</div>
              </div>
            </div>
          </div>
        </ContentItem>
        <ContentItem header="Morning of Siberia" time="56 minutes ago">
          <div className={`mb-3 ${st.img}`}>
            <img className="w-100" src="./img/wallpaper.png" alt="Wallpaper" />
          </div>
          <div className={st.descr}>
            <div className={`d-flex align-items-center ${st.subheader}`}>
              <div className={`me-2 ${st.icon}`}>
                <img src="./icons/comment.svg" alt="comment" />
              </div>
              <div className={st.name}>
                <span>Jason Anderson</span> commented:
              </div>
            </div>

            <div className={`mb-3 ps-2 ${st.comment}`}>
              <div className={`mb-3 ${st.text}`}>
                Don’t sit and wait. Get out there, feel life. Touch the sun, and
                immerse in the sea. Keep love in your heart. A life without it
                is like a sunless garden when the flowers are dead. Because
                summer is passion, memories, light breeze, the sun that appears
                on the skin and caresses the face.
              </div>
              <div className={st.author}>– Jason, 10:30 am</div>
            </div>
            <div className={`d-flex ${st.footer}`}>
              <div className={`d-flex align-items-center ${st.item}`}>
                <div className={`me-2 ${st.icon}`}>
                  <img src="./icons/eyes.svg" alt="Eye" />
                </div>
                <div className={st.view_count}>432</div>
              </div>
              <div className={`d-flex align-items-center ${st.item}`}>
                <div className={`me-2 ${st.icon}`}>
                  <img src="./icons/comment.svg" alt="Comment" />
                </div>
                <div className={st.view_count}>47</div>
              </div>
            </div>
          </div>
        </ContentItem>
      </main>
      <Aside />
    </div>
  );
};

export default MainContent;
