import { Container, LogoutBtn } from "../index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const authStatus = useSelector((state)=>{
    state.auth.status
  })
  
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]



  return (
    <header className="py-3 shadow-xl bg-gray-500">
      <Container>
        <nav className="felx">
          <div className="mr-4">
            <Link to="/">
            Logo
            </Link>
            <ul className="flex ml-auto">
              {navItems.map((items)=>(
                items.active ? (
                  <li key={items.name}>
                    <button
                    onClick={()=> navigate(items.slug)}
                    className="inline-block px-6 py-2 duration-300 hover:bg-blue-600 rounded-full"
                    >{items.name}</button>
                  </li>
                ) : null

              ))}
              {authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )}

            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
