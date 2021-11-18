import { createUseStyles } from "react-jss";
import colors from "../../styling/color";
import { BUTTON_LIGHT } from "../../styling/styling";
const useStyles = createUseStyles({
  root: {
    width: "80%",
    margin: "auto",
    marginBottom: "45px",
    marginTop: "45px",
    "& .main-row": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      margin: "auto",
      width: "100%",
      flexWrap: "wrap",
      padding: "10px 10px",
      boxShadow: `0px 8px 26px ${colors.gray6}`,
      borderRadius: "12px",
      "& .right-part": {
        width: "450px",
        margin: "auto",

        "& .sec-row": {
          width: "450px",
          margin: "auto",
          marginBottom: "35px",
          "& .message": {
            width: "80%",
            margin: "auto",
            textAlign: "center",
            color: colors.gray8,
            padding: "0 15px",
          },
          "@media screen and (max-width: 700px)": {
            "& .message": { width: "50%" },
          },
          "& .copyright": {
            width: "40%",
            margin: "auto",
            textAlign: "center",
            color: colors.gray8,
            padding: "0 15px",
          },
        },
        "& .social": {
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          "& .title-box": {
            marginBottom: "3rem",
            position: "relative",
            "& .title-left": {
              fontSize: "2rem",
            },

            "& .line": {
              content: "",
              position: "absolute",
              height: "3px",
              backgroundColor: colors.primary,
              width: "100px",
              bottom: "-5px",
              left: "5px",
            },
          },
          "@media screen and (max-width: 700px)": {
            "& .title-box": { position: "absolute", left: "15%" },
          },
          "& .social-media": {
            width: "60%",
            margin: "0px auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            "& .icon": {
              color: colors.gray7,
              fontSize: "28px",
              "&:hover": {
                color: colors.gray8,
              },
            },
          },
        },
      },
      "& .left-part": {
        width: "450px",
        margin: "auto",

        "& .contact": {
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          "& .title-box": {
            marginBottom: "3rem",
            position: "relative",
            "& .title-left": {
              fontSize: "2rem",
            },

            "& .line": {
              content: "",
              position: "absolute",
              height: "3px",
              backgroundColor: colors.primary,
              width: "100px",
              bottom: "-5px",
              left: "5px",
            },
          },

          "& .form-container": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "380px",
            width: "100%",
            margin: "auto",
            "& .form-group": {
              "& .form-control": {
                fontSize: "14px",
                padding: "8px 12px",
                fontWeight: 500,
                display: "inline-block",
                width: "80%",
                height: "24px",
                border: `2px solid ${colors.gray8}`,
              },
              "& .con-area": {
                height: "85px",
              },
            },
            "& .button-primary": {
              ...BUTTON_LIGHT,
              width: "110px",
              marginTop: "15px",
              padding: "8px 15px !important",
            },
          },
        },
      },
    },
  },
});

export default useStyles;
