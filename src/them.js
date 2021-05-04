import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({

  palette: {
    primary: {
      main: '#393e46',
    },
    secondary: {
      main: '#FF5730',
    },
    error: {
      main: "#fea82f",
    },
    background: {
      default: '#F2DDB2',
    },
  },
});

export default theme;