import React,{useState} from 'react'
import Authservice from './auth.services';
import {Redirect,Link,useHistory} from 'react-router-dom';
import Axios from 'axios';


function Addinventory() {
     
    const [product, setproduct] = useState('')
   const history = useHistory();
     const stat =  Authservice.getCurrentUser();
     const [word, setword] = useState('');

     const send = ()=>{
        const user = JSON.parse(localStorage.getItem('data'))
        const token = user.token
        
        Axios.post('http://localhost:4000/addinventory',{
            productname:product},{headers:{"authorization":`Bearer ${token}`} }).then((response)=>{
            if(response.data.message==='value inserted'){
                    history.push('/adminpanel')
            }else if (response.data.message==='product already exist'){
                       setword('product already exist')
            }
        })
  }
     

    return (
        <div>
            {
                !stat ? <Redirect to='/'/>:
                <div className='adduserdiv'>
                    <input placeholder=' Add Product' onChange={(e)=> setproduct(e.target.value)} name='prod' />
                         <br/><br/>
                    <button type='submit' className='btn btn-success' onClick={send}>Add</button>
                  <p/>  <Link to='/adminpanel'><button type='submit' className='btn btn-danger'>Back</button></Link>
                    <div>
                      <h3>  {word}</h3></div>
                    </div>
            }
        </div>
    )
}

export default Addinventory
