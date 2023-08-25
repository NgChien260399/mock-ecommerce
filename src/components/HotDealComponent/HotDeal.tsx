import { Box, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./HotDeal.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function HotDeal() {
  const targetDate: any = new Date("2023-08-25T20:20:00");
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
    return value < 10 ? `0${value}` : value;
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "20px",
        fontFamily: '"Montserrat", serif',
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ marginRight: "20px", fontFamily: '"Montserrat", serif' }}
        >
          FLASH DEAL MỖI NGÀY!
        </Typography>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.box}>{addLeadingZero(timeRemaining.days)}</div>
          <div className={styles.text}>:</div>
          <div className={styles.box}>
            {addLeadingZero(timeRemaining.hours)}{" "}
          </div>
          <div className={styles.text}>:</div>

          <div className={styles.box}>
            {addLeadingZero(timeRemaining.minutes)}{" "}
          </div>
          <div className={styles.text}>:</div>

          <div className={styles.box}>
            {addLeadingZero(timeRemaining.seconds)}
          </div>
        </Box>
        <Box sx={{ display: "flex", marginLeft: "auto", alignItems: "center" }}>
          <a href={"#"}>Xem thêm</a>
          <KeyboardDoubleArrowRightIcon fontSize="small" />
        </Box>
      </Box>
    </Container>
  );
}

export default HotDeal;
