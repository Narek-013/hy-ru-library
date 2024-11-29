import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import LangDownloader from "../components/LangDownloader/LangDownloader";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/languages" element={<About />} />
          <Route path="/languages/:lang" element={<LangDownloader />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
