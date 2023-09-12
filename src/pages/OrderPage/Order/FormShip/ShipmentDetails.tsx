import React from "react";
import styles from "./ShipmentDetails.module.css";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";

interface UserForm {
  user: string;
  phoneNumber: number;
  province: string;
  district: string;
  ward: string;
  address: string;
  addressType: string;
  note: string;
}

export const ReactFormik: React.FC = () => {
  const VietnamProvinces: string[] = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Hải Phòng",
    "Đà Nẵng",
    "Cần Thơ",
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bạc Liêu",
    "Bắc Kạn",
    "Bắc Giang",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Dương",
    "Bình Định",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];

  const VietnamDistricts: string[] = {
    "Hà Nội": [
      "Ba Đình",
      "Hoàn Kiếm",
      "Hai Bà Trưng",
      "Đống Đa",
      "Cầu Giấy",
      "Thanh Xuân",
      "Hà Đông",
      "Long Biên",
      "Nam Từ Liêm",
      "Bắc Từ Liêm",
      "Tây Hồ",
      "Hoàng Mai",
      "Thanh Trì",
      "Gia Lâm",
      "Sóc Sơn",
      "Đông Anh",
      "Mê Linh",
    ],
  };
  const VietnamVillages: string[] = {
    "Ba Đình": [
      "Phúc Xá",
      "Ngọc Hà",
      "Điện Biên",
      "Đội Cấn",
      "Vĩnh Phúc",
      "Cống Vị",
      "Liễu Giai",
      "Nguyễn Trung Trực",
    ],
    "Hoàn Kiếm": [
      "Hàng Bài",
      "Hàng Gai",
      "Chương Dương",
      "Cửa Đông",
      "Cửa Nam",
      "Đồng Xuân",
      "Hàng Mã",
      "Hàng Trống",
    ],
    "Hai Bà Trưng": [
      "Bách Khoa",
      "Bạch Mai",
      "Bùi Thị Xuân",
      "Cầu Dền",
      "Đống Mác",
      "Đồng Nhân",
      "Lê Đại Hành",
      "Minh Khai",
    ],
    "Đống Đa": [
      "Cát Linh",
      "Hàng Bột",
      "Khâm Thiên",
      "Láng Hạ",
      "Láng Thượng",
      "Nam Đồng",
      "Ngã Tư Sở",
      "Phương Liên",
    ],
    "Cầu Giấy": [
      "Dịch Vọng",
      "Dịch Vọng Hậu",
      "Mai Dịch",
      "Nghĩa Tân",
      "Nghĩa Đô",
      "Quan Hoa",
      "Trung Hoà",
      "Yên Hòa",
    ],
    "Thanh Xuân": [
      "Hạ Đình",
      "Khương Đình",
      "Khương Mai",
      "Khương Trung",
      "Nhân Chính",
      "Phương Liệt",
      "Thanh Xuân Bắc",
      "Thanh Xuân Nam",
    ],
    "Hà Đông": [
      "Biên Giang",
      "Dương Nội",
      "Hà Cầu",
      "Kiến Hưng",
      "La Khê",
      "Mộ Lao",
      "Nguyễn Trãi",
      "Phú La",
    ],
    "Long Biên": [
      "Gia Thụy",
      "Giang Biên",
      "Long Biên",
      "Ngọc Lâm",
      "Phúc Đồng",
      "Sài Đồng",
      "Thạch Bàn",
      "Thượng Thanh",
    ],
    "Nam Từ Liêm": [
      "Cầu Diễn",
      "Đại Mỗ",
      "Mễ Trì",
      "Mỹ Đình 1",
      "Mỹ Đình 2",
      "Phú Đô",
      "Tây Mỗ",
      "Trung Văn",
    ],
    "Bắc Từ Liêm": [
      "Cổ Nhuế 1",
      "Cổ Nhuế 2",
      "Đông Ngạc",
      "Đức Thắng",
      "Liên Mạc",
      "Minh Khai",
      "Tây Tựu",
      "Thượng Cát",
    ],
    "Tây Hồ": [
      "Bưởi",
      "Nhật Tân",
      "Phú Thượng",
      "Quảng An",
      "Thụy Khuê",
      "Tứ Liên",
      "Xuân La",
      "Yên Phụ",
    ],
    "Hoàng Mai": [
      "Đại Kim",
      "Định Công",
      "Giáp Bát",
      "Hoàng Liệt",
      "Hoàng Văn Thụ",
      "Lĩnh Nam",
      "Mai Động",
      "Tân Mai",
    ],
    "Thanh Trì": [
      "Duyên Hà",
      "Hữu Hòa",
      "Tam Hiệp",
      "Tam Hưng",
      "Tam Trinh",
      "Tả Thanh Oai",
      "Thanh Liệt",
      "Yên Mỹ",
    ],
    "Gia Lâm": [
      "Bát Tràng",
      "Cổ Bi",
      "Dương Hà",
      "Dương Quang",
      "Kim Lan",
      "Kim Sơn",
      "Lệ Chi",
      "Ninh Hiệp",
    ],
    "Sóc Sơn": [
      "Bắc Sơn",
      "Đông Sơn",
      "Hiền Ninh",
      "Mai Đình",
      "Minh Phú",
      "Nam Sơn",
      "Phù Linh",
      "Sóc Sơn",
    ],
    "Đông Anh": [
      "Bắc Hồng",
      "Cổ Loa",
      "Đông Anh",
      "Đông Hội",
      "Dục Tú",
      "Hải Bối",
      "Kim Chung",
      "Uy Nỗ",
    ],
    "Mê Linh": [
      "Chi Đông",
      "Chu Phan",
      "Đại Thịnh",
      "Hoàng Kim",
      "Kim Hoa",
      "Liên Mạc",
      "Mê Linh",
      "Quang Minh",
    ],
  };

  const validate = (values: UserForm) => {
    let errors: any = {};

    if (!values.user) {
      errors.user = "Vui lòng nhập họ tên người nhận hàng!";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Vui lòng nhập số điện thoại người nhận hàng!";
    }

    if (!values.province) {
      errors.province = "Vui lòng chọn tỉnh thành!";
    }

    if (!values.district) {
      errors.district = "Vui lòng chọn quận huyện!";
    }

    if (!values.ward) {
      errors.ward = "Vui lòng chọn phường xã!";
    }

    if (!values.address) {
      errors.address = "Vui lòng nhập địa chỉ người nhận!";
    }

    if (!values.addressType) {
      errors.addressType = "Vui lòng chọn loại địa chỉ người nhận!";
    }

    return errors;
  };

  const handleSubmit = (
    values: UserForm,
    formikHelpers: FormikHelpers<UserForm>
  ) => {
    console.log(values, formikHelpers);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        user: "",
        phoneNumber: "",
        province: "",
        district: "",
        ward: "",
        address: "",
        addressType: "",
        note: "",
        addressList: [] as string[],
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<UserForm>) => (
        <Form>
          <div className={styles.formShip}>
            <h5>Thông Tin Giao Hàng</h5>
            <div className="form-group">
              <label
                htmlFor="user"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Họ và Tên
                <Field type="text" name="user" className="form-control" />
              </label>
              <ErrorMessage
                name="user"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="phoneNumber"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Số điện thoại
                <Field
                  type={
                    formikProps.values.phoneNumber ? "number" : "phoneNumber"
                  }
                  name="phoneNumber"
                  className="form-control"
                />
              </label>
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              {" "}
              <label
                htmlFor="province"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}`}
              >
                {" "}
                Tỉnh / Thành phố{" "}
                <Field as="select" name="province" className="form-control">
                  {" "}
                  <option value="">Chọn tỉnh thành</option>{" "}
                  {VietnamProvinces.map((province, index) => (
                    <option key={index} value={province}>
                      {" "}
                      {province}{" "}
                    </option>
                  ))}{" "}
                </Field>{" "}
              </label>{" "}
              <ErrorMessage
                name="province"
                component="div"
                className="text-danger"
              />{" "}
            </div>

            <div className="form-group">
              <label
                htmlFor="district"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}`}
              >
                Huyện
                <Field as="select" name="district" className="form-control">
                  <option value="">Chọn huyện</option>
                  {Object.keys(VietnamDistricts).map((city) =>
                    VietnamDistricts[city].map((district, index) => (
                      <option
                        key={`${city}-${index}`}
                        value={`${city}-${district}`}
                      >
                        {`${city} - ${district}`}
                      </option>
                    ))
                  )}
                </Field>
              </label>
              <ErrorMessage
                name="district"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              {" "}
              <label
                htmlFor="addressType"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}`}
              >
                {" "}
                Loại địa chỉ{" "}
                <Field as="select" name="addressType" className="form-control">
                  {" "}
                  <option value="">Chọn loại địa chỉ</option>{" "}
                  <option value="Công Ty">Công Ty</option>{" "}
                  <option value="Nhà ở">Nhà Riêng</option>{" "}
                </Field>{" "}
              </label>{" "}
              <ErrorMessage
                name="addressType"
                component="div"
                className="text-danger"
              />{" "}
            </div>
            <div className="form-group">
              <label
                htmlFor="address"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Địa chỉ
                <Field type="text" name="address" className="form-control" />
              </label>
              <ErrorMessage
                name="address"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="note"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}`}
              >
                Ghi chú
                <Field as="textarea" name="note" className="form-control" />
              </label>
              <ErrorMessage
                name="note"
                component="div"
                className="text-danger"
              />
            </div>

           
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReactFormik;
