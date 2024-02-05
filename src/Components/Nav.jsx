import React from 'react'
import { MdOutlineGroupAdd } from "react-icons/md";

const Nav = () => {
  return (
   <div>
  <div className="container p-2">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">All Posts(32)</a></li>
        <li><a href="#" className="nav-link px-2 link-body-emphasis">Article</a></li>
        <li><a href="#" className="nav-link px-2 link-body-emphasis">Event</a></li>
        <li><a href="#" className="nav-link px-2 link-body-emphasis">Education</a></li>
        <li><a href="#" className="nav-link px-2 link-body-emphasis">Job</a></li>
      </ul>
      <div class="dropdown p-2">
  <button class="btn btn-light dropdown-toggle  border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Write a post
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-primary p-2"><MdOutlineGroupAdd size={25} style={{padding:"3px"}}/>Join Group</button>
    </div>
  </div>
</div>

  
  )
}

export default Nav
