import { Routes, Route } from "react-router-dom";
import { Register, RegisterCreateAccount } from "./pages/register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="sign_up" element={<Register />}></Route>
          <Route
            path="create_account"
            element={<RegisterCreateAccount />}></Route>
          {/* <Route path="user" element={<UserPage />} />
          <Route path="course" element={<CoursePage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
