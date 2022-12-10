import React, { useRef } from 'react'
import styled from "styled-components"
import { Button } from '@mui/material'
import { db, auth } from "../firebase"
import firebase from "firebase/compat/app"
import { useAuthState } from "react-firebase-hooks/auth"
function ChatInput({channelName, channelId, chatRef}) {
    const inputRef = useRef(null)
    const [user] = useAuthState(auth)
    const sendMessage = (e) => {
        e.preventDefault()

        if(!channelId) {
            return false;
        }
        console.log(user.photoURL)
        db.collection('rooms').doc(channelId).collection("messages").add({
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        })

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        })

        inputRef.current.value = null
    }
  return (
    <ChatInputContainer>
        <form>
            <input ref={inputRef} placeholder={`Message #${channelName}`} />
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    >form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`