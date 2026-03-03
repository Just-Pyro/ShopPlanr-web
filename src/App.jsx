import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import List from "./pages/List";
import Create from "./pages/Create";
import ShopPlan from "./pages/ShopPlan";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <div className="h-dvh w-dvw background">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/shopplan" element={<ShopPlan />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
