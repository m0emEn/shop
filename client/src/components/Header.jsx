import { IconButton } from "@chakra-ui/react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../redux/actions/productsActions";
const Header = () => {
  const dispatch = useDispatch();
  const { favoritesToggled } = useSelector((state) => state.product);
  return (
    <>
      {favoritesToggled ? (
        <IconButton
          icon={<MdOutlineFavorite size={"20px"} variant="ghost" />}
          onClick={() => dispatch(toggleFavorites(false))}
        />
      ) : (
        <IconButton
          icon={<MdOutlineFavoriteBorder size={"20px"} variant="ghost" />}
          onClick={() => dispatch(toggleFavorites(true))}
        />
      )}
    </>
  );
};

export default Header;
