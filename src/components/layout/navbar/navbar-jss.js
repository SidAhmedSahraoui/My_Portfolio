import { createUseStyles } from "react-jss";
import colors from "../../styling/color";
import { BUTTON_PRIMARY } from "../../styling/styling";
const useStyles = createUseStyles({
  root: {
    width: "85%",
    margin: "auto",
    padding: "20px  40px",

    "& .brows": {
      display: "flex",
      justifyContent: "space-between",
      "& .link-prim": {
        display: "inline-block",
        background: "none",
        border: "none",
        padding: "0px",
        cursor: "pointer",
        fontSize: "38px",
        fontWeight: 600,
        fontFamily: "inherit",
        color: colors.secondary,
      },
      "& .nav-links": {
        display: "inline-block",
        "& .links": {
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
          width: "200px",
          "& .nav-item": {
            "& .button-link": {
              background: "none",
              border: "none",
              padding: "0px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "500",
              color: colors.gray9,
            },
          },
        },
        "@media screen and (max-width: 800px)": {
          "& .links": { display: "none" },
        },
      },
      "& .button-prim": {
        ...BUTTON_PRIMARY,
        display: "inline-block",
        marginTop: "5px  ",
      },
      "& .userNav": {
        display: "flex",
        width: "150px",
        justifyContent: "space-between",
        alignItems: "center",
        "& .profile-btn": {
          ...BUTTON_PRIMARY,
          padding: "7px 10px",
          fontWeight: 500,
          backgroundColor: colors.gray1,
          color: colors.gray7,
          border: `1px solid ${colors.gray7}`,
        },
        "& .not": {
          color: colors.gray7,
        },
      },
    },
  },
});
export default useStyles;
