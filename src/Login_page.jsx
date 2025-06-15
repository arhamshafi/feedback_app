import React, { useContext } from 'react';
import styled from 'styled-components';
import { appcontext } from './context';

function Login_page() {


  let { sign_up, setsign_up , handler , input , login_or_sign_up , alert , alrt_ref , sms} = useContext(appcontext)

  return (
    <StyledWrapper>
      <div className="form-container">
        <p className="title">{sign_up ? "Login Your Account" : "Welcome back"}</p>
        { alert && <p className={`text-center mt-[-15px] p-0 font-bold ${sms?.includes("Successfully")? "text-green-500" : "text-red-600"} `}>{sms}</p>   }
        <form className="form mt-4" onSubmit={(e) => e.preventDefault()}>
          {
            sign_up && <input type="text" className='input' placeholder='User_name' name='name' value={input.name} onChange={handler} />
          }
          <input type="email" className="input" placeholder="Email"  name='email' value={input.email} onChange={handler}  />
          <input type="password" className="input" placeholder="Password"  name='password' value={input.password} onChange={handler}  />

          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>

          <button className="form-btn" onClick={login_or_sign_up}>{sign_up ? "Sign up" : "Login"}</button>
        </form>

        <p className="sign-up-label">
          Don't have an account? <span className="sign-up-link tracking-[1px]" onClick={() => setsign_up(!sign_up)}>{sign_up ? "Login" : "Sign up"}</span>
        </p>

        <div className="buttons-container">
          <LoginButton
            type="apple"
            text={sign_up ? "Sign up with Apple" : "Log in with Apple"}
          />
          <LoginButton
            type="google"
            text={sign_up ? "Sign up with Google" : "Log in with Google"}
          />
        </div>
      </div>
    </StyledWrapper>
  );
}

function LoginButton({ type, text }) {
  return (
    <div className={`${type}-login-button`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', border: '1px solid #ccc', borderRadius: '25px' }}>
      {type === 'apple' ? (
        <svg className="apple-icon" viewBox="0 0 384 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M318.7 268.6c-.2-54.6 44.5-80.8 46.5-82.1-25.4-37.2-64.9-42.3-78.9-42.9-33.6-3.4-65.4 19.7-82.3 19.7s-42.7-19.2-70.2-18.7c-36 0-69.3 21.1-87.9 53.6-37.6 65.2-9.6 161.6 26.9 214.4 17.8 25.9 38.9 55 66.7 53.9 26.7-1.1 36.8-17.4 68.9-17.4s41.2 17.4 69.4 16.9c28.6-.5 46.7-26.4 64.2-52.5 20.1-29.3 28.4-57.7 28.6-59.2-.6-.3-54.8-21.1-55-83.7zM251.2 98.3c15.2-18.4 25.4-44.1 22.6-69.8-21.8.9-48.4 14.5-63.9 32.9-14 16.2-26.3 42-23 66.6 24.2 1.9 49-12.3 64.3-29.7z" />
        </svg>
      ) : (
        <svg className="google-icon" viewBox="0 0 48 48" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFC107" d="M43.6 20.1H42v-.1H24v8h11.3C33.8 33.4 29.5 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.9-5.9C33.1 6.2 28.8 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z" />
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 14 24 14c3 0 5.7 1.1 7.8 3l5.9-5.9C33.1 6.2 28.8 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
          <path fill="#4CAF50" d="M24 44c5.3 0 10.1-1.8 13.8-4.9l-6.4-5.2C29.5 36 26.9 37 24 37c-5.5 0-9.8-3.7-11.4-8.6l-6.6 5C9.6 39.7 16.3 44 24 44z" />
          <path fill="#1976D2" d="M43.6 20.1H42v-.1H24v8h11.3c-1.1 2.9-3.1 5.3-5.7 6.9v5.5h9.2c5.3-4.9 8.8-12.1 8.8-20.4 0-1.3-.1-2.7-.4-3.9z" />
        </svg>
      )}
      <span>{text}</span>
    </div>
  );
}


const StyledWrapper = styled.div`
  .form-container {
    width: 350px;
    height: auto;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-size: 28px;
    font-weight: 800;
    margin: 10px 0 30px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 15px;
  }

  .input {
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    padding: 12px 15px;
    outline: none;
  }

  .page-link {
    text-align: right;
    color: #747474;
    font-size: 9px;
    text-decoration: underline;
    cursor: pointer;
  }

  .page-link-label:hover {
    color: #000;
  }

  .form-btn {
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    background: teal;
    color: white;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .form-btn:active {
    box-shadow: none;
  }

  .sign-up-label {
    font-size: 10px;
    color: #747474;
    margin-top: 10px;
  }

  .sign-up-link {
    color: teal;
    text-decoration: underline;
    font-weight: bold;
    margin-left: 4px;
    cursor: pointer;
  }

  .buttons-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .apple-login-button,
  .google-login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 11px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
                rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .apple-login-button {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
  }

  .google-login-button {
    border: 2px solid #747474;
    background-color: #fff;
  }

  .apple-icon,
  .google-icon {
    font-size: 18px;
  }
`;

export default Login_page;
