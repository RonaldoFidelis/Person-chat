import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Link } from 'react-router-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCQ_PlrZP-U-vkrqGSGnT5M-biMmTmrs_A",
  authDomain: "app-finance-33f60.firebaseapp.com",
  projectId: "app-finance-33f60",
  storageBucket: "app-finance-33f60.appspot.com",
  messagingSenderId: "199612082398",
  appId: "1:199612082398:web:69f710ea75a25b95dffa4f",
  measurementId: "G-TZ2NGP2C80"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export function Login() {

  const handleSubmit = () => { }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-login text-font-main-login">
      <form
        action=""
        className="flex flex-col gap-5 bg-bg-display-login p-8 rounded-md"
        onSubmit={() => handleSubmit()}>
        <h1 
          className="m-auto text-lg font-semibold">User login</h1>
        <label
          htmlFor="email"
          className="flex flex-col">
          <p className="text-[15px] font-medium">E-mail</p>
          <input
            type="email"
            id="email"
            required
            className="h-[40px] rounded-sm bg-bg-input border-none outline-none p-2 text-slate-500" />
        </label>
        <label
          htmlFor="password"
          className="flex flex-col">
          <p className="text-[15px] font-medium">Password</p>
          <input
            type="password"
            id="password"
            required
            className="h-[40px] rounded-sm bg-bg-input border-none outline-none p-2 text-slate-500" />
        </label>
        <Link 
          to='/register'
          className="flex justify-end text-sm hover:text-font-main-login duration-500 text-slate-500">Don&apos;t have access?</Link>
        <button 
          className="bg-btn-login h-[40px] rounded-sm font-medium hover:bg-btn-login-confirm duration-500">Login</button>
      </form>
    </div>
  )
}