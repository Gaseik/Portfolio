import { makeStyles } from '@material-ui/core/styles';

export const color= {
    primary:'#3A5D7B',
    pLight:'#688aaa',
    second:'#D8DFE6'
}
const titleCard =  {
    margin: '.5rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderTop:'10px solid '+ color.primary,
    borderRadius: '10px',
    width: '90%',
    background:'#fafafa'
  }

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background:color.second ,
        // height: '100',
        // width:'100vw'
    }, 
    main :{
        padding: '2rem 0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        maxWidth:'600px',
        minHeight:'100vh',
        width:'100%'
        // height:'100%'
    },
    description:{
        // lineHeight: 1.5,
        fontSize: '14px',
    },
    subtitle:{
        color:'rgba(0,0,0,0.5)',
        fontSize: '18px',
    },
    reddescription:{
        color:'red',
        // lineHeight: 1.5,
        fontSize: '14px',
    },
    Mcanvasd:{
        // margin:'auto',
        fontSize:'1.8rem',
        color:"rgba(0,0,0,.8)",
        width:"100%",
        fontFamily:"Robot",
        height:'50px',
        display:'none',
        maxWidth:'500px',
        opacity:'.5',
        // padding:'auto',
        flexDirection:'column',
        justifyContent:'center',
        letterSpacing:'2px',
        display:'flex',
        alignItems:'enter',
        textAlign:'center',
        // border:'1px solid rgba(0,0,0,0.3)',
        // top:-34,
        zIndex:1,
        position:'relative'
    },
   
    canvasd:{
        // margin:'auto',
        fontSize:'1.8rem',
        color:"rgba(0,0,0,.8)",
        width:"100%",
        fontFamily:"Robot",
        height:'80px',
        display:'none',
        maxWidth:'500px',
        opacity:'.5',
        // padding:'auto',
        flexDirection:'column',
        justifyContent:'center',
        letterSpacing:'2px',
        display:'flex',
        alignItems:'enter',
        textAlign:'center',
        // border:'1px solid rgba(0,0,0,0.3)',
        // top:-34,
        zIndex:1,
        position:'relative'
    },
    canvasDone:{
        margin:'auto',
        fontSize:'1.8rem',
        color:"rgba(0,0,0,.6)",
        width:"500px",
        fontFamily:"Robot",
        height:'80px',
        display:'none',
        // padding:'auto',
        flexDirection:'column',
        justifyContent:'center',
        letterSpacing:'2px',
        alignItems:'enter',
        textAlign:'center',
    },
    default:{
        marginTop:'1rem '
    },
    grid:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '800px',
        marginTop: '1rem',
      },
      card: {
        margin: '.5rem',
        padding: '1.5rem',
        textAlign: 'left',
        color: 'inherit',
        textDecoration: 'none',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        width: '90%',
        background:'#fafafa',
        "& h2":{
            margin:'0 0 .2rem 0',
            fontSize: '16px',
            fontWeight: 'normal',
            display:'flex'
        },
        "& p":{
            margin:'0 0 1rem',
            fontSize:'14px',

        }
      },
    titlecard: titleCard,
    ResultCard:{
        ...titleCard,
        textAlign:'center',
        padding:'0.5rem 1.5rem 1.5rem 1.5rem'
    },
    SMCard:{
        ...titleCard,
        background:color.primary,
        textAlign:'center',
        padding:'0.5rem 1.5rem 1.5rem 1.5rem',
        color:'#ffffff'
    },
    icons:{
        margin:'2rem 0',
        width:'100%',
        // maxWidth:'500px',
        display:'flex',
        justifyContent:'space-evenly'
    },
    title :{
        margin: '1rem 0',
        lineHeight: 1.15,
        fontWeight: 'bold',
        // textAlign: 'center',
        fontSize: '32px',
    }, 
    input : {
        fontSize: '14px'
    },
    RadioLabel:{
        fontSize:'14px'
    },
    Radio:{
        display:'flex',
        width:'100%',
        cursor:'pointer',
        flexWrap:'wrap'
    },
    RadioBox:{
        margin:'1rem 0'
    },
    RadioName:{
        alignItems:'center',
        margin:'.6rem 0 0 0.4rem',
        fontSize:'.8rem',
        width:'130px'
    },
    btnBox:{
        width:'100%',
        margin:'1rem 1.5rem'
    },
    confirmBox:{
        width:'100%',
        margin:'0rem 1rem 1rem'
    },
    displayNone:{
        display:'none'
    },
    download:{
        width:'100%',
        // background:'green',
        display:'flex',
        justifyContent:'center'
    },
    errorMes:{
        color: '#f44336',
        margin:'.5rem',
        
    },
    errorMes1:{
        color: '#f44336',
        margin:'10px 0 0 .5rem',
        fontSize:'.8rem',
        width:'170px'
    },
    star:{
        margin:'0 0 0px 5px',
        color:'red',
        fontSize:"24px",
        height:'18px'
    },
    ac:{
        boxShadow:'none',
        background:'#fafafa',
       
       
    },
    acTitle:{
        padding:'0   !important',
        fontWeight:'bold',
       
    },
    acContent:{
        padding:'8px  0px  !important',
        fontWeight:'bold',
        height:150,
        overflow:'auto',
        margin:'1rem 0'
    }

    
}));
