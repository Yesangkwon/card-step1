import AuthLogic, { logout } from "./authLogic.js"
import { app } from "/javascripts/firebase.js"

const authLogic = new AuthLogic()
const logoutBtn = document.querySelector('#logout')

logoutBtn.addEventListener('click', async()=>{
  await logout(authLogic.getUserAuth())
  window.localStorage.clear()
  window.location.href='/'
})