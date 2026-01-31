import { Link } from "react-router";
import { Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOnScreen } from "@/hooks/useOnScreen";
import PageTransition from "@/components/ui/pageTransition";

// Import images properly
import heroPilates from "@/assets/hero-pilates.jpg";
import instructorPortrait from "@/assets/instructor-portrait.jpg";
import studioSpace from "@/assets/studio-space.jpg";
import oneInOnePilate from "@/assets/one-in-one-pilate.jpg";

const Home = () => {
  const [refHero, isVisibleHero] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [refInstructor, isVisibleInstructor] = useOnScreen({
    threshold: 0.3,
  }) as [React.RefObject<HTMLElement>, boolean];
  const [refOnline, isVisibleOnline] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [refClasses, isVisibleClasses] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [refJourney, isVisibleJourney] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <PageTransition>
      <>
        {/** Hero section **/}
        <section ref={refHero} className="relative h-screen overflow-hidden">
          <div className={`absolute inset-0 image-parallax`}>
            <img
              className="w-full h-full object-cover scale-110"
              src={heroPilates}
              alt="hero-pilates"
            />
          </div>
          <div className="absolute inset-0 bg-lit-subtle-foreground"></div>
          <div className="studio-container h-full pb-32 relative flex flex-col justify-end text-primary-foreground gap-5">
            <div className="max-w-2xl">
              <div
                className={`text-ui text-lit-primary-foreground mb-4 tracking-wide fade-down ${isVisibleHero ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.2s" }}
              >
                PILATES STUDIO • PARIS
              </div>
              <h1
                className={`text-h1 mb-10 uppercase tracking-tight fade-down ${isVisibleHero ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.4s" }}
              >
                Find your balance.<br></br> Bloom from within.
              </h1>
              <p
                className={`text-body text-lit-primary-foreground max-w-md fade-down ${isVisibleHero ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.6s" }}
              >
                A sanctuary for mindful movement, where every session is crafted
                to help you discover strength, flexibility, and inner peace.
              </p>
            </div>
          </div>
        </section>

        {/** Instructor section **/}
        <section ref={refInstructor} className={`section-padding`}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 items-center studio-container gap-24`}
          >
            <div className={`fade-up ${isVisibleInstructor ? "fade-in" : ""}`}>
              <p className="mb-6 text-ui uppercase text-subtle-foreground tracking-wide">
                About the Studio
              </p>
              <h2 className="mb-6 text-h2 uppercase">
                Movement is a celebration of <br /> what your body can do
              </h2>
              <p className="mb-10 text-body text-muted-foreground">
                Founded by a certified Pilates professor with over a decade of
                experience, Bloom Studio is where traditional technique meets
                contemporary wellness. Every session is an invitation to connect
                with your body, breathe deeply, and discover your potential.
              </p>
              <p className="text-ui uppercase tracking-wide">
                <Link className="under-hover-b" to={"/about"}>
                  Discover More
                </Link>
              </p>
            </div>
            <div
              className={`fade-left ${isVisibleInstructor ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <img src={instructorPortrait} alt="instructor" />
            </div>
          </div>
        </section>

        {/** Classes section **/}
        <section ref={refClasses} className="section-padding bg-foreground">
          <div className={`flex flex-col items-center gap-4 mb-16`}>
            <p className="text-lit-primary-foreground uppercase">our classes</p>
            <h2 className="text-h2 text-primary-foreground uppercase">
              find your practice
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start studio-container gap-24">
            <div>
              <div
                className={`overflow-hidden aspect-[4/5] mb-6 `}
              >
                <img
                  className="w-full h-full object-cover hover:scale-100 transition-transform duration-700"
                  src={studioSpace}
                  alt="studio space"
                />
              </div>
              <p className="text-lit-primary-foreground uppercase tracking-wide mb-2">
                Collective Classes
              </p>
              <h3 className="text-title text-primary-foreground uppercase mb-4">
                Classic Pilates & Reformer
              </h3>
              <p className="text-lit-primary-foreground text-body font-light">
                Group sessions at MAB Studio with personalized attention in an
                intimate setting.
              </p>
            </div>
            <div>
              <div
                className={`overflow-hidden aspect-[4/5] mb-6 `}
              >
                <img
                  className="w-full h-full object-cover  hover:scale-100 transition-transform duration-700"
                  src={oneInOnePilate}
                  alt="one on one pilates"
                />
              </div>
              <p className="text-lit-primary-foreground uppercase tracking-wide mb-2">
                Private sessions
              </p>
              <h3 className="text-title text-primary-foreground uppercase mb-4">
                One-On-One training
              </h3>
              <p className="text-lit-primary-foreground text-body font-light">
                Bespoke sessions tailored to your goals in an exclusive private
                studio.
              </p>
            </div>
          </div>
          <div className={`flex flex-col items-center justify-center my-16`}>
            <p className="text-ui text-primary-foreground uppercase tracking-wide">
              <Link className="under-hover-w" to={"/classes"}>
                view all classes
              </Link>
            </p>
          </div>
        </section>

        {/** Philosophy section **/}
        <section className="section-padding">
          <div className="studio-container flex flex-col items-center gap-6 justify-center">
            <p className="text-ui text-muted-foreground-d uppercase tracking-wide fade-down fade-in">
              philosophy
            </p>
            <h3
              className="uppercase text-title text-center fade-up fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              "Physical fitness is the first requisite of happiness."
            </h3>
            <p
              className="text-ui text-muted-foreground-d uppercase tracking-wide fade-up fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              — Joseph Pilates
            </p>
          </div>
        </section>

        {/** OnlineStudio section **/}
        <section ref={refOnline} className="section-padding bg-foreground">
          <div className="studio-container grid grid-cols-1 lg:grid-cols-2">
            <div
              className={`flex flex-col gap-6 fade-right ${isVisibleOnline ? "fade-in" : ""}`}
            >
              <p className="text-ui text-lit-primary-foreground uppercase tracking-wide">
                online studio
              </p>
              <h3 className="uppercase text-title text-primary-foreground">
                Practice anywhere, anytime
              </h3>
              <p className="text-body text-lit-primary-foreground">
                Can't make it to the studio? Join our online classes and
                experience the same quality instruction from the comfort of your
                home. Flexible packages designed to fit your lifestyle.
              </p>
              <p className="text-ui text-primary-foreground uppercase tracking-wide lg:mb-0 mb-8">
                <Link className="under-hover-w" to={"/classes"}>
                  Explore the online studio
                </Link>
              </p>
            </div>
            <div
              className={`flex items-center justify-center fade-left ${isVisibleOnline ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-4">
                <div className="bg-primary-foreground py-10 px-4 flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <h3 className="text-title">10+</h3>
                  <p className="text-ui text-muted-foreground-d uppercase tracking-wide">
                    weekly classes
                  </p>
                </div>
                <div className="bg-primary-foreground py-10 px-4 flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <h3 className="text-title">500+</h3>
                  <p className="text-ui text-muted-foreground-d uppercase tracking-wide">
                    happy students
                  </p>
                </div>
                <div className="bg-primary-foreground py-10 px-4 flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <h3 className="text-title">10+</h3>
                  <p className="text-ui text-muted-foreground-d uppercase tracking-wide">
                    years of experience
                  </p>
                </div>
                <div className="bg-primary-foreground py-10 px-4 flex flex-col justify-center items-center gap-4 hover:scale-105 transition-transform duration-300">
                  <Infinity className="text-center" />
                  <p className="text-ui text-muted-foreground-d uppercase tracking-wide">
                    possibilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** Journey section **/}
        <section ref={refJourney} className="section-padding">
          <div
            className={`studio-container flex flex-col gap-8 justify-center items-center text-center fade-up ${isVisibleJourney ? "fade-in" : ""}`}
          >
            <h2 className="text-h2 uppercase">Ready to begin your journey?</h2>
            <p className="max-w-6/12 text-body text-muted-foreground-dd">
              Whether you're new to Pilates or looking to deepen your practice,
              we're here to guide you every step of the way.
            </p>
            <Link to={"/contact"}>
              <Button
                className="hover:bg-muted-foreground-dark hover:text-primary-foreground transition-all duration-300 cursor-pointer tracking-wide uppercase bg-foreground text-primary-foreground rounded-none px-8 py-6"
                variant="outline"
              >
                Get in touch
              </Button>
            </Link>
          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default Home;