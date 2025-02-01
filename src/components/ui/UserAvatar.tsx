import React, { useContext, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function UserAvatar() {
  const [cookies , setCookies , removeCookie] = useCookies();
  const navigate = useNavigate()

  const handleLogOut = async ()=>{
    try {
      await axios.post(`${import.meta.env.VITE_AWS_SUBTRACK}/api/v1/auth/logout`, {userId:cookies?.userData?.id})
      removeCookie("userData")
      removeCookie("token", { path: "/" });
      navigate("/")
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  return (
    <Navbar className="dark:bg-gray-950">
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end" className="dark">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              color="primary"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 text-white">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{cookies?.userData?.email}</p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback" className="text-white">
              Help & Feedback
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              className="text-white"
              onClick={handleLogOut}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}