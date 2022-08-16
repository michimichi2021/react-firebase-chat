import {
  Box,
} from "@mui/material";

export default function Home(){
  return (
    <Box sx={{ flexGrow: 1, pt: 6, pb: 4 }}>
      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: 20,
          width: "100%",
          zIndex: 9999,
        }}
      >ホーム画面</Box>
    </Box>
  )
}