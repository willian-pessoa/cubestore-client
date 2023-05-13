import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/apiQuerys";
import Header from "components/Header";
import CenterBox from "components/CenterBox";

const Profile = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserQuery(userId);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    occupation: "",
    phone: "",
    role: "",
  });
  console.log("🚀 ~ file: index.jsx:11 ~ Profile ~ data:", data);

  useEffect(() => {
    setProfile({
      name: data.name,
      email: data.email,
      city: data.city,
      country: data.country,
      occupation: data.occupation,
      phone: data.phoneNumber,
      role: data.role,
    });
  }, [data]);

  if (isLoading)
    return (
      <CenterBox>
        <CircularProgress />
      </CenterBox>
    );

  return (
    <Box height="85%" width="100%" padding={isNonMobile ? "10px" : "1px"}>
      <Header title="Profile" subtitle="User Infos" />
      <Box
        m="20px auto"
        width={isNonMobile ? "80%" : "95%"}
        height="80%"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        <TableContainer>
          <Table>
            <TableBody>
              {!data
                ? ""
                : Object.entries(profile).map(([key, value], idx) => {
                    return (
                      <TableRow key={idx}>
                        <TableCell sx={{ fontSize: "0.9rem" }}>
                          {key[0].toUpperCase() + key.substring(1)}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.9rem" }}>{value}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Profile;
