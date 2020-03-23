import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import "./App.css";

function App() {
  // https://www.pluralsight.com/guides/render-window-resize-react
  return (
  
  
    <div className="App">
      <div>
        <Navbar
          alignLinks="right"
          brand={<div>
            <a className="brand-logo right" href="#">
              MeAcha
            </a>
            </div>
          }
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          
          <NavItem href="get-started.html">
            <Icon>search</Icon>
          </NavItem>
          <NavItem href="get-started.html">Login/Perfil</NavItem>
          <NavItem href="get-started.html">Criar Post</NavItem>
          <NavItem href="get-started.html">Chat</NavItem>
        </Navbar>
        
      </div>
    </div>
  );
}

export default App;
