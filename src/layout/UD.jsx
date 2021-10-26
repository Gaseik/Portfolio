import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { withRouter } from "react-router";
import Image from '../img/home.png'

export const useStyles = makeStyles((theme) => ({
  container:{
      width:'100vw',
      height:'100vh',
      display:'flex',
    //   overflow:'hidden',
      flexDirection:'column',
      alignContent:'center',
      justifyContent:'center',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      top:0,
    position: "fixed",
    //   height: "calc(100vh - 180px)",
      backgroundImage: `url(${Image})`,
      color:'#fff'
  },
  title: {
    fontSize: '100px',
    marginBottom: '20px'
  },
  subtitle: {
      fontSize: '24px'
  }
  }));
  

function Home () {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Site Under Construction
            </div>
            <div className={classes.subtitle}>
                Our team is currently working on this website. Please visit us again later.
            </div>
            
        </div>
    )
}

export default Home