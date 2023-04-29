import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography className="text-blue-300" fontWeight="bold" fontSize="32px" color="Secondary" sx={{color: theme.palette.primary.dark}}>
          ViralVibes
        </Typography>
      </Box>

      <Box
        className="bg-blue-100"
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        // backgroundColor={theme.palette.background.alt}
      >
        <Typography className=" flex justify-center" fontWeight="500" variant="h5" sx={{ mb: "1.5rem",color: theme.palette.primary.dark, }}  >
          Welcome to ViralVibes, the Social Media for Influencers!
        </Typography>
        <div className="flex flex-row justify-between">
          <div className="w-[35%]">
            <img className="rounded-lg" src="https://cdn.pixabay.com/photo/2021/05/15/20/10/e-learning-6256581_960_720.jpg" width="300px"  height="400px" alt="" />
          </div>
          <div className="w-[60%]">
          <Form />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default LoginPage;
