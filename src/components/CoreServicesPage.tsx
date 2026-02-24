import cctvImage from "@/assets/cctv-camera.jpg";
import serverRoom from "@/assets/server-room.jpg";
import accessControl from "@/assets/access-control.jpg";
import {
  Camera, Network, Fingerprint, Monitor, Shield, Wrench,
  Cable, Radio, Lock
} from "lucide-react";

const services = [
  { icon: Camera, label: "CCTV System Design & Installation" },
  { icon: Camera, label: "IP / Analog / Thermal Cameras" },
  { icon: Monitor, label: "Video Analytics & AI Surveillance" },
  { icon: Cable, label: "Structured Cabling & Fiber Optics" },
  { icon: Network, label: "Network Infrastructure & Data Systems" },
  { icon: Fingerprint, label: "Access Control & Biometrics" },
  { icon: Monitor, label: "Control Room / Video Wall Solutions" },
  { icon: Radio, label: "Remote Monitoring Systems" },
  { icon: Lock, label: "Cyber Security & Network Protection" },
  { icon: Wrench, label: "Annual Maintenance Contracts (AMC)" },
  { icon: Shield, label: "Industrial & Construction Site Security" },
];

const CoreServicesPage = () => {
  return (
    <section className="brochure-page bg-background p-12 md:p-16">
      <div className="mb-10">
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">03</p>
        <h2 className="section-heading text-foreground mb-4">CORE SERVICES</h2>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-10">
        <img src={cctvImage} alt="CCTV camera at industrial facility" className="w-full h-32 object-cover" />
        <img src={serverRoom} alt="Server room with network cables" className="w-full h-32 object-cover" />
        <img src={accessControl} alt="Biometric access control device" className="w-full h-32 object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {services.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 py-3 border-b border-border">
            <Icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-heading font-semibold uppercase tracking-wide text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServicesPage;
