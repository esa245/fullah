/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  BookOpen, 
  Stethoscope, 
  Droplets, 
  Users, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Twitter,
  ChevronRight,
  Utensils,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const PRIMARY_COLOR = "#087443";

// --- Types ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

// --- Components ---

const NavLink = ({ href, children, active }: NavLinkProps) => (
  <a 
    href={href} 
    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-green-50 hover:text-primary ${active ? 'bg-green-50 text-primary' : 'text-gray-700'}`}
  >
    {children}
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-secondary text-white py-2 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> খামতা, কিচক, শিবগঞ্জ, বগুড়া</span>
            <span className="flex items-center gap-2">মানবতার সেবায়, ইসলামের পথে</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:jk.foundation@gmail.com" className="flex items-center gap-2 hover:text-green-200"><Mail size={14} /> jk.foundation@gmail.com</a>
            <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-4">
              <Facebook size={14} className="cursor-pointer hover:text-green-200" />
              <Youtube size={14} className="cursor-pointer hover:text-green-200" />
              <Twitter size={14} className="cursor-pointer hover:text-green-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
        <nav className="container-custom flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-green-50 border-2 border-primary rounded-full flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform">
              🕌
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary leading-tight font-bengali">জিকিরুল্লাহ ফাউন্ডেশন</span>
              <span className="text-[10px] md:text-xs tracking-widest font-bold text-gray-500 uppercase">Zikirullah Foundation</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="#home" active>হোম</NavLink>
            <NavLink href="#about">আমাদের সম্পর্কে</NavLink>
            <NavLink href="#services">সেবাসমূহ</NavLink>
            <NavLink href="#projects">প্রকল্প</NavLink>
            <NavLink href="#gallery">গ্যালারি</NavLink>
            <NavLink href="#contact">যোগাযোগ</NavLink>
          </div>

          <div className="hidden lg:block">
            <button className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-green-900/20 transition-all active:scale-95">
              দান করুন
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-2 text-center">
                <a href="#home" className="py-3 font-semibold text-primary border-b border-gray-50">হোম</a>
                <a href="#about" className="py-3 font-semibold text-gray-700 border-b border-gray-50">আমাদের সম্পর্কে</a>
                <a href="#services" className="py-3 font-semibold text-gray-700 border-b border-gray-50">সেবাসমূহ</a>
                <a href="#projects" className="py-3 font-semibold text-gray-700 border-b border-gray-50">প্রকল্প</a>
                <a href="#gallery" className="py-3 font-semibold text-gray-700 border-b border-gray-50">গ্যালারি</a>
                <a href="#contact" className="py-3 font-semibold text-gray-700">যোগাযোগ</a>
                <button className="mt-4 bg-primary text-white py-3 rounded-xl font-bold">দান করুন</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-24 lg:pt-32 lg:pb-48 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/30">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-primary font-bold text-sm mb-6">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 font-bengali">
              জিকিরুল্লাহ ফাউন্ডেশন <br />
              <span className="text-primary italic">ইসলামিক সমাজ সেবা</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              মানবতার সেবা, সমাজের কল্যাণ এবং অসহায় মানুষের পাশে দাঁড়ানোই আমাদের মূল লক্ষ্য। আসুন, একসাথে গড়ে তুলি একটি ন্যায়, সাম্য ও কল্যাণময় সমাজ।
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-green-900/20 transition-all hover:-translate-y-1">
                এখনই দান করুন
              </button>
              <button className="bg-white border-2 border-primary text-primary hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg transition-all">
                আমাদের সম্পর্কে
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:block"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 transform lg:rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=85" 
                alt="Foundation Work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-bold font-bengali">“মানুষের সেবা করা ইবাদতের অংশ”</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Heart className="text-primary" />, title: "মানবসেবা", desc: "দুঃখী মানুষের পাশে" },
              { icon: <BookOpen className="text-primary" />, title: "শিক্ষা", desc: "কুরআন ও আধুনিক শিক্ষা" },
              { icon: <Stethoscope className="text-primary" />, title: "স্বাস্থ্য", desc: "বিনামূল্যে চিকিৎসা" },
              { icon: <Droplets className="text-primary" />, title: "পানি", desc: "বিশুদ্ধ পানি প্রকল্প" },
              { icon: <Leaf className="text-primary" />, title: "উন্নয়ন", desc: "স্থায়ী সমাজ সংস্কার" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <h4 className="font-bold text-gray-900 font-bengali">{f.title}</h4>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50/50 overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=600&q=80" alt="Work 1" className="rounded-2xl shadow-lg" />
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80" alt="Work 2" className="rounded-2xl shadow-lg" />
              </div>
              <div className="pt-8">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80" alt="Work 3" className="rounded-2xl shadow-lg" />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">১০+</div>
              <div className="text-sm font-semibold opacity-90">বছরের সামাজিক অভিজ্ঞতা</div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">আমাদের পরিচয়</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight font-bengali">
              সমাজের প্রতিটি মানুষের জন্য <br />
              <span className="text-primary">সেবার অঙ্গীকার</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              জিকিরুল্লাহ ফাউন্ডেশন একটি ইসলামিক সমাজ সেবা সংগঠন, যার লক্ষ্য মানবতার কল্যাণে কাজ করা, অসহায় মানুষের পাশে দাঁড়ানো এবং শিক্ষা, স্বাস্থ্য ও সামাজিক উন্নয়নে কার্যকর ভূমিকা রাখা। আমরা বিশ্বাস করি, ক্ষুদ্র প্রচেষ্টাই পারে বড় পরিবর্তন আনতে।
            </p>
            <div className="space-y-4 mb-10">
              {[
                "ইসলামিক মূল্যবোধ পরিচালিত স্বচ্ছ সংগঠন",
                "সমাজের অবহেলিত মানুষের মৌলিক চাহিদা পূরণ",
                "শিক্ষার মাধ্যমে নৈতিকতা ও দক্ষতা বৃদ্ধি",
                "অসহায় রোগীদের পাশে চিকিৎসা সহায়তা"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 rounded-full p-0.5 text-primary">
                    <ChevronRight size={16} />
                  </div>
                  <span className="font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              আমাদের লক্ষ্য ও উদ্দেশ্য দেখুন <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(8,116,67,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">সেবার ক্ষেত্রসমূহ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-bengali">আমাদের নিয়মিত কার্যক্রম</h2>
            <p className="text-gray-600 text-lg">অসহায় মানুষের প্রয়োজন অনুযায়ী আমরা বিভিন্ন স্তরে আমাদের সেবা কার্যক্রম পরিচালনা করে থাকি।</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Utensils />, title: "খাদ্য সহায়তা", desc: "দুঃস্থ ও অসহায় পরিবারের জন্য পুষ্টিকর খাদ্য ও প্রয়োজনীয় সামগ্রী বিতরণ কার্যক্রম।" },
              { icon: <BookOpen />, title: "শিক্ষা সহায়তা", desc: "দরিদ্র শিক্ষার্থীদের শিক্ষা উপকরণ, টিউশন ফি এবং উচ্চশিক্ষায় আর্থিক সহায়তা প্রদান।" },
              { icon: <Heart />, title: "চিকিৎসা সহায়তা", desc: "অসহায় রোগীদের জটিল রোগের চিকিৎসা সহায়তা ও স্বাস্থ্য সচেতনতা বৃদ্ধি।" },
              { icon: <Droplets />, title: "নিরাপদ পানি", desc: "চরাঞ্চল ও প্রত্যন্ত এলাকায় গভীর নলকূপ স্থাপন ও স্যানিটেশন ব্যবস্থার উন্নয়ন।" },
              { icon: <Leaf />, title: "পরিবেশ ও উন্নয়ন", desc: "বৃক্ষরোপণ কর্মসূচি ও সামাজিক বনায়ন এবং পরিবেশগত ভারসাম্য রক্ষায় কাজ।" },
              { icon: <Users />, title: "যুব উন্নয়ন", desc: "যুবকদের কারিগরি দক্ষতা উন্নয়ন ও আত্মকর্মসংস্থান সৃষ্টির লক্ষ্যে বিশেষ প্রকল্প।" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all group"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-bengali group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 font-bold text-primary group-hover:underline">
                  বিস্তারিত <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">বাস্তবায়িত কার্যক্রম</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-bengali">আমাদের বিশেষ প্রকল্পসমূহ</h2>
              <p className="text-gray-400 text-lg">আপনার দেয়া প্রতিটি দান মানুষের মুখে হাসি ফোটাতে সাহায্য করে। আমাদের সফল কিছু উদ্যোগ দেখুন।</p>
            </div>
            <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-bold transition-all">
              সবগুলো দেখুন
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: "https://images.unsplash.com/photo-1509099836639-18ba02c7f8d4?auto=format&fit=crop&w=800&q=80",
                category: "খাদ্য প্রকল্প",
                title: "রমজানে ইফতার ও সেহরি বিতরণ",
                progress: 85
              },
              { 
                img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
                category: "শিক্ষা প্রকল্প",
                title: "অসহায় শিক্ষার্থীদের বৃত্তি প্রদান",
                progress: 60
              },
              { 
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
                category: "স্বাস্থ্য প্রকল্প",
                title: "বিনামূল্যে চক্ষু চিকিৎসা ক্যাম্প",
                progress: 95
              }
            ].map((project, i) => (
              <div key={i} className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 font-bengali group-hover:text-accent transition-colors">{project.title}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-gray-400">প্রকল্প সম্পন্ন</span>
                      <span className="text-accent">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>
                  <button className="w-full mt-8 border border-white/20 hover:border-primary hover:bg-primary text-white py-3 rounded-xl font-bold transition-all">
                    বিস্তারিত জানুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "৫০০+", label: "উপকারভোগী পরিবার" },
              { val: "২০০+", label: "শিক্ষার্থী বৃত্তি" },
              { val: "১০০+", label: "চিকিৎসা সহায়তা" },
              { val: "৫০+", label: "সফল প্রকল্প" },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white p-6 border-r border-white/10 last:border-0 md:last:border-r lg:last:border-0">
                <div className="text-3xl md:text-5xl font-bold mb-2 font-bengali">{stat.val}</div>
                <div className="text-sm md:text-lg font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="section-padding bg-accent/5">
        <div className="container-custom">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-bengali leading-tight">
                আপনার সামান্য অবদান <br />
                হতে পারে অন্যের হাসি
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-12">
                আসুন সবাই মিলে একটি সুন্দর সমাজ গড়ি। আমাদের যে কোনো মানবিক প্রকল্পে আপনার সামর্থ্য অনুযায়ী অংশগ্রহণ করুন।
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-primary hover:bg-accent hover:text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-black/20">
                  দান করতে চাই
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-xl transition-all">
                  সদস্য হতে চাই
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">আমাদের সাথে থাকুন</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-bengali">যোগাযোগ করুন</h2>
              <p className="text-gray-600 text-lg mb-12">
                যেকোনো জিজ্ঞাসা, দান বা স্বেচ্ছাসেবক হিসেবে আমাদের সাথে যুক্ত হতে নিচের ঠিকানায় যোগাযোগ করুন অথবা সরাসরি আমাদের অফিস ভিজিট করুন।
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-bengali">অফিস ঠিকানা</h4>
                    <p className="text-gray-600">খামতা, কিচক বাজার সংলগ্ন, শিবগঞ্জ, বগুড়া, বাংলাদেশ</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-bengali">ফোন করুন</h4>
                    <p className="text-gray-600">+৮৮০ ১XXXXXXXXX (সাধারণ)</p>
                    <p className="text-gray-600">+৮৮০ ১YYYYYYYYY (দান সংক্রান্ত)</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-bengali">ইমেইল করুন</h4>
                    <p className="text-gray-600">jk.foundation@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-green-900/5">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-bengali">আপনার বার্তা পাঠান</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">আপনার নাম</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="নাম লিখুন" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">ইমেইল</label>
                    <input type="email" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="ইমেইল লিখুন" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">বিষয়</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="বিষয় লিখুন" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">বার্তা</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="আপনার বার্তা এখানে লিখুন..." />
                </div>
                <button className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-900/10">
                  বার্তা পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-24 pb-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center text-primary">🕌</div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-bengali">জিকিরুল্লাহ ফাউন্ডেশন</span>
                  <span className="text-[10px] tracking-widest font-bold text-gray-500 uppercase">Zikirullah Foundation</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                মানবতার সেবা, সমাজের কল্যাণ এবং ইসলামের সুন্দর আদর্শকে সামনে রেখে আমাদের পথচলা। বগুড়ার একটি অন্যতম বিশ্বস্ত অলাভজনক সামাজিক সংগঠন।
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all"><Youtube size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all"><Twitter size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8 font-bengali text-accent">দ্রুত লিংক</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#home" className="hover:text-primary transition-colors">হোম</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">আমাদের সম্পর্কে</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">সেবাসমূহ</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">প্রকল্পসমূহ</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">যোগাযোগ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8 font-bengali text-accent">সহায়তা</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">দান করুন</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">স্বেচ্ছাসেবক হোন</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">সদস্য আবেদন</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">বিবরণী</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8 font-bengali text-accent">যোগাযোগ</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start text-gray-400">
                  <MapPin size={20} className="text-primary shrink-0" />
                  <span>খামতা, শিবগঞ্জ, বগুড়া</span>
                </li>
                <li className="flex gap-4 items-start text-gray-400">
                  <Phone size={20} className="text-primary shrink-0" />
                  <span>+৮৮০ ১XXXXXXXXX</span>
                </li>
                <li className="flex gap-4 items-start text-gray-400">
                  <Mail size={20} className="text-primary shrink-0" />
                  <span>jk.foundation@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} জিকিরুল্লাহ ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white">গোপনীয়তা নীতি</a>
              <a href="#" className="hover:text-white">শর্তাবলী</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
