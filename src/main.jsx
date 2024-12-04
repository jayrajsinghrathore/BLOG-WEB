import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react';
import Blog from './pages/Blog.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Newsletter from './pages/Newsletter.jsx';
import SingleBlog from './pages/SingleBlog.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Blog/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/newsletter",
                element: <Newsletter/>
            },
            {
                path: "/blogs/:id",
                element: <SingleBlog/>

            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
 
<StrictMode>
<RouterProvider router={router} />
</StrictMode>
)
