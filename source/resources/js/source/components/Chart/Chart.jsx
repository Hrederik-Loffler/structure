import React, { Component } from "react";
import OrgChart from "@balkangraph/orgchart.js";

export default class extends Component {

    constructor(props) {
        super(props);
        this.devRef = React.createRef()
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.chart = new OrgChart(this.devRef.current, {
            nodes: this.props.nodes,

            nodeBinding: {
                field_0: "name",
                field_1: "department",
                img_0: "avatar"
            }
        });
    }

    render() {
        return (
            <div id="tree" ref={this.devRef}></div>
        )
    }
}
