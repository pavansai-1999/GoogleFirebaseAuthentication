import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home"
import Signup from "./components/Signup";
import Login from "./components/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div className="divison">
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
      
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                
                  
                }
              />
               <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            </Routes>
            
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;