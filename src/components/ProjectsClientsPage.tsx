import refineryNight from "@/assets/refinery-night.jpg";

const clients = [
  "Saudi Aramco",
  "SABIC",
  "Saudi Electricity Company (SEC)",
  "STC (Saudi Telecom Company)",
  "Nesma & Partners",
  "Alfanar",
  "Larsen & Toubro (L&T)",
  "Samsung Engineering",
  "Hyundai Engineering",
  "Petrofac",
  "Ma'aden",
  "SATORP",
  "Petro Rabigh",
];

const ProjectsClientsPage = () => {
  return (
    <section className="brochure-page bg-secondary p-0 flex flex-col">
      {/* Top image band */}
      <div className="relative w-full h-40">
        <img src={refineryNight} alt="Industrial facility perimeter security" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="absolute inset-0 flex items-center px-12 md:px-16">
          <div>
            <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-2">06</p>
            <h2 className="section-heading text-primary-foreground text-2xl md:text-3xl">
              PROJECTS SUPPORTING LEADING<br />INDUSTRIAL CLIENTS
            </h2>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </div>

      <div className="p-12 md:p-16 flex-1 flex flex-col justify-center">
        <p className="text-sm text-primary-foreground/60 font-heading uppercase tracking-widest mb-8">
          Trusted by Industry Leaders
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-primary-foreground/5 border border-primary-foreground/10 p-5 flex items-center justify-center text-center min-h-[72px]"
            >
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary-foreground leading-tight">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-xs text-primary-foreground/50 font-body italic leading-relaxed">
            Experience gained through supporting major industrial projects executed by leading
            EPC contractors and organizations across the Kingdom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsClientsPage;
