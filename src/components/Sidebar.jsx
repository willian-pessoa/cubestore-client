import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  PersonOutline,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import userProfile from "assets/userProfile.jpg";
import adminProfile from "assets/adminProfile.jpg";
import superProfile from "assets/superProfile.jpg";

const profileImg = {
  user: userProfile,
  admin: adminProfile,
  superadmin: superProfile,
};

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    role: "user",
  },
  {
    text: "Client Facing",
    icon: null,
    role: "user",
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
    role: "user",
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
    role: "user",
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
    role: "user",
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
    role: "user",
  },
  {
    text: "Sales",
    icon: null,
    role: "user",
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
    role: "user",
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
    role: "user",
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
    role: "user",
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
    role: "user",
  },
  {
    text: "Management",
    icon: null,
    role: "admin",
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
    role: "admin",
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
    role: "admin",
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSideBarOpen,
  setIsSideBarOpen,
  isNonMobile,
  userRole,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSideBarOpen && (
        <Drawer
          open={isSideBarOpen}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              display: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    CUBESTORE
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSideBarOpen((prev) => !prev)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, role }) => {
                if (role === "admin" && userRole === "user") return "";

                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1em 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box bottom="2rem">
            <Divider />
            <FlexBetween
              textTransform="none"
              gap="1rem"
              m="1.5rem 2rem 0.5rem 3rem"
            >
              <Box
                component="img"
                alt="profile"
                src={profileImg[user.role]}
                height="40px"
                widht="40px"
                borderRadius="50%"
                sx={{
                  objectFit: "cover",
                }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <IconButton onClick={() => navigate("/profile")}>
                <PersonOutline
                  sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                />
              </IconButton>
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
