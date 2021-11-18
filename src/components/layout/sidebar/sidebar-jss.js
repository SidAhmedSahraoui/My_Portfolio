import { createUseStyles } from "react-jss";
import colors from "../../styling/color";
const useStyles = createUseStyles({
  root: {
    "& .sidebar": {
      width: "260px",
      height: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      "& .sid-container": {
        width: "250px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: colors.secondary,
        borderRadius: "24px",
        color: colors.gray7,
        fontWeight: 600,
        "&:hover": {
          background: colors.primary,
          "box-shadow": "0px 13px 26px rgb(193, 109, 241, 0.16)",
          "& .sid-item": {
            "& .icon": {
              color: colors.secondary,
            },
          },
        },
        "& .sid-item": {
          height: "100%",
          padding: "15px 0px",
          textAlign: "center",
          textDecoration: "none",
          display: "flex",
          width: "120px",
          margin: "auto",
          justifyContent: "space-evenly",
          flexDirection: "row",
          "& h3": {
            margin: "0px",
            fontFamily: "cursive",
            color: colors.gray1,
          },
          "@media screen and (max-width: 460px)": {
            "& h3": { display: "none" },
          },
        },
      },
    },
  },
});
export default useStyles;
