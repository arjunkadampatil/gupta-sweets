import './About.css';
import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { Flame, HeartHandshake, Leaf } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SmartImage from './SmartImage.jsx';
import kajuKatli from '../assets/images/kaju-katli.svg';
import jalebi from '../assets/images/jalebi.svg';
import giftBox from '../assets/images/gift-box.svg';

const PILLARS = [
  { icon: Leaf, title: 'Fresh, every morning', text: 'Small batches made at dawn, so nothing sits on the shelf for long.' },
  { icon: Flame, title: 'Slow-cooked in pure ghee', text: 'No shortcuts. Besan is roasted low and slow until it smells just right.' },
  { icon: HeartHandshake, title: 'Family recipes', text: 'Recipes passed down at home, with the same balance of sweetness.' },
];

const COUNTERS = [
  { value: 25, suffix: '+', label: 'Years of family recipes' },
  { value: 60, suffix: '+', label: 'Sweets & bakes' },
  { value: 1200, suffix: '+', label: 'Happy customers a week' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return <strong ref={ref}>{display.toLocaleString('en-IN')}{suffix}</strong>;
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__collage">
          <SmartImage src={kajuKatli} alt="Kaju katli arranged on a plate" className="about__img about__img--main" ratio="4 / 5" />
          <SmartImage src={jalebi} alt="Fresh jalebi" className="about__img about__img--top" ratio="1 / 1" />
          <SmartImage src={giftBox} alt="Festive gift box" className="about__img about__img--bottom" ratio="1 / 1" />
          <span className="about__stamp">Made<br /><strong>fresh daily</strong></span>
        </Reveal>

        <div>
          <Reveal><span className="eyebrow">Our story</span></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">A neighbourhood sweet shop, done the old way</h2></Reveal>
          <Reveal delay={0.1}>
            <p className="about__lead">
              Gupta Sweets started as a small counter with a handful of recipes from home. Today we make over sixty sweets and bakes, and we still taste every batch before it reaches you.
            </p>
          </Reveal>

          <ul className="about__pillars">
            {PILLARS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={0.1 + i * 0.08}>
                <span className="about__icon"><Icon size={20} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <ul className="about__counters">
              {COUNTERS.map((c) => (
                <li key={c.label}>
                  <Counter value={c.value} suffix={c.suffix} />
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
