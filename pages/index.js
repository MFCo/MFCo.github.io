import PageLayout from 'components/PageLayout';
import { MLogo, Bulb } from 'components/Icons';

const Index = () =>
  <PageLayout title="Home">
    <div className="home">

      <div className="main-logo">
        <MLogo />
      </div>
      <style jsx>{`
        .home {
          height: 100vh;
          background-color: black;
          vertical-align: middle;
          text-align: center;
        }
        .home:after{
          content: '';
          display: inline-block;
          width: 0px;
          height: 100%;
          vertical-align: middle;
        }
        .main-logo {
          cursor: pointer !important;
          height: 20vh;
          display: inline-block;
        }
        `}</style>
    </div>
  </PageLayout>;
export default Index;