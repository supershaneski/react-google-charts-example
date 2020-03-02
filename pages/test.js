import React from 'react';
import SandBox1 from '../components/sandbox1';

class Clock extends React.Component {
    constructor() {
        super()
        this.timer = null;
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <>
            <span>
            { this.state.time.toLocaleTimeString() }
            </span>
            <style jsx>
                {`
                span {
                    font-size: 0.9em;
                    color: #ccc;
                }
                `}
            </style>
            </>
        )
    }
}

const Header = () => {
    const siteTitle = process.env.siteTitle;
    return (
        <>
        <header>
            <h1 className="lightest">{ siteTitle }</h1>
        </header>
        <style jsx>
            {`
            header {
                background-color: transparent;
            }
            h1 {
                font-size: 1.5em;
                text-align: center;
            }
            `}
        </style>
        </>
    )
}

const Footer = () => {
    return (
        <>
        <footer>
            <small>
                <span className="lighter">Copyright &copy; 2020</span>&nbsp;
                <span className="lighter">All rights reserved</span>
            </small>
        </footer>
        <style jsx>
            {`
                footer {
                    text-align: center;
                    padding: 10px 0px;
                    font-size: 0.8em;
                }
            `}
        </style>
        </>
    )
}

class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //
    }
    render() {
        return (
            <>
            <Header />
            <main>
                <section>
                    <SandBox1 />
                </section>
            </main>
            <Footer />
            <style jsx>
                {`
                main {
                    background-color: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                }
                `}
            </style>
            </>
        )
    }
}

export default Index;