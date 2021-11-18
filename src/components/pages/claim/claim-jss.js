import { createUseStyles } from "react-jss";
import colors from "../../styling/color";
import { BUTTON_PRIMARY, TEXT_INPUT } from "../../styling/styling";

const useStyles = createUseStyles({
  root: {
    padding: "40px 20px",
    marginBottom: "40px",
    margin: "auto",
    textAlign: "center",

    "& .button-primary": BUTTON_PRIMARY,

    "& .add-form": {
      maxWidth: "550px",
      margin: "auto",
      padding: "15px 35px",
      boxShadow: ` 8px 16px 23px ${colors.gray4}`,
      borderRadius: "12px",
      '& [type="file"]': {
        display: "none",
        "& + label": {
          fontWeight: 600,
          background: colors.gray1,
          padding: "15px 30px",
          margin: "10px 15px",
          display: "inline-block",
          "&:hover": {
            background: colors.gray3,
          },
        },
      },
      "&> .title": {
        color: colors.primary,
        fontWeight: 600,
        fontSize: "28px",
        margin: "12px 0px",
      },
      "& .subtitle": {
        color: colors.gray7,
        fontWeight: 400,
        fontSize: "22px",
        margin: "10px 0px",
      },
      "& .input-text": {
        ...TEXT_INPUT,
        fontSize: "20px",
        width: "80%",
      },
    },
    "@media screen and (min-width: 700px)": {
      "& .add-form": { width: "100%" },
    },
  },
});

export default useStyles;
