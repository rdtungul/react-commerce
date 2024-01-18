import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

// importing styled components
import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: black;
`;

const Container = styled.div`
  background: red;
  color: white;
  font-size: 2rem;
`;
function App() {
  return (
    <div>
      <h4>React Commerce</h4>
      <Button>Click me</Button>
      <Container>
        <div>
          <h3>hello world</h3>
        </div>
      </Container>
    </div>
  );
}

export default App;
