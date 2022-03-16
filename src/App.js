import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';





function App() {

  return (
    <div className="App">
      <Nav/>
      <Section/>
      <CreateBy/>
    </div>
  );
};

function Nav(){
  return (
    <nav className="navbar navbar-expand-lg hstack gap-3">
      <div className="container-fluid">
        <a className="navbar-brand border" href="#">this interior</a>
        <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          {/* <FontAwesomeIcon icon={faBars}/>   */}
          <span className='toggler-icon top-bar'></span>
          <span className='toggler-icon middle-bar'></span>
          <span className='toggler-icon bottom-bar'></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link pe-5" href="#">Home</a>
            <a className="nav-link pe-5" href="#">Collection</a>
            <a className="nav-link pe-5" href="#">About</a>
            <a className="nav-link pe-5" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>



    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">Navbar</a>
    //     <button className=" d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //        <span className='toggler-icon top-bar'></span>
    //        <span className='toggler-icon middle-bar'></span>
    //        <span className='toggler-icon bottom-bar'></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div class="navbar-nav">
    //         <a class="nav-link active" aria-current="page" href="#">Home</a>
    //         <a class="nav-link" href="#">Features</a>
    //         <a class="nav-link" href="#">Pricing</a>
    //         <a class="nav-link disabled">Disabled</a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>







  );
};

function Section(){
  return (
    <section className="row">
      <div className="col-md-4 col-sm-9 texto">
        <h1>Modern interior</h1>
        <p>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>

        <a href='#'>Read more <FontAwesomeIcon icon={faArrowRightLong}/></a>
      </div>

      <div className="col-md-1"></div>

      <div className="col-md-7 col-sm-12">
        <div className='img'></div>

        <div className="card">
          <div className='container'>
            <div className='img-card'></div>
            <div className="card-title">
              <h5>Aliza Webber</h5>
              <p>Interior designer</p>
            </div>
          </div>
          
          <div className="card-body">
            <p className="card-text">Designed in 2020 by Aliza Webber</p>
          </div>

        </div>
      </div> 
    </section>
  );
};

function CreateBy(){
  return (
    <p className='createby d-flex justify-content-center'>created by JosephPL - devChallenges.io</p>
  );
};

export default App;
