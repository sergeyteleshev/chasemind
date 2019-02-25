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

            let mindMap = JSON.parse(await this.props.fetchMindMapData(id));

            let mindMapRoot = {
                "depth": 1,
                "line": 1,
                "name": "Hello world",
                "children": mindMap,
            };

            d3.text(null, function() {
                markmap('svg#mindmap', mindMapRoot, {
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