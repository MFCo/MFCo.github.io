import PageLayout from 'components/PageLayout';
import { LogoReact, Babel, ESLint, EcmaScript, NodeJS, Npm, PostCSS, Redux, Webpack, AWS, Travis } from 'components/Icons';
import Intro from 'components/Intro';

const logos = [LogoReact, Babel, ESLint, EcmaScript, NodeJS, Npm, PostCSS, Redux, Webpack, AWS, Travis];

const Index = () =>
    <PageLayout title="Home">
        <div id="home" className="home">
            <Intro />
            <div className="main__about lemon">
                <h2> The big picture first... </h2>
            </div>
            <div className="main__description">
                <ul className="main__descriptors">
                    <li>
                        <h1 className="main__greetings">
                            FULL-STACK DEVELOPER
                        </h1>
                        {
                            logos.map((Element) =>
                                <div className="main__expertise-logo">
                                    <Element />
                                </div>)
                        }
                    </li>
                    <li>
                        <h1 className="main__greetings">
                            PROUD <a href="https://www.rotary.org/es/get-involved/rotaract-clubs">ROTARACTOR</a>
                        </h1>
                        <img src="static/rota1.jpg" />
                        <img src="static/rota2.jpg" />
                        <img src="static/rota3.jpg" />
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>{`
            .main__about{
                text-align: center;
                border-top: 3px solid white;
                border-bottom: 3px solid white;
                padding: 20px;
            }

            .lemon {
                background-color: #9bab0b;
            }
            .main__expertise-logo{
                height: 100px;
                display: inline-block;
                margin: 30px;
            }
            .main__greetings{
                margin: auto;
                font-weight: bold;
                padding: 20px;
            }
            .main__description{
                padding: 30px;
                background-color: #103989;
            }
            .main__descriptors{
                margin-top: 30px;
                text-align: center;
                list-style-type: none;
            }
            .main__descriptors img{
                padding: 10px;
            }

        `}</style>
    </PageLayout>

export default Index;