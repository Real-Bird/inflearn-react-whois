import { Route, Routes } from "react-router-dom";
import Search from "./search/container/Search";
import User from "./user/container/User";
import { useEffect } from "react";
import Login from "./auth/container/Login";
import Signup from "./auth/container/Signup";
import { useDispatch } from "react-redux";
import { actions as authActions } from "./auth/state";

function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    if (loadingEl) {
      bodyEl.removeChild(loadingEl);
    }
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.fetchUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/user/:name" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
