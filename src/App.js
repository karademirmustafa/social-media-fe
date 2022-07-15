
import './App.css';
import {useEffect, useState} from "react"
import axios from "axios";
//lodash ekle .debounce ,500
function App() {
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("")
const [username,setUsername]=useState("");
const [token,setToken]=useState("");
async function handleSubmit(e,password,username){
  e.preventDefault();
  const url="http://social-media-homes.herokuapp.com/authenticate"
  const config ={
    method:"POST",
    url,
    headers:{},
    data:{
      password,username
    }
  }
  await axios(config).then(res=>console.log(res.data))

}


  return (
<div className="container">
<div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={e=>handleSubmit(e,password,username)}>
              <div className="form-floating mb-3">
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr className="my-4"/>
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    <div className="col-md-6 col-sm-6 col-lg-6 bootstrap snippets bootdeys">
    	<div className="widget panel">
    	  <div className="panel-body">
    	    <h4 className="mb0">Latest Tweet
    	      <i className="fa fa-twitter text-info pull-right"></i>
    	    </h4>
    	    <hr/>
    	    <ul className="list-table">
    	      

            
    	      <li className="text-left">
    	        <h5 className="semibold ellipsis nm">Colt Jenkins</h5>
    	        <p className="text-muted nm">5k followers</p>
    	      </li>
    	      <li className="text-right">
    	        <button type="button" className="btn btn-sm btn-success">Follow</button>
    	      </li>
    	    </ul>
    	  </div>
    
    	  <ul className="list-group">
    	    <li className="list-group-item">
    	      <p className="nm">Lorem ipsum dolor sit amet, consectetur <a href="javascript:void(0);">#adipisicing</a> elit, sed do eiusmod.</p>
    	      <small className="text-muted">1 day ago</small>
    	    </li>
    	    <li className="list-group-item">
    	      <p className="nm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <a href="javascript:void(0);">@officia</a> deserunt mollit anim id est laborum.</p>
    	      <small className="text-muted">2 day ago</small>
    	    </li>
    	    <li className="list-group-item">
    	      <p className="nm">Duis aute irure dolor in <a href="javascript:void(0);">tweet.er</a> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    	      <small className="text-muted">3 day ago</small>
    	    </li>
    	  </ul>
    	</div>
   
    
  </div>
    </div>
    
  </div>

  )
}

export default App;
