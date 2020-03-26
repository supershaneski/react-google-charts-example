import React from 'react';
import SandBox from '../components/sandbox';

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
    render() {
        return (
            <>
            <Header />
            <main>
                <section>
                    <SandBox />
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