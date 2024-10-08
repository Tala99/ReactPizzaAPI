import React from 'react'

export default function Navbar() {
  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PizzaAPI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav w-100 justify-content-between">
      <div class="d-flex">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Contact</a>
    </div>
        
        
        <div class="d-flex">
            <a class="nav-link" href="#">Login</a>
            <a class="nav-link "  href="#">Register</a>
        </div>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
