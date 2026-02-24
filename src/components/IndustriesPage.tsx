import networkTower from "@/assets/network-tower.jpg";
import engineersInstalling from "@/assets/engineers-installing.jpg";
import cctvCamera from "@/assets/cctv-camera.jpg";
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

      <div className="grid grid-cols-3 gap-3 mb-10">
        <img src={networkTower} alt="Communication infrastructure" className="w-full h-40 object-cover" />
        <img src={engineersInstalling} alt="Engineers installing security systems" className="w-full h-40 object-cover" />
        <img src={cctvCamera} alt="CCTV surveillance camera" className="w-full h-40 object-cover" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {industries.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 p-3 border border-border">
            <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xs font-heading font-bold uppercase tracking-wide text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-muted p-8">
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
