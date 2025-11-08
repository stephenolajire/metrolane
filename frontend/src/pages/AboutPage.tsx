import AboutHero from '../components/about/AboutHero';
import LeadershipSection from '../components/about/Leadership';
import OurStorySection from '../components/about/OurStory'

const AboutPage = () => {
  return (
    <main className='mt-20 lg:mt-24'>
      <section>
        <AboutHero />
      </section>
      <section>
        <OurStorySection />
      </section>
      <section>
        <LeadershipSection />
      </section>
    </main>
  );
}

export default AboutPage
