import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage/HomePage";

import Loader from "./shared/components/Loader/Loader";
import NotFound from "./shared/components/PageNotFound/NotFound";
import Layout from "./pages/Layout/Layout";

import { selectIsRefreshing } from "./redux/auth/authSelectors";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import ListPage from "./pages/ListPage/ListPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
  // const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     dispatch(currentUser());
  //   }
  // }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/psychologists"
                element={<PublicRoute>{<ListPage />}</PublicRoute>}
              />
              <Route
                path="/favorites"
                element={<PrivateRoute>{<FavoritesPage />}</PrivateRoute>}
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
