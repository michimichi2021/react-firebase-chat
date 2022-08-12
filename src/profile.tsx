import React, { useState } from "react"
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Container,
  Avatar,
  Alert,
} from "@mui/material"
import { firebaseApp } from "./firebase/firebaseConfig"
import { ref,uploadBytes,getDownloadURL  } from "firebase/storage"
import { useUser } from "./useAuth"

export default function Profile(){
  const [name, setName] = useState("")
  const [image,setImage] = useState<File|null>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0])
    }
  }

  const firestorage = firebaseApp.firestorage
  const [error, setError] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (image) {
        const imageRef = ref(firestorage, image.name)

        uploadBytes(imageRef, image).then(snapshot => {
          getDownloadURL(imageRef).then(url => {
            console.log("Uploaded a file!", snapshot)
          })
        })
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ m: 4, p: 4 }}>
        <Typography align="center">プロフィール編集</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
        <Avatar src={image ? URL.createObjectURL(image) : ""} alt="" />
         <input
         id="image"
         type="file"
         accept="image/*"
         onChange={handleChange}
         style={{ display: "none" }}
         />
         <label htmlFor="image">
         <Button variant="contained" color="primary" component="span">
            画像を選択
          </Button>
         </label>
          {
            error && <Alert severity="error">送信できませんでした</Alert>
          }
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="ユーザー名"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            保存
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
