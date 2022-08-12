import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Header from "./components/Header";
import Profile from "./profile";
import PasswordReset from "./PasswordReset";


const theme = createTheme()

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="password-reset" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

