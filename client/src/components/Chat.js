import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, snapshotEqual, where } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import '../styles/Chat.css'
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
export const Chat=(props)=>
{
    
    const {room}=props;
    const [newMessage,setNewMessage]=useState("");
    const messagesRef=collection(db,"messages");
    const {palette}=useTheme();
    const [messages,setMessages]=useState([]);
    useEffect(()=>
    {
        const queryMessages=query(messagesRef,where("room","==",room),orderBy("createdAt"));
        const unsuscribe =onSnapshot(queryMessages,(snapshot)=>
        {
            let messages=[];
           snapshot.forEach((doc)=>
           {
                messages.push({...doc.data(),id:doc.id});
           });
           setMessages(messages);

        });
        return ()=>unsuscribe();
    },[])

    const handleSubmit =async(e)=>
    {
        e.preventDefault();
        if(newMessage==="") return;

        await addDoc(messagesRef,{
            text:newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });
        setNewMessage("");
    };
    return <div className="chat-app rounded-lg  p-3">
            <div className="header" > <h1>Welcome to: {room.toUpperCase()}</h1></div>
            <div className="messages"> 
            {messages.map((message)=>
            {
               return <div className="message" key={message.id}><span className="user">{message.user}</span>
                {message.text}
                </div>
            })}</div>
        <form className="new=message-form" onSubmit={handleSubmit}>
            <input className="new-message-input"
            placeholder="Type your message here..."
            onChange={(e)=>setNewMessage(e.target.value)}
            value={newMessage}
            />
            <Button
        
              fullWidth
              type="submit"
              sx={{
                width:"100px",
                
                backgroundColor: palette.primary.dark,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
              
            >
              Send
            </Button>
            
        </form>
    </div>
}
