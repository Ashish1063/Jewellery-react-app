import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Suspense, lazy } from 'react';
import Loader from './Components/Loader/Loader';
// import { NotFound } from './Components/Pages/NotFound';
const Home = lazy(() => import('./Components/Pages/Home')) 
const Necklace = lazy(() => import( './Components/Pages/Jewellery/Necklace'));
const Rings   = lazy(() => import('./Components/Pages/Jewellery/Ring')) ;
const Detail  = lazy(() => import( './Components/Pages/Detail'));
const Bangle  = lazy(() => import('./Components/Pages/Jewellery/Bangle')) ;
const Earring = lazy(() => import( './Components/Pages/Jewellery/Earring'));
const Nosepin = lazy(() => import('./Components/Pages/Jewellery/Nosepin')) ;
const Pendant = lazy(() => import( './Components/Pages/Jewellery/Pendant'));
const Contact = lazy(() => import('./Components/Pages/Contact')) ;
const About = lazy(() => import('./Components/Pages/About')) ;
const Wedding = lazy(() => import( './Components/Pages/Jewellery/Wedding'));
const Gift = lazy(() => import('./Components/Pages/Jewellery/Gift')) ;
const Faq = lazy(() => import('./Components/Pages/Faq')) ;
const Terms = lazy(() => import('./Components/Pages/Terms')) ;
const Privacy = lazy(() => import( './Components/Pages/Privacy')) 


function App() { 
  return (
    <div className="App" basename='/signature'>
    <Router>
      <Suspense fallback={<Loader/>}>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route exact path='/signature' element={<Home/>}/>
        <Route exact path='/bangle' element={<Bangle/>}/> 
        <Route exact path='/earring' element={<Earring/>}/>
        <Route exact path='/necklace' element={<Necklace/>}/>
        <Route exact path='/nosepin' element={<Nosepin/>}/>
        <Route exact path='/pendant' element={<Pendant/>}/>
        <Route exact path='/ring' element={<Rings/>}/>
        <Route exact path='/wedding' element={<Wedding/>}/>
        <Route exact path='/gifting' element={<Gift/>}/>
        <Route exact path='/detail' element={<Detail/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/faq' element={<Faq/>}/>
        <Route exact path='/terms' element={<Terms/>}/>
        <Route exact path='/privacy' element={<Privacy/>}/>
        {/* <Route exact path='/refund' element={<Refund/>}/> */}
      </Routes>
     
      <Footer/>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
