import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Game from "./pages/Game";
import EndGame from "./pages/EndGame";

export default function RouterComponent() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/game" element={<Game />} />
				<Route path="/end" element={<EndGame />} />
			</Routes>
		</BrowserRouter>
	);
}