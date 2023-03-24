import React from 'react';
import Header from '../Components/Header';
import SliderSection from '../Components/SliderSection';
import AboutSection from '../Components/AboutSection';
import ServiceSection from '../Components/ServiceSection';
import WorkSection from '../Components/WorkSection';
import TeamSection from '../Components/TeamSection';
import ClientSection from '../Components/ClientSection';
import Footer from '../Components/Footer';


function HomePage() {
  return (
    <div class="hero_area">
            <Header/>
            <SliderSection/>
            <AboutSection/>
            <ServiceSection/>
            <WorkSection/>
            <TeamSection/>
            <ClientSection/>
            <Footer/>

    </div>
  );
}
export default HomePage ;
