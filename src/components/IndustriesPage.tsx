import networkTower from "@/assets/network-tower.jpg";
import engineersInstalling from "@/assets/engineers-installing.jpg";
import {
  Fuel, Factory, HardHat, Building2, Warehouse, Landmark
} from "lucide-react";

const industries = [
  { icon: Fuel, label: "Oil & Gas" },
  { icon: Factory, label: "Petrochemical" },
  { icon: HardHat, label: "Construction" },
  { icon: Factory, label: "Industrial Plants" },
  { icon: Warehouse, label: "Logistics & Warehousing" },
  { icon: Building2, label: "Commercial Facilities" },
  { icon: Landmark, label: "Government Sector" },
];

const whyChoose = [
  "Certified & experienced engineers",
  "Industrial mega-project capability",
  "Latest surveillance technology",
  "24/7 technical support",
  "Reliable and cost-effective execution",
  "Customized security solutions",
];

const IndustriesPage = () => {
  return (
    <section className="brochure-page bg-background p-12 md:p-16">
      <div className="mb-10">
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">05</p>
        <h2 className="section-heading text-foreground mb-4">INDUSTRIES SERVED</h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-10">
        <img src={networkTower} alt="Communication infrastructure" className="w-full h-40 object-cover" />
        <img src={engineersInstalling} alt="Engineers installing security systems" className="w-full h-40 object-cover" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {industries.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-heading font-bold uppercase tracking-wide text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div>
        <h3 className="section-subheading text-foreground mb-6">WHY CHOOSE FASTEP ARABIA</h3>
        <div className="section-divider-accent mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyChoose.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-primary flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-primary" />
              </div>
              <span className="text-sm font-body text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;
