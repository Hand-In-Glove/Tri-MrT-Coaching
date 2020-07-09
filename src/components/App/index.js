import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import css from "./App.module.css";

import NavBar from "../NavBar";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Plans from "../Plans";

import Burger from "../BurgerMenu/Burger";
import Menu from "../BurgerMenu/Menu";

import useOnClickOutside from "../../customHooks/useOnClickOutside";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));
  return (
    <Router>
      <div className={css.App}>
        <div className={css.burgerWrapper}>
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/plans">
            <Plans />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
