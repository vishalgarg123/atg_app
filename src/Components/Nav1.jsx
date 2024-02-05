import React from 'react'

const Nav1 = () => {
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/"> 
          <img
            src={atg}
            alt=""
            style={{ mixBlendMode: "multiply" }}
            width={200}
            height={40}
          />
          </Link>
        </div>
        <form className="w-50 border rounded-pill  ml-6" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="col-md-3 text-end">
         
        </div>
      </header>
    </div>
  )
}

export default Nav1
