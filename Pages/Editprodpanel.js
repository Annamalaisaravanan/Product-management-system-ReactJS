import React,{useState} from 'react'
import Authservice from './auth.services'
import {Redirect,useHistory,useLocation} from 'react-router-dom'
import Axios from 'axios';


function Editprodpanel() {

  const stat = Authservice.getCurrentUser();
     const [quan, setquan] = useState('')
     const [word, setword] = useState('')
     const history = useHistory();
     const location = useLocation();

     localStorage.setItem('productid',location.state.productid)
     const productid = localStorage.getItem('productid')

 const update = () =>{
            const user = JSON.parse(localStorage.getItem('data'))
            const token = user.token
            Axios.put('http://localhost:4000/updatequan',{newquan:quan,productid:productid},{headers:{"authorization":`Bearer ${token}`} }).then((response)=>{
                     if(response.data.message==='updated'){
                             history.push('/userpanel')
                     }else{
                            setword("sorry can't process")
                     }
            })
 }

    return (
        <div>
            { !stat?<Redirect to='/' />:

        <div className='adduserdiv'>
           <div className='dhod'>
                 <input placeholder='quantity' onChange={(e)=> setquan(e.target.value)} />
           </div>
           <div className='dhod'>
           <button type='submit' className='btn btn-dark' onClick={update}>Update</button>
           </div>
        </div>
}
        </div>
    )
}

export default Editprodpanel
