/* eslint-disable react/prop-types */

// @mui material components
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import team2 from "assets/images/team-2.jpg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";

import { useMaterialUIController } from "context";
import selectLetter from "../../../utils/selectLetter";

export default function data() {
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography
        display="block"
        variant={selectLetter(sizeLetter)}
        fontWeight="medium"
        ml={1}
        lineHeight={1}
      >
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant={selectLetter(sizeLetter)} color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Vendedor
          </MDTypography>
        ),
        accessor: "vendedor",
        width: "30%",
        align: "left",
      },
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Monto
          </MDTypography>
        ),
        accessor: "monto",
        align: "center",
      },
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Estado
          </MDTypography>
        ),
        accessor: "status",
        align: "center",
      },
      // { Header: "completion", accessor: "completion", align: "center" },
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Acciones
          </MDTypography>
        ),
        accessor: "accion",
        align: "center",
      },
    ],

    rows: [
      {
        vendedor: <Project image={team2} name="Alvaro Chico" />,
        monto: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter)}
            color="text"
            fontWeight="medium"
          >
            S/ 250.00
          </MDTypography>
        ),
        status: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter, 0)}
            color="text"
            fontWeight="medium"
          >
            Procesada
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        accion: (
          <>
            <Grid container spacing={2}>
              <Grid item>
                <MDButton color="info">
                  <MDTypography color="white" fontWeight="bold" variant={selectLetter(sizeLetter)}>
                    Editar
                  </MDTypography>
                </MDButton>
              </Grid>
              <Grid item>
                <MDButton color="error">
                  <MDTypography color="white" fontWeight="bold" variant={selectLetter(sizeLetter)}>
                    Eliminar
                  </MDTypography>
                </MDButton>
              </Grid>
            </Grid>
          </>
        ),
      },
      {
        vendedor: <Project image={team2} name="Alvaro Chico" />,
        monto: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter)}
            color="text"
            fontWeight="medium"
          >
            S/ 400.00
          </MDTypography>
        ),
        status: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter, 0)}
            color="text"
            fontWeight="medium"
          >
            Procesada
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        accion: (
          <>
            <Grid container spacing={2}>
              <Grid item>
                <MDButton color="info">
                  <MDTypography color="white" fontWeight="bold" variant={selectLetter(sizeLetter)}>
                    Editar
                  </MDTypography>
                </MDButton>
              </Grid>
              <Grid item>
                <MDButton color="error">
                  <MDTypography color="white" fontWeight="bold" variant={selectLetter(sizeLetter)}>
                    Eliminar
                  </MDTypography>
                </MDButton>
              </Grid>
            </Grid>
          </>
        ),
      },
    ],
  };
}
