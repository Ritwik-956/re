import React, { Fragment, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div>
        <Routers isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
