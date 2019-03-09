import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#6C63FF',
    },
    secondary: {
      main: '#E91E63',
    },
  },
});

export default theme;
