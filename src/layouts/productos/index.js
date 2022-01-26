/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material/";
import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import productoEditar from "assets/images/metaforas/productoEditar.png";
import productoEliminar from "assets/images/metaforas/productoEliminar.png";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Modal from "@mui/material/Modal";
import MDBadge from "components/MDBadge";
// Data
import productosData from "layouts/productos/data/productosData";
import { useMaterialUIController } from "context";
import Swal from "sweetalert2";
import MDAvatar from "components/MDAvatar";
import producto from "../../assets/images/metaforas/productoAgregar.png";
import selectLetter from "../../utils/selectLetter";

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
function Productos() {
  const { columns, rows: filas } = productosData();
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = React.useState(filas);
  const handleEditProduct = () => console.log("Edit");
  const handleDeleteProduct = (name) => () => {
    Swal.fire({
      title: "Cuidado !",
      text: `Estas seguro que deseas eliminar el producto "${name}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      confirmButtonColor: "#278627",
      cancelButtonColor: "#d33",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setRows(filas);
        Swal.fire("Eliminado!", "El producto ha sido eliminado.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelado", "El producto no ha sido eliminado de tu lista !!", "error");
      }
    });
  };
  const handleAddProduct = () => {
    const image = document.getElementById("imageInput");
    const archivos = image.files;
    const srcImage = URL.createObjectURL(archivos[0]);
    const name = document.getElementById("nameInput").value;
    const fecha = document.getElementById("ingresoInput").value;
    const date = fecha.split("-");
    const ingreso = `${date[2]}/${date[1]}/${date[0]}`;
    const stock = document.getElementById("stockInput").value;
    const precio = document.getElementById("priceInput").value;
    const newProduct = [
      ...rows,
      {
        producto: (
          <>
            <MDBox display="flex" alignItems="center" lineHeight={1}>
              <MDAvatar src={srcImage} name={name} size="sm" />
              <MDBox ml={2} lineHeight={1}>
                <MDTypography
                  display="block"
                  variant={selectLetter(sizeLetter)}
                  fontWeight="medium"
                >
                  {name}
                </MDTypography>
              </MDBox>
            </MDBox>
          </>
        ),
        stock: <MDTypography variant={selectLetter(sizeLetter)}>{stock}</MDTypography>,
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
            {ingreso}
          </MDTypography>
        ),
        action: (
          <>
            <Grid container spacing={2}>
              <Grid item>
                <MDButton color="warning" onClick={handleEditProduct}>
                  <Grid container spacing={1}>
                    <Grid item xs={1}>
                      <img width={30} src={productoEditar} alt="metafora" />
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
                <MDButton color="error" onClick={handleDeleteProduct(name)}>
                  <Grid container spacing={1}>
                    <Grid item xs={1}>
                      <img width={30} src={productoEliminar} alt="metafora" />
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
    ];
    setRows(newProduct);
    handleClose();
    Swal.fire({
      icon: "success",
      title: "Producto agregado con éxito",
    });
  };
  return (
    <DashboardLayout>
      {/* MODALS */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant={selectLetter(sizeLetter, 3)}>
            Registrar Producto
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container>
              <Grid xs={12} item>
                <Typography variant={selectLetter(sizeLetter)}>Nombre</Typography>
                <MDBox>
                  <MDInput id="nameInput" placeholder="Nombre" xs={{ width: "100%" }} />
                </MDBox>
              </Grid>
              <Grid xs={12} item>
                <Typography variant={selectLetter(sizeLetter)}>Precio</Typography>
                <MDBox>
                  <MDInput id="priceInput" placeholder="Precio" xs={{ width: "100%" }} />
                </MDBox>
              </Grid>
              <Grid xs={12} item>
                <Typography variant={selectLetter(sizeLetter)}>Stock</Typography>
                <MDBox>
                  <MDInput id="stockInput" placeholder="Stock" type="number" />
                </MDBox>
              </Grid>
              <Grid xs={12} item>
                <Typography variant={selectLetter(sizeLetter)}>Ingreso</Typography>
                <MDBox>
                  <MDInput
                    type="date"
                    id="ingresoInput"
                    placeholder="Ingreso"
                    xs={{ width: "100%" }}
                  />
                </MDBox>
              </Grid>
              <Grid xs={12} item>
                <Typography variant={selectLetter(sizeLetter)}>Imagen</Typography>
                <MDInput id="imageInput" placeholder="Imagen" type="file" />
              </Grid>
              <Grid xs={12} item>
                <MDButton
                  color="info"
                  onClick={handleAddProduct}
                  sx={{ marginTop: "15px", width: "100%" }}
                >
                  Registrar
                </MDButton>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
      {/* END MODALS */}
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} textAlign="right">
            <MDButton color="primary" onClick={handleOpen}>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <img width={30} src={producto} alt="metafora" />
                </Grid>
                <Grid item xs={11} sx={{ paddingLeft: "20px !important" }}>
                  <MDTypography
                    color="white"
                    fontWeight="bold"
                    variant={selectLetter(sizeLetter, 0)}
                  >
                    Registrar producto
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
                  Productos
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
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Productos;
