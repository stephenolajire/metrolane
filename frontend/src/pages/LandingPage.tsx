import Hero from "../components/landing/Hero"
import NewsEventsSection from "../components/landing/NewsEventSection";
import WhoWeAreSection from "../components/landing/WhoWeAre";
import WhyChooseUsSection from "../layouts/WhyChooseUs";


const LandingPage = () => {
  return (
    <main className="lg:mt-24 mt-20">
      <section>
        <Hero />
      </section>
      <section>
        <WhoWeAreSection />
      </section>
      <section>
        <WhyChooseUsSection />
      </section>
      <section>
        <NewsEventsSection />
      </section>
    </main>
  );
}

export default LandingPage
