// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { useMaterialUIController } from "context";
import cliente from "assets/images/metaforas/cliente.png";
import producto from "assets/images/metaforas/producto.png";
import venta from "assets/images/metaforas/ventas.png";
import selectLetter from "../../../../utils/selectLetter";

function ComplexStatisticsCard({ color, title, count, percentage, icon }) {
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          {icon === 1 && <img width={30} src={cliente} alt="metafora" />}
          {icon === 2 && <img width={30} src={producto} alt="metafora" />}
          {icon === 3 && <img width={30} src={venta} alt="metafora" />}
          {icon === 4 && <>S/</>}
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant={selectLetter(sizeLetter)} fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant={selectLetter(sizeLetter, 2)}>{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2}>
        <MDTypography variant={selectLetter(sizeLetter)} color="text" display="flex">
          <MDTypography
            component="span"
            variant={selectLetter(sizeLetter)}
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </MDTypography>
          &nbsp;{percentage.label}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default ComplexStatisticsCard;
