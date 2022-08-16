import { useRef,useLayoutEffect  } from "react"
import useFirebase from "./useFirebase"
import { Timestamp } from "firebase/firestore"
import { format } from "date-fns"
import {
  Box,
} from "@mui/material"

export default function Home(){
  const { documents: messages } = useFirebase("messages")
  interface Message {
    id: string
    text: string
    createdAt: Timestamp
  }
  const bottomRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    bottomRef?.current?.scrollIntoView()
  })
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
       <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: 20,
          width: "100%",
          ml:100,
          zIndex: 9999,
        }}>
          {/* <Link href="profile" underline="none" color="inherit">
            プロフィール
          </Link> */}
        </Box>
      {messages ? (
        messages.map((message: Message) => (
          <div key={message.id}>
            <p >message ID:{message.id}</p>
            <p>{format(message.createdAt.toDate(), "yyyy年MM月dd日")}</p>
            <p>{message.text}</p><br/>
          </div>
        ))
      ) : (
        <p>メッセージが存在しません</p>
      )}
      <div ref={bottomRef}></div>
    </Box>
  )
}