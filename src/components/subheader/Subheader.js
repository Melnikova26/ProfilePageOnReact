function Subheader(props){
    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <div>{props.descr}</div>
            <div className="d-flex align-items-center">
                <div className="me-2 btn p-0">
                    <img src="./icons/arrow-down.svg" alt="Arrow"/>
                </div>
                <div className="me-2 btn p-0">
                    <img src="./icons/update.svg" alt="Update"/>
                </div>
                <div className="btn p-0">
                    <img src="./icons/close.svg" alt="Close"/>
                </div>
            </div>
        </div>
    )
}
export default Subheader;