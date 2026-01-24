import { Button } from "@/components/ui/button";
import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useOnScreen } from "@/hooks/useOnScreen";
import PageTransition from "@/components/ui/pageTransition";

type userFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<userFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [refForm, isVisibleForm] = useOnScreen({ threshold: 0.1 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [refHours, isVisibleHours] = useOnScreen({ threshold: 0.5 }) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submited", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageTransition>
      <>
        {/** Head section **/}
        <section className="section-padding bg-foreground">
          <div className="studio-container text-primary-foreground flex flex-col justify-start gap-5 py-12">
            <p className="uppercase text-ui text-lit-primary-foreground tracking-wide fade-down fade-in">
              Contact
            </p>
            <h1
              className="uppercase text-h1 fade-up fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Let's start a<br></br>
              conversation
            </h1>
            <p
              className="text-body text-lit-primary-foreground max-w-xl fade-up fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Whether you have questions about our classes, want to book a
              private session, or simply want to learn more about Pilates, I'd
              love to hear from you.
            </p>
          </div>
        </section>

        {/** Form section **/}
        <section ref={refForm} className="section-padding">
          <div className="studio-container flex flex-col md:flex-row gap-16 lg:gap-24">
            <div
              onSubmit={handleSubmit}
              className={`space-y-6 w-full fade-right ${isVisibleForm ? "fade-in" : ""}`}
            >
              <h3 className="text-title uppercase">Send a message</h3>
              <div className="flex flex-col gap-2">
                <label
                  className="text-ui uppercase tracking-wide"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className="bg-foreground text-primary-foreground py-2 px-4 focus:outline-none focus:ring-2 focus:ring-muted-foreground transition-all duration-300"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  placeholder="Your name"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-ui uppercase tracking-wide"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className="bg-foreground text-primary-foreground py-2 px-4 focus:outline-none focus:ring-2 focus:ring-muted-foreground transition-all duration-300"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  placeholder="your@email.com"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-ui uppercase tracking-wide"
                  htmlFor="subject"
                >
                  Subject:
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-foreground text-lit-primary-foreground-d py-2 px-4 focus:outline-none focus:ring-2 focus:ring-muted-foreground transition-all duration-300 cursor-pointer"
                >
                  <option value="">Select a subject</option>
                  <option value="classes">Collective Classes</option>
                  <option value="private">Private Sessions</option>
                  <option value="online">Online Studio</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-ui uppercase tracking-wide"
                  htmlFor="message"
                >
                  Message:
                </label>
                <textarea
                  className="bg-foreground text-primary-foreground py-2 px-4 min-h-32 focus:outline-none focus:ring-2 focus:ring-muted-foreground transition-all duration-300 resize-y"
                  name="message"
                  id="message"
                  value={formData.message}
                  required
                  placeholder="Tell me about your goals or ask any question"
                  onChange={handleChange}
                />
              </div>
              <Button
                className="w-full mt-4 hover:bg-muted-foreground-d hover:text-primary-foreground transition-all duration-300 cursor-pointer tracking-wide uppercase bg-foreground text-primary-foreground rounded-none px-8 py-6 hover:scale-[1.02]"
                variant="outline"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>

            {/** Contact info section **/}
            <div
              className={`w-full fade-left ${isVisibleForm ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h3 className="text-title uppercase mb-6">Get in touch</h3>
              <div className="text-muted-foreground-d">
                <div className="space-y-2 mb-6 hover:translate-x-2 transition-transform duration-300">
                  <p className="flex items-center gap-2 text-ui uppercase tracking-wide">
                    <Mail size={16} />
                    Email
                  </p>
                  <Link
                    to={"mailto:hello@bloomstudio.com"}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    hello@bloomstudio.com
                  </Link>
                </div>
                <div className="space-y-2 mb-6 hover:translate-x-2 transition-transform duration-300">
                  <p className="flex items-center gap-2 text-ui uppercase tracking-wide">
                    <SiInstagram size={16} />
                    Instagram
                  </p>
                  <Link
                    to={"https://instagram.com"}
                    target="_blank"
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    @Instabloomstudio
                  </Link>
                </div>
                <div className="space-y-2 mb-6 hover:translate-x-2 transition-transform duration-300">
                  <p className="flex items-center gap-2 text-ui uppercase tracking-wide">
                    <SiTiktok size={16} />
                    TikTok
                  </p>
                  <Link
                    to={"https://tiktok.com"}
                    target="_blank"
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    @TikTokbloomstudio
                  </Link>
                </div>
                <div className="space-y-2 mb-6 hover:translate-x-2 transition-transform duration-300">
                  <p className="flex items-center gap-2 text-ui uppercase tracking-wide">
                    <MapPin size={16} />
                    Studio Location
                  </p>
                  <p className="text-body">
                    MAB Studio
                    <br />
                    123 Rue de la Paix
                    <br />
                    75002 Paris, France
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <div className="aspect-[4/3] bg-secondary overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.5910292072126!2d5.036906376598688!3d47.32232760756448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29dd34a98941d%3A0x38a2bffecc9d781!2sMAB%20STUDIO!5e0!3m2!1sfr!2sfr!4v1769169656431!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** Studio hours section **/}
        <section ref={refHours} className="section-padding bg-foreground">
          <div className="studio-container space-y-6">
            <h3
              className={`text-center text-title uppercase text-primary-foreground fade-down ${isVisibleHours ? "fade-in" : ""}`}
            >
              Studio hours
            </h3>
            <div
              className={`text-primary-foreground flex justify-evenly mb-10 fade-up ${isVisibleHours ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
                <p className="text-ui uppercase tracking-wide text-lit-primary-foreground mb-1.5">
                  Mon - Fri
                </p>
                <p>7:00 - 20:00</p>
              </div>
              <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
                <p className="text-ui uppercase tracking-wide text-lit-primary-foreground mb-1.5">
                  Saturday
                </p>
                <p>9:00 - 14:00</p>
              </div>
            </div>
            <p
              className={`text-center text-ui uppercase tracking-wide text-lit-primary-foreground fade-up ${isVisibleHours ? "fade-in" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              Closed on Sundays and public holidays
            </p>
          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default Contact;
