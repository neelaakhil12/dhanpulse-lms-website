import { notFound } from "next/navigation";
import { ShieldAlert, BookText, Fingerprint, RefreshCw } from "lucide-react";

const legalContent: Record<string, any> = {
  disclaimer: {
    title: "SEBI Disclaimer",
    icon: ShieldAlert,
    content: `
      <p>Investment in securities market are subject to market risks. Read all the related documents carefully before investing.</p>
      <p>DhanPulse and its founder Ajay Rao Devoor are SEBI registered investment advisors. However, all our courses and research materials are for educational and informational purposes only.</p>
      <p>Trading in the stock market involves significant risk and may result in the loss of all invested capital. Past performance is not indicative of future results.</p>
      <p>We do not guarantee any specific returns or profits from our training programs or advisory signals. Traders should consult with their certified financial advisor before making any investment decisions.</p>
    `
  },
  privacy: {
    title: "Privacy Policy",
    icon: Fingerprint,
    content: `
      <p>Your privacy is of utmost importance to us. DhanPulse collects basic information such as your name, email, and phone number to provide you with access to our LMS and advisory services.</p>
      <p>We do not sell or share your personal data with third-party marketing agencies. All data is processed securely through encrypted channels.</p>
      <p>We use cookies to enhance your experience on our platform and for analytics to improve our content delivery. By using our website, you consent to our privacy practices.</p>
    `
  },
  terms: {
    title: "Terms & Conditions",
    icon: BookText,
    content: `
      <p>By enrolling in any DhanPulse course, you agree to the following terms:</p>
      <ul>
        <li>Course content is for personal use only and cannot be shared, sold, or redistributed.</li>
        <li>Access to live sessions is subject to the schedule provided by DhanPulse.</li>
        <li>Any form of harassment or unprofessional behavior in our community forums will lead to immediate termination of access without refund.</li>
        <li>Strategies taught are subjective and execution results may vary from person to person.</li>
      </ul>
    `
  },
  refunds: {
    title: "Refund Policy",
    icon: RefreshCw,
    content: `
      <p>At DhanPulse, we strive to provide the highest quality of financial education. However, due to the digital nature of our courses and immediate access to intellectual property:</p>
      <ul>
        <li>No refunds will be provided after course access has been granted.</li>
        <li>Payments for advisory services are non-refundable once the service period has commenced.</li>
        <li>If you face technical issues with the LMS, please contact support for a resolution.</li>
      </ul>
    `
  }
};

export default async function LegalPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const page = legalContent[slug];

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <section className="py-16 lg:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
           <div className="inline-flex p-4 rounded-full bg-brand-navy/5 border border-brand-navy/10 mb-8">
             <page.icon className="h-8 w-8 text-brand-navy" />
           </div>
           <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{page.title}</h1>
           <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">DhanPulse Legal Documents</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm">
            <div 
              className="prose prose-gray prose-lg max-w-none 
                prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600
                prose-a:text-brand-navy hover:prose-a:underline transition-colors"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-sm text-gray-400 italic">Last updated: April 15, 2026</p>
               <div className="text-sm text-gray-500">
                 Need clarification? <a href="/contact" className="text-brand-navy hover:underline font-bold">Contact Support</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
