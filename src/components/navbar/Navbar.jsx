import './navbar.css'
const Navbar = () => {
return (
  <nav className="navbar">
        <div className="navbar-left">
          <div className="logo"><i class="fa-regular fa-comment-dots"></i>
          </div>
          <span className="breadcrumb">

            <a href="#"  style={{ color: '#007bff' }}>Projects</a> &gt; 
            <a href="#" style={{ color: '#007bff' }}> The Pen</a> &gt; 
            <a href="#" style={{ color: 'black' }}> Shot Lists & Storyboards </a> 
            <a className='x2' href="" style={{ color: '#007bff' }}>x2 <i class="fa-solid fa-chevron-down"></i></a>
          </span>
        </div>
        <div className="navbar-right">
          <button className="navbar-btn">Print View</button>
          <button className="navbar-btn"><i class="fa-regular fa-file"></i></button>
          <button className="navbar-btn"><i class="fa-solid fa-ellipsis"></i></button>
          <button className="navbar-btn"><i class="fa-regular fa-comments"></i></button>
          <button className="share-btn">Share</button>
        </div>
      </nav>
      
)
}

export default Navbar