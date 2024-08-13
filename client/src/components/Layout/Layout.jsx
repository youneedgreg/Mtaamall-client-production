import React, { useContext, useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser, getAllProperties } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {
  useFavourites();
  useBookings();

  const [filter, setFilter] = useState("");
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await getAllProperties();
        setShops(data);
        setFilteredShops(data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchShops();
  }, []);

  useEffect(() => {
    setFilteredShops(
      shops.filter(shop => shop.title.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, shops]);

  useEffect(() => {
    const getTokenAndRegister = async () => {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://dev-spp8057zfmej1qlr.us.auth0.com/api/v2/",
          scope: "openid profile email",
        },
      });
      localStorage.setItem("access_token", token);
      setUserDetails((prev) => ({ ...prev, token }));
      mutate(token);
    };

    if (isAuthenticated) {
      getTokenAndRegister();
    }
  }, [isAuthenticated, getAccessTokenSilently, setUserDetails, mutate]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header filter={filter} setFilter={setFilter} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
