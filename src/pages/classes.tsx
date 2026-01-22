import { MousePointerClick } from "lucide-react";
import { Link } from "react-router";

const Classes = () => {
  return (
    <>
      {/** Head section **/}
      <section className="section-padding bg-foreground">
        <div className="studio-container text-primary-foreground flex flex-col justify-start gap-5 py-12">
          <p className="uppercase text-ui text-lit-primary-foreground tracking-wide">
            Classes
          </p>
          <h1 className="uppercase text-h1">
            Every body is welcome.<br></br>
            Every journey is unique.
          </h1>
          <p className="text-body text-lit-primary-foreground w-xl">
            Choose between our intimate group sessions or personalized private
            training. Each class is designed to challenge, inspire, and
            transform.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="studio-container space-y-12">
          <div className="w-2xl">
            <p className="uppercase tracking-wide text-ui text-muted-foreground mb-4">
              Collective Classes
            </p>
            <h2 className="text-h2 uppercase mb-6">
              Group Sessions at MAB Studio
            </h2>
            <p className="text-body text-muted-foreground">
              Our collective classes take place at MAB Studio, a beautiful space
              in the heart of Paris. Small group sizes ensure personalized
              attention while fostering a supportive community atmosphere.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full">
              <div className="aspect-[4/3] overflow-hidden mb-8">
                <img
                  className="h-full w-full object-cover"
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
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 rounded full bg-foreground"></span>
                  55-minute sessions
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 rounded full bg-foreground"></span>
                  Maximum 8 participants
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 rounded full bg-foreground"></span>
                  All levels welcome
                </li>
              </ul>
            </div>
            <div className="w-full">
              <div className="aspect-[4/3] overflow-hidden w-full mb-8">
                <img
                  className="h-full w-full object-cover"
                  src="src/assets/reformer-detail.jpg"
                  alt="reformer-detail"
                />
              </div>
              <h3 className="uppercase text-title mb-4">Reformer Pilates</h3>
              <p className="text-body text-muted-foreground mb-4">
                Experience the full potential of Pilates on our state-of-the-art
                reformer machines. The added resistance creates a deeper
                challenge and more precise muscle activation.
              </p>
              <ul className="space-y-4 text-body text-muted-foreground">
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 rounded full bg-foreground"></span>
                  55-minute sessions
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 rounded full bg-foreground"></span>
                  Maximum 6 participants
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 rounded full bg-foreground"></span>
                  Basic Pilates experience recommended
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 flex justify-center">
            <p className="text-ui uppercase tracking-wide mt-8">
              <Link
                target="_blank"
                className="under-hover-b flex gap-2 after:top-7"
                to={"https://www.mab-studio.fr/tarifs-et-abonnements/"}
              >
                Classes details & prices on MabStudio website{" "}
                <MousePointerClick />
              </Link>
            </p>
          </div>
        </div>
      </section>
        <div className="studio-container bg-foreground mb-20">
          <div className="flex flex-col md:flex-row justify-between py-6">
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
    </>
  );
};

export default Classes;
