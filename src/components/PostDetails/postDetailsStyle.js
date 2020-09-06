// Styles for Post details with Material UI
import { makeStyles } from '@material-ui/core/styles';
const postDetailsStyle = makeStyles((theme) => ({
    clickedPost: {
      width: '50%',
      margin: '0 auto',
      marginBottom: theme.spacing(4),
    },
    
    upperCase:{
      textTransform: 'Uppercase'
    },
    clickedPostContent: {
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        paddingRight: 0,
      },
    },
    spacing: {
      marginLeft: '10px',
    },
  }));

  export default postDetailsStyle;