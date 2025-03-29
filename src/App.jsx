import { ToastContainer } from 'react-toastify';
// import { useSelector, useDispatch } from 'react-redux';
import {Home, Public, Login} from './containers/public/';
import { Routes, Route } from 'react-router-dom';
import path from './util/path'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as actions from './store/actions'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome())
  }, [dispatch])
  
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />}/>
          <Route path={path.LOGIN} element={<Login />}/>
          <Route path={path.STAR} element={<Home />}/>
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
