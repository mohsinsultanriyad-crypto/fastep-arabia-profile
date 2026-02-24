import heroImage from "@/assets/hero-industrial.jpg";
import logo from "@/assets/fastep-logo.png";

const CoverPage = () => {
  return (
    <section className="brochure-page relative flex flex-col justify-between bg-secondary print:break-after-page">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial refinery at dusk"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      <div className="relative z-10 p-12 md:p-16 pt-10">
        <img src={logo} alt="FASTEP ARABIA Logo" className="h-16 md:h-20 object-contain" />
      </div>

      <div className="relative z-10 p-12 md:p-16 pb-20">
        <div className="mb-6">
          <div className="section-divider-accent mb-8" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-primary-foreground leading-none mb-4 font-heading">
            FASTEP
            <br />
            ARABIA
          </h1>
          <div className="w-full h-px bg-primary-foreground/20 my-6" />
          <p className="text-xl md:text-2xl font-heading font-semibold uppercase tracking-widest text-primary-foreground/80">
            Advanced Security &<br />Surveillance Solutions
          </p>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="w-3 h-3 bg-accent" />
          <p className="text-sm font-body uppercase tracking-widest text-primary-foreground/60">
            Jubail Industrial Area, Saudi Arabia
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
