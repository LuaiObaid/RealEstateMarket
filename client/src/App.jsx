import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import PriavteRoute from './components/privateRoute'
import CreateListing from "./pages/CreateListing"
import UpdateListing from "./pages/updateListing"
import Listing from "./pages/listing"


export default function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/listing/:listingId" element={<Listing/>}/>
      <Route element={<PriavteRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create-listing" element={<CreateListing/>}/>
      <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}
