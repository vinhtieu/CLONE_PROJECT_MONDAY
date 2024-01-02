import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="sign_up" element={<SignUp />}></Route>
          {/* <Route path="user" element={<UserPage />} />
          <Route path="course" element={<CoursePage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
