import { Button } from "@/components/ui/button";
import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

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
    <>
      {/** Head section **/}
      <section className="section-padding bg-foreground">
        <div className="studio-container text-primary-foreground flex flex-col justify-start gap-5 py-12">
          <p className="uppercase text-ui text-lit-primary-foreground tracking-wide">
            Contact
          </p>
          <h1 className="uppercase text-h1">
            Let's start a<br></br>
            conversation
          </h1>
          <p className="text-body text-lit-primary-foreground max-w-xl">
            Whether you have questions about our classes, want to book a private
            session, or simply want to learn more about Pilates, I'd love to
            hear from you.
          </p>
        </div>
      </section>
      {/** Form section **/}
      <section className="section-padding">
        <div className="studio-container flex flex-col md:flex-row gap-16 lg:gap-24">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <h3 className="text-title uppercase">Send a message</h3>
            <div className="flex flex-col gap-2">
              <label className="text-ui uppercase tracking-wide" htmlFor="name">
                Name:
              </label>
              <input
                className="bg-foreground text-primary-foreground py-2 px-4"
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
              <label className="text-ui uppercase tracking-wide" htmlFor="name">
                Email:
              </label>
              <input
                className="bg-foreground text-primary-foreground py-2 px-4"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                required
                placeholder="your@email.com"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-ui uppercase tracking-wide" htmlFor="name">
                Subject:
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-foreground text-lit-primary-foreground-d py-2 px-4"
              >
                <option value="">Select a subject</option>
                <option value="classes">Collective Classes</option>
                <option value="private">Private Sessions</option>
                <option value="online">Online Studio</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-ui uppercase tracking-wide" htmlFor="name">
                Message:
              </label>
              <textarea
                className="bg-foreground text-primary-foreground py-2 px-4"
                name="message"
                id="message"
                value={formData.message}
                required
                placeholder="Tell me about your goals or ask any question"
                onChange={handleChange}
              />
            </div>
            <Button
              className=" w-full mt-4 hover:bg-muted-foreground-d hover:text-primary-foreground transition-all duration-300 cursor-pointer tracking-wide uppercase bg-foreground text-primary-foreground rounded-none px-8 py-6"
              variant="outline"
              type="submit"
            >
              Submit
            </Button>
          </form>
          {/** Contact info section **/}
          <div className="w-full">
            <h3 className="text-title uppercase mb-6">Get in touch</h3>
            <div className=" text-muted-foreground-d">
              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-2 text-ui uppercase tracking-wide">
                  <Mail size={16} />
                  Email
                </p>
                <Link to={"/"}>hello@bloomstudio.com</Link>
              </div>
              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-2 text-ui uppercase tracking-wide">
                  <SiInstagram size={16} />
                  Instagram
                </p>
                <Link to={"/"}>@Instabloomstudio</Link>
              </div>
              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-2 text-ui uppercase tracking-wide">
                  <SiTiktok size={16} />
                  TikTok
                </p>
                <Link to={"/"}>@TikTokbloomstudio.com</Link>
              </div>
              <div className="space-y-2 mb-6">
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
            {/* Map Placeholder */}
            <div className="mt-12">
              <div className="aspect-[4/3] bg-secondary overflow-hidden">
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
      <section className="section-padding bg-foreground">
        <div className="studio-container space-y-6">
          <h3 className="text-center text-title uppercase text-primary-foreground">
            Studio hours
          </h3>
          <div className="text-primary-foreground flex justify-evenly mb-10">
            <div className="flex flex-col items-center justify-center">
              <p className="text-ui uppercase tracking-wide text-lit-primary-foreground mb-1.5">
                Mon - Fri
              </p>
              <p>7:00 - 20:00</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-ui uppercase tracking-wide text-lit-primary-foreground mb-1.5">
                Saturday
              </p>
              <p>9:00 - 14:00</p>
            </div>
          </div>
          <p className="text-center text-ui uppercase tracking-wide text-lit-primary-foreground">
            Closed on Sundays and public holidays
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
