import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosInterceptor";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const UserProfile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Xóa token khỏi localStorage khi đăng xuất
    localStorage.removeItem("token");
    navigate("/signin");
  };

  ////////////////////////////////

  const [userData, setUserData] = useState<any>({});
  const [editableData, setEditableData] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    // Thêm các trường thông tin khác mà bạn muốn chỉnh sửa
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/user");
        setUserData(response.data);

        // Nếu bạn muốn hiển thị thông tin người dùng trong các input
        setEditableData(response.data);
      } catch (error) {
        console.error("Failed to fetch user data!", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      // Gửi yêu cầu PUT để cập nhật thông tin người dùng
      await axios.put("/user", editableData, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log("Thông tin người dùng đã được cập nhật thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin người dùng:", error);
    }
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Thông tin tài khoản
        </Typography>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                type="email"
                name="email"
                value={editableData.email}
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Họ"
                margin="normal"
                type="text"
                name="firstname"
                value={editableData.firstname}
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Tên"
                margin="normal"
                type="text"
                name="lastname"
                value={editableData.lastname}
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Giới tính"
                margin="normal"
                type="text"
                name="gender"
                value={editableData.gender}
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Số điện thoại"
                margin="normal"
                type="tel"
                name="phone"
                value={editableData.phone}
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Địa chỉ"
                margin="normal"
                type="text"
                name="address"
                value={editableData.address}
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            {/* <Grid item xs={6}>
            <TextField
              fullWidth
              label="Avatar"
              margin="normal"
              type="text"
              name="avatar"
              value={editableData.avatar}
              variant="outlined"
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Role"
              margin="normal"
              type="text"
              name="role"
              value={editableData.role || ""}
              variant="outlined"
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </Grid> */}
          </Grid>

          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              LƯU
            </Button>
            <Button variant="contained">HỦY BỎ</Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained" color="primary">
              LÀM MỚI
            </Button>
          </Box>
        </Box>
      </Container>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
};

export default UserProfile;
