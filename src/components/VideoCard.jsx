import React from 'react'
import {Link} from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {  demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utilis/constants'
const VideoCard = ({video:{id :{videoId},snippet}}) => {
 
  return (
  <Card sx={{width:{xs: '100%', sm: '358px', md: "300px"},boxShadow: 'none',borderRadius: '0'}}>
    <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
    <CardMedia 
    alt={snippet?.title}
    sx={{width:{ xs: '100%', sm: '358px',md:'320px'},height:180}}
    
    image={snippet?.thumbnails?.high?.url}/>
    </Link>
   <CardContent sx={{backgroundColor: "#1e1e1e" ,height: '106px'}}>
  <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
    <Typography varient="subtitle1" fontWeight="bold" color="#FFF">
      {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60) }
    </Typography>
    </Link>
    <Link to={snippet.channelId?`/channel/${snippet?.channelId}`: demoChannelUrl}>
    <Typography varient="subtitle1"  color="gray">
      {snippet?.channelTitle || demoChannelTitle }
      <CheckCircle sx={{fontSize: 10,color: 'gray',ml:'5px'}}/>
    </Typography>
    </Link>
   </CardContent>
  </Card>
  )
}

export default VideoCard