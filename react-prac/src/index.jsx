import { createRoot } from "react-dom/client";


// ////
// - Add a `<header>` element with an `<img />` element with the image of the 
//   React logo inside (src="react-logo.png") and make sure to set the 
//   width to something more manageable so it doesn't take up the whole screen.
//   Also, as always, you should include some alt text on the image.
// - Add an `<h1>` with some text describing the page. (E.g. "Reasons
//   I'm excited to learn React"). Place it above the ordered list, then wrap
//   the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
//   structure flowing well.
// - Add a `<footer>` after the list that says: 
//     "© 20xx <last name here> development. All rights reserved."
//  */////

function Header () {
    return (
    <header className="header"> <img src="/src/assets/react.svg" alt="react logo" /> 


   
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">
                    pricing
                </li>
                <li className="nav-list-item">
                    about
                </li>   
                <li className="nav-list-item">
                    contact
                </li>   
            </ul>
        </nav>
    
   </header>
    )
}

function MainContent () {
    return (
        <main>
        <h1>
        this is the facts!
    </h1>
<ol>
<li>React is a popular library, so I will be able to fit in with all the coolest developers out there! 😎</li>
<li>I am more likely to get a job as a front-end developer if I know React</li>
</ol>
</main>
    )
}

function Footer () {
    return(
        <footer>
        © 20xx Nadain development. All rights reserved.
        </footer>
    )
}

function TestFunc () {
  return  (
      <div>
     
   
     <Header/>
    <MainContent/>
    <Footer/>
   
       </div>
      
    )
}

export default TestFunc 
