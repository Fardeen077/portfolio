import { HashRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home";
import About from "./pages/About";
import Lab from "./pages/Lab";
import Avatar from "./components/Avatar";


export default function App() {

  return (
    <div className="">
      <HashRouter>
        <nav>
          <Header />
        </nav>
        {/* Rootes  */}
        <Routes>
          <Route path="avatar" element={<Avatar/>}/>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="lab" element={<Lab/>}/>
        </Routes>
        {/* footer  */}
      </HashRouter>
    </div>
  );
};

