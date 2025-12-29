import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Project from "./views/Project";
import CV from "./views/CV";
import Contact from "./views/Contact";

const router = createBrowserRouter([
  {
    path: "/",
  element: <Layout />,
  errorElement: (
  <div className="min-h-screen flex justify-center items-center"> 
    <h1 className="text-4xl">404 - Page Not Found 😥</h1>
  </div>
  ),
  children: [
    {path: "/",element: <Home />},
    {path: "aboutme", element: <AboutMe />},
    {path: "project", element: <Project />},
    {path: "cv", element: <CV />},
    {path: "contact", element: <Contact />,}
  ],
  }
])

export default function App() {
  return <RouterProvider router={router} />;
  
}