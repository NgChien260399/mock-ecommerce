import React from 'react';
import { Button, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import 'bootstrap/dist/css/bootstrap.css';

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <>
    
    <div className='form'>
      <div className="form-subscribe">
        <h2>Đăng ký nhận bản tin</h2>
         <p>Cùng Canifa Blog cập nhật những thông tin mới nhất về thời trang và phong cách sống.</p>
        <div className="input-container">
          <TextField  type="email" placeholder="Nhập địa chỉ email của bạn" />
          <Button variant="contained" color='error' style={{borderRadius:"0"}}  >Đăng ký</Button>
        </div>
        <div className="social-icons">
          <a href="#"><FacebookIcon /></a>
          <a href="#"><InstagramIcon /></a>
          <a href="#"><YouTubeIcon /></a>
          <a href="#"><TwitterIcon /></a>

        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CÔNG TY CỔ PHẦN CANIFA</h3>
            <p>
              Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch và đầu tư Hà Nội
            </p>
            <p>
              Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận Hà Đông, Thành phố Hà Nội.
            </p>
            <p>
              Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành, Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội.
            </p>
            <p>
              Điện thoại: +8424 - 7303.0222
            </p>
            <p>
              Fax: +8424 - 6277.6419
            </p>
            <p>
            Email: hello@canifa.com
            </p>
            <div className="social-icons">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><InstagramIcon /></a>
              <a href="#"><YouTubeIcon /></a>
              <a href="#"><TwitterIcon /></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>THƯƠNG HIỆU</h3>
            <ul>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>HỖ TRỢ</h3>
            <ul>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>TẢI ỨNG DỤNG</h3>
           <img src="https://canifa.com/assets/images/bancode.png" alt="qr" />
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
