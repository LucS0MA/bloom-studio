const Contact = () => {
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
          <p className="text-body text-lit-primary-foreground w-xl">
            Whether you have questions about our classes, want to book a private
            session, or simply want to learn more about Pilates, I'd love to
            hear from you.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
