import React,{useState,useEffect} from 'react'
import { useLocation,useHistory } from "react-router-dom";
import {Formik,Form,Field} from 'formik';
import './Edituserpanel.css'
import Axios from 'axios';
import {Redirect} from  'react-router-dom';
import Authservice from './auth.services';

function Edituserpanel() {
    const location =useLocation();
    const history =useHistory();
    console.log('edit user page id is ',  location.state.id);
    localStorage.setItem('stateid',location.state.id);

    const id = localStorage.getItem('stateid')
    const stat = Authservice.getCurrentUser();
   
     const [detail, setdetail] = useState([])
     const [word, setword] = useState('')
    const [newfirstname, Setfirst] = useState()
    const [newlastname, Setlast] = useState()
    const [newemail, Setemail] = useState()


    
    // const data=async(id)=> {
    //     try{
    //         const data = await Axios.get(`http://localhost:4000/getsingle/${id}`);
    //         setdetail(data.data);
    //         console.log('kumar',data.data)
    //     } catch(e){
    //         console.log(e)
    //     }
    // }
    // useEffect(()=>{
    //     data(id);
    // },[])

const sendfnameupdate = (id) =>{
        const user = JSON.parse(localStorage.getItem('data'))
        const token = user.token
         Axios.put('http://localhost:4000/updatefname',{name:newfirstname,id:id,lname:newlastname,email:newemail},{headers:{"authorization":`Bearer ${token}`} }).then((response)=>{
                if(response.data.message==='updated'){
                      history.push('/adminpanel')
                }
         })
       
}



console.log('detail is',detail[0])
    return (
        <div>
        { !stat?<Redirect to='/'/>
        :
        <div>
              <div className='adduserdiv'>
                                      
                            <div className='editnamediv'>
                                 <label className='editf' for='first name'>First name</label>
                                 <input placeholder='first name' className='editdetail' onChange={(e)=>{Setfirst(e.target.value)}}/><br/><br/>
                                 </div>
                                 <div className='editlnamediv'>
                                 <label  className='editf'  for='last name'>Last name</label>
                                 <input placeholder='last name' className='editdetail' onChange={(e)=>{Setlast(e.target.value)}}/><br/><br/>
                                 </div>
                                 <div className='editemaiiv'>
                                 <label className='editf' for='email'>Email</label>
                                 <input placeholder='new email' className='editdetail' onChange={(e)=>{Setemail(e.target.value)}}/><br/><br/>
                                 </div>
                                 <div classname='updatebtn'>
                                 <button type='submit' className='btn btn-danger' onClick={()=>{sendfnameupdate(id)}}>Update</button>
                                 </div>
                   
                   
                </div>
        </div>}
        </div>
    )
}

export default Edituserpanel
