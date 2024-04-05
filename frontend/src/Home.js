import React from 'react'
import './home.css';

function Home() {
  return (
    <div id="container" className='vh-100 bg-light'>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href=""><img id="icon" className='w-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJ14hq_cyhRDxtoLCS1OfRvRMBUORrGNP4w&s" /></a>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <h1 className='text-white'>Cre@teArt</h1>
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div id="main">
        <div id="section1" className='d-flex'>
          <h1 id="heading" className='p-5'>Let <br />our art work become <br />the part of your special moment</h1>
          <img id="mainimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyudIOUe63WfhqWKXI8_H0PG3gLL7uUxJtQ&s" />
        </div>
        <div className='p-4 ms-4 text-left bg-light'><h3>Our products that make Your special moment more special</h3></div>
        <div id="items" className='p-3 d-flex bg-light justify-content-around'>
          <div class="card" style={{width: '18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdBfNgo8IncLtaYJqr1It-qORS7hHl2LlVw&s" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Tea Coasters</h5>
                <p class="card-text">Get the tea coasters as per your taste</p>
                <a href="#" class="btn btn-primary">See all</a>
              </div>
          </div>
          <div class="card" style={{width: '18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8Mi95zs-cHTI67txDdGPkjjx2v14tYof6Q&s" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Ambians</h5>
                <p class="card-text">Decor your home,workplace according to you</p>
                <a href="#" class="btn btn-primary">See all</a>
              </div>
          </div>
          <div class="card" style={{width: '18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcGAAm6rrdRnSILEh1oJdK2qwxcFsI8Koi-Q&s" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Key-Chains</h5>
                <p class="card-text">Add more styles to your keychains</p>
                <a href="#" class="btn btn-primary">See all</a>
              </div>
          </div>
        </div>
      </div>
      <div class="footer">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">gifts</a></li>
             <li><a href="#">jwellery</a></li>
  	 			</ul>
  	 		</div>
  	 	</div>
  	 </div>
    </div>
  )
}

export default Home
