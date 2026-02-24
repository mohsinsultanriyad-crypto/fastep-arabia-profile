import cyberSecurity from "@/assets/cyber-security.jpg";
import thermalCamera from "@/assets/thermal-camera.jpg";
import {
  ScanEye, Brain, UserCheck, Car, ShieldCheck,
  Command, Database
} from "lucide-react";

const capabilities = [
  { icon: ScanEye, label: "Long-Range PTZ Cameras", desc: "High-definition surveillance across extended perimeters" },
  { icon: Brain, label: "AI Intrusion Detection", desc: "Intelligent threat recognition and automated alerting" },
  { icon: UserCheck, label: "Facial Recognition Systems", desc: "Advanced biometric identification for secure access" },
  { icon: Car, label: "License Plate Recognition (LPR)", desc: "Automated vehicle identification and tracking" },
  { icon: ShieldCheck, label: "Cyber-Secure Network Architecture", desc: "Hardened infrastructure against digital threats" },
  { icon: Command, label: "Centralized Command & Control", desc: "Unified management of all security subsystems" },
  { icon: Database, label: "High-Availability Data Systems", desc: "Redundant storage with zero-downtime architecture" },
];

const TechnicalCapabilitiesPage = () => {
  return (
    <section className="brochure-page bg-background p-12 md:p-16">
      <div className="mb-10">
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">04</p>
        <h2 className="section-heading text-foreground mb-4">TECHNICAL CAPABILITIES</h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-10">
        <div className="relative">
          <img src={cyberSecurity} alt="Cyber security visualization" className="w-full h-44 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
        </div>
        <div className="relative">
          <img src={thermalCamera} alt="Thermal imaging camera view of industrial facility" className="w-full h-44 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
        </div>
      </div>

      <div className="space-y-5">
        {capabilities.map(({ icon: Icon, label, desc }, i) => (
          <div key={label} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 border-b border-border pb-4">
              <h4 className="text-sm font-heading font-bold uppercase tracking-wide text-foreground mb-1">
                {label}
              </h4>
              <p className="text-sm text-muted-foreground font-body">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalCapabilitiesPage;
