/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import { useMaterialUIController } from "context";
import selectLetter from "../../../utils/selectLetter";

import clienteEditar from "../../../assets/images/metaforas/clienteEditar.png";
import clienteEliminar from "../../../assets/images/metaforas/clienteEliminar.png";

export default function data() {
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant={selectLetter(sizeLetter)} fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant={selectLetter(sizeLetter, 0)}>{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Datos
          </MDTypography>
        ),
        accessor: "author",
        width: "45%",
        align: "left",
      },
      // { Header: "Estado", accessor: "estado", align: "center" },
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Ingreso
          </MDTypography>
        ),
        accessor: "employed",
        align: "center",
      },
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Acciones
          </MDTypography>
        ),
        accessor: "action",
        align: "center",
      },
    ],

    rows: [
      {
        author: <Author image={team2} name="Chico Azabache" email="achico@unitru.edu.pe" />,
        estado: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Califica" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter)}
            color="text"
            fontWeight="medium"
          >
            23/04/18
          </MDTypography>
        ),
        action: (
          <>
            <Grid container spacing={2}>
              <Grid item>
                <MDButton color="warning">
                  <Grid container spacing={1}>
                    <Grid item xs={1}>
                      <img width={30} src={clienteEditar} alt="metafora" />
                    </Grid>
                    <Grid item xs={11} sx={{ paddingLeft: "20px !important" }}>
                      <MDTypography
                        color="white"
                        fontWeight="bold"
                        variant={selectLetter(sizeLetter)}
                      >
                        Editar
                      </MDTypography>
                    </Grid>
                  </Grid>
                </MDButton>
              </Grid>
              <Grid item>
                <MDButton color="error">
                  <Grid container spacing={1}>
                    <Grid item xs={1}>
                      <img width={30} src={clienteEliminar} alt="metafora" />
                    </Grid>
                    <Grid item xs={11} sx={{ paddingLeft: "20px !important" }}>
                      <MDTypography
                        color="white"
                        fontWeight="bold"
                        variant={selectLetter(sizeLetter)}
                      >
                        Eliminar
                      </MDTypography>
                    </Grid>
                  </Grid>
                </MDButton>
              </Grid>
            </Grid>
          </>
        ),
      },
    ],
  };
}
