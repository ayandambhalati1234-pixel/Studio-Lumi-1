import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Menu, X, CheckCircle2, ChevronDown, 
  Smartphone, Zap, Paintbrush, Briefcase, 
  Code, ShoppingCart, Server, Wrench, 
  PenTool, LineChart, MessageSquare, BarChart,
  ArrowRight, ShieldCheck, Clock, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuoteFormModal } from "@/components/QuoteFormModal";

// --- Components --- //

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <QuoteFormModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">SL</span>
                </div>
                Studio Lumière
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection('packages')} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Packages</button>
              <button onClick={() => scrollToSection('rental-plans')} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Rental Plans</button>
              <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Process</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">FAQ</button>
              <Button 
                onClick={() => setQuoteModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6"
                data-testid="btn-nav-quote"
              >
                Get A Free Quote
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl p-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-base font-medium py-2 text-muted-foreground hover:text-white">Services</button>
            <button onClick={() => scrollToSection('packages')} className="text-left text-base font-medium py-2 text-muted-foreground hover:text-white">Packages</button>
            <button onClick={() => scrollToSection('rental-plans')} className="text-left text-base font-medium py-2 text-muted-foreground hover:text-white">Rental Plans</button>
            <button onClick={() => scrollToSection('process')} className="text-left text-base font-medium py-2 text-muted-foreground hover:text-white">Process</button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-base font-medium py-2 text-muted-foreground hover:text-white">FAQ</button>
            <Button 
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="w-full bg-primary text-white"
            >
              Get A Free Quote
            </Button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-chart-2/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Premium South African Agency</span>
                </motion.div>
                
                <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6">
                  Professional Websites For <span className="text-gradient">Growing Businesses</span>
                </motion.h1>
                
                <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  We make it easy and affordable for businesses to get online. Whether you want to own your website outright or rent one monthly, we deliver premium quality without the premium price tag.
                </motion.p>
                
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-14 text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    Get A Free Quote
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-border hover:bg-secondary rounded-full px-8 h-14 text-base"
                    onClick={() => scrollToSection('packages')}
                  >
                    View Packages
                  </Button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div variants={fadeIn} className="pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4 font-medium">Included as standard:</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {['Responsive Design', 'SEO Ready', 'Fast Loading', 'Secure Hosting'].map((badge) => (
                      <div key={badge} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {badge}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[4/3]">
                  <img 
                    src="/hero-illustration.png" 
                    alt="Modern web design workspace" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -left-8 top-1/4 bg-card border border-border p-4 rounded-xl shadow-xl animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Fast Loading</p>
                      <p className="text-xs text-muted-foreground">99/100 Score</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Helping Businesses Build Credibility Online</h2>
              <p className="text-muted-foreground text-lg">Your website is your digital storefront. We ensure your first impression is flawless, building trust with your customers instantly.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Smartphone, title: "Mobile Optimised", desc: "Looks perfect on all devices" },
                { icon: Zap, title: "Fast Performance", desc: "Lightning fast load times" },
                { icon: Paintbrush, title: "Professional Design", desc: "Premium aesthetic" },
                { icon: Briefcase, title: "Business Focused", desc: "Built to convert" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 shadow-sm">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Why Businesses Choose Studio Lumière</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Professional Design", desc: "We don't do cheap templates. Every site is crafted to reflect your brand's unique identity." },
                { title: "Fast Performance", desc: "Optimised code and premium hosting ensure your site loads instantly for every visitor." },
                { title: "Mobile First", desc: "With most traffic coming from phones, we design for mobile perfection from day one." },
                { title: "SEO Ready", desc: "Built with best practices so search engines can easily find and rank your business." },
                { title: "Reliable Support", desc: "We don't disappear after launch. Our team is always here to keep your site running smoothly." },
                { title: "Growth Focused", desc: "Our websites aren't just brochures; they are designed to capture leads and drive sales." }
              ].map((card, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Ways To Work With Us */}
        <section id="two-ways" className="py-24 bg-secondary/20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Choose The Option That Works For Your Business</h2>
              <p className="text-muted-foreground text-lg">Whether you have the capital to invest upfront or prefer to preserve cashflow, we have a solution.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border flex flex-col h-full relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Own Your Website</h3>
                <p className="text-primary font-semibold text-xl mb-6">R2,500 – R5,000 once-off</p>
                <p className="text-muted-foreground mb-8">Pay once and own your website completely. Ideal for businesses with upfront capital who want to avoid monthly commitments.</p>
                <ul className="space-y-3 mb-10 flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Full ownership</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> No monthly fees</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Bring your own hosting</li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('packages')}
                  className="w-full" variant="outline"
                >
                  View Website Packages
                </Button>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card to-primary/10 border border-primary/30 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Clock className="w-32 h-32 text-primary" />
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                <h3 className="text-2xl font-display font-bold mb-2">Rent Your Website</h3>
                <p className="text-primary font-semibold text-xl mb-6">From R750 / month</p>
                <p className="text-muted-foreground mb-8">Everything handled for you for one low monthly fee. Perfect for startups preserving cashflow.</p>
                <ul className="space-y-3 mb-10 flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Design & Development included</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Hosting & Domain included</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Ongoing maintenance & support</li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('rental-plans')}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  View Rental Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Website Packages (Own) */}
        <section id="packages" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Own Your Website</h2>
              <p className="text-muted-foreground text-lg">Once-off payment. Full ownership.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Package 1 */}
              <div className="rounded-3xl bg-card border border-border p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Launch Landing Page</h3>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">R2,500</span>
                  <span className="text-muted-foreground"> once-off</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['1-Page Site', 'Responsive Design', 'Basic SEO', 'Contact Form', 'Mobile Optimisation', 'Fast Loading'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="w-full">Get Started</Button>
              </div>

              {/* Package 2 */}
              <div className="rounded-3xl bg-card border-2 border-primary p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-primary/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">MOST POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Business Essentials</h3>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">R4,500</span>
                  <span className="text-muted-foreground"> once-off</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['3–5 Pages', 'Responsive Design', 'Advanced SEO setup', 'Contact Forms', 'Motion Design', 'Mobile Optimisation'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setQuoteModalOpen(true)} className="w-full bg-primary hover:bg-primary/90 text-white">Get Started</Button>
              </div>

              {/* Package 3 */}
              <div className="rounded-3xl bg-card border border-border p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-2">E-Commerce Store</h3>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">R5,000</span>
                  <span className="text-muted-foreground"> once-off</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Full E-Commerce Store', 'Product Catalogue', 'Shopping Cart', 'Payment Gateway Integration', 'Advanced SEO', 'Contact Forms'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Plans */}
        <section id="rental-plans" className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Can't Afford A Large Upfront Payment?</h2>
              <p className="text-xl text-primary font-semibold mb-4">Launch from as little as R750/month</p>
              <p className="text-muted-foreground">Everything is included. No hidden fees. Just one predictable monthly payment.</p>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto border border-border">
              <p className="font-bold text-center mb-6">Included in EVERY rental plan:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> Website Design</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> Premium Hosting</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> Domain Reg.</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> SSL Security</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> Maintenance</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> Tech Support</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> Monthly Backups</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> Mobile Ready</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Rental 1 */}
              <div className="rounded-3xl bg-background border border-border p-8 flex flex-col hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-display font-bold">R750</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 h-10">Ideal for: Startups, Freelancers, Local Businesses</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['1 Page Design', '.co.za Domain Included', '5GB Hosting', 'Contact Form', 'Basic Security', 'Monthly Maintenance'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setQuoteModalOpen(true)} variant="secondary" className="w-full">Choose Starter</Button>
              </div>

              {/* Rental 2 */}
              <div className="rounded-3xl bg-secondary border border-border p-8 flex flex-col relative transform md:-translate-y-4 shadow-xl">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold">MOST POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Business</h3>
                <div className="mb-4">
                  <span className="text-4xl font-display font-bold">R2,000</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 h-10">Ideal for: Growing Businesses, Consultants, Service Providers</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Up to 3 Pages', '.co.za Domain Included', '15GB Hosting', 'Advanced Security', 'Speed Optimisation', 'Priority Support'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setQuoteModalOpen(true)} className="w-full bg-primary hover:bg-primary/90 text-white">Choose Business</Button>
              </div>

              {/* Rental 3 */}
              <div className="rounded-3xl bg-background border border-border p-8 flex flex-col hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
                <div className="mb-4">
                  <span className="text-4xl font-display font-bold">R6,000</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 h-10">Ideal for: Online Stores, Retail, Growing Brands</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Full E-Commerce Store', 'Payment Integration', '30GB Hosting', 'Advanced Security', 'Speed Optimisation', 'Premium Maintenance'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setQuoteModalOpen(true)} variant="secondary" className="w-full">Choose E-Commerce</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Services We Provide</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                { icon: Paintbrush, name: "Website Design" },
                { icon: Code, name: "Web Development" },
                { icon: Smartphone, name: "Landing Pages" },
                { icon: ShoppingCart, name: "E-Commerce" },
                { icon: Server, name: "Hosting Solutions" },
                { icon: Wrench, name: "Maintenance" },
                { icon: PenTool, name: "UI/UX Design" },
                { icon: LineChart, name: "Digital Marketing" },
                { icon: MessageSquare, name: "Consultation" },
                { icon: BarChart, name: "Analytics" }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 text-center rounded-2xl bg-card border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all cursor-default group">
                  <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                  <span className="font-medium text-sm">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="py-24 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg">Our streamlined process to get you online quickly.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Consultation", desc: "We discuss your goals, audience, and requirements." },
                { step: "02", title: "Planning", desc: "We create a sitemap and define the structure of your site." },
                { step: "03", title: "Design", desc: "We craft the visual aesthetic to match your brand identity." },
                { step: "04", title: "Development", desc: "We build the site using modern, fast technologies." },
                { step: "05", title: "Launch", desc: "We test everything and push your website live to the world." },
                { step: "06", title: "Support", desc: "We provide ongoing maintenance to keep things running smoothly." }
              ].map((item, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-card border border-border">
                  <div className="text-5xl font-display font-extrabold text-primary/10 absolute top-4 right-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2 mt-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Businesses Trust Studio Lumière</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: "Studio Lumière completely transformed our online presence. Our new site looks incredible and we've seen a 40% increase in enquiries within the first month.",
                  name: "Sarah van der Merwe",
                  business: "Cape Town Accounting Services"
                },
                {
                  quote: "As a small business, I didn't think I could afford a premium website. Their rental plan allowed me to get a professional site without breaking the bank.",
                  name: "Thabo Mbeki",
                  business: "Urban Coffee Roasters"
                },
                {
                  quote: "The team is incredibly responsive. Whenever I need an update to my e-commerce store, they handle it quickly. Highly recommend their services.",
                  name: "Jessica Naidoo",
                  business: "Luxe Home Decor"
                }
              ].map((test, i) => (
                <div key={i} className="p-8 rounded-3xl bg-secondary/50 border border-border relative">
                  <div className="text-primary text-4xl font-serif leading-none absolute top-6 left-6 opacity-20">"</div>
                  <p className="text-lg italic mb-6 relative z-10">"{test.quote}"</p>
                  <div>
                    <p className="font-bold">{test.name}</p>
                    <p className="text-sm text-muted-foreground">{test.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How much does a website cost?", a: "Our outright ownership packages start from R2,500. We also offer rental plans starting at R750 per month if you prefer not to pay a large upfront sum." },
                { q: "Can I rent a website?", a: "Yes! Our rental plans start at R750/month and include everything: design, development, hosting, domain, and ongoing maintenance." },
                { q: "What's included in rental plans?", a: "All rental plans include the website design, premium hosting, a .co.za domain, SSL security, ongoing technical support, and monthly backups." },
                { q: "Do you provide hosting?", a: "Yes, we provide premium, fast, and secure hosting for all our clients. It is included in rental plans and available as an add-on for outright purchases." },
                { q: "Do you provide maintenance?", a: "Absolutely. We offer maintenance packages to keep your website updated, secure, and running fast. This is included by default in our rental plans." },
                { q: "How long does it take?", a: "A standard landing page usually takes 1-2 weeks. Larger business sites or e-commerce stores typically take 3-5 weeks depending on complexity." },
                { q: "Can you redesign an existing website?", a: "Yes, we often help businesses modernise their outdated websites to improve performance, aesthetics, and conversion rates." },
                { q: "Will it work on mobile?", a: "Yes, 100%. We design 'mobile-first', ensuring your website looks and functions perfectly on smartphones, tablets, and desktops." },
                { q: "Do you build online stores?", a: "Yes, we build robust e-commerce solutions that allow you to sell products, manage inventory, and accept payments securely." },
                { q: "Do you help with SEO?", a: "Yes, basic on-page SEO is included in all our builds. We also offer advanced SEO services to help you rank higher on Google." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur-xl border border-border p-12 md:p-20 rounded-[3rem] shadow-2xl">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Ready To Grow Your Business Online?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Stop losing customers to competitors with better websites. Get a professional online presence that builds trust and drives sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-14 text-lg"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Get A Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border hover:bg-secondary rounded-full px-8 h-14 text-lg"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Book A Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">SL</span>
                </div>
                <span className="text-xl font-display font-bold text-white">Studio Lumière</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Websites. Domains. Hosting. Maintenance.<br/>
                All In One Place.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground">IN</a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground">FB</a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground">LI</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Website Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">E-Commerce Stores</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hosting Solutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Website Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('packages')} className="hover:text-primary transition-colors">Website Packages</button></li>
                <li><button onClick={() => scrollToSection('rental-plans')} className="hover:text-primary transition-colors">Rental Plans</button></li>
                <li><button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">Our Process</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact Us</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  +27 79 110 4747
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  sales@studio-lumiere.net
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  www.studio-lumiere.net
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  South Africa
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Studio Lumière. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple icons for footer to avoid extra imports up top if not defined
function Phone(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function Mail(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> }
function Globe(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> }
function MapPin(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }