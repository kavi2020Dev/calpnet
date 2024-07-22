import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import SuperIcon from "./svg list/superadminsvg";
import ProjectIcon from "./svg list/projectsvg";
import RequestIcon from "./svg list/requestsvg";
import PulicIcon from "./svg list/pulicsvg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ drawerWidth }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isResponsive = useMediaQuery(theme.breakpoints.down('768'))  
  const [isActive, setIsActive] = useState(0);

  const navBarData = [
    { name: "Super Admin", icon: SuperIcon, path:'/superadmin'},
    { name: "Projects", icon: ProjectIcon, path:'/project'},
    { name: "Requests", icon: RequestIcon, path:'/request'},
    { name: "Public User", icon: PulicIcon, path:'/publicuser'},
    { name: "Project Count", icon: PulicIcon , path:'/projectcount'},
  ];

  const onNavigate = (index, path) => {
   const count = index + 1; 
   setIsActive(count)
   navigate(path) 
   localStorage.setItem('isActive', count)
  }

  useLayoutEffect(() =>{
   const active = localStorage.getItem('isActive')
   if(active){
    setIsActive(Number(active))
   }
  },[])

  console.log(isResponsive)

  return (
    <div
      style={{
        width: `${drawerWidth}px`,
        height: `calc(100vh - 32px)`,
        backgroundColor: theme?.palette?.grey[400],
        paddingBlock: isResponsive ?'3px' :"6px",
        paddingInline:isResponsive ? '6px' : "15px",
        borderRadius: "6px",
      }}
    >
      <Typography variant='h2' my={1}>
       {isResponsive ? "L" : "LOGO."}
      </Typography>
      <Divider className='my-1' />
      <List>
       {navBarData?.map((item, idx) => {
        const IconComponet = item?.icon
        return (
          <ListItem key={idx} disablePadding  sx={{p:"4px", alignItems: "center", px: "8px", cursor: "pointer", borderRadius: "6px",
            "&:hover": {
              backgroundColor: theme?.palette?.grey[300],
            },
          }}
          onClick={() => onNavigate(idx, item?.path)}
        >
          <div className='items-center flex p-1'>
              <IconComponet color={isActive == idx+1 ? theme?.palette?.secondary?.dark : theme?.palette?.grey[500]}/>
             {isResponsive ? null : <Typography
                color={isActive == idx+1 ? theme?.palette?.secondary?.dark : theme?.palette?.grey[500]}
                fontWeight={500}
                ml={1}
                variant='h6'
              >
                {item?.name}
              </Typography>}
            </div>
          </ListItem>
         )
       })}

      </List>
    </div>
  );
};

export default Navbar;
