import { Header, Footer } from "./index.js";
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
