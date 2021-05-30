
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    grid :{
            direction:'row',
            justify:'center',
            alignItems:'stretch'
      },
      title:{
        fontFamily:'fantasy',
        alignItems:'center'
      },

      cardGrid: {
        padding: '20px 0',
    },

      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft:'20px',
        paddingTop: '20px',
        paddingBottom: '20px'
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
       },
    container: {
        height: '250px',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: '50px',
     },
     cardContent: {
        flexGrow: 1,
    },
    }))



export default useStyles;