import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
const DashBoard = (props) => {
    return <div><Breadcrumbs aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href="/">
      MUI
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Core
    </Link>
    <Typography color="text.primary">Breadcrumbs</Typography>
  </Breadcrumbs></div>;
};

export default DashBoard;
