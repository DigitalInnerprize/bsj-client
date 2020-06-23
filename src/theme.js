import { createMuiTheme } from "@material-ui/core/styles"
import { lightBlue, grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: grey[500],
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
})

export default theme
