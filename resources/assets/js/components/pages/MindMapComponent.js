import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";

export default class MindMapComponent extends Component
{
    componentDidMount() {

        const d3 = require('d3');
        require('markmap/lib/d3-flextree');
        const markmap = require('markmap/lib/view.mindmap');
        const { id } = this.props.match.params;
        const test = async () => {
            await this.props.fetchMindMapData(id);
            let data = {
                "depth": 1,
                "line": 1,
                "name": "A General Theory of Reactivity",
                "children": [
                    {
                        "depth": 2,
                        "line": 45,
                        "name": "Concepts",
                        "children": [
                            {
                                "depth": 3,
                                "line": 101,
                                "name": "Singular and temporal"
                            },
                            {
                                "depth": 3,
                                "line": 151,
                                "name": "Plural and temporal"
                            }
                        ]
                    },
                    {
                        "depth": 2,
                        "line": 237,
                        "name": "Primitives",
                        "children": [
                            {
                                "depth": 3,
                                "line": 244,
                                "name": "Iterators"
                            },
                            {
                                "depth": 3,
                                "line": 363,
                                "name": "Generator Functions"
                            },
                            {
                                "depth": 3,
                                "line": 475,
                                "name": "Generators"
                            },
                            {
                                "depth": 3,
                                "line": 505,
                                "name": "Asynchronous Values"
                            },
                            {
                                "depth": 3,
                                "line": 653,
                                "name": "Asynchronous Functions"
                            },
                            {
                                "depth": 3,
                                "line": 748,
                                "name": "Promise Queues"
                            },
                            {
                                "depth": 3,
                                "line": 851,
                                "name": "Semaphores"
                            },
                            {
                                "depth": 3,
                                "line": 897,
                                "name": "Promise Buffers",
                                "children": [
                                    {
                                        "depth": 4,
                                        "line": 959,
                                        "name": " means “write”."
                                    },
                                    {
                                        "depth": 4,
                                        "line": 960,
                                        "name": " means “close”."
                                    },
                                    {
                                        "depth": 4,
                                        "line": 961,
                                        "name": " means “terminate prematurely with an error”."
                                    },
                                    {
                                        "depth": 4,
                                        "line": 962,
                                        "name": " means “read”."
                                    },
                                    {
                                        "depth": 4,
                                        "line": 963,
                                        "name": " means “abort or cancel with an error”."
                                    },
                                    {
                                        "depth": 4,
                                        "line": 964,
                                        "name": " means “abort or cancel prematurely but without an error”."
                                    }
                                ]
                            },
                            {
                                "depth": 3,
                                "line": 1013,
                                "name": "Promise Iterators",
                                "children": [
                                    {
                                        "depth": 4,
                                        "line": 1056,
                                        "name": "map"
                                    },
                                    {
                                        "depth": 4,
                                        "line": 1076,
                                        "name": "forEach"
                                    },
                                    {
                                        "depth": 4,
                                        "line": 1119,
                                        "name": "reduce"
                                    },
                                    {
                                        "depth": 4,
                                        "line": 1135,
                                        "name": "pipe"
                                    },
                                    {
                                        "depth": 4,
                                        "line": 1151,
                                        "name": "buffer"
                                    },
                                    {
                                        "depth": 4,
                                        "line": 1159,
                                        "name": "read"
                                    },
                                    {
                                        "depth": 4,
                                        "line": 1169,
                                        "name": "Remote iterators"
                                    }
                                ]
                            },
                            {
                                "depth": 3,
                                "line": 1194,
                                "name": "Promise Generators"
                            },
                            {
                                "depth": 3,
                                "line": 1232,
                                "name": "Asynchronous Generator Functions"
                            },
                            {
                                "depth": 3,
                                "line": 1413,
                                "name": "Observables",
                                "children": [
                                    {
                                        "depth": 4,
                                        "line": 1484,
                                        "name": "TODO make sure this is a summary of the topics in the end:"
                                    }
                                ]
                            },
                            {
                                "depth": 3,
                                "line": 1490,
                                "name": "Observables and Signals"
                            },
                            {
                                "depth": 3,
                                "line": 1561,
                                "name": "Behaviors"
                            }
                        ]
                    },
                    {
                        "depth": 2,
                        "line": 1579,
                        "name": "Cases",
                        "children": [
                            {
                                "depth": 3,
                                "line": 1581,
                                "name": "Progress and estimated time to completion"
                            }
                        ]
                    },
                    {
                        "depth": 2,
                        "line": 1635,
                        "name": "Summary"
                    },
                    {
                        "depth": 2,
                        "line": 1665,
                        "name": "Further Work"
                    },
                    {
                        "depth": 2,
                        "line": 1745,
                        "name": "Acknowledgements"
                    }
                ]
            };
            console.log(JSON.parse(this.props.mindMapData));
            d3.text(null, function() {
                markmap('svg#mindmap', data, {
                    preset: 'colorful', // or default
                    linkShape: 'diagonal' // or bracket
                });
            });
        };

        test();
    }

    render()
    {
        return <div>
            <HeaderContainer/>

            <section className="main">
                <section className="path">
                    • > Майнд-карта
                </section>

                <section className="headerLib">
                    Майнд-карта.
                </section>

                <section className={"loader"}>
                    {this.props.isMindMapLoading ? <img width={90} height={90} src={"https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif"}/> : null}
                </section>
                <section className={"mindMapContainer"}>
                    <svg id="mindmap"></svg>
                </section>
            </section>

            <Footer/>
        </div>;
    }
}