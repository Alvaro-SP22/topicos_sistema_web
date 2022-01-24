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
import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import { useMaterialUIController } from "context";
import selectLetter from "../../../utils/selectLetter";

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
            Código
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
        author: <Author image={team3} name="Carla Zapata" email="czapata@unitru.edu.pe" />,
        estado: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Moroso" color="dark" variant="gradient" size="sm" />
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
            11/01/19
          </MDTypography>
        ),
        action: (
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
