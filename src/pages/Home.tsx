import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Expertise from "../Components/Expertise";
import Work from "../Components/Work";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <main className="min-h-screen scroll-smooth bg-[#16161d] font-['Montserrat',sans-serif] text-zinc-100 antialiased selection:bg-violet-500/40">
      {/* Montserrat — or add this <link> to your index.html instead */}

      <Navbar />
      <div>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
