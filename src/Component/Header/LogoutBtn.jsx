import { useDispatch } from "react-redux"
import authService from "../../appWrite/auth"
import { logout } from "../../store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
            authService.logout()
            .then(()=>{
                    dispatch(logout())
            })
            .catch((e)=>{
                console.log("Error in logout btn", e);
            })        
    }
  return (
    <div>
        <button className="inline-block duration-300 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-2xl"
        onClick={handleLogout}
        >Logout</button>
    </div>
  )
}

export default LogoutBtn
