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

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import MDButton from "components/MDButton";
import ventaAgregar from "assets/images/metaforas/ventasAgregar.png";
import { useMaterialUIController } from "context";
import selectLetter from "../../utils/selectLetter";

function Usuarios() {
  // const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} textAlign="right">
            <MDButton color="primary">
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <img width={30} src={ventaAgregar} alt="metafora" />
                </Grid>
                <Grid item xs={11} sx={{ paddingLeft: "20px !important" }}>
                  <MDTypography
                    color="white"
                    fontWeight="bold"
                    variant={selectLetter(sizeLetter, 0)}
                  >
                    Registrar venta
                  </MDTypography>
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
                <MDTypography variant={selectLetter(sizeLetter, 3)} color="white">
                  Historial de ventas
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
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Usuarios;
