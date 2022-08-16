import {
  Box,
  Divider,
  Stack,
  TextField,
  Button,
  Alert,
} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import React, { useEffect,useState } from "react"
import { firebaseApp } from "../firebase/firebaseConfig"
import { addDoc,collection,Timestamp } from "firebase/firestore"

export default function MessageInput(){
const [message, setMessage]= useState("")
const [error,setError] = useState(false)
const handleClick = async () => {
  setError(false)
  const firestore = firebaseApp.firestore
  if (message === "") {
    setError(true)
    return
  }

  try {
    const docRef = collection(firestore, "messages")
    await addDoc(docRef, {
      text: message,
      createdAt: Timestamp.fromDate(new Date()),
    })
    setMessage("")
  } catch (err) {
    console.log(err)
    setError(true)
  }
}

return (
  <Box
    sx={{
      flexGrow: 1,
      position: "fixed",
      bottom: 0,
      right: 0,
      width: "60%",
      zIndex: 9999,
      border: "solid",
    }}
  >
    <Divider />
    <Stack direction="row" spacing={2} sx={{ margin: "0.5rem 1rem"}}>
      <TextField
      size="small"
      sx={{ flex: 1 }}
      value={message}
      onChange={e => setMessage(e.target.value)}
       />
      <Button
      variant="contained"
      endIcon={<SendIcon />}
      onClick={() => handleClick()}
      >
        送信
      </Button>
    </Stack>
  </Box>
)
}