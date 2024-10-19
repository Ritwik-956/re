import React, { Fragment, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn}/>
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
