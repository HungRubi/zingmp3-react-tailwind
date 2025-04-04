import { ToastContainer } from 'react-toastify';
import {Home, Public, Login, Zingchart, Radio, BangXepHang, Hub, Top100, AlbumDetail, SingerDetail} from './containers/public/';
import { Routes, Route } from 'react-router-dom';
import path from './util/path'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as actions from './store/actions';
import {MyMusic} from './containers/system/'
import MvDetail from './containers/public/MvDetail';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome())
  }, [dispatch])
  
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.ZINGCHART} element={<Zingchart/>}/>
          <Route path={path.RADIO} element={<Radio/>}/>
          <Route path={path.MYMUSIC} element={<MyMusic/>}/>
          <Route path={path.DETAILALBUM} element={<AlbumDetail/>}/>
          <Route path={path.DETAILSINGER} element={<SingerDetail/>}/>
          <Route path={path.DETAILMV} element={<MvDetail/>}/>
          <Route path={path.BXH} element={<BangXepHang/>}/>
          <Route path={path.HUB} element={<Hub/>}/>
          <Route path={path.TOP100} element={<Top100/>}/>
          <Route path={path.STAR} element={<Home/>}/>
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
