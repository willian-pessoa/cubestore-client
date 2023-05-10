import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";

import ProtectedRoute from "components/ProtectedRoute";

import Login from "scenes/login"
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard"
import Products from "scenes/products"
import Customers from "scenes/customers"
import Transactions from "scenes/transactions"
import Geography from "scenes/geography"
import Overview from "scenes/overview"
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown"
import Admin from "scenes/admin"
import Performance from "scenes/performance";

function App() {
  const mode = useSelector((state) => state.global.mode)
  const isLoged = useSelector((state) => state.global.isLoged)
  const userRole = useSelector((state) => state.global.role)

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute isLoged={isLoged} role={["user"]} userRole={userRole}> <Layout /> </ProtectedRoute>}>
              <Route path="/" element={<Navigate to={isLoged ? "/dashboard" : "/login"} replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<ProtectedRoute isLoged={isLoged} role={["admin", "superadmin"]} userRole={userRole} redirectPath={"/dashboard"}><Admin /></ProtectedRoute>} />
              <Route path="/performance" element={<ProtectedRoute isLoged={isLoged} role={["admin", "superadmin"]} userRole={userRole} redirectPath={"/dashboard"}><Performance /></ProtectedRoute>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
