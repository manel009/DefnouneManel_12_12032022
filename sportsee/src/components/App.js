import HeaderNav from "./header-nav/HeaderNav";
import {Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import Error404 from "./error404/Error404";
import Sidebar from "./sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Sidebar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<Error404 />} />
    </Routes>
    </div>
  );
}

export default App;
