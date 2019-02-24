import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";

export default class MindMap extends Component
{
    componentWillMount()
    {
        const { id } = this.props.match.params;
        this.props.fetchMindMapData(id);
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
                    {this.props.isMindMapLoading ? <img width={90} height={90} src={"https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif"}/> : this.props.mindMapData.toString()}
                </section>
            </section>

            <Footer/>
        </div>;
    }
}