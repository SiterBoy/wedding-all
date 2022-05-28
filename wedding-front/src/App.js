
import { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Story from './components/Story/Story';
import Form from './components/Form/Form';
import About from './components/About/About';
import AboutMore from './components/AboutMore/AboutMore';
import Footer from './components/Footer/Footer';

function App() {
  let [guestsData, setGuestsData] = useState({});
  const url = useLocation();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:5000/api/guest${url.pathname}`);
      const data = await response.data;
      setGuestsData(data);
    }

    getData();
  }, [url.pathname]);

  return (
      <div className="wrapper">
        <Header guestsData={guestsData}/>
        <Story />
        <Form />
        <About />
        <AboutMore />
        <Footer />
      </div>
  );
}

export default App;
