import { Button } from '@mui/material';
import {auth,provider} from '../firebase-config.js';
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie'
import { useTheme } from '@emotion/react';

const cookies =new Cookies();
export const Auth =(props)=>
{const { palette } = useTheme();
    const {setIsAuth}=props;
    const signWithGoogle = async()=>
    {
        try {
            const result=await signInWithPopup(auth,provider);
        console.log(result);
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true);
        } catch (error) {
            console.log(error);
        }
    }
    return <div className="auth w-[100%] mt-[-30px] bg-white h-[350px] flex rounded-xlg justify-center items-center flex-col">
        <p>Sign In with Google to Continue</p>
        {/* <button  onClick={signWithGoogle}>Sign In With Google</button> */}
        <Button 
        onClick={signWithGoogle}
              fullWidth
              type="submit"
              sx={{
                width:"200px",
                m: "3rem",
                p: "1rem",
                backgroundColor: palette.primary.dark,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
              
            >
              Sign In With Google
            </Button>
    </div>
}