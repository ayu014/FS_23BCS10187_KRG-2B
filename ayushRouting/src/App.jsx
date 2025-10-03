// App.jsx
import { Routes, Route, Link } from "react-router-dom";


function Home() {
  return <h1>This is the home page</h1>;
}

function About() {
  return <h1>This is our about page</h1>;
}

function Contact() {
  return <h3>Email: ayush0187cse@gmail.com</h3>;
}


function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/About">About</Link> |{" "}
        <Link to="/Contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />         {/* Home Page */}
        <Route path="/About" element={<About />} />   {/* About Page */}
        <Route path="/Contact" element={<Contact />} /> {/* Contact Page */}
      </Routes>
    </div>
  );
}

export default App;
