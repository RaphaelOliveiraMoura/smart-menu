import { createMuiTheme } from '@material-ui/core/styles';

export const primaryColor = '#ffffff';
export const secondaryColor = '#c23520';

export default createMuiTheme({
  palette: {
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
  },
});
