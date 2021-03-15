import Header from "./components/layouts/Header";
import Banner from "./components/layouts/Banner";
import Service from "./components/layouts/Service";
import Tires from "./components/layouts/Tires";
import Parts from "./components/layouts/Parts";
import Contact from "./components/layouts/Contact";
import Footer from "./components/layouts/Footer";

import './App.scss';

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <Service/>
            <Tires/>
            <Parts/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
