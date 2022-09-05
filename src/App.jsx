import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Features_Small  } from './components/Features_Small';
import { Description_1  } from './components/Description_1';
import { Description_1_Details_Lightbox  } from './components/Description_1_Details_Lightbox';
import { Description_2  } from './components/Description_2';
import { Features_Special  } from './components/Features_Special'; 
import { Screenshots  } from './components/Screenshots'; 
import { Testimonials  } from './components/Testimonials'; 
import { Statistics  } from './components/Statistics'; 
import { Download  } from './components/Download'; 
import { Footer  } from './components/Footer'; 
import { Copyright } from './components/Copyright'; 

export const App = () => {
  return (
    <div>
      
        <Navigation/>    
        <Features_Small />
        <Description_1/>
        <Description_1_Details_Lightbox  />
        <Description_2 />
        <Features_Special />
        <Screenshots />
        <Testimonials />
        <Statistics />
        <Download/>
        <Footer />
        <Copyright />
    </div>
  )
}

export default App;