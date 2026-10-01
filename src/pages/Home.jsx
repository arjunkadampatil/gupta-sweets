import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Products from '../components/Products.jsx';
import FestiveBanner from '../components/FestiveBanner.jsx';
import DownloadMenu from '../components/DownloadMenu.jsx';
import Gallery from '../components/Gallery.jsx';
import Reviews from '../components/Reviews.jsx';
import Faq from '../components/Faq.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <FestiveBanner />
      <DownloadMenu />
      <Gallery />
      <Reviews />
      <Faq />
    </main>
  );
}
