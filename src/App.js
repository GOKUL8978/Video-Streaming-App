import React from 'react'
import {Box} from '@mui/material'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import {Feed} from '@mui/icons-material'
import Feed from './components/Feed.jsx'
import Navbar from './components/Navbar'
import VideoDetails from './components/VideoDetails'
import ChannelDetail from './components/ChannelDetail'
import  Searchfeed from './components/Searchfeed'

export default function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
    <Navbar />
    <Routes>
    <Route path='/' exact element={<Feed />}/>
    <Route path='/video/:id' element={<VideoDetails/>}/>
    <Route path='/channel/:id' element={<ChannelDetail/>}/>
    <Route path='/search/:searchTerm' element={<Searchfeed/>}/>
    </Routes>
    </Box>
    </BrowserRouter>
  )
}
