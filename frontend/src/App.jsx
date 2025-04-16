import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Sidebar from './components/Sidebar';
import Users from "./components/Users";
import Status from "./components/Status";
import Concerns from "./components/Concerns";
import Recommendation from "./components/Recommendation";
import Home from "./components/Home";
import DistrictPage from "./components/DistrictPage";
import RegionPage from "./components/RegionPage";
import SchoolPage from "./components/SchoolPage";
import Product from "./components/Product";
import Infrastructure from "./components/Infrastructure";
import Hardware from "./components/Hardware";
import Products from "./components/Products";
import Adduser from "./components/Adduser";
import Logout from "./components/Logout";
import Setting from "./components/Setting";
import Signup from "./components/Signup";
import { LinearProgress } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 25 : 100));
    }, 20);

    const timeout = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1200 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 2,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "blueviolet",
              },
            }}
          />
        </div>
      )}

      <Routes>
        {/* Public routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected layout and routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex flex-col flex-1 min-w-0">
                  <Navbar />
                  <div className="h-screen overflow-y-scroll custom-scrollbar p-5 box-border">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/users/adduser" element={<Adduser />} />
                      <Route path="/status" element={<Status />} />
                      <Route path="/concerns" element={<Concerns />} />
                      <Route path="/recommendation" element={<Recommendation />} />
                      <Route path="/setting" element={<Setting />} />
                      <Route path="/logout" element={<Logout />} />
                      <Route path="/status/districts/:districtName" element={<DistrictPage />} />
                      <Route path="/status/districts/:districtName/:region" element={<RegionPage />} />
                      <Route path="/status/districts/:districtName/:region/:school" element={<SchoolPage />} />
                      <Route path="/status/districts/:districtName/:region/:school/:category/" element={<Infrastructure />} />
                      <Route path="/status/districts/:districtName/:region/:school/:category/:type" element={<Hardware />} />
                      <Route path="/status/districts/:districtName/:region/:school/:category/:type/:products" element={<Products />} />
                      <Route path="/status/districts/:districtName/:region/:school/:category/:type/:products/:product" element={<Product />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Snackbar */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        open={openSnackbar}
        onClose={handleSnackbarClose}
        message={<span>{snackbarMessage}&nbsp;&nbsp;✅</span>}
        ContentProps={{
          style: {
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#00D26A",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 210, 106, 0.5)",
            border: "none",
          },
        }}
      />
    </>
  );
};

export default App;
