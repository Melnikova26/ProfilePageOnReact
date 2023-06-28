import { useState } from "react";
import st from './content-item.module.scss';
function ContentItem(props) {
    const {children, header, time, hasExpand} = props;
    const [isExpand, setIsExpand] = useState(hasExpand);
    const getOpen = () => {
        setIsExpand(!isExpand);
    }
    return(
        <section className={st.article}>
            <div className={`d-flex justify-content-between align-items-center ${st.header}`}>
                <h2 className={`mb-0 ${st.title}`}>{header}</h2>
                <div className={`d-flex align-items-center ${st.info}`}>
                    <div className={`me-2 ${st.icon}`}>
                        <img src="./icons/time.svg" alt="Time"/>
                    </div>
                    <div className={`me-3 mt-1 ${st.time}`}>{time}</div>
                    <div className={st.icon}
                         onClick={getOpen}>
                        <img className={isExpand ? st.rotate : ''} src="./icons/arrow-down.svg" alt="Down"/>
                    </div>
                </div>
            </div>
            <div className={`${st.about} ${isExpand ? st.expand : ''}`}>
                {children}
            </div>
        </section>
    )
}

export default ContentItem;