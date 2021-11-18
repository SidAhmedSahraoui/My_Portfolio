import { createUseStyles } from "react-jss";
import colors from "../../styling/color";

const useStyles = createUseStyles({
  root: {
    width: "80%",
    margin: "auto",
    backgroundColor: colors.gray3,
    borderRadius: "12px",
    borderBottom: `3px solid ${colors.gray6}`,
    marginBottom: "3px",
    "& .title": {
      display: "inline-block",
      margin: "5px 15px",
      "& h3": {
        margin: "0px",
      },
    },
    "& .core": {
      margin: "5px 15px",
      textAlign: "center",
      "& p": {
        margin: "0px",
      },
    },
    "@media screen and (min-width: 475px)": {
      width: "40%",
    },
  },
});
export default useStyles;
