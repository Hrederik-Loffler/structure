import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, Frame } from "@shopify/polaris";
import { Provider } from "react-redux";
import OrgChart from "@balkangraph/orgchart.js";

import Home from './components/Home/Home'
import Chart from "./components/Chart/Chart";

function App() {
    return (
        // <Home style={{height: '100%'}}>
            <Chart style={{height: '100%'}} nodes={
                [
                    {id: 1, name: "Rodion Bezruk", department: "SEO", avatar: "https://ca.slack-edge.com/T013GV05QSE-U013GV1FKRQ-g1afae5c8eac-512"},
                    {id: 2, pid: 1, name: "LangShop", department: "LangShop", avatar: "https://langshop.app/img/features-hero/background.jpg"},
                    {id: 3, pid: 2, name: "Product Managers", department: "LangShop", avatar: "https://thumbs.dreamstime.com/z/sales-manager-working-office-vector-icon-profession-sales-manager-concept-illustration-man-grey-suit-telephone-140190579.jpg"},
                    {id: 4, pid: 3, name: "Ekaterina Velekdan", department: "Product Managers", avatar: "https://ca.slack-edge.com/T013GV05QSE-U013Y0WJJGM-fbf23367e98b-512"},
                    {id: 5, pid: 1, name: "Outsourcing", department: "Outsourcing", avatar: "https://senior.ua/storage/article/content/72f8e9a6-9851-4a44-94e2-51c60813cccd.jpeg"},
                    {id: 6, pid: 1, name: "HR", department: "HR", avatar: "https://www.everest.ua/wp-content/uploads/2020/04/170.jpg"},
                    {id: 7, pid: 1, name: "Dev", department: "Dev", avatar: "https://developer.android.com/images/social/android-developers.png"},
                    {id: 8, pid: 5, name: "Project Managers", department: "Outsourcing", avatar: "https://api2.withmyfriends.org/media/events/2019/03/4493-user-312999-main-2.jpg"},
                    {id: 9, pid: 5, name: "Sales Managers", department: "Outsourcing", avatar: "https://www.prosalesguy.ca/prosalesguy/wp-content/uploads/2013/09/Sales_manager.jpg"},
                    {id: 10, pid: 8, name: "Daria Chernenko", department: "Project Managers", avatar: "https://ca.slack-edge.com/T013GV05QSE-U013FHUMZBP-d043c3b7ca8b-512"},
                    {id: 11, pid: 9, name: "Viktoriia Sarapii", department: "Sales Managers", avatar: "https://ca.slack-edge.com/T013GV05QSE-U019S1FBVU5-ec0be5a883a4-512"},
                    {id: 12, pid: 6, name: "Oksana Yasinskaya", department: "HR", avatar: "https://ca.slack-edge.com/T013GV05QSE-U013H68PGLW-06e40b331c19-512"},


                ]} />
        // </Home>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));
