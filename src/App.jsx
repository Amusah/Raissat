import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./Pages/Home";
import About from "./Pages/About";
import WhatWeDo from "./Pages/WhatWeDo";
import Media from "./Pages/Media";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="media" element={<Media />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
