/* eslint-disable no-unused-vars */
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import { isEmail, isEmpty } from "validator";
// Images
import bgImage from "assets/images/bg_login.jpg";
import { useMaterialUIController } from "context";
import { useNavigate } from "react-router-dom";
import selectLetter from "../../../utils/selectLetter";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    pass: false,
  });
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();
  const handleSignIn = () => {
    let status = false;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (!isEmpty(email) || !isEmpty(pass)) {
      setErrors({
        email: !isEmail(email),
        pass: pass.length < 4,
      });
      if (errors.email === false && errors.pass === false) status = true;
    } else {
      setErrors({
        email: true,
        pass: true,
      });
    }
    if (status) {
      navigate("panel");
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Iniciar Sesión
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                {/* <FacebookIcon color="inherit" /> */}
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                {/* <InstagramIcon color="inherit" /> */}
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                {/* <GoogleIcon color="inherit" /> */}
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox>
            <MDBox mb={2}>
              <MDInput type="email" id="email" label="Correo electrónico" fullWidth />
              <MDTypography
                fontWeight="bold"
                variant={selectLetter(sizeLetter, 4)}
                color={errors.email ? "error" : "text"}
              >
                {errors.email ? "Ingresa un correo válido" : ""}
              </MDTypography>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Contraseña" fullWidth id="password" />
              <MDTypography
                fontWeight="bold"
                variant={selectLetter(sizeLetter, 4)}
                color={errors.pass ? "error" : "text"}
              >
                {errors.pass ? "Ingresa una contraseña válida" : ""}
              </MDTypography>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Recuerdame
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                Iniciar Sesión
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
