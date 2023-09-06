import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthStatus } from "../../common/constant";

export default function useBlockLoginUser() {
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (status === AuthStatus.Login) {
      navigate("/", { replace: true });
    }
  }, [status, navigate]);
}
