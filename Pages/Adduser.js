import React,{useState} from 'react';
import './Adduser.css';
import {Link,Redirect} from 'react-router-dom'
import Axios from 'axios';
import {Formik,Form,Field} from 'formik';
import {useHistory} from 'react-router-dom';
import Authservice from './auth.services';

function Adduser() {

    const stat = Authservice.getCurrentUser();
    let history = useHistory();  
    const [First, setFirst] = useState('')
    const [Last, setLast] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [word, setword] = useState('')

    const adduser = (values)=>{
        const user = JSON.parse(localStorage.getItem('data'))
        const token = user.token
        console.log('the user role is',values.role,values.frname);
        Axios.post('http://localhost:4000/adduserhash',{
            firstname:values.frname,lastname:values.lname,email:values.email,password:values.pass,role:values.role
        },{headers:{"authorization":`Bearer ${token}`} }).then((response)=>{
            if(response.data.message==='value inserted'){
                    history.push('/adminpanel')
            }else if (response.data.message==='Email already exist'){
                       setword('Email already exist')
            }
        })
  }

    const initialValues = {
        fname:"",
        lname:"",
        mail:"",
        pass:"",
        role:""
    }

    return (
   <div>
        {!stat
            ?<Redirect to='/' />:
            <div>
                <div className='adduserdiv'>
                     <Formik initialValues={initialValues} onSubmit={adduser}>   
                    <Form className='adduser-form'>
                        <div className='adduserform-head'>
                        <h3 className='adduser-head'>Add User</h3>
                            </div>
                          <div className='dhod'>
                              <label htmlFor='frname'  >First Name</label>
                              <Field type='text'  name='frname' id='frname'></Field>
                          </div>
                          <div className='dhod'>
                              <label htmlFor='lname' >Last Name</label>
                              <Field type='text'  name='lname' id='lname'></Field>
                          </div>
                          <div className='dhod'>
                              <label htmlFor='email' >Email</label>
                              <Field type='email'  name='email' id='email'></Field>
                          </div>
                          <div className='dhod'>
                              <label htmlFor='pass' >Password</label>
                              <Field type='password'  name='pass' id='pass'></Field>
                          </div>
                          <div className='dhod'>
                              <label htmlFor='role' >Role</label>
                              <Field component='select' name="type" name='role' id="role">
                                <option value=''>select</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                               
                                </Field>
                          </div>
                          <div id='btn-add'>
                              <button type='submit' className='btn btn-info' > Add </button>
                              <Link to='/adminpanel'><button   className='btn btn-danger'> Back</button></Link>
                          </div>
                          </Form>
                    </Formik>
                    <div className='adshow'>
  <h2 className='adh2'>{word}</h2>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Adduser
