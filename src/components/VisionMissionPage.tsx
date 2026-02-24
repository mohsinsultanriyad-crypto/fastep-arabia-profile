import { Eye, Target, Shield } from "lucide-react";

const VisionMissionPage = () => {
  return (
    <section className="brochure-page bg-secondary p-12 md:p-16 flex flex-col justify-center">
      <div className="mb-10">
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">02</p>
        <h2 className="section-heading text-primary-foreground mb-4">VISION & MISSION</h2>
        <div className="section-divider-accent" />
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div className="border-l-4 border-primary pl-8">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-primary" />
            <h3 className="section-subheading text-primary-foreground">OUR VISION</h3>
          </div>
          <p className="text-base leading-relaxed text-primary-foreground/70 font-body">
            To be the leading provider of integrated security and low-current systems
            across Saudi Arabia's industrial sector — setting the benchmark for reliability,
            technical excellence, and innovation in critical infrastructure protection.
          </p>
        </div>

        <div className="border-l-4 border-accent pl-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-accent" />
            <h3 className="section-subheading text-primary-foreground">OUR MISSION</h3>
          </div>
          <p className="text-base leading-relaxed text-primary-foreground/70 font-body">
            To deliver world-class security solutions through certified engineering expertise,
            cutting-edge technology, and unwavering commitment to safety and quality — supporting
            the Kingdom's industrial growth and Vision 2030.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="section-subheading text-primary-foreground">OUR VALUES</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Technical Excellence", "Safety First", "Integrity", "Innovation", "Client Focus", "Reliability"].map((value) => (
              <div key={value} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-sm font-heading font-semibold uppercase tracking-wide text-primary-foreground/80">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPage;
