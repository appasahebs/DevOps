// Route Views
import Login from "./views/login";
export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    component: Login
  }
];
