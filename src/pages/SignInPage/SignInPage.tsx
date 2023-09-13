import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as Yup from "yup";
import { useFormik } from "formik";
import Footer from "../../components/FooterComponent/FooterComponent";
import {
  AppBar,
  Container,
  Toolbar,
  TextField,
  Button,
  Avatar,
  Link,
  Checkbox,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import axios from "../../axiosInterceptor";
import { useNavigate } from "react-router";

export default function SignInSide() {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("/auth/login", formData);
  //     console.log("Logged in successfully!", response.data);
  //     // Trong phần handleSubmit của trang đăng nhập (Login.tsx) sau khi đăng nhập thành công:
  //     localStorage.setItem("token", response.data.access_token);
  //     // Handle successful login, e.g., store token in localStorage
  //   } catch (error) {
  //     console.error("Login failed!", error);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/auth/login", values);
        console.log("Logged in successfully!", response.data);
        localStorage.setItem("token", response.data.access_token);
        navigate("/");
      } catch (error) {
        console.error("Login failed!", error);
      }
    },
  });

  return (
    <>
      <AppBar position="relative" style={{ background: "#E02725" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            GRACEFUL
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="xs" sx={{ height: "53vh" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "#E02725" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
