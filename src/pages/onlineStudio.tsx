import PageTransition from "@/components/ui/pageTransition";
import { Spinner } from "@/components/ui/spinner";
import { useOnScreen } from "@/hooks/useOnScreen";
import { Link } from "react-router";

const OnlineStudio = () => {
  const [refEvent, isVisibleEvent] = useOnScreen({ threshold: 0.5 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [refInfos, isVisibleHoursInfos] = useOnScreen({ threshold: 0.5 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  return (
    <PageTransition>
      <>
        {/** Hero Section **/}
        <section
          ref={refEvent}
          className="section-padding bg-foreground min-h-screen flex items-center justify-center"
        >
          <div className="studio-container text-primary-foreground flex flex-col items-center justify-center gap-8 text-center">
            <div className="animate-spin-slow">
              <Spinner className="size-16" />
            </div>

            <div
              className={`space-y-6 max-w-3xl fade-up ${isVisibleEvent ? "fade-in" : ""}`}
            >
              <p className="uppercase text-ui text-lit-primary-foreground tracking-wide">
                Prochainement
              </p>

              <h1 className="uppercase text-h1 text-sm/8">
                Quelque chose
                <br />
                d'extraordinaire
                <br />
                arrive bientôt
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center mt-8">
              <div
                className={`text-center fade-up ${isVisibleEvent ? "fade-in" : ""}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <p className="text-ui uppercase tracking-wide text-muted-foreground mb-2">
                  En attendant
                </p>
                <p className="text-body uppercase text-primary-foreground">
                  <Link to={"/classes"} className="under-hover-w">
                    Découvrez nos cours collectifs et privés
                  </Link>
                </p>
              </div>
            </div>

            {/** Decorative elements **/}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/** Contact Section **/}
        <section ref={refInfos} className="section-padding bg-background">
          <div className="studio-container">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div
                className={` fade-down ${isVisibleHoursInfos ? "fade-in" : ""}`}
              >
                <p className="uppercase tracking-wide text-ui text-muted-foreground mb-4">
                  Restez informé
                </p>
                <h2 className="text-h2 uppercase mb-6">Une question ?</h2>
                <p className="text-body text-muted-foreground">
                  N'hésitez pas à me contacter pour toute information. Je me
                  ferais un plaisir de répondre à vos questions.
                </p>
              </div>

              <div className="border-t-2 border-border pt-8 space-y-4">
                <div className="flex flex-col md:flex-row justify-center gap-8">
                  <div
                    className={`text-center" fade-right ${isVisibleHoursInfos ? "fade-in" : ""}`}
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <p className="text-ui uppercase tracking-wide text-muted-foreground mb-2">
                      Email
                    </p>
                    <p className="text-body text-foreground">
                      contact@mab-studio.fr
                    </p>
                  </div>
                  <div
                    className={`text-center" fade-left ${isVisibleHoursInfos ? "fade-in" : ""}`}
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <p className="text-ui uppercase tracking-wide text-muted-foreground mb-2">
                      Téléphone
                    </p>
                    <p className="text-body text-foreground">
                      +33 1 23 45 67 89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default OnlineStudio;
