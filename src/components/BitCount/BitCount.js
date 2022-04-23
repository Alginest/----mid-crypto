import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
const BitCount = () => {
  const classes = useStyles();
  return (
    <section className={classes.bitCount}>
      <Container className={classes.bigCont}>
        <Grid container spacing={2} className={classes.gridCont}>
          <Grid item lg={3} className={classes.gridItem}>
            <Box className={classes.smBox}>
              <Box className={classes.iconBox}>
                <SentimentSatisfiedIcon className={classes.icon} />
              </Box>
              <Typography variant="h4" color="secondary">
                154
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                style={{ marginTop: 10, fontWeight: "bold" }}
              >
                SUPPORT COUNTRIES
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} className={classes.gridItem}>
            <Box className={classes.smBox}>
              <Box className={classes.iconBox}>
                <AccessibilityIcon className={classes.icon} />
              </Box>
              <Typography variant="h4" color="secondary">
                3512
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                style={{ marginTop: 10, fontWeight: "bold" }}
              >
                OPERATORS
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} className={classes.gridItem}>
            <Box className={classes.smBox}>
              <Box className={classes.iconBox}>
                <CloudDownloadIcon className={classes.icon} />
              </Box>
              <Typography variant="h4" color="secondary">
                154
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                style={{ marginTop: 10, fontWeight: "bold" }}
              >
                BITCOIN ATMS
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} className={classes.gridItem}>
            <Box className={classes.smBox}>
              <Box className={classes.iconBox}>
                <MailOutlineIcon className={classes.icon} />
              </Box>
              <Typography variant="h4" color="secondary">
                2700
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                style={{ marginTop: 10, fontWeight: "bold" }}
              >
                PRODUCERS
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BitCount;
