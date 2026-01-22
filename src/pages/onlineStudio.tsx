const OnlineStudio = () => {
  return (
    <>
      {/** Head section **/}
      <section className="section-padding bg-foreground">
        <div className="studio-container text-primary-foreground flex flex-col justify-start gap-5 py-12">
          <p className="uppercase text-ui text-lit-primary-foreground tracking-wide">
            Online Studio
          </p>
          <h1 className="uppercase text-h1">
            Your practice,<br></br>
            wherever you are
          </h1>
          <p className="text-body text-lit-primary-foreground w-xl">
            Join live classes from anywhere in the world. Experience the same
            quality instruction and personal attention as our in-studio
            sessions.
          </p>
        </div>
      </section>
    </>
  );
};

export default OnlineStudio;
