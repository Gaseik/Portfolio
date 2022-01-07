const color = {
    facebook:'#3C5995',
    line:'#00B900',
    google:'#DD4B3C',
    instagram:"#CA2693",
    primary:"#FFD481",
    primaryDark:'#794242',
    second:'#74BDCB',
    grey:'#D0D6DC',
    greyLight:'rgba(246,246,246)',
    greyDark:'#9fa5aa',
      hannlync:"#0090FD",
      hannlyncLight:"#0090FD",
    success:'#5BBA47',
    dangerous:'#EB6964',
    info:'#95C6C6',
    border:'#ced4da',
    pink:'#F1AAE3',
    partners:'#95D8C6'
}
export const breakpoints = {
  xs: "@media (max-width: 450px)",
  sm: "@media (max-width: 600px)",
  md: "@media (max-width:1025px)",
};
const  btn = {
  height:45,
  borderRadius:10,
  margin:10,
  // fontFamily:' Noto Sans SC,Helvetica',
  padding:'0 1.5rem',
  display:'flex',
  alignItems:'center',
  color:color.primaryDark,
  cursor:'pointer',
  border: '3px solid '+color.primaryDark,

  "&:hover":{
    opacity:.8,
    color:color.primary,
    border: '3px solid '+color.primary,
    transition:'all .2s ease-in-out',
}
}
export const style = {
    container: {
        // padding: '1rem',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
    },
    modal:{
        width:'30%',
        height:'70vh',
        background:'white',
        borderRadius:'10px',
        padding:'1rem 50px',
        // display:'center',
        boxShadow:'4px 4px 10px rgba(0,0,0,0.6)'
    },
    btn:{
       ...btn
    },
    form:{
        width:'100%',
        // border:'1px solid #dadada',
        // background:'blue',
        // height:'80%',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        margin:'2rem 0 0rem',
        sub: {
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            color: "rgba(0,0,0,0.8)",
            margin: "1rem 0",
          },
          keep: {
            // fontSize:8,
            display: "flex",
            alignItems: "center",
            "& input": {
              // width:200,
              borderColor: "blue",
              backgroundColor: "#444",
              "&[type=checkbox]:checked": {
                color: "yellow",
                backgroundColor: "#444",
              },
            },
          },
          forget: {
            cursor: "pointer",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
          },

    },
    input:{
        width:'45%',
        // height:'50px',
        margin:'.5rem'
    },
    facebook: {
      ...btn,
      backgroundColor: color.facebook,
    },
    line: {
      ...btn,
      backgroundColor: color.line,
    },
    google: {
      ...btn,
      backgroundColor: color.google,
    },
  
}

export default color