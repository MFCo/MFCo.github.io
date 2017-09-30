import PageLayout from 'components/PageLayout';

const Index = () =>
    <PageLayout title="Home">
        <div className="home">
            <div className="parallax" />
            <div className="text">
                Hola
        </div>
            <style jsx>{`
        .text{
            background-color: #8f99aa;
            height: 100vh;
        }
        .parallax { 
            background-image: url(static/home-background.jpg);       
            height: 500px; 
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        `}</style>
        </div>
    </PageLayout>

export default Index;