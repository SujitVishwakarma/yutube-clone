import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar';
import profile_logo from '../utils/profile_logo.png'
const Navbar = () => (
  <Stack 
    direction="row"
    alignItems="center"
    px={2}
    sx={{position:'sticky', backgroundColor:'#000',top:0, justifyContent:'space-between'}}>
    <Link to="/" style={{display:'flex',alignItems:'center'}}>
        <img src={profile_logo} alt='logo' height={45} />
        <span style={{ display: 'flex', color: '#FFF', fontWeight: 'bold', fontSize: '20px', marginLeft:'10px', alignItems: 'center', justifyContent:'center', marginTop:'10px'}}>SV Media</span>
    </Link>
    <Searchbar/>

  </Stack>
);


export default Navbar
