import { Route, Routes } from "react-router-dom";
import Search from "./search/container/Search";
import User from "./user/container/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/user/:name" element={<User />} />
    </Routes>
  );
}

export default App;
