// Comments Component Style
import { makeStyles } from '@material-ui/core/styles';

const commentStyles = makeStyles((theme) => ({
    root: {
      width: '50%',
      backgroundColor: theme.palette.background.paper,
      margin: '0 auto'
    },
    fonts: {
      fontWeight: 'bold',
    },
    inline: {
      display: 'inline',
    },
  }));

  export default commentStyles;