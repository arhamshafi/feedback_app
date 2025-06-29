import React, { createContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const appcontext = createContext()

function Context({ children }) {

  let [sign_up, setsign_up] = useState(false)
  let [input, setinput] = useState({ name: "", email: "", password: "" })
  let [alert, setalert] = useState(false)
  let [sms, setsms] = useState(null)
  let navigation = useNavigate()
  let crtn_user = JSON.parse(localStorage.getItem("current_user") || null)

  useEffect(() => {
    let timer = setTimeout(() => {
      setalert(false)
    }, 1500);
    return () => { clearTimeout(timer) }
  }, [alert])

  function handler(e) {
    setinput({ ...input, [e.target.name]: e.target.value })
  }

  function login_or_sign_up() {

    let localusers = JSON.parse(localStorage.getItem("users") || "[]")

    if (sign_up) {
      let emailexists = localusers.some(user => user.email === input.email)
      if (emailexists) {
        setsms("This Email is already Registered")
        setalert(true)
        return;
      }
      if (input.name === "" || input.email === "" || input.password === "") {
        setsms("Fill Your Form !!")
        setalert(true)
        return;
      }

      localusers.push({ ...input, id: Date.now().toString() })
      // user ko  unique id deni ha tak access kr sky or working smooth ho ...
      localStorage.setItem("users", JSON.stringify(localusers))
      localStorage.setItem("current_user", JSON.stringify(input))
      setinput({ name: "", email: "", password: "" })
      setsms("Account Created Successfully...")
      setalert(true)
      setTimeout(() => {
        navigation("/socail")
        setsign_up(false)
        setinput({ name: "", email: "", password: "" })
      }, 1000);
    }
    else {
      if (input.password == "" || input.email == "") {
        setsms("Fill to Login 🧷")
        setalert(true)
        return;
      }
      let match_user = localusers.find(user => user.email === input.email && user.password === input.password)
      if (match_user) {
        localStorage.setItem("current_user", JSON.stringify(match_user))
        // alert(`welcome back , ${match_user.name}`)
        setsms("Login Successfully...")
        setalert(true)
        setTimeout(() => {
          navigation("/socail")
          setinput({ name: "", email: "", password: "" })
        }, 1000);

      }
      else {
        // alert("Invalid Credentials")
        setsms("Invalid Credentials")
        setalert(true)
        setinput({ ...input, password: "" })
      }

    }

  }

  function logout() {
    localStorage.setItem("current_user", JSON.stringify(""))
    navigation("/")
  }

  return (
    <appcontext.Provider value={{
      sign_up, setsign_up,
      input,
      handler,
      login_or_sign_up,
      alert, setalert,
      sms,
      crtn_user,
      logout

    }}>
      {children}
    </appcontext.Provider>
  )
}

export default Context