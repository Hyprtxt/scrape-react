import React from "react";
import logo from "./logo.svg";
import "./App.css";
import request from "superagent";
import useFetch from "hooks";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Data = () => {
  const [data, loading] = useFetch(
    "http://localhost:3000/storefronts/emerald-phog-san-bruno"
  );
  return (
    <React.Fragment>
      <h1>THINGS</h1>
      {loading ? "Loading..." : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </React.Fragment>
  );
};

const Categories = () => {
  const [data, loading] = useFetch(
    "http://localhost:3000/storefronts/emerald-phog-san-bruno"
  );
  const renderLoading = () => <p>Loading&hellip;</p>;
  const renderWithData = () => {
    const cats = data[0].products.map(product => {
      return product.category.slug;
    });
    return <pre>{JSON.stringify(cats, null, 2)}</pre>;
  };
  return loading ? renderLoading() : renderWithData();
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Categories />
      <Data />
    </div>
  );
};

export default App;
