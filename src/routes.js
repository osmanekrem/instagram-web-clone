import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./pages/auth";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "pages/auth/Register";
import MainLayout from "pages/Layout";
import ProfileLayout from "./pages/Profile";
import ProfilePosts from "pages/Profile/Posts";
import ProfileTagged from "pages/Profile/Tagged";
import InboxLayout from "pages/Inbox";
import Inbox from "pages/Inbox/Inbox";
import Chat from "pages/Inbox/Chat";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        auth: true,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ':username',
                element: <ProfileLayout />,
                children: [
                    {
                        index: true,
                        element: <ProfilePosts />
                    },
                    {
                        path: 'tagged',
                        element: <ProfileTagged />
                    }
                ]
            },
            {
                path: 'inbox',
                element: <InboxLayout />,
                children: [
                    {
                        index: true,
                        element: <Inbox />
                    },
                    {
                        path: ':conversationId',
                        element: <Chat />
                    }
                ]
            }
        ]
    },
    {
        path: '/accounts',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }

]

const authCheck = (routes) => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes);