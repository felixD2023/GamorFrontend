import {
  LoginStyled,
  LoginContainer,
  LoginForm,
  HeaderLogin,
  InputsText,
  VisibilityPasswordButton,
  Button,
} from "./StyledComponents";

import Image from "../../Images/Login Image.png";

//icon
import "primeicons/primeicons.css"
import { useState } from "react";

//redux
import { useSelector,useDispatch } from "react-redux";
import { login } from "../../Redux/loggedUserSlice";
import { RootState } from "../../Redux/store";


//react-router-dom
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visiblePassword, setVisiblePassword]=useState(false);
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const registeredUser = useSelector((state:RootState)=>state.loggedUser.registeredUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const Login=()=>{
    if(username === registeredUser.username && password===registeredUser.password ){
      dispatch(login({password:password, username:username}));
      navigate('/');
    }else{
      alert("User name or password are incorrect")
    }
  }
  return (
    <LoginStyled>
      <LoginContainer>
        <img src={Image} style={{ height: "100%" }} alt="" />
        <LoginForm>
          <HeaderLogin>
            <strong>Login</strong>
          </HeaderLogin>
          <div style={{ marginTop: "40px" }}>
            <InputsText onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username..." />
            <div style={{ position: "relative" }}>
              <InputsText onChange={(e)=>setPassword(e.target.value)} value={password} type={visiblePassword?"text":"password"} placeholder="Password..." />{" "}
              <VisibilityPasswordButton onClick={()=>setVisiblePassword(!visiblePassword)} className={visiblePassword?"pi pi-eye-slash":"pi pi-eye"} />
            </div>
            <div style={{display:"flex",justifyContent:"right"}}>
              <Button  onClick={()=>Login()}><strong>Login</strong></Button>
            </div>
          </div>
        </LoginForm>
      </LoginContainer>
    </LoginStyled>
  );
};

export default Login;
