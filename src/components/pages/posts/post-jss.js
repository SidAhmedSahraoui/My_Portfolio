import { createUseStyles } from "react-jss";
import colors from "../../styling/color";
import { BUTTON_DANGER, BUTTON_SUCCESS } from "../../styling/styling";
const useStyles = createUseStyles({
  root: {
    borderRadius: "10px",
    border: "2px solid #eee",
    width: "340px",
    marginBottom: "25px",
    textAlign: "center",
    backgroundColor: colors.gray2,
    borderBottom: `3px solid ${colors.gray4}`,
    "& .details-top": {
      "& h5.title": {
        color: colors.gray8,
        fontWeight: 600,
        fontSize: "24px",
        display: "inline-block",
        width: "100%",
        margin: "10px 0px",
      },
      "& p.description": {
        color: colors.gray7,
        fontWeight: 500,
        fontSize: "20px",
        display: "inline-block",
        width: "100%",
        margin: "10px 0px",
      },
    },
    "& .details-bottom": {
      "& p.location": {
        color: colors.gray6,
        fontWeight: 500,
        fontSize: "18px",
      },
      "& p.date": {
        color: colors.gray7,
        fontSize: "15px",
      },
    },
    "& .confirmation": {
      "& .confirm-btn": {
        ...BUTTON_SUCCESS,
        margin: "8px",
      },
      "& .reject-btn": {
        ...BUTTON_DANGER,
        margin: "8px",
      },
    },
  },
});

export default useStyles;
