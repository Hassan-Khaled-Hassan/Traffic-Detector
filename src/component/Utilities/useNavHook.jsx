import { useEffect, useState } from "react";


const useNavHook = () => {
  // eslint-disable-next-line no-unused-vars
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogOut = () => {
    console.log("dfksdfu");
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUser("");
     window.location.href = "/";
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // ========================================================
const [user, setUser] = useState("");
useEffect(() => {
  const userData = localStorage.getItem("userData");
  if (userData && userData != null) {
    setUser(JSON.parse(userData));
  }
}, []);
const [Token, setToken] = useState("");
useEffect(() => {
  const userData = localStorage.getItem("token");
  if (userData && userData != "") {
    setToken(userData);
  }
}, []);
if(Token===""){
  console.log(true);
}

// Use another useEffect to perform the split once user has been set
const [final, setFinal] = useState("");

useEffect(() => {
  if (user && user.name) {
    const parts = user.name.split(" ");
    const firstInitial =
      parts.length > 0 ? parts[0].charAt(0).toUpperCase() : "";

    const secondInitial =
      parts.length > 1 ? parts[1].charAt(0).toUpperCase() : "";
    setFinal(firstInitial + secondInitial);
    // console.log(firstInitial);
  }
}, [user]);


  return [
    anchorElUser,
    mobileMoreAnchorEl,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleMobileMenuOpen,
    screenWidth,
    setMobileMoreAnchorEl,
    handleLogOut,
    user,
    final,
    Token,
  ];
}

export default useNavHook