import React, { useEffect, useState } from 'react';
import { Navbar, About, Skills, Experiance, Projects, ProjectDetails, Education, Contact, Footer } from './components/export';
import Preloader from './components/Preloader/Preloader';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      document.getElementById("pre-loader").classList.add('hidden');
      setScreenLoading(false);
    }, 4500);
  }, []);


  return (
    <>
      {screenLoading ? <Preloader /> : <div className='container'>
        <Navbar />
        <About />
        <Skills />
        <Experiance />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Education />
        <Contact />
        <Footer />

        <Toaster />

        {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
      </div>}
    </>
  )
}

export default App;