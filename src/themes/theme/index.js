import { createTheme } from "@mui/material";
import Palette from "../palette";
import Typography from "../typography";

const Theme = (mode, type) => {
  const palette = Palette(mode, type);
  const typography = Typography();
  
  return createTheme({
    ...palette,
    ...typography,
  });
};

export default Theme;
