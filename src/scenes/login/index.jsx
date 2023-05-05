import React, { useState } from "react";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Input,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";
import CenterBox from "components/CenterBox";
import Header from "components/Header";

const Login = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <CenterBox width="100%" height="100%">
      <Box
        p="10px 20px"
        width={isNonMobile ? "400px" : "90%"}
        height="350px"
        bgcolor={theme.palette.background.alt}
        borderRadius="10px"
      >
        <Header title="LOGIN" subtitle="Login to access the dashboard" />
        <FlexBetween
          flexDirection="column"
          mt="2rem"
          gap="2rem"
          sx={{ alignItems: "flex-start !important" }}
        >
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input
              id="standard-adornment-email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle email">
                    <Email />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              alignSelf: "center",
              marginTop: "10px",
              textTransform: "none",
              ":hover": {
                bgcolor: theme.palette.primary[400],
                color: theme.palette.secondary.light,
              },
            }}
          >
            Login
          </Button>
        </FlexBetween>
      </Box>
    </CenterBox>
  );
};

export default Login;
