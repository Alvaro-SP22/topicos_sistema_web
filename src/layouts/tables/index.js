/* eslint-disable no-unused-vars */
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
import { isEmail, isEmpty } from "validator";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MDInput from "components/MDInput";
import { useMaterialUIController } from "context";
import cliente from "assets/images/metaforas/clienteAgregar.png";
import clienteEliminar from "assets/images/metaforas/clienteEliminar.png";
import clienteEditar from "assets/images/metaforas/clienteEditar.png";
import Swal from "sweetalert2";
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

function Clientes() {
  const { columns } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  const [errors, setErrors] = React.useState({
    email: false,
    pass: false,
  });
  const [openEditModal, setOpenEditModal] = React.useState(false);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const [rows, setCliente] = React.useState([
    {
      author: (
        <>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant={selectLetter(sizeLetter, 3)}>Alvaro Chico</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={selectLetter(sizeLetter)}>achico@unitru.edu.pe</Typography>
            </Grid>
          </Grid>
        </>
      ),
      employed: (
        <MDTypography
          component="a"
          href="#"
          variant={selectLetter(sizeLetter)}
          color="text"
          fontWeight="medium"
        >
          10/01/2022
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
  ]);
  const handleEditClient = () => () => {
    handleOpenEditModal();
  };
  const handleDeleteClient = (email) => () => {
    Swal.fire({
      title: "Cuidado !",
      text: `Estas seguro que deseas eliminar el cliente "${email}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      confirmButtonColor: "#278627",
      cancelButtonColor: "#d33",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const newArray = rows.splice(-1, 1);
        setCliente(newArray);
        Swal.fire("Eliminado!", "El cliente ha sido eliminado.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelado", "El cliente no ha sido eliminado de tu lista !!", "error");
      }
    });
  };
  const handleUpdateClient = () => {
    const name = document.getElementById("nameInputNew").value;
    const phone = document.getElementById("phoneInputNew").value;
    const email = document.getElementById("emailInputNew").value;
    const address = document.getElementById("addressInputNew").value;
    const city = document.getElementById("cityInputNew").value;
    const newRows = [
      {
        author: (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant={selectLetter(sizeLetter, 3)}>Alvaro Chico</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={selectLetter(sizeLetter)}>achico@unitru.edu.pe</Typography>
              </Grid>
            </Grid>
          </>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter)}
            color="text"
            fontWeight="medium"
          >
            10/01/2022
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
                        onClick={handleUpdateClient}
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
      {
        author: (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant={selectLetter(sizeLetter, 3)}>{name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={selectLetter(sizeLetter)}>{email}</Typography>
              </Grid>
            </Grid>
          </>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter)}
            color="text"
            fontWeight="medium"
          >
            26/01/2022
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
    ];
    setCliente(newRows);
    handleCloseEditModal();
    Swal.fire({
      icon: "success",
      title: "Cliente actualizado con éxito",
    });
  };

  const handleAddClient = () => {
    const status = false;
    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("phoneInput").value;
    const email = document.getElementById("emailInput").value;
    const address = document.getElementById("addressInput").value;
    const city = document.getElementById("cityInput").value;
    const newClient = [
      ...rows,
      {
        author: (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant={selectLetter(sizeLetter, 3)}>{name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={selectLetter(sizeLetter)}>{email}</Typography>
              </Grid>
            </Grid>
          </>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant={selectLetter(sizeLetter)}
            color="text"
            fontWeight="medium"
          >
            26/01/2022
          </MDTypography>
        ),
        action: (
          <>
            <Grid container spacing={2}>
              <Grid item>
                <MDButton color="warning" onClick={handleEditClient(email)}>
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
                <MDButton color="error" onClick={handleDeleteClient(email)}>
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
    ];
    setCliente(newClient);
    handleClose();
    Swal.fire({
      icon: "success",
      title: "Cliente agregado con éxito",
    });
  };

  const handleSignIn = () => {
    let status = false;
    const email = document.getElementById("emailInput").value;
    const pass = document.getElementById("phoneInput").value;
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
      handleClose();
      Swal.fire("Cliente Agregado con éxito", "success");
    }
  };

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
            <Typography id="modal-modal-title" variant={selectLetter(sizeLetter, 3)}>
              Registrar Cliente
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
                  <Typography variant={selectLetter(sizeLetter)}>Celular</Typography>
                  <MDBox>
                    <MDInput id="phoneInput" placeholder="Celular" xs={{ width: "100%" }} />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Correo electrónico</Typography>
                  <MDBox>
                    <MDInput id="emailInput" placeholder="Correo electrónico" />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Dirección</Typography>
                  <MDBox>
                    <MDInput id="addressInput" placeholder="Dirección" xs={{ width: "100%" }} />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Ciudad</Typography>
                  <MDInput id="cityInput" placeholder="Ciudad" />
                </Grid>
                <Grid xs={12} item>
                  <MDButton
                    color="info"
                    onClick={handleAddClient}
                    sx={{ marginTop: "15px", width: "100%" }}
                  >
                    Registrar
                  </MDButton>
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={openEditModal}
          onClose={handleCloseEditModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant={selectLetter(sizeLetter, 3)}>
              Editar Cliente
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Nombre</Typography>
                  <MDBox>
                    <MDInput id="nameInputNew" placeholder="Nombre" xs={{ width: "100%" }} />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Celular</Typography>
                  <MDBox>
                    <MDInput id="phoneInputNew" placeholder="Celular" xs={{ width: "100%" }} />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Correo electrónico</Typography>
                  <MDBox>
                    <MDInput id="emailInputNew" placeholder="Correo electrónico" type="email" />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Dirección</Typography>
                  <MDBox>
                    <MDInput id="addressInputNew" placeholder="Dirección" xs={{ width: "100%" }} />
                  </MDBox>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant={selectLetter(sizeLetter)}>Ciudad</Typography>
                  <MDInput id="cityInputNew" placeholder="Ciudad" />
                </Grid>
                <Grid xs={12} item>
                  <MDButton
                    color="info"
                    onClick={handleUpdateClient}
                    sx={{ marginTop: "15px", width: "100%" }}
                  >
                    Actualizar
                  </MDButton>
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
                  <img width={30} src={cliente} alt="metafora" />
                </Grid>
                <Grid item xs={11} sx={{ paddingLeft: "20px !important" }}>
                  <MDTypography
                    color="white"
                    fontWeight="bold"
                    variant={selectLetter(sizeLetter, 0)}
                  >
                    Registrar cliente
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
