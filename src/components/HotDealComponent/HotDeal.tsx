import { useEffect, useState } from "react";
import styles from "./HotDeal.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoltIcon from '@mui/icons-material/Bolt';
import HotDealProductComponent from "./productComponent";

const HotDeal = () => {

  const targetDate: any = new Date("2023-09-07T14:00:00");

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
    <div
      style={{
        height: "auto",
        fontFamily: '"Montserrat", serif',
        margin: "0 auto",
        maxWidth: "none",
        padding: "20px 7.64vw",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h6
          style={{ marginRight: "20px", fontFamily: '"Montserrat", serif', color: "#da291c", fontWeight: "bolder" }}
        >
          F<BoltIcon />ASH DEALS 
        </h6>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.clock}>
            {addLeadingZero(timeRemaining.hours)}{" "}
          </div>

          <div className={styles.clock}>
            {addLeadingZero(timeRemaining.minutes)}{" "}
          </div>

          <div className={styles.clock}>
            {addLeadingZero(timeRemaining.seconds)}
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "auto", alignItems: "center", color: "#da291c" }}>
          <a href={"#"} style={{color: "#da291c", textDecoration: "none"}}>Xem tất cả</a>
          <KeyboardDoubleArrowRightIcon fontSize="small" />
        </div>
      </div>
      <div>
        <HotDealProductComponent /> 
      </div>
    </div>
  );
}

export default HotDeal;
