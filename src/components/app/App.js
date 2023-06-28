import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../header/Header';
import Main from '../main/Main-content';
import MapPage from '../map/Map-page';
import TimePage from '../time/Time-page';



function App() {
	const [startTime, setStartTime] = useState(null);

	useEffect(() => {
		if (!localStorage.getItem("startTime")) {
			localStorage.setItem("startTime", new Date());
            setStartTime(new Date());
		} else {
			setStartTime(new Date(localStorage.getItem("startTime")));
		}
      
          window.addEventListener('beforeunload', () => localStorage.removeItem('startTime'));
      
          return () => {
            window.removeEventListener('beforeunload', () => localStorage.removeItem('startTime'));
          };
	}, [])
  
	return (
		<Router>
			<div className="container-fluid p-0">
				<Header/>
				<main>
					<Routes>
						<Route exact path="/" element={<Main />} />
						<Route exact path="/map" element={<MapPage />} />
						<Route exact path="/timer" element={<TimePage startTime={startTime}/>} />
					</Routes>
				</main>
			</div>
		</Router>

	);
}


export default App;
