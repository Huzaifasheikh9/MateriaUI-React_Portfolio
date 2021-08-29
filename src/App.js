import './App.css';
import Navbar from './components/Navbar/Navbar';
import Info from './components/Info/Info';
import Aboutme from './Sections/Aboutme/Aboutme';
import Skillmeter from './components/Skillmeter';
import Myservices from './Sections/Myservices/Myservices';
import Expertise from './Sections/Expertise/Expertise';
import Worksample from './Sections/Worksample/Worksample';
import Testimonial from './Sections/Testimonial/Testimonial';
import Blog from './Sections/Blog/Blog';
import Contactme from './Sections/Contactme/Contactme';
import Footer from './Sections/Footer/Footer';

function App() {
  return (
    <div className="App">
     {/* Section 1 */}
        <Navbar />
        <Info />  


      {/* Section 2*/}
      <Aboutme />
      <Skillmeter />

      {/* Section 3*/}
      <Myservices />
      {/* Section 4*/}
      <Expertise />
      {/* Section 5 */}
      <Worksample />
      {/* Section 6 */}
      <Testimonial />
      {/* Section 7 */}
      <Blog />
      {/* Section 8 */}
      <Contactme />
      {/* Section 9 */}
      <Footer />
    </div>
  );
}

export default App;
