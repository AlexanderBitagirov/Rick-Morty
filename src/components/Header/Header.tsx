import { AppBar, Toolbar, Typography } from "@mui/material";
import { HeaderProps } from "./Header.props";

const Header = ({ text }: HeaderProps): JSX.Element => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {text}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
