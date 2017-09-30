import PageLayout from 'components/PageLayout';
import { LogoReact, Babel, ESLint, EcmaScript, NodeJS, Npm, PostCSS, Redux, Webpack, AWS, Travis } from 'components/Icons';


const logos = [LogoReact, Babel, ESLint, EcmaScript, NodeJS, Npm, PostCSS, Redux, Webpack, AWS, Travis];

const Index = () =>
    <PageLayout title="Home">
        <div className="home">
            <div className="parallax">
                <div className="main__box">
                    <h1 className="main__title">LET'S BUILD SOMETHING TOGETHER</h1>
                </div>
            </div>
            <div className="main__about cyan">
                <h1> Let's talk a bit about me </h1>
            </div>
            <div className="main__introduction">
                <p className="description">
                    My name is <b>Mariano</b>, I'm from Rauch, Argentina, and I'm an advanced systems engineering student (expecting to get my degree on March). <br></br>
                    I'm interested in Programming Languages, Software Performance, and Software Engineering.<br></br>
                </p>
            </div>
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
            .description{
                max-width: 900px;
                text-shadow: 2px 2px 15px black;

            }
            .main__introduction{
                text-align: center;
                padding: 20px;
                background-image: url(static/mdz.jpg);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background-attachment: fixed;
            }
            .main__about{
                text-align: center;
                border-top: 3px solid white;
                border-bottom: 3px solid white;
                padding: 20px;
            }
            .cyan {
                background-color: #2197d1;
            }
            .red{
                background-color: #ab0b44;
            }
            .lemon {
                background-color: #9bab0b;
            }
            .main__title {
                font-weight: bold;
                padding: 0;
                margin-left: 0;
            }
            .main__expertise-logo{
                height: 100px;
                display: inline-block;
                margin: 30px;
            }
            .main__box {
                width: 80%;
                border-radius: 25px;
                padding: 30px;
                background-color: #062053;
                border: 1px solid white;
                border-left: none;
                display: inline-block;
                vertical-align: middle;
                line-height: normal;
            }
            .main__greetings{
                margin: auto;
                font-weight: bold;
                padding: 20px;
            }
            .parallax {
                background-image: url(static/home-background.jpg);       
                height: 100vh; 
                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                vertical-align: middle;
            }
            .parallax:after{
                content: '';
                display: inline-block;
                width: 0px;
                height: 100%;
                vertical-align: middle;
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