
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
// Rasmni import qilamiz
import bgImage from './assets/bg-landing.svg';

function App() {
  return (
    // inline style orqali fon rasmini o'rnatamiz
    <div
      className=" landingimg "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          {/* Qolgan seksiyalarni shu yerda qo'shib ketaverasiz */}
          {/* <Features /> */}
          {/* <Courses /> */}
        </main>
      </div>
    </div>
  );
}

export default App;