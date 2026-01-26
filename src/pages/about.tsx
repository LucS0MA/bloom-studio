import PageTransition from "@/components/ui/pageTransition";
import { useOnScreen } from "@/hooks/useOnScreen";

// Import images properly
import instructorPortrait from "@/assets/instructor-portrait.jpg";
import studioSpace from "@/assets/studio-space.jpg";

const About = () => {
  const [refNutshell, isVisibleNutshell] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [refCertifications, isVisibleCertifications] = useOnScreen({
    threshold: 0.3,
  }) as [React.RefObject<HTMLElement>, boolean];
  const [refStudio, isVisibleStudio] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <PageTransition>
      <>
        {/** Head section **/}
        <section className="section-padding bg-foreground">
          <div className="studio-container text-primary-foreground flex flex-col gap-5 py-12">
            <p className="uppercase text-ui text-lit-primary-foreground tracking-wide fade-down fade-in">
              About
            </p>
            <h1
              className="uppercase text-h1 fade-up fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              The woman behind<br></br>Bloom Studio
            </h1>
          </div>
        </section>

        {/** Instructor nutshell section **/}
        <section ref={refNutshell} className="section-padding">
          <div className="studio-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
              <div
                className={`flex flex-col justify-center fade-right ${isVisibleNutshell ? "fade-in" : ""}`}
              >
                <h2 className="mb-6 text-title uppercase">In a nutshell</h2>
                <p className="mb-10 text-body text-muted-foreground-d">
                  My journey with Pilates began over fifteen years ago when I
                  discovered its transformative power during my dance training
                  in Paris. What started as a way to prevent injuries quickly
                  became a lifelong passion. <br />
                  <br /> After completing my certification with the Pilates
                  Method Alliance and studying extensively with master teachers
                  across Europe, I founded Bloom Studio with a simple mission:
                  to share the profound benefits of mindful movement with
                  everyone, regardless of age or fitness level. I believe that
                  Pilates is more than exercise it's a practice of presence, a
                  conversation between mind and body.
                  <br />
                  <br /> Every session I teach is an opportunity to help
                  students discover their strength, improve their posture, and
                  cultivate a deeper awareness of how they move through life.
                </p>
              </div>
              <div
                className={`order-first lg:order-last aspect-[3/4] overflow-hidden fade-left ${isVisibleNutshell ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={instructorPortrait}
                  alt="instructor"
                />
              </div>
            </div>
          </div>
        </section>

        {/** Certifications section **/}
        <section
          ref={refCertifications}
          className="section-padding bg-foreground"
        >
          <div className="studio-container">
            <div className="flex flex-col md:flex-row justify-center gap-24">
              <div
                className={`w-full fade-up ${isVisibleCertifications ? "fade-in" : ""}`}
              >
                <h3 className="text-title uppercase mb-4 text-primary-foreground">
                  Teaching philosophy
                </h3>
                <p className="text-body text-lit-primary-foreground">
                  My approach combines classical Pilates principles with
                  contemporary understanding of biomechanics. I focus on quality
                  over quantity, precision over speed, and breath over
                  everything.
                  <br />
                  <br />
                  Whether you're recovering from an injury, training for
                  athletic performance, or simply seeking balance in your body
                  and mind, I meet you exactly where you are and guide you
                  toward where you want to be.
                </p>
              </div>
              <div
                className={`w-full fade-up ${isVisibleCertifications ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <h3 className="text-title uppercase mb-4 text-primary-foreground">
                  Certifications
                </h3>
                <ul className="text-body text-lit-primary-foreground space-y-4">
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="rounded-full h-2 w-2 bg-white"></span>
                    Pilates Method Alliance Certified Teacher
                  </li>
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="rounded-full h-2 w-2 bg-white"></span>STOTT
                    Pilates® Reformer Certification
                  </li>
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="rounded-full h-2 w-2 bg-white"></span>
                    Polestar Pilates Rehabilitation Specialist
                  </li>
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="rounded-full h-2 w-2 bg-white"></span>
                    Anatomy in Motion Training
                  </li>
                  <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="rounded-full h-2 w-2 bg-white"></span>Pre &
                    Postnatal Pilates Certification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/** Studio space section **/}
        <section ref={refStudio} className="section-padding">
          <div className="studio-container">
            <div
              className={`aspect-[21/9] overflow-hidden mb-10 fade-up ${isVisibleStudio ? "fade-in" : ""}`}
            >
              <img
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000"
                src={studioSpace}
                alt="studio-space"
              />
            </div>
            <div
              className={`max-w-2xl space-y-4 fade-up ${isVisibleStudio ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h3 className="text-title uppercase">
                A space designed for focus
              </h3>
              <p className="text-body text-muted-foreground-d">
                Bloom Studio is thoughtfully designed to create a calming
                atmosphere where you can disconnect from the outside world and
                focus entirely on your practice. Natural light, warm materials,
                and carefully selected equipment create the perfect environment
                for transformation.
              </p>
            </div>
          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default About;