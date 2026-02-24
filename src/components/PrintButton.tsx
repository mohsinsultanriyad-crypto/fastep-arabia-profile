import { Printer } from "lucide-react";

const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity print:hidden"
      aria-label="Print / Export PDF"
    >
      <Printer className="w-6 h-6" />
    </button>
  );
};

export default PrintButton;
