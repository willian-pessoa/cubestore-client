import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  CircularProgress,
  Typography,
} from "@mui/material";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";
import CenterBox from "components/CenterBox";
import Header from "components/Header";

// REDUX
import { useDispatch } from "react-redux";
import { setUserId, setLogin, setToken, setRole } from "state";
import { usePostLoginMutation } from "state/apiMutations";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postLogin, { isLoading, data, isError }] = usePostLoginMutation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    await postLogin({ email, password });
  };

  useEffect(() => {
    if (data) {
      dispatch(setLogin());
      dispatch(setUserId(data.user._id));
      dispatch(setRole(data.user.role));
      data.token && dispatch(setToken(data.token));
      navigate("/dashboard");
    }
  }, [data, dispatch, navigate]);

  if (isLoading)
    return (
      <CenterBox>
        <CircularProgress />
      </CenterBox>
    );

  return (
    <CenterBox width="100%" height="100%">
      <Box
        p="10px 20px"
        width={isNonMobile ? "400px" : "90%"}
        height="420px"
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
          <FormControl
            error={isError}
            variant="standard"
            sx={{ width: "100%" }}
          >
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input
              id="standard-adornment-email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle email">
                    <Email style={{ color: isError ? "red" : "white" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            error={isError}
            variant="standard"
            sx={{ width: "100%" }}
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOff
                        style={{ color: isError ? "red" : "white" }}
                      />
                    ) : (
                      <Visibility
                        style={{ color: isError ? "red" : "white" }}
                      />
                    )}
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
            onClick={() => handleLogin()}
          >
            Login
          </Button>
          <Box>
            <Typography fontSize="0.75rem">
              Email: user@user.com / Password: user
            </Typography>
            <Typography fontSize="0.75rem">
              Email: admin@admin.com / Password: admin
            </Typography>
            <Typography fontSize="0.75rem">
              Email: superadmin@superadmin.com / Password: superadmin
            </Typography>
          </Box>
        </FlexBetween>
      </Box>
    </CenterBox>
  );
};

export default Login;
