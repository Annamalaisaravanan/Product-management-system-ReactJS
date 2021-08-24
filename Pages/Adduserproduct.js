import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'
import Authservice from './auth.services'
import {useHistory} from 'react-router-dom';

function Adduserproduct() {
     
    const stat = Authservice.getCurrentUser();
    const [prodlist, setprodlist] = useState([])
    const [select, setselect] = useState('')
    const [type, settype] = useState('')
    const [quans, setquans] = useState('')

    const history = useHistory() 

    const getprods = async()=>{
        try{
            const user = JSON.parse(localStorage.getItem('data'))
            const token = user.token
              const data = await Axios.get(`http://localhost:4000/inventoryprod`,{headers:{"authorization":`Bearer ${token}`} })
              console.log('back-front',data.data)
              setprodlist(data.data)
        } catch(e){
             console.log('error at prod get axios',e);
        }
    };
    useEffect(()=>{
        getprods();
    },[])


   const senddata = () =>{
    const user = JSON.parse(localStorage.getItem('data'))
    const token = user.token
    console.log('ajax',select,type,quans)
         Axios.post('http://localhost:4000/sendprod',{
                product:select,quantity:quans,type:type
         },{headers:{"authorization":`Bearer ${token}`} }).then((response)=>{
                if(response.data.message==='values inserted'){
                       history.push('/userpanel');
                }
                
         })
   }


    return (
        <div>
            {!stat?<Redirect to='/'></Redirect>
               :<div className='adduserdiv'>
                   <div className='dhod'>
                   <label htmlFor="type">Item</label>
                   <select onChange={(e)=>setselect(e.target.value)}>
                       <option value=''>select</option>
                      {    
                      
                      prodlist.map((val,key)=>{
                               return(
                              <option value={val.productname}>{val.productname}</option> 
                               )   
                      })
                      }
                      </select>
                      </div>
                      <div className='dhod'>
                          <input placeholder='quantity' type='number' onChange={(e)=> setquans(e.target.value)}></input>
                     </div>
                      <div className='dhod'>
                              <label htmlFor="type">Type</label>
                                <select name="type" onChange={(e)=>{settype(e.target.value)}} id="type">
                                <option value=''>select</option>
                                <option value="liters">liters</option>
                                <option value="pounds">pounds</option>
                                <option value='packets'>packets</option>
                                <option value='kilograms'>kilograms</option>
                                </select>
                                </div>
                                <div className='dhod'>
                                     <button type='submit' onClick={senddata} className='btn btn-secondary'> add to cart</button>
                                </div>
                </div>
            }
        </div>
    )
}

export default Adduserproduct
