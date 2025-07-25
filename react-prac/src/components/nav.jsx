import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"))

function NavBar (){
    return(
        <>
      <header> 
      <nav  className="header"> 
          <img src="/src/assets/react.svg " alt= "a react logo"/>
          <span className="facts">ReactFacts</span>
      </nav>
      </header>
      </>
    )
    
    
}

export default NavBar