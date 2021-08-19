import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  makeStyles,
  Divider,
  DialogTitle,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import OtpInput from "react-otp-input";

const useStyles = makeStyles({
  component: {
    height: "35vh",
    width: "70vh",
  },
  text: {
    textAlign: "center",
    paddingTop: "15px",
    margin: "auto",
  },
  btn: {
    marginLeft: "138px",
    background: "#129CF7",
    color: "#fff",
    borderRadius: 40,
    height: 20,
  },
  ver: {
    fontSize: "10px",
  },
});

function Login({ open, setOpen }) {
  const handleOnClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const handleChange = (e) => {
    console.log(e.target.value);
    setOtp(e.target.value);
  };
  const [otp, setOtp] = useState([]);
  console.log(otp);

  return (
    <Dialog open={open} onClose={() => handleOnClose()}>
      <DialogContent className={classes.component}>
        <DialogTitle
          style={{ textAlign: "center", fontWeight: "600", paddingTop: "1px" }}
        >
          Phone Verification
        </DialogTitle>
        <Divider />
        <Box className={classes.text}>
          <Typography style={{ fontSize: "14px", color: "#878787" }}>
            Enter the OTP you received on 89206-6XXXX
          </Typography>
        </Box>

        <Box style={{ paddingTop: "20px", paddingLeft: "125px" }}>
          <OtpInput
            value={otp}
            onChange={(e) => setOtp(e)}
            numInputs={6}
            separator={<span>&nbsp;&nbsp;&nbsp;</span>}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            maxWidth: "50%",
            margin: "auto",
            paddingTop: "10px",
          }}
        >
          <Box>
            <Typography style={{ fontSize: "12px", color: "#059862" }}>
              Chnage Number
            </Typography>
          </Box>
          <Box style={{ marginLeft: "auto" }}>
            <Typography style={{ fontSize: "12px", color: "#059862" }}>
              Re-send OTP
            </Typography>
          </Box>
        </Box>
        <Box style={{ paddingTop: "15px", margin: "auto" }}>
          <Button variant="contained" className={classes.btn}>
            <Typography className={classes.ver}>Verify Phone Number</Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Login;
