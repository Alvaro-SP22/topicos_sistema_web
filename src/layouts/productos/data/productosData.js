/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import bl001 from "assets/images/BL001.jpeg";
import bl0011 from "assets/images/BL001_1.jpeg";
import bl0012 from "assets/images/BL001_2.jpg";
import bc001 from "assets/images/BC001.jpeg";
import bc002 from "assets/images/BC002.jpeg";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";
import selectLetter from "../../../utils/selectLetter";

export default function data() {
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  const Producto = ({ image, name, email }) => (
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
            Producto
          </MDTypography>
        ),
        accessor: "producto",
        width: "50%",
        align: "left",
      },
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Stock
          </MDTypography>
        ),
        accessor: "stock",
        width: "center",
        align: "center",
      },
      {
        Header: (
          <MDTypography variant={selectLetter(sizeLetter, 3)} color="black">
            Estado
          </MDTypography>
        ),
        accessor: "estado",
        align: "center",
      },
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
        producto: <Producto image={bl001} name="Bota Larga(Ranger)" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>8</MDTypography>,
        estado: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="En stock" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter, 0)}
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
        producto: <Producto image={bl0011} name="Bota Larga(Negro)" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>0</MDTypography>,
        estado: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Agotado" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter, 0)}
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
      {
        producto: <Producto image={bl0012} name="Bota Larga(Vino)" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>10</MDTypography>,
        estado: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="En stock" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter, 0)}
            color="text"
            fontWeight="medium"
          >
            24/12/08
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
        producto: <Producto image={bc001} name="Botin Pasador" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>0</MDTypography>,
        estado: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Agotado" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter, 0)}
            color="text"
            fontWeight="medium"
          >
            04/10/21
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
        producto: <Producto image={bc002} name="Botin Hebilla" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>0</MDTypography>,
        estado: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Agotado" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter, 0)}
            color="text"
            fontWeight="medium"
          >
            14/09/20
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
