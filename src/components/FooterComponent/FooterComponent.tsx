import { Button, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "bootstrap/dist/css/bootstrap.css";

import styles from "./Footer.module.css"
const SubscribeForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.formSubscribe}>
        <h2 className={styles.Title}>Đăng ký nhận bản tin</h2>
        <p className={styles.formSubscribeP}>
          Cùng Canifa Blog cập nhật những thông tin mới nhất về thời trang và
          phong cách sống.
        </p>
        <div className={styles.inputContainer}>
          <TextField  type="email" placeholder="Nhập địa chỉ email của bạn" />
          <Button
            variant="contained"
            color="error"
            style={{ borderRadius: "0" }}
            className={styles.footerButton}
          >
            Đăng ký
          </Button>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/canifa.fanpage/"  target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/canifa.fashion/"  target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/CANIFAOfficial"  target="_blank">
            <YouTubeIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className={`${styles.footerSection} col-sm-4`}>
      <h3 className={styles.title} >CÔNG TY CỔ PHẦN CANIFA</h3>
      <p>
        Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch và đầu
        tư Hà Nội
      </p>
      <p>
        Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận Hà
        Đông, Thành phố Hà Nội.
      </p>
      <p>
        Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành,
        Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội.
      </p>
      <p>Điện thoại: +8424 - 7303.0222</p>
      <p>Fax: +8424 - 6277.6419</p>
      <p>Email: hello@canifa.com</p>
      <div className={styles.socialIcons1}>
        <a className={styles.socialIcons1A} href="https://www.facebook.com/canifa.fanpage/"  target="_blank">
          <FacebookIcon />
        </a>
        <a className={styles.socialIcons1A} href="https://www.instagram.com/canifa.fashion/"  target="_blank">
          <InstagramIcon />
        </a>
        <a className={styles.socialIcons1A} href="https://www.youtube.com/CANIFAOfficial"   target="_blank">
          <YouTubeIcon />
        </a>
        <a className={styles.socialIcons1A} href="#">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

const BrandLinks = () => {
  return (
    <div className={`${styles.footerSection} col-sm-2`}>
      <h3 className={styles.title}>THƯƠNG HIỆU</h3>
      <ul>
        <li>
          <a href="#">Giới thiệu</a>
        </li>
        <li>
          <a href="#">Tin tức</a>
        </li>
        <li>
          <a href="#">Tuyển dụng</a>
        </li>
        <li>
          <a href="#">Với cộng đồng</a>
        </li>
        <li>
          <a href="#">Hệ thống cửa hàng</a>
        </li>
        <li>
          <a href="#">Liên hệ</a>
        </li>
      </ul>
    </div>
  );
};

const SupportLinks = () => {
  return (
    <div className={`${styles.footerSection} col-sm-3 `}>
      <h3 className={styles.title}>HỖ TRỢ</h3>
      <ul>
        <li>
          <a href="#">Hỏi đáp</a>
        </li>
        <li>
          <a href="#">Chính sách KHTT</a>
        </li>
        <li>
          <a href="#">Điều kiện - Điều khoản Chính sách KHTT</a>
        </li>
        <li>
          <a href="#">Chính sách vận chuyển</a>
        </li>
        <li>
          <a href="#">Gợi ý tìm size</a>
        </li>
        <li>
          <a href="#">Kiểm tra đơn hàng</a>
        </li>
        <li>
          <a href="#">Tra cứu điểm thẻ</a>
        </li>
        <li>
          <a href="#">Chính sách bảo mật thông tin KH</a>
        </li>
      </ul>
    </div>
  );
};

const AppDownload = () => {
  return (
    <div className={`${styles.footerSection} col-sm-3 `}>
      <div>
        <h3 className={styles.title}>TẢI ỨNG DỤNG</h3>
        <div style={{ display: "flex" }}>
          <div className="bancode">
            <img
              className={styles.QR}
              src="https://canifa.com/assets/images/bancode.png"
              alt="qr"
            />
          </div>
          <div className={styles.Apps}>
            <a className={styles.AppsA} href="https://play.google.com/store/apps/details?id=com.app.canifa&hl=en"  target="_blank">
              <img
                className={`${styles.AppsImg} ${styles.Apps}`}
                src="https://canifa.com/assets/images/googleplay.png"
                alt=""
              />
            </a>
            <a className={styles.AppsA} href="https://apps.apple.com/vn/app/canifa/id1175895653"  target="_blank">
              <img
                  className={`${styles.AppsImg} ${styles.Apps}`}
                src="https://canifa.com/assets/images/appstore.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    
      <div>
        <h3 className={styles.title}>PHƯƠNG THỨC THANH TOÁN</h3>
        <img src="https://canifa.com/assets/images/pay.svg" alt="" />
      </div>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <>
      <div className={styles.footerBottom}>
        <div className="copyright">© 2023 CANIFA</div>
        <div className="bct">
          <a
            href="http://online.gov.vn/(X(1)S(edqk3incgl5uzlmn5mxjtu0b))/Home/WebDetails/36833?AspxAutoDetectCookieSupport=1"
            target="_blank"
            aria-label="Pay"
          >
            <img
            
              src="https://canifa.com/assets/images/bocongthuong.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footerContent} row`}>
        <SubscribeForm />
        <div
          className={styles.footerEnd}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <ContactInfo />
          <BrandLinks />
          <SupportLinks />
          <AppDownload />
        </div>
      </div>
      <div className={styles.hrContainer}>
        <hr />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
