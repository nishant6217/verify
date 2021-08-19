// import React, { component } from "react";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   makeStyles,
//   Divider,
//   DialogTitle,
//   Box,
//   Typography,
//   Button,
// } from "@material-ui/core";
// import OtpInput from "react-otp-input";

// const useStyles = makeStyles({
//   component: {
//     height: "40vh",
//     width: "70vh",
//   },
//   text: {
//     textAlign: "center",
//   },
//   btn: {
//     marginLeft: "138px",
//     background: "#129CF7",
//     color: "#fff",
//     borderRadius: 40,
//     height: 20,
//   },
//   ver: {
//     fontSize: "10px",
//   },
// });

// export default class App extends Component {
//   state = { otp: "" };

//   handleChange = (otp) => this.setState({ otp });

//   render() {
    
//     return (
//       <Dialog open={open} onClose={() => handleOnClose()}>
//         <DialogContent className={classes.component}>
//           <DialogTitle style={{ textAlign: "center" }}>
//             Phone Verification
//           </DialogTitle>
//           <Divider />
//           <Box className={classes.text}>
//             <Typography>Enter the OTP you received on 89206-6XXXX</Typography>
//           </Box>

//           <Box style={{ padding: "10px 0px 0px 137px" }}>
//             <OtpInput
//               value={this.state.otp}
//               onChange={this.handleChange}
//               numInputs={6}
//               separator={<span>-</span>}
//             />
//           </Box>
//           <Button variant="contained" className={classes.btn}>
//             <Typography className={classes.ver}>Verify Phone Number</Typography>
//           </Button>
//         </DialogContent>
//       </Dialog>
//     );
//   }
// }

// // function Login2({ open, setOpen }) {
// //   const handleOnClose = () => {
// //     setOpen(false);
// //   };
// //   const [otp, setOtp] = useState(new Array(6).fill(""));
// //   const classes = useStyles();
// //   const handleChange = (element, index) => {
// //     if (isNaN(element.value)) return false;
// //     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
// //   };
// //   return (

// //   );
// // }

// // export default Login2;
