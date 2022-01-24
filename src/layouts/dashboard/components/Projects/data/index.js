/* eslint-disable react/prop-types */
// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

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
import { useMaterialUIController } from "context";
import selectLetter from "../../../../../utils/selectLetter";

export default function data() {
  const [varContext] = useMaterialUIController();
  const { sizeLetter } = varContext;
  // eslint-disable-next-line no-unused-vars
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant={selectLetter(sizeLetter)} fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: <MDTypography variant={selectLetter(sizeLetter)}>Producto</MDTypography>,
        accessor: "companies",
        width: "45%",
        align: "left",
      },
      {
        Header: <MDTypography variant={selectLetter(sizeLetter)}>Stock</MDTypography>,
        accessor: "stock",
        width: "10%",
        align: "center",
      },
      {
        Header: <MDTypography variant={selectLetter(sizeLetter)}>Próximo ingreso</MDTypography>,
        accessor: "budget",
        align: "center",
      },
    ],

    rows: [
      {
        companies: <Company image={bl001} name="Bota Larga(Ranger)" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>3</MDTypography>,
        budget: (
          <MDTypography variant={selectLetter(sizeLetter)} color="text" fontWeight="medium">
            10/02/2022
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={bl0011} name="Bota Larga(Negro)" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>1</MDTypography>,
        budget: (
          <MDTypography variant={selectLetter(sizeLetter)} color="text" fontWeight="medium">
            01/02/2022
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={bl0012} name="Bota Larga(Vino)s" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>10</MDTypography>,
        budget: (
          <MDTypography variant={selectLetter(sizeLetter)} color="text" fontWeight="medium">
            No programado
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={bc001} name="Botin Pasador" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>8</MDTypography>,
        budget: (
          <MDTypography variant={selectLetter(sizeLetter)} color="text" fontWeight="medium">
            31/01/2022
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={bc002} name="Botin Hebilla" />,
        stock: <MDTypography variant={selectLetter(sizeLetter)}>9</MDTypography>,
        budget: (
          <MDTypography variant={selectLetter(sizeLetter)} color="text" fontWeight="medium">
            No programado
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
