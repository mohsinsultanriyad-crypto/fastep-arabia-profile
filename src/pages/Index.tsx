import CoverPage from "@/components/CoverPage";
import AboutPage from "@/components/AboutPage";
import VisionMissionPage from "@/components/VisionMissionPage";
import CoreServicesPage from "@/components/CoreServicesPage";
import TechnicalCapabilitiesPage from "@/components/TechnicalCapabilitiesPage";
import IndustriesPage from "@/components/IndustriesPage";
import ProjectsClientsPage from "@/components/ProjectsClientsPage";
import ContactPage from "@/components/ContactPage";

const Index = () => {
  return (
    <div className="bg-muted">
      <div className="space-y-1">
        <CoverPage />
        <AboutPage />
        <VisionMissionPage />
        <CoreServicesPage />
        <TechnicalCapabilitiesPage />
        <IndustriesPage />
        <ProjectsClientsPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default Index;
