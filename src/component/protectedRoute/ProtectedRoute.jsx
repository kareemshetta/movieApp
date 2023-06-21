import React, { useEffect } from "react";
import { checkLogin, isLoginUser } from "../../store/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const isUserLogin = useSelector(isLoginUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  if (isUserLogin) {
    return children;
  } else {
    return <Navigate to="/auth"></Navigate>;
  }

  //   return {isLoginUser?children:}<div>ProtectedRoute</div>;
}
