import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Game from "./pages/Game";

export default function RouterComponent() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</BrowserRouter>
	);
}