import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Albums from './albums'
import Comments from './comments'
import pic1 from '../pic1.png';
import pic2 from '../pic2.png';
import pic3 from '../pic3.png';
import pic4 from '../pic4.png';
import graph from '../graph.png'
import linking from '../linking.PNG'
import graph2 from '../graph2.png'
import calendar from '../calendar.png'
import projects from '../projects.png'
import Photos from './photos'
import Posts from './posts'
import Todos from './todos'
import Users from './users'
import '../App.css';
import GroupIcon from '@mui/icons-material/Group';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import CommentIcon from '@mui/icons-material/Comment';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

export default function Dashboard(){
    return(
        <>
        <h2 className='heading' style={{backgroundColor:"rgb(39, 8, 39)"}}>DashBoard</h2>
            <Routes>
                <Route path="todos" element={<Todos />}/>
                <Route path="photos" element={<Photos />}/>
                <Route path="comments" element={<Comments />}/>
                <Route path="posts" element={<Posts />}/>
                <Route path="albums" element={<Albums />}/>
                <Route path="users" element={<Users />}/>
            </Routes>
        
        <div className='navbar'>
            <ul>
            <FormatListNumberedRtlIcon className='icon1' style={{color: "white",fontSize:"15px"}} />
                <li style={{marginBottom:"17px"}}>Todos</li>
                <CommentIcon className='icon2' style={{color: "white",fontSize:"15px"}}  />
                <li style={{marginBottom:"17px"}}>Comments</li>
                <MarkAsUnreadIcon className='icon3' style={{color: "white",fontSize:"15px"}} />
                <li style={{marginBottom:"17px"}}>Posts</li>
                <PhotoCameraOutlinedIcon className='icon4' style={{color: "white",fontSize:"15px"}} />
                <li style={{marginBottom:"17px"}}>Photos</li>
                <GroupIcon className='icon5' style={{color: "white",fontSize:"15px"}} />
                <li style={{marginBottom:"17px"}}>Users</li>
                <PhotoAlbumIcon className='icon6' style={{color: "white",fontSize:"15px"}} />
                <li onClick={Albums} style={{marginBottom:"17px"}}>Albums</li>
            </ul>
        </div>
        <div className='backg'>
        <img className='pic1' src={pic1} alt="" />

        <img className='pic2' src={pic2} alt="" />

        <img className='pic3' src={pic3} alt="" />

        <img className='pic4' src={pic4} alt="" />

        <img className='graph' src={graph} alt="" />

        <img className='graph2' src={graph2} alt="" />

        <label className='date'>Tuesday May 31,2022</label>

        <img className='calendar' src={calendar} alt="" />

        <img className='project' src={projects} alt="" />

        <img className='linking' src={linking} alt="" />

        </div>
        </>
    )
}