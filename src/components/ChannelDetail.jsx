import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import VIdeos from './VIdeos'
import ChannelCard from './ChannelCard'
import {fetchFromAPI} from '../utilis/fetchFromAPI'
const ChannelDetail = () => {
    const [channelDetail,setChannelDetail] =useState(null)
    const [videos,setVideos] = useState(null);
    const {id} = useParams();
    console.log(channelDetail)
    useEffect(()=>{
      const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
       };

    fetchResults();
    },[id])
      return (
   <Box minHeight="95vh"><Box>
      <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,1) 22%, rgba(219,247,92,1) 100%)",zIndex: 10,height:'300px'}}/>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
    </Box>
     <Box display="flex" p={2}>
      <Box sx={{mr: {sm:'100px'}}}/>
          <VIdeos videos={videos}/>

     </Box>
   </Box>

  )
}

export default ChannelDetail