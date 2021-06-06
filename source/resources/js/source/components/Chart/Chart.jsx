import React, { Component, useRef, useEffect } from "react";
import OrgChart from "@balkangraph/orgchart.js";

const Chart = (props) => {
    const devRef = useRef(null)

    useEffect(() => {
        new OrgChart(devRef.current, {
            template: "rony",
            nodes: props.nodes,

            nodeMenu: {
                details: {text:"Details"},
                edit: {text:"Edit"},
                add: {text:"Add"},
                remove: {text:"Remove"}
            },

            nodeBinding: {
                field_0: "name",
                field_1: "department",
                img_0: "avatar"
            },
            tags: {
                'dep': {
                    template: "olivia"
                },
                'dep2': {
                    template: "ana"
                },
                'dep3': {
                    template: "belinda"
                },
                'dep4': {
                    template: "polina"
                }
            },
        })
    }, [])

return (
    <div id="tree" style={{height: '100vh'}} ref={devRef}></div>
)
}
export default Chart;
// export default class extends Component {
//
//     constructor(props) {
//         super(props);
//         this.devRef = React.createRef()
//     }
//
//     shouldComponentUpdate() {
//         return false;
//     }
//
//     componentDidMount() {
//         this.chart = new OrgChart(this.devRef.current, {
//             nodes: this.props.nodes,
//
//             nodeBinding: {
//                 field_0: "name",
//                 field_1: "department",
//                 img_0: "avatar"
//             }
//         });
//     }
//
//     render() {
//         return (
//             <div id="tree" ref={this.devRef}></div>
//         )
//     }
// }
