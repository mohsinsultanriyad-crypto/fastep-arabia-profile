import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import logo from "@/assets/fastep-logo.png";

const ContactPage = () => {
  return (
    <section className="brochure-page bg-background p-12 md:p-16 flex flex-col justify-center">
      <div className="mb-10 flex items-start justify-between">
        <div>
          <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">07</p>
          <h2 className="section-heading text-foreground mb-4">CONTACT US</h2>
          <div className="section-divider" />
        </div>
        <img src={logo} alt="FASTEP ARABIA Logo" className="h-14 object-contain" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Phone</h4>
              <p className="text-base font-body text-foreground">0504426715</p>
              <p className="text-base font-body text-foreground">0538881426</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</h4>
              <p className="text-base font-body text-foreground">marketing@fasteparabia.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Website</h4>
              <p className="text-base font-body text-foreground">fasteparabia.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Location</h4>
              <p className="text-base font-body text-foreground">Jubail Industrial Area<br />Saudi Arabia</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-heading font-black uppercase text-foreground mb-2">FASTEP ARABIA</h3>
            <p className="text-sm font-heading font-semibold uppercase tracking-widest text-primary mb-6">Advanced Security & Surveillance Solutions</p>
            <div className="w-full h-px bg-border mb-6" />
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              For inquiries, technical consultations, or partnership opportunities,
              contact our team. We are committed to delivering excellence in every project.
            </p>
          </div>

          <div className="mt-8 bg-muted p-6 flex items-center gap-6">
            <QRCodeSVG
              value="https://fasteparabia.com/company_profile.pdf"
              size={96}
              bgColor="transparent"
              fgColor="hsl(210, 11%, 21%)"
              level="M"
            />
            <div>
              <p className="text-xs font-heading font-bold uppercase tracking-widest text-foreground mb-1">
                Company Profile
              </p>
              <p className="text-xs text-muted-foreground font-body">
                Scan to download our<br />corporate profile document
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs font-body text-muted-foreground">
          © {new Date().getFullYear()} FASTEP ARABIA. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
