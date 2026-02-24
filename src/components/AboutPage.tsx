import controlRoom from "@/assets/control-room.jpg";

const AboutPage = () => {
  return (
    <section className="brochure-page bg-background p-12 md:p-16 flex flex-col justify-center">
      <div className="mb-10">
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">01</p>
        <h2 className="section-heading text-foreground mb-4">ABOUT THE COMPANY</h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-base leading-relaxed text-muted-foreground font-body mb-6">
            FASTEP ARABIA is a specialized system integrator delivering high-end security,
            surveillance, and low-current solutions for Saudi Arabia's industrial backbone.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground font-body mb-6">
            We provide design, supply, installation, testing, commissioning, and maintenance
            of integrated security and communication systems.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground font-body">
            Our expertise spans across oil &amp; gas, petrochemical, construction, and
            industrial sectors — delivering mission-critical infrastructure that meets the
            highest international standards.
          </p>
        </div>

        <div className="relative">
          <img
            src={controlRoom}
            alt="Surveillance control room with video wall"
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
