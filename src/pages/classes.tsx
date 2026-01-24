import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";
import { Link } from "react-router";
import { useOnScreen } from "@/hooks/useOnScreen";
import PageTransition from "@/components/ui/pageTransition";

const Classes = () => {
  const [refCollective, isVisibleCollective] = useOnScreen({
    threshold: 0.1,
  }) as [React.RefObject<HTMLElement>, boolean];
  const [refLocation, isVisibleLocation] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLDivElement>,
    boolean,
  ];
  const [refPrivate, isVisiblePrivate] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [refStudio, isVisibleStudio] = useOnScreen({ threshold: 0.3 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <PageTransition>
      <>
        {/** Head section **/}
        <section className="section-padding bg-foreground">
          <div className="studio-container text-primary-foreground flex flex-col justify-start gap-5 py-12">
            <p className="uppercase text-ui text-lit-primary-foreground tracking-wide fade-down fade-in">
              Classes
            </p>
            <h1
              className="uppercase text-h1 fade-up fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Every body is welcome.<br></br>
              Every journey is unique.
            </h1>
            <p
              className="text-body text-lit-primary-foreground max-w-xl fade-up fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Choose between our intimate group sessions or personalized private
              training. Each class is designed to challenge, inspire, and
              transform.
            </p>
          </div>
        </section>

        {/** Collective classes section **/}
        <section ref={refCollective} className="section-padding">
          <div className="studio-container space-y-12">
            <div
              className={`max-w-2xl fade-up ${isVisibleCollective ? "fade-in" : ""}`}
            >
              <p className="uppercase tracking-wide text-ui text-muted-foreground mb-4">
                Collective Classes
              </p>
              <h2 className="text-h2 uppercase mb-6">
                Group Sessions at MAB Studio
              </h2>
              <p className="text-body text-muted-foreground">
                Our collective classes take place at MAB Studio, a beautiful
                space in the heart of Paris. Small group sizes ensure
                personalized attention while fostering a supportive community
                atmosphere.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-16">
              <div
                className={`w-full fade-up ${isVisibleCollective ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="aspect-[4/3] overflow-hidden mb-8">
                  <img
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    src="src/assets/one-in-one-pilate.jpg"
                    alt="one-in-one-pilate"
                  />
                </div>
                <h3 className="uppercase text-title mb-4">Classic Pilates</h3>
                <p className="text-body text-muted-foreground mb-4">
                  Return to the fundamentals with our mat-based Pilates classes.
                  Using your body weight and simple props, you'll build core
                  strength, improve flexibility, and develop body awareness.
                </p>
                <ul className="space-y-4 text-body text-muted-foreground">
                  <li className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="h-2 w-2 rounded-full bg-foreground"></span>
                    55-minute sessions
                  </li>
                  <li className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="h-2 w-2 rounded-full bg-foreground"></span>
                    Maximum 8 participants
                  </li>
                  <li className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="h-2 w-2 rounded-full bg-foreground"></span>
                    All levels welcome
                  </li>
                </ul>
              </div>
              <div
                className={`w-full fade-up ${isVisibleCollective ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="aspect-[4/3] overflow-hidden w-full mb-8">
                  <img
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    src="src/assets/reformer-detail.jpg"
                    alt="reformer-detail"
                  />
                </div>
                <h3 className="uppercase text-title mb-4">Reformer Pilates</h3>
                <p className="text-body text-muted-foreground mb-4">
                  Experience the full potential of Pilates on our
                  state-of-the-art reformer machines. The added resistance
                  creates a deeper challenge and more precise muscle activation.
                </p>
                <ul className="space-y-4 text-body text-muted-foreground">
                  <li className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="h-2 w-2 rounded-full bg-foreground"></span>
                    55-minute sessions
                  </li>
                  <li className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="h-2 w-2 rounded-full bg-foreground"></span>
                    Maximum 6 participants
                  </li>
                  <li className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="h-2 w-2 rounded-full bg-foreground"></span>
                    Basic Pilates experience recommended
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`border-t-2 flex justify-center fade-up ${isVisibleCollective ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.6s" }}
            >
              <p className="text-ui uppercase tracking-wide mt-8 under-hover-b-classes">
                <Link
                  target="_blank"
                  className="flex gap-2 after:top-7"
                  to={"https://www.mab-studio.fr/tarifs-et-abonnements/"}
                >
                  Classes details & prices on MabStudio website{" "}
                  <MousePointerClick className="transition-transform duration-300 hover:scale-110" />
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/** Location section **/}
        <div ref={refLocation} className="studio-container bg-foreground mb-20">
          <div
            className={`flex flex-col md:flex-row justify-between py-6 fade-up ${isVisibleLocation ? "fade-in" : ""}`}
          >
            <div className="w-full space-y-4">
              <p className="tracking-wide uppercase text-ui text-lit-primary-foreground">
                Location
              </p>
              <h3 className="text-title text-primary-foreground">MAB Studio</h3>
              <p className="text-body text-lit-primary-foreground">
                123 Rue de la Paix <br></br>75002 Paris, France
              </p>
            </div>
            <div className="w-full space-y-4">
              <p className="tracking-wide uppercase text-ui text-lit-primary-foreground">
                Schedule
              </p>
              <p className="text-body text-lit-primary-foreground">
                Monday - Friday: 7:00 - 20:00 <br></br>Saturday: 9:00 - 14:00
                <br></br>Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/** Private session section **/}
        <section ref={refPrivate} className="section-padding bg-foreground">
          <div className="studio-container text-primary-foreground flex flex-col md:flex-row gap-24">
            <div
              className={`aspect-[4/3] overflow-hidden w-full fade-left ${isVisiblePrivate ? "fade-in" : ""}`}
            >
              <img
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                src="src/assets/private-studio.jpg"
                alt="private-studio"
              />
            </div>
            <div
              className={`w-full fade-right ${isVisiblePrivate ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h3 className="uppercase text-title mb-4">Private Sessions</h3>
              <p className="text-body text-lit-primary-foreground mb-4">
                For those seeking a fully personalized experience, private
                sessions offer the ultimate in bespoke Pilates training. Working
                one-on-one in my personal studio, I design each session around
                your specific goals, whether that's rehabilitation, athletic
                performance, or simply deepening your practice.
                <br />
                <br />
                Private sessions are ideal for those recovering from injury,
                prenatal and postnatal clients, or anyone who prefers focused,
                individual attention.
              </p>
              <div className="flex items-center justify-between border-t-1 border-lit-primary-foreground-d py-4 hover:bg-lit-subtle-foreground transition-colors duration-300 px-2">
                <div>
                  <h3 className="uppercase text-lit-title">Single Session</h3>
                  <p className="text-ui uppercase text-lit-primary-foreground tracking-wide">
                    60 minutes
                  </p>
                </div>
                <div>
                  <h3 className="uppercase text-lit-title">€90</h3>
                </div>
              </div>
              <div className="flex items-center justify-between border-t-1 border-lit-primary-foreground-d py-4 hover:bg-lit-subtle-foreground transition-colors duration-300 px-2">
                <div>
                  <h3 className="uppercase text-lit-title">
                    5-Session Package
                  </h3>
                  <p className="text-ui uppercase text-lit-primary-foreground tracking-wide">
                    Save €50
                  </p>
                </div>
                <div>
                  <h3 className="uppercase text-lit-title">€400</h3>
                </div>
              </div>
              <div className="flex items-center justify-between border-t-1 border-lit-primary-foreground-d py-4 hover:bg-lit-subtle-foreground transition-colors duration-300 px-2">
                <div>
                  <h3 className="uppercase text-lit-title">
                    10-Session Package
                  </h3>
                  <p className="text-ui uppercase text-lit-primary-foreground tracking-wide">
                    Save €150
                  </p>
                </div>
                <div>
                  <h3 className="uppercase text-lit-title">€750</h3>
                </div>
              </div>
              <Button
                className="mt-4 hover:bg-lit-primary-foreground hover:text-foreground transition-all duration-300 cursor-pointer tracking-wide uppercase bg-primary-foreground text-foreground rounded-none px-8 py-6"
                variant="outline"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </section>

        {/** Studio space section **/}
        <section ref={refStudio} className="section-padding">
          <div className="studio-container">
            <div
              className={`overflow-hidden aspect-[9/4] fade-up ${isVisibleStudio ? "fade-in" : ""}`}
            >
              <img
                className="object-cover h-full w-full hover:scale-105 transition-transform duration-1000"
                src="src/assets/studio-space.jpg"
                alt="studio-space-classes"
              />
            </div>
          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default Classes;
