import React from "react";

function Nav() {
  return (
    <>
      <nav className="z-depth-0">
        <div className="nav-wrapper "> 
          <a href="#" className="brand-logo">Logo</a>
          
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down ">
            <li><i className="material-icons">search</i></li>
            <li><a href="sass.html">Login/Perfil</a></li>
            <li><a href="badges.html">Criar Post</a></li>
            <li><a href="collapsible.html">Chat</a></li>
          </ul>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <div className="user-view container">
                <a href="#user"><img className="circle" src="./images/user.png" alt="avatar"/></a>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
              </div>
            </li>
            <li><a href="sass.html">Login/Perfil</a></li>
            <li><a href="badges.html">Criar Post</a></li>
            <li><a href="collapsible.html">Chat</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;

// trocar o botão de login por logout
// só deixar o botão de perfil, criar post e chat se tiver logado 
// em desktop mostar input ao lado do search icon
// <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// 