import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { UseLogout } from "./UseLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = UseLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowLeftOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
