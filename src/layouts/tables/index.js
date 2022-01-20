// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MDInput from "components/MDInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  border: 0,
  boxShadow: 24,
  p: 4,
};

function Clientes() {
  const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Registrar Cliente
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container>
                <Grid xs={12} item>
                  <Typography variant="subtitle2">Nombre</Typography>
                  <MDBox>
                    <MDInput placeholder="Nombre" size="full" />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant="subtitle2">Celular</Typography>
                  <MDBox>
                    <MDInput placeholder="Celular" size="full" />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant="subtitle2">Correo electrónico</Typography>
                  <MDBox>
                    <MDInput placeholder="Correo electrónico" size="full" />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant="subtitle2">Dirección</Typography>
                  <MDBox>
                    <MDInput placeholder="Dirección" size="full" />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant="subtitle2">Ciudad</Typography>
                  <MDInput placeholder="Ciudad" />
                </Grid>
                <Grid xs={12} item>
                  <MDButton color="secondary">Enviar</MDButton>
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Modal>
        <Grid container spacing={6}>
          <Grid item xs={12} textAlign="right">
            <MDButton color="primary" onClick={handleOpen}>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <Icon fontSize="small">add</Icon>
                </Grid>
                <Grid item xs={11}>
                  Registrar cliente
                </Grid>
              </Grid>
            </MDButton>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Clientes
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Clientes;
