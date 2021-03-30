import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            overflowY:'scroll !important',
            paddingRight: '0 !important'
          },
          html: {
            WebkitFontSmoothing: 'auto',
          },
        },
      },
      MuiListItemText:{
          'primary':{
              fontSize:22,
              fontFamily: "system-ui",

          }
      },
      MuiListItemIcon:{
          'root':{
              color:"black",
              '&:hover':{
                  color:"#CE2A2B"
              }
          }
      },

    },
  });

  export default theme;