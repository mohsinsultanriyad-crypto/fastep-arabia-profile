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
    <section className="brochure-page bg-secondary p-12 md:p-16 flex flex-col justify-center">
      <div className="mb-10">
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">06</p>
        <h2 className="section-heading text-primary-foreground mb-2">
          PROJECTS SUPPORTING LEADING INDUSTRIAL CLIENTS
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-sm text-primary-foreground/60 font-body uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {clients.map((client) => (
          <div
            key={client}
            className="bg-primary-foreground/5 border border-primary-foreground/10 p-4 flex items-center justify-center text-center min-h-[72px]"
          >
            <span className="text-sm font-heading font-bold uppercase tracking-wide text-primary-foreground">
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
    </section>
  );
};

export default ProjectsClientsPage;
