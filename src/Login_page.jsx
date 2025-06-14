import React, { useContext } from 'react';
import styled from 'styled-components';
import { appcontext } from './context';

function Login_page() {


    let { sign_up, setsign_up } = useContext(appcontext)


    return (
        <StyledWrapper>
            <div className="form-container">
                <p className="title">{sign_up ? "Login Your Account" : "Welcome back"}</p>

                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    {
                        sign_up && <input type="text" className='input' placeholder='Enter Name' />
                    }
                    <input type="email" className="input" placeholder="Email" />
                    <input type="password" className="input" placeholder="Password" />

                    <p className="page-link">
                        <span className="page-link-label">Forgot Password?</span>
                    </p>

                    <button className="form-btn">{sign_up ? "Sign up" : "Login"}</button>
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
        <div className={`${type}-login-button`}>
            {type === 'apple' ? (
                <svg className="apple-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M747.4 535.7c-.4-68.2 ... z" />
                </svg>
            ) : (
                <svg className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC107" d="M43.611,20.083H42V20 ... z" />
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
