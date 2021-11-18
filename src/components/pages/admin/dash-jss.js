import { createUseStyles } from "react-jss";
import colors from "../../styling/color";
import { SHADOW_EFFECT } from "../../styling/styling";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "40px",
    "& .side-part": {
      background: colors.gray7,
      ...SHADOW_EFFECT,
      width: "20%",
      height: "480px",
      margin: "0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "sticky",
      top: "40px",
      "& .logo": {
        marginBottom: "0px",
        color: colors.primary,
        "& h3": { fontSize: "22px", fontWeight: 500, fontFamily: "cursive" },
      },
      "& .sidebar": {
        width: "220px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",

        "& .sid-container": {
          width: "100%",
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
            margin: "auto",
            justifyContent: "space-evenly",
            flexDirection: "row",
            "& h3": {
              margin: "0px",
              fontFamily: "cursive",
              color: colors.gray1,
            },
          },
        },
      },
      "@media screen and (max-width: 1200px)": {
        "& .sidebar": { width: "150px" },
      },
      "@media screen and (max-width: 420px)": {
        "& .sidebar": { width: "120px" },
      },
    },
    "& .main-part": {
      width: "70%",
      height: "100%",
      margin: "auto",
      "& .main-title": {
        margin: "10px 0px",
        textAlign: "center",
        color: colors.gray6,
        fontWeight: 500,
      },
      "& .main-container": {
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      },
    },
    "@media screen and (max-width: 840px)": {
      "& .main-part": { width: "50%" },
      "& .side-part": { width: "40%" },
    },
  },
});
export default useStyles;
