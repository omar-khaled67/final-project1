import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Doners from "./pages/Doners"
import Prospect from "./pages/prospect"
import Prospects from "./pages/Prospects"
import Menu from "./components/Menu"
import NewDonor from "./pages/NewDonor"
import Donor from "./pages/Doner"






function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>

        <div>
          <Outlet />
        </div>
      </div>

    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/admin',
      element: <Layout />,
      children:
        [
          {
            path: "/admin",
            element: <Admin />
          },
          {
            path: "/admin/doners",
            element: <Doners />

          },
          {
            path: "/admin/prospects",
            element: <Prospects />

          },
          {
            path: "/admin/prospect/:id",
            element: <Prospect />

          },
          {
            path: "/admin/newdonor",
            element: <NewDonor />

          },
          {
            path: "/admin/donor/:id",
            element: <Donor />

          }
        ]

    }
  ])

  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App
