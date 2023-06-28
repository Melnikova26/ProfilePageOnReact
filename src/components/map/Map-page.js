import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, SearchControl } from '@pbe/react-yandex-maps';
import Subheader from '../subheader/Subheader';

import st from './map-page.module.scss';
function MapPage(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    
    return(
        <div className="wrapper">
            <div className={`${st.map} w-100`}>
                <Subheader descr="Basic map"/>
                <div id="map" className="w-100 d-flex justify-content-center align-items-center" style={{height: "480px"}}>
                    {
                        loading ?
                        <div class="spinner-border"></div> 
                        :
                        <YMaps>
                            <Map defaultState = {{ 
                                    center: [55.74610820643666,37.63562416176467], 
                                    zoom: 16,
                                    controls: ["zoomControl", "fullscreenControl"] 
                                }}
                                modules={["control.ZoomControl", "control.FullscreenControl"]}
                                style={{ width: '100%', height: '100%' }}>
                                <SearchControl options={{ float: 'right' }} />
                                <Placemark defaultGeometry={[55.74610820643666,37.63562416176467]} />
                            </Map>
                        </YMaps>

                    }
                </div>
            </div>
        </div>
    )
}
export default MapPage;