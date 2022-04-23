import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  aboutInfo: {
    width: "100%",
    height: "auto",
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  bigCont: {
    width: "100%",
    height: "406px",
    display: "flex",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "30px",
  },
  boxRight: {
    width: "49%",
    marginRight: "1%",
  },
  boxLeft: {
    width: "49%",
    marginLeft: "1%",
  },
  paraSm: {
    textAlign: "left",
    margin: "15px 0",
    color: "#9899A5",
  },
  btnBox: {
    marginTop: "50px",
  },
  btnCoinOne: {
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: "#fff",
    width: 150,
    height: 50,
    borderRadius: 30,
    cursor: "pointer",
    transition: "all 0.3s ease-in !important",
    fontWeight: "bold !important",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  //linear-gradient(to right, #fdc830, #f37335); /* Chrome 10-25, Safari 5.1-6 */
  //   backgroundColor: (props) =>
  //props.dark ? "#fff !important" : "#222 !important",
  //color: (props) => (props.dark ? "#222 !important" : "#fff !important"),
  btnCoin: {
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: "white",
    width: 200,
    height: 50,
    borderRadius: 30,
    marginLeft: 30,
    cursor: "pointer",
    transition: "all 0.3s ease-in !important",
    fontWeight: "bold !important",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  svg: {
    width: "100%",
    border: "1px solid white",
    position: "absolute",
    bottom: 0,
    height: 200,
  },
}));
