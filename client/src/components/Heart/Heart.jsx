import { useContext, useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { checkFavourites, updateFavourites } from "../../utils/common";
import { toFav } from "../../utils/api";

const Heart = ({ id }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const { validateLogin } = useAuthCheck();
    const { user } = useAuth0();

    const {
        userDetails: { favourites, token },
        setUserDetails,
    } = useContext(UserDetailContext);

    useEffect(() => {
        const isFav = checkFavourites(id, favourites);
        setIsFavorited(isFav);
    }, [favourites, id]);

    const { mutate } = useMutation({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: () => {
            setUserDetails((prev) => ({
                ...prev,
                favourites: updateFavourites(id, prev.favourites),
            }));
            setIsFavorited((prev) => !prev);
        },
    });

    const handleLike = () => {
        if (validateLogin()) {
            mutate();
        }
    };

    return (
        <FaBookmark
            size={24}
            color={isFavorited ? "green" : "yellow"}
            onClick={(e) => {
                e.stopPropagation();
                handleLike();
            }}
        />
    );
};

export default Heart;
