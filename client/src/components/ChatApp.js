import React,{useState,useRef} from 'react'
import '../App.css';
import { Auth } from './Auth';
import Cookies from 'universal-cookie';
import { Chat } from './Chat';
import { signOut } from 'firebase/auth';
import {auth} from '../firebase-config'
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';
const cookies =new Cookies();
function ChatApp() {
  const [isAuth,setIsAuth]=useState(cookies.get("auth-token"));
  const [room,setRoom]=useState(null);
  const {palette}=useTheme();
  const roomInputRef=useRef(null);
  const signUserOut=async()=>
  {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }
  if(!isAuth)
  {
    return (
      <div className=" bg-white rounded-lg">
        <h1><Auth setIsAuth={setIsAuth}/></h1>
      </div>
    );
  }
  return (<div className='bg-white p-8 flex flex-col mt-[-30px] rounded-lg'  >{room?(<Chat room={room}/>):(<div className='room bg-white'><label>Enter Room Name</label>
<input  ref={roomInputRef}/>
<Button onClick={()=> setRoom(roomInputRef.current.value)}         
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.dark,
            borderRadius: "3rem",
          }}
        >
          <span className="text-white">Enter Chat</span>
        </Button>

  </div>)}
  <div className='sign-out bg-white rounded-lg'><Button sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.dark,
            borderRadius: "3rem",
          }} onClick={signUserOut}>sign-Out</Button></div>
  </div>)
  
}

export default ChatApp
;
