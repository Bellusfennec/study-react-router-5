import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/Posts/PostPage";
import PostsListPage from "./pages/Posts/PostsListPage";
import SignUpPage from "./pages/SigupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./layouts/AuthLayout";
import PostsLayout from "./layouts/PostsLayout";
import MainPage from "./pages/MainPage";
import { Navigate } from "react-router-dom";

const routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "", element: <Navigate to="/auth/signup" /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "*", element: <Navigate to="/auth/signup" /> },
    ],
  },
  {
    path: "posts",
    element: isLoggedIn ? (
      <PostsLayout />
    ) : (
      <Navigate to="/auth/login" state={{ referrer: location }} />
    ),
    children: [
      { path: "", element: <PostsListPage /> },
      { path: ":postId", element: <PostPage /> },
    ],
  },
  { path: "*", element: <Navigate to={isLoggedIn ? "/posts" : "/"} /> },
];

export default routes;
