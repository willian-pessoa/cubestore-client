import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetUserQuery } from 'state/apiQuerys'

import NavBar from "components/Navbar"
import SideBar from "components/Sidebar"

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const userId = useSelector((state) => state.global.userId)
  const userRole = useSelector((state) => state.global.role)
  const { data } = useGetUserQuery(userId)

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        userRole={userRole}
      />
      <Box flexGrow={1}>
        <NavBar
          user={data || {}}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
