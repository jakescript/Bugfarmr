import React, { Component } from 'react';
import { Container } from "react-bootstrap"

import Bug from "./Bug"

class Home extends Component {
    constructor() {
        super()
        this.state = {
            bugs: []
        }

        this.updateBugs = this.updateBugs.bind(this)
    }

    componentDidMount() {
        this.updateBugs()
    }

    updateBugs = () => {
        const bugs = JSON.parse(localStorage.getItem("bugs"))
        if (!bugs) {
            localStorage.setItem("bugs", JSON.stringify(this.state.bugs))
        } else {
            this.setState({ bugs })
        }
    }


    render() {
        const Buglist = this.state.bugs.map((bug, i) => (
            <div key={i}>
                <Bug item={bug} update={this.updateBugs} />
            </div>
        ))

        return (
            <Container>
                <h1 style={{ color: "black", marginTop: "5vh" }}>Current Bugs:</h1>
                {Buglist}
            </Container>
        );
    }
}

export default Home;