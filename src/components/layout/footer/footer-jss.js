import { createUseStyles } from "react-jss";
import colors from "../../styling/color";
const useStyles = createUseStyles({
  root: {
    textAlign: "center",
    fontWeight: 600,
    color: colors.gray7,

    "& a": {
      fontWeight: 600,
      color: colors.gray7,

      "&:hover": {
        color: colors.gray9,
      },
    },
  },
});

export default useStyles;
