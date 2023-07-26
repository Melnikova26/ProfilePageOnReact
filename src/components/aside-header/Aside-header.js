import st from "./aside-header.module.scss";
function AsideHeader(props) {
  return (
    <div
      className={`w-100 d-flex justify-content-between align-items-center ${st.header}`}
    >
      <div>{props.header}</div>
      <div className={st.icon}>
        <img src="./icons/arrow-up.svg" alt="Arrow" />
      </div>
    </div>
  );
}
export default AsideHeader;
