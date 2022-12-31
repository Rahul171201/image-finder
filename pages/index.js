import React from 'react';
import styles from '../styles/Home.module.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';

export default function Home() {
  return (
    <MuiThemeProvider>
      <div className='mainBox'>
        <Navbar></Navbar>
        <Search></Search>
      </div>

    </MuiThemeProvider>

  )
}
