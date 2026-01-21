import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 image-parallax ">
          <img
            className=" w-full h-full object-cover scale-110"
            src="src\assets\hero-pilates.jpg"
            alt="hero-pilates"
          />
        </div>
        <div className="absolute inset-0 bg-lit-subtle-foreground"></div>
        <div className="studio-container h-full pb-32 relative flex flex-col justify-end text-primary-foreground gap-5">
          <div className="max-w-2xl">
            <div className="text-ui text-lit-primary-foreground mb-4 tracking-wide">
              PILATES STUDIO • PARIS
            </div>
            <h1 className="text-h1 mb-10 uppercase tracking-tight">
              Find your balance.<br></br> Bloom from within.
            </h1>
            <p className="text-body text-lit-primary-foreground max-w-md">
              A sanctuary for mindful movement, where every session is crafted
              to help you discover strength, flexibility, and inner peace.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="grid grid-cols-2 items-center studio-container gap-24">
          <div>
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
              <Link className="under-hover-b" to={"/about"}>Discover More</Link>
            </p>
          </div>
          <div>
            <img src="src/assets/instructor-portrait.jpg" alt="instructor" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
