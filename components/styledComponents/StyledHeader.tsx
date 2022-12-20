import { styled } from "../../stitches.config";

export const StyledHeader = styled("header", {
  height: "110px",
  width: "100vw",
  background:
    "linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0) 100%)",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "unset",
  padding: "30px 40px 30px 40px",
  "@bp2": {
    height: "155px",
  },
});
