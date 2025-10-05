import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home, Public, Login, Zingchart, Radio, BangXepHang, Hub, Top100, AlbumDetail, SingerDetail, Search} from './containers/public/';
import { Routes, Route } from 'react-router-dom';
import path from './util/path'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as actions from './store/actions';
import {MyMusic} from './containers/system/'
import MvDetail from './containers/public/MvDetail';
import { toast } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  const { currentUser, favoriteSong, favoriteAlbum, favoriteSinger } = useSelector(state => state.app);
  useEffect(() => {
    dispatch(actions.getHome());
    if(currentUser && favoriteSong && favoriteAlbum) {
      dispatch(actions.setCurrentUser(currentUser, favoriteSong, favoriteAlbum, favoriteSinger));
    }

  }, [dispatch, currentUser, favoriteSong, favoriteAlbum, favoriteSinger]);
  const {message} = useSelector(state => state.app);
  
  useEffect(() => {
      if(message){
          toast.success(message);
          dispatch(actions.resetMessage());
      }
  }, [message, dispatch]);

  
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
          <Route path={path.SEARCH} element={<Search/>}/>
          <Route path={path.HUB} element={<Hub/>}/>
          <Route path={path.TOP100} element={<Top100/>}/>
          <Route path={path.STAR} element={<Home/>}/>
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
  )
}

export default App
