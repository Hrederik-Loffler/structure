import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, Frame } from "@shopify/polaris";
import { Provider } from "react-redux";
import OrgChart from "@balkangraph/orgchart.js";

import Home from './components/Home/Home'
import Chart from "./components/Chart/Chart";

import data from "./data";

function App() {
    return (
        // <Home style={{height: '100%'}}>
            <Chart  nodes={data} />
        // </Home>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));
