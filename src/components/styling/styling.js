import colors from "./color";

export const BUTTON_PRIMARY = {
  background: colors.primary,
  border: 0,
  borderRadius: "3px",
  fontWeight: 600,
  fontSize: "20px",
  color: "#fff !important",
  padding: "12px 24px !important",
  cursor: "pointer",
  "box-shadow": "0px 8px 26px rgb(109,184,241, 0.16)",
  "&:not([disabled]):hover": {
    "box-shadow": "0px 18px 26px rgb(109,184,241, 0.16)",
  },
};
export const BUTTON_DANGER = {
  background: colors.danger,
  border: 0,
  borderRadius: "3px",
  fontWeight: 500,
  fontSize: "20px",
  color: `${colors.gray1} !important`,
  padding: "8px 16px !important",
  cursor: "pointer",
};
export const BUTTON_SUCCESS = {
  background: colors.success,
  border: 0,
  borderRadius: "3px",
  fontWeight: 500,
  fontSize: "20px",
  color: `${colors.gray1} !important`,
  padding: "8px 16px !important",
  cursor: "pointer",
};
export const BUTTON_LIGHT = {
  background: "#ffffff",
  border: `2px solid ${colors.primary}`,
  borderRadius: "3px",
  fontWeight: 600,
  fontSize: "20px",
  color: `${colors.gray9} !important`,
  padding: "12px 24px !important",
  cursor: "pointer",
  "&:not([disabled]):hover": {
    background: colors.primary,
    "box-shadow": "0px 18px 26px rgb(109,184,241, 0.16)",
  },
};
export const LINK_PRIMARY = {
  fontWeight: 500,
  color: `${colors.gray9} !important`,
  "&:hover": {
    color: colors.gray9,
  },
};

export const SHADOW_EFFECT = {
  borderRadius: "10px",
  "box-shadow": "8px 13px 26px rgb(52, 85, 110, 0.288)",
};
export const TEXT_INPUT = {
  fontWeight: 500,
  borderRadius: "5px",
  padding: "8px 20px",
  margin: "10px",
  border: `2px solid ${colors.gray8}`,
  "&:focus": {
    borderColor: colors.gray4,
  },
};
