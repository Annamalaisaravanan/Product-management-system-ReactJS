import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Redirect, Link,useHistory} from 'react-router-dom';
import Adminpanel from './Pages/Adminpanel';
import Login from './Pages/Login'
import Userpanel from './Pages/Userpanel';
import Adduser from './Pages/Adduser'
import Edituserpanel from './Pages/Edituserpanel'
import Producteditpanel from './Pages/Producteditpanel'
import Addinventory from './Pages/Addinventory';
import Adduserproduct from './Pages/Adduserproduct';
import Editprodpanel from './Pages/Editprodpanel';

function App(){


//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')

//   const [store, setStore] = useState()
//   const [logstat, setLogstat] = useState()

//   const history = useHistory();

//   const status = () =>{
        
    
//     let store = JSON.parse(localStorage.getItem('data'))
    
//     if(store && store.login){
//        setLogstat(store['login'])
//        console.log('hii',logstat)
//        setStore(store)
//    }
//    else{
//      setLogstat(false)
//    }
// }

// useEffect(()=>{
      
//        status();
// },[]);

//   const login = () =>{
//     console.log('hii')
//      Axios.post('http://localhost:4000/login',{
//        mail:email, pass:password
//      }).then((response)=>{
//         console.log('hello')
//            localStorage.setItem('data',JSON.stringify({login:true,token:response.data.token}))
//            status()
//            history.push('/admin')
//            console.log('dhodraj')

           
//      })
// }
 
// const logout = () =>{
//      localStorage.clear()
//      setLogstat(false)
// }


    return(
  <div>
        <Router>
        <Switch>
        <Route exact path='/' component = {()=> <Login />} />
        <Route exact path='/adminpanel' component={()=><Adminpanel />} />
        <Route exact path='/userpanel' component={()=> <Userpanel />} />    
        <Route exact path='/adduser' component={()=> <Adduser />} />    
        <Route exact path='/edituser' component={()=> <Edituserpanel />} />    
        <Route exact path='/userproductinfo' component={()=> <Producteditpanel />} /> 
        <Route exact path='/addinventory' component={()=> <Addinventory />} />   
        <Route exact path='/adduserproduct' component={()=> <Adduserproduct />} />
        <Route exact path='/userprodedit' component={()=> <Editprodpanel />} />
        </Switch>
        </Router>   
    
        </div> 
    )
    }

export default App;