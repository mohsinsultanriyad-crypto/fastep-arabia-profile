import controlRoom from "@/assets/control-room.jpg";
import engineersInstalling from "@/assets/engineers-installing.jpg";

const AboutPage = () => {
  return (
    <section className="brochure-page bg-background p-12 md:p-16 flex flex-col justify-center">
      <div className="mb-10">
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">01</p>
        <h2 className="section-heading text-foreground mb-4">ABOUT THE COMPANY</h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
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
            className="w-full h-full object-cover min-h-[240px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
        </div>
      </div>

      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={engineersInstalling}
          alt="Engineers installing security systems at industrial site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-heading font-black text-primary-foreground">15+</p>
              <p className="text-xs font-heading uppercase tracking-widest text-primary-foreground/70 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-primary-foreground">200+</p>
              <p className="text-xs font-heading uppercase tracking-widest text-primary-foreground/70 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-primary-foreground">50+</p>
              <p className="text-xs font-heading uppercase tracking-widest text-primary-foreground/70 mt-1">Expert Engineers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
