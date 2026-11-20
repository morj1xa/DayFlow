import { useState, useEffect } from "react";
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import BottomNavBar from "./Components/BottomNavBar/BottomNavBar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import Tasks from "./pages/Habits/Habits";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import TaskCreate from "./pages/TasksCreate/TasksCreate";
import "./App.css";

// function App() {
//   useEffect(() => {
//     const tg = window.Telegram?.WebApp;

//     tg?.ready();
//     tg?.expand();
//   }, []);
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <BottomNavBar />
//       <h1>HELLO</h1>
//       <AddTaskForm />
//     </div>
//   );
// }

// export default App;

function Layout() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/TaskCreate" element={<TaskCreate />} />
          <Route path="/habits" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <BottomNavBar />
    </>
  );
}

export default function App() {
  return <Layout />;
}
