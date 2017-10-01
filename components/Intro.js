const Intro = () =>
  <div>
    <div className="main__home parallax">
      <div className="main__box">
        <h1 className="main__title">LET'S BUILD SOMETHING TOGETHER</h1>
      </div>
    </div>
    <div id="about" className="main__about cyan">
      <h1> Let's talk a bit about me </h1>
    </div>
    <div className="main__introduction parallax">
      <p className="description">
        My name is <b>Mariano</b>, I'm from Rauch, Argentina, and I'm an advanced systems engineering student (expecting to get my degree on March). <br></br>
        I'm interested in Programming Languages, Software Performance, and Software Engineering.<br></br>
      </p>
    </div>
    <style jsx>{`
      
      .main__title {
        font-weight: bold;
        padding: 0;
        margin-left: 0;
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
      .description{
        max-width: 900px;
        text-shadow: 2px 2px 15px black;
      }
      .main__introduction{
        text-align: center;
        padding: 20px;
        background-image: url(static/mdz.jpg);
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
      .parallax {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .main__home{
        vertical-align: middle;
        background-image: url(static/home-background.jpg);       
        height: 100vh; 
      }
      .main__home:after{
        content: '';
        display: inline-block;
        width: 0px;
        height: 100%;
        vertical-align: middle;
      }
    `}</style>
  </div>;

export default Intro;