import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./HotDeal.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoltIcon from '@mui/icons-material/Bolt';
import HotDealProductComponent from "./productComponent.tsx";

function HotDeal() {

  const targetDate: any = new Date("2023-09-02T14:00:00");
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now: any = new Date();
      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const addLeadingZero = (value: any) => {
    // return value < 10 ? `0${value}` : value;
    return value;
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "20px",
        fontFamily: '"Montserrat", serif',
        background: "#ccc",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ marginRight: "20px", fontFamily: '"Montserrat", serif', color: "#da291c", fontWeight: "bolder" }}
        >
          F<BoltIcon />ASH DEALS 
        </Typography>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.box}>
            {addLeadingZero(timeRemaining.hours)}{" "}
          </div>
          <div className={styles.text}> </div>

          <div className={styles.box}>
            {addLeadingZero(timeRemaining.minutes)}{" "}
          </div>
          <div className={styles.text}> </div>

          <div className={styles.box}>
            {addLeadingZero(timeRemaining.seconds)}
          </div>
        </Box>
        <Box sx={{ display: "flex", marginLeft: "auto", alignItems: "center", color: "#da291c" }}>
          <a href={"#"} style={{color: "#da291c"}}>See All</a>
          <KeyboardDoubleArrowRightIcon fontSize="small" />
        </Box>
      </Box>
      <Box>
        <HotDealProductComponent /> 
      </Box>
    </Container>
  );
}

export default HotDeal;
