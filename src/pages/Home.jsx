import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Products from '../components/Products.jsx';
import FestiveBanner from '../components/FestiveBanner.jsx';
import DownloadMenu from '../components/DownloadMenu.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <FestiveBanner />
      <DownloadMenu />
    </main>
  );
}
