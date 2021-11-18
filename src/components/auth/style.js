import { createUseStyles } from "react-jss";
import { BUTTON_LIGHT, LINK_PRIMARY, TEXT_INPUT } from "../styling/styling";
import colors from "../styling/color";

const useStyles = createUseStyles({
  root: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "55px",
    marginTop: "35px",
    "& .login": {
      padding: "20px 35px",
      boxShadow: `0px 8px 26px ${colors.gray6}`,
      borderRadius: "12px",
      width: "350px",
      margin: "25px 40px",
      "& .title": {
        color: colors.primary,
        textAlign: "center",
        fontWeight: 500,
        fontSize: "24px",
        margin: "0px",
      },
      "& .subtitle": {
        color: colors.gray6,
        textAlign: "center",
        fontWeight: 500,
        fontSize: "16px",
        margin: "10px 30px",
      },
      "& .form-container": {
        textAlign: "center",
        "& .form-group": {
          "& .input-text": { ...TEXT_INPUT },
        },
        "& .button-primary": {
          ...BUTTON_LIGHT,
          marginTop: "15px",
          padding: "8px 15px !important",
        },
        "& .form-link": {
          ...LINK_PRIMARY,
          marginLeft: "10px",
          textDecoration: "none",

          color: colors.gray7,
          "& span": {
            fontWeight: 500,
          },
        },
      },
    },
    "& .image": {
      width: "350px ",
      "& .img": {
        width: "100%",
        height: "100%",
      },
    },
  },
});

export default useStyles;
