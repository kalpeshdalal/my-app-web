import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../../components/common/buttonComp/buttonComp"
import { apiPOST } from "../../utilies/apiHandler";
import { logout } from "../../redux/reducers/authenticationReducer";
import { toast } from "react-toastify";

export const Home = () => {
  const dispatch = useDispatch();

  const userLogout = () => {
		dispatch(logout());
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
	};

  return (
    <div>
      <PrimaryButton text="Log Out"  onClick={userLogout} />
    </div>
  )
}