import { styled } from "../../stitches.config";

export const ContentContainer = styled("div", {
  width: "100vw",
  //height: "calc(100vh - 110px)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  background: "transparent",
  opacity: "1",
  transition: "opacity 0.3s ease-out",
  overflowY: "scroll",
  overflowX: "hidden",
  paddingBottom: "80px",
  "@bp2": {
    height: "100vh",
    paddingBottom: "100px",
  },
  variants: {
    isOpen: {
      true: {
        //opacity: "0",
      },
      false: {
        opacity: "1",
      },
    },
    isOnIndex: {
      true: {
        paddingBottom: "0px",
      },
    },
  },
});
