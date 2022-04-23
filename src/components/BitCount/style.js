import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bitCount: {
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundColor: theme.palette.secondary.main,
  },
  bigCont: {
    width: "100%",
    height: "auto",
  },
  gridCont: {
    width: "100%",
    height: "inherit",
    alignItems: "center",
  },
  gridItem: {
    width: "100%",
    height: "inherit",
    display: "flex",
    alignItems: "center",
  },
  smBox: {
    width: "300px",
    height: "180px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
  },
  //linear-gradient(to right, #fdc830, #f37335);
  iconBox: {
    position: "absolute",
    top: "-40px",
    fontSize: 10,
    width: 80,
    height: 80,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "40px",
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 40,
  },
}));
