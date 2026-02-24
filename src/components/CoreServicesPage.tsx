import cctvImage from "@/assets/cctv-camera.jpg";
import serverRoom from "@/assets/server-room.jpg";
import accessControl from "@/assets/access-control.jpg";
import fiberOptic from "@/assets/fiber-optic.jpg";
import videoWall from "@/assets/video-wall.jpg";
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

      {/* Image mosaic */}
      <div className="grid grid-cols-5 gap-2 mb-10">
        <div className="col-span-2 row-span-2">
          <img src={cctvImage} alt="CCTV camera at industrial facility" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-3">
          <img src={videoWall} alt="Video wall command center" className="w-full h-32 object-cover" />
        </div>
        <div>
          <img src={serverRoom} alt="Server room" className="w-full h-32 object-cover" />
        </div>
        <div>
          <img src={fiberOptic} alt="Fiber optic cables" className="w-full h-32 object-cover" />
        </div>
        <div>
          <img src={accessControl} alt="Access control device" className="w-full h-32 object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
        {services.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 py-3 border-b border-border">
            <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-primary-foreground" />
            </div>
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
