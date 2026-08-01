import { useState, useEffect, useRef } from 'react'

// ─── LOGO MARK ────────────────────────────────────────────────────────────────
function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl flex items-center justify-center flex-shrink-0" style={{ width: size, height: size, background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="7" height="7" rx="1.5" fill="white" opacity="0.95"/>
          <rect x="10" y="1" width="7" height="7" rx="1.5" fill="white" opacity="0.55"/>
          <rect x="1" y="10" width="7" height="7" rx="1.5" fill="white" opacity="0.55"/>
          <rect x="10" y="10" width="7" height="7" rx="1.5" fill="white" opacity="0.95"/>
        </svg>
      </div>
      <div className="leading-none">
        <div className="font-serif" style={{ fontSize: size * 0.56, lineHeight: 1 }}>Satapara</div>
        <div style={{ fontSize: size * 0.28, letterSpacing: '0.18em', opacity: 0.55, fontFamily: 'Inter', fontWeight: 500, textTransform: 'uppercase', lineHeight: 1.4 }}>Ceramic</div>
      </div>
    </div>
  )
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkColor = scrolled ? '#222' : 'rgba(255,255,255,0.85)'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={scrolled ? { background: 'rgba(250,250,248,0.93)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,197,193,0.3)' } : {}}>
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between h-20">
        <div style={{ color: scrolled ? '#111' : 'white' }}>
          <LogoMark size={30} />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'Products', 'Collections', 'Brands', 'Projects', 'About Us', 'Contact'].map(item => (
            <a
              key={item}
              href="#"
              className="text-xs font-medium tracking-wide transition-colors duration-200"
              style={{ color: linkColor, fontFamily: 'Inter' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="text-xs font-medium tracking-wide px-5 py-2.5 rounded-full transition-all" style={{ color: scrolled ? '#222' : 'white', border: `1px solid ${scrolled ? 'rgba(34,34,34,0.3)' : 'rgba(255,255,255,0.35)'}` }}>
            Get Free Consultation
          </button>
          <button className="text-xs font-medium tracking-wide px-5 py-2.5 rounded-full" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)', color: 'white' }}>
            Request Quote
          </button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map(i => <div key={i} className="w-6 h-0.5 rounded-full" style={{ background: scrolled ? '#222' : 'white' }} />)}
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-8 pb-6 pt-2" style={{ background: 'rgba(250,250,248,0.98)', backdropFilter: 'blur(20px)' }}>
          {['Home', 'Products', 'Collections', 'Brands', 'Projects', 'About Us', 'Contact'].map(item => (
            <a key={item} href="#" className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100">{item}</a>
          ))}
          <div className="mt-4 flex gap-3">
            <button className="flex-1 py-3 text-sm font-medium rounded-xl border border-gray-300">Consultation</button>
            <button className="flex-1 py-3 text-sm font-medium rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>Request Quote</button>
          </div>
        </div>
      )}
    </nav>
  )
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: 680, background: '#111' }}>
      <img
        src="https://images.unsplash.com/photo-1756079664354-34944e001f6d?w=1920&h=1080&fit=crop&auto=format"
        alt="Premium ceramic tile showroom atmosphere"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        style={{ objectPosition: 'center 30%' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(150deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.15) 55%, rgba(17,17,17,0.8) 100%)' }} />

      {/* Floating tile sample card — right */}
      <div className="float-anim absolute hidden xl:block" style={{ top: '20%', right: '7%', zIndex: 10 }}>
        <div className="glass rounded-2xl p-4 shadow-2xl" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
          <div className="w-36 h-36 rounded-xl overflow-hidden mb-3 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1642419105752-88cc5a001a85?w=200&h=200&fit=crop&auto=format" alt="Marble finish tile" className="w-full h-full object-cover" />
          </div>
          <p className="text-white text-xs font-medium tracking-wider uppercase opacity-90">Marble Finish</p>
          <p className="text-white text-xs opacity-50 mt-0.5">60×120 cm · Polished</p>
          <div className="mt-2 flex gap-1.5">
            {['#F5F0E8','#D4C9B8','#8B8078'].map(c => <div key={c} className="w-4 h-4 rounded-full border border-white/20" style={{ background: c }} />)}
          </div>
        </div>
      </div>

      {/* Floating badge — left */}
      <div className="float-anim-delay absolute hidden xl:block" style={{ top: '55%', right: '12%', zIndex: 10 }}>
        <div className="glass-dark rounded-2xl p-4 shadow-2xl" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
          <div className="w-28 h-28 rounded-xl overflow-hidden mb-3 bg-gray-800">
            <img src="https://images.unsplash.com/photo-1663811396551-e639caee6e62?w=200&h=200&fit=crop&auto=format" alt="Stone finish tile" className="w-full h-full object-cover" />
          </div>
          <p className="text-white text-xs font-medium tracking-wider uppercase opacity-90">Stone Finish</p>
          <p className="text-white text-xs opacity-50 mt-0.5">80×80 cm · Matte</p>
        </div>
      </div>

      {/* Stats pill */}
      <div className="glass-dark absolute top-28 left-8 rounded-full px-5 py-2.5 hidden lg:flex items-center gap-3" style={{ zIndex: 10 }}>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white text-xs font-medium">5,000+ Products In Stock</span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: '#C9A96E' }} />
            <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#C9A96E' }}>Trusted Since 2009 · India</span>
          </div>
          <h1 className="font-serif text-white mb-6 leading-[0.92]" style={{ fontSize: 'clamp(44px, 6.5vw, 86px)', maxWidth: 760 }}>
            Premium Ceramic Tiles<br />
            <em style={{ color: '#E8DFD5' }}>&amp; Sanitaryware</em><br />
            for Every Space
          </h1>
          <p className="text-white/65 mb-10 max-w-xl leading-relaxed" style={{ fontSize: 'clamp(14px, 1.4vw, 17px)' }}>
            We supply a wide range of premium ceramic tiles, sanitaryware, bath fittings, and interior surface solutions for homes, commercial projects, architects, and builders.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)', boxShadow: '0 8px 32px rgba(201,169,110,0.4)' }}
            >
              Explore Collection
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              className="flex items-center gap-3 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.28)', color: 'white', backdropFilter: 'blur(10px)' }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white" />
          <span className="text-white text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </div>
    </section>
  )
}

// ─── PRODUCT CATEGORIES ───────────────────────────────────────────────────────
function ProductCategories() {
  const cats = [
    { label: 'Floor Tiles', count: '800+', img: 'https://images.unsplash.com/photo-1671197244266-73129c97c096?w=500&h=640&fit=crop&auto=format' },
    { label: 'Wall Tiles', count: '640+', img: 'https://images.unsplash.com/photo-1771308355129-4a0a93b055e6?w=500&h=640&fit=crop&auto=format' },
    { label: 'Bathroom Tiles', count: '420+', img: 'https://images.unsplash.com/photo-1754522711595-84428937b07a?w=500&h=640&fit=crop&auto=format' },
    { label: 'Kitchen Tiles', count: '360+', img: 'https://images.unsplash.com/photo-1683629357963-adf2b1fa9ad9?w=500&h=640&fit=crop&auto=format' },
    { label: 'Outdoor Tiles', count: '280+', img: 'https://images.unsplash.com/photo-1783125127053-db9f268a847b?w=500&h=640&fit=crop&auto=format' },
    { label: 'Parking Tiles', count: '120+', img: 'https://images.unsplash.com/photo-1745124372154-81972a68eaae?w=500&h=640&fit=crop&auto=format' },
    { label: 'Large Format Slabs', count: '90+', img: 'https://images.unsplash.com/photo-1642419105752-88cc5a001a85?w=500&h=640&fit=crop&auto=format' },
    { label: 'Elevation Tiles', count: '160+', img: 'https://images.unsplash.com/photo-1777278226399-76b827829cd5?w=500&h=640&fit=crop&auto=format' },
    { label: 'Sanitaryware', count: '210+', img: 'https://images.unsplash.com/photo-1722923400899-af08ffc715c6?w=500&h=640&fit=crop&auto=format' },
    { label: 'Bath Fittings', count: '180+', img: 'https://images.unsplash.com/photo-1667550177753-52b318cd4d40?w=500&h=640&fit=crop&auto=format' },
    { label: 'Adhesives & Accessories', count: '95+', img: 'https://images.unsplash.com/photo-1774971295872-cededec9320b?w=500&h=640&fit=crop&auto=format' },
  ]

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#FAFAF8' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Product Range</p>
            <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#111' }}>
              Every Surface,<br /><em>Every Space</em>
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-medium" style={{ color: '#222' }}>
            View All Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cats.map((cat, i) => (
            <div
              key={cat.label}
              className="card-lift group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ height: i === 0 || i === 4 || i === 8 ? 340 : 280, background: '#E8DFD5' }}
            >
              <img src={cat.img} alt={cat.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(17,17,17,0.75) 0%, transparent 55%)' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(201,169,110,0.15)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/55 text-xs tracking-wide mb-1">{cat.count} products</p>
                <h3 className="font-serif text-white text-base leading-snug">{cat.label}</h3>
                <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span className="text-xs font-medium" style={{ color: '#C9A96E' }}>Browse</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FEATURED COLLECTIONS ──────────────────────────────────────────────────────
function FeaturedCollections() {
  const [active, setActive] = useState(0)
  const collections = [
    { name: 'Marble Finish', subtitle: 'Timeless Elegance', desc: 'Natural marble-effect porcelain that captures the organic veining and luminosity of authentic stone — without the maintenance demands.', sizes: ['60×120', '80×80', '30×60', '120×120'], finish: 'Polished / Satin', price: 'From ₹85/sq.ft', img: 'https://images.unsplash.com/photo-1642419105752-88cc5a001a85?w=900&h=700&fit=crop&auto=format' },
    { name: 'Wood Finish', subtitle: 'Warm Naturalism', desc: 'Ceramic planks that replicate aged hardwood grain with superior durability. Ideal for living spaces, bedrooms and hospitality projects.', sizes: ['20×120', '15×90', '20×80'], finish: 'Natural / Aged', price: 'From ₹72/sq.ft', img: 'https://images.unsplash.com/photo-1783125127053-db9f268a847b?w=900&h=700&fit=crop&auto=format' },
    { name: 'Matt Finish', subtitle: 'Contemporary Calm', desc: 'Understated matte surfaces in neutral tones. Anti-glare, anti-slip, and perfectly suited to modern minimalist interiors and commercial spaces.', sizes: ['60×60', '80×80', '30×30', '60×120'], finish: 'Ultra-Matte', price: 'From ₹58/sq.ft', img: 'https://images.unsplash.com/photo-1754447628644-b2dc91ce3237?w=900&h=700&fit=crop&auto=format' },
    { name: 'High Gloss', subtitle: 'Reflective Luxury', desc: 'Mirror-polished glossy tiles for walls and feature floors. Maximum light reflection for smaller spaces and premium hospitality interiors.', sizes: ['30×60', '60×60', '30×30'], finish: 'High Gloss', price: 'From ₹68/sq.ft', img: 'https://images.unsplash.com/photo-1667550177753-52b318cd4d40?w=900&h=700&fit=crop&auto=format' },
    { name: 'Stone Finish', subtitle: 'Raw Sophistication', desc: 'Textured stone-look tiles with natural cleft variation. Adds organic warmth and architectural depth to any residential or commercial interior.', sizes: ['80×160', '60×120', '40×80'], finish: 'Textured / Natural', price: 'From ₹78/sq.ft', img: 'https://images.unsplash.com/photo-1781249144216-143445323087?w=900&h=700&fit=crop&auto=format' },
  ]
  const col = collections[active]

  return (
    <section className="py-28" style={{ background: '#111' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Featured Collections</p>
            <h2 className="font-serif text-white leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Curated for<br /><em style={{ color: '#E8DFD5' }}>Every Vision</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {collections.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                className="px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
                style={active === i ? { background: '#C9A96E', color: 'white' } : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden" style={{ height: 500, background: '#1a1a1a' }}>
            <img key={col.img} src={col.img} alt={col.name} className="w-full h-full object-cover transition-all duration-700" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(0,0,0,0.25) 0%, transparent 60%)' }} />
            <div className="glass-dark absolute top-6 right-6 rounded-2xl px-5 py-3">
              <p className="text-white/55 text-xs mb-0.5">Starting from</p>
              <p className="text-white font-medium">{col.price}</p>
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="h-px w-16 mb-8" style={{ background: '#C9A96E' }} />
            <p className="text-xs font-medium tracking-[0.25em] uppercase mb-3" style={{ color: '#C9A96E' }}>{col.subtitle}</p>
            <h3 className="font-serif text-white mb-5" style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}>{col.name}</h3>
            <p className="text-white/55 leading-relaxed mb-8" style={{ fontSize: 15 }}>{col.desc}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white/35 text-xs tracking-wider uppercase mb-2">Available Sizes</p>
                <div className="flex flex-wrap gap-1.5">
                  {col.sizes.map(s => <span key={s} className="text-white text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.08)' }}>{s}</span>)}
                </div>
              </div>
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white/35 text-xs tracking-wider uppercase mb-2">Finish Options</p>
                <p className="text-white text-sm">{col.finish}</p>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              {['#F5F0E8','#D4C9B8','#A8A09A','#2A2A2A','#C9A96E'].map((c, i) => (
                <div key={i} className="swatch w-9 h-9 rounded-full shadow-lg" style={{ background: c, border: i === 0 ? '2px solid #C9A96E' : '2px solid rgba(255,255,255,0.1)' }} />
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 rounded-2xl text-sm font-medium tracking-wide text-white transition-all hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)', boxShadow: '0 8px 24px rgba(201,169,110,0.28)' }}>
                Request Sample
              </button>
              <button className="flex-1 py-4 rounded-2xl text-sm font-medium tracking-wide" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHY SATAPARA ─────────────────────────────────────────────────────────────
function WhySatapara() {
  const features = [
    { icon: '◈', title: 'Large Collection', desc: '5,000+ products spanning every finish, size, and style across all major categories.' },
    { icon: '◎', title: 'Premium Brands', desc: 'We stock 50+ trusted Indian and international ceramic and sanitaryware brands.' },
    { icon: '⬡', title: 'Expert Guidance', desc: 'Our in-store consultants guide you from selection to specification at no extra charge.' },
    { icon: '◫', title: 'Bulk Orders', desc: 'Wholesale pricing for builders, contractors, and developers with dedicated order management.' },
    { icon: '◑', title: 'Competitive Prices', desc: 'Direct trade relationships mean better prices passed straight to our customers.' },
    { icon: '◷', title: 'Quick Delivery', desc: 'Ready stock delivered to your site within 24–72 hours across the region.' },
    { icon: '◻', title: 'Retail & Wholesale', desc: 'We serve individual homeowners and large commercial projects with equal care.' },
    { icon: '◬', title: 'Customer Support', desc: 'Dedicated support from inquiry through installation aftercare.' },
  ]

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#222' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {[
            { num: '5000', suffix: '+', label: 'Products' },
            { num: '1000', suffix: '+', label: 'Happy Customers' },
            { num: '500', suffix: '+', label: 'Projects Supplied' },
            { num: '50', suffix: '+', label: 'Trusted Brands' },
            { num: '15', suffix: '+', label: 'Years Experience' },
          ].map(s => (
            <div key={s.label} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="font-serif mb-1" style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#C9A96E' }}>
                {s.num}<span style={{ fontSize: '0.55em' }}>{s.suffix}</span>
              </p>
              <p className="text-white/45 text-xs tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Why Choose Us</p>
          <h2 className="font-serif text-white leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Why Choose<br /><em style={{ color: '#E8DFD5' }}>Satapara Ceramic</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(f => (
            <div key={f.title} className="p-6 rounded-2xl group transition-all duration-300 hover:scale-[1.02] cursor-pointer" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="text-2xl mb-4 block" style={{ color: '#C9A96E' }}>{f.icon}</span>
              <h4 className="text-white font-medium mb-2 text-sm">{f.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── BRANDS SECTION ───────────────────────────────────────────────────────────
function Brands() {
  const brands = [
    { name: 'Kajaria', tag: 'Floor & Wall' },
    { name: 'Somany', tag: 'Tiles & Bath' },
    { name: 'Orient Bell', tag: 'Designer Tiles' },
    { name: 'RAK Ceramics', tag: 'Premium Range' },
    { name: 'Nitco', tag: 'Marble & Stone' },
    { name: 'Asian Granito', tag: 'Large Format' },
    { name: 'Cera', tag: 'Sanitaryware' },
    { name: 'Hindware', tag: 'Bath Fittings' },
    { name: 'Jaquar', tag: 'Luxury Fittings' },
    { name: 'Parryware', tag: 'Sanitaryware' },
    { name: 'Johnson', tag: 'Tiles' },
    { name: 'Simpolo', tag: 'Glazed Vitrified' },
  ]

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#FAFAF8' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Brand Partners</p>
          <h2 className="font-serif leading-tight mb-5" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#111' }}>
            Trusted Brands<br /><em>We Deal In</em>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">50+ premium Indian and international brands — all under one roof.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map(b => (
            <div key={b.name} className="card-lift group rounded-2xl p-6 text-center cursor-pointer" style={{ background: 'white', border: '1px solid #E8DFD5', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F5F0E8, #E8DFD5)' }}>
                <span className="font-serif text-xl" style={{ color: '#C9A96E' }}>{b.name[0]}</span>
              </div>
              <p className="font-medium text-sm mb-1" style={{ color: '#111' }}>{b.name}</p>
              <p className="text-xs" style={{ color: '#C9C5C1' }}>{b.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SHOWROOM ─────────────────────────────────────────────────────────────────
function Showroom() {
  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#111' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-5" style={{ color: '#C9A96E' }}>Showroom Experience</p>
            <h2 className="font-serif text-white leading-tight mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              See It Before<br />
              <em style={{ color: '#E8DFD5' }}>You Decide</em>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8" style={{ fontSize: 15, maxWidth: 440 }}>
              Visit our 8,000 sq.ft. showroom to experience our complete range — from single tiles to fully-designed bathroom and kitchen displays. Our consultants are on hand to guide every step.
            </p>
            <div className="space-y-4 mb-10">
              {['Modern tile display walls with 500+ live samples', 'Fully designed bathroom & kitchen vignettes', 'Dedicated consultation zones for architects & builders', 'Wholesale counter & bulk pricing desk'].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="px-7 py-4 rounded-full text-sm font-medium text-white" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>Book a Visit</button>
              <button className="px-7 py-4 rounded-full text-sm font-medium text-white/70" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>Get Directions</button>
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden" style={{ height: 260, background: '#1a1a1a' }}>
              <img src="https://images.unsplash.com/photo-1774971295872-cededec9320b?w=500&h=400&fit=crop&auto=format" alt="Tile display wall" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden mt-8" style={{ height: 260, background: '#1a1a1a' }}>
              <img src="https://images.unsplash.com/photo-1777278226399-76b827829cd5?w=500&h=400&fit=crop&auto=format" alt="Showroom display" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ height: 220, background: '#1a1a1a' }}>
              <img src="https://images.unsplash.com/photo-1667550177753-52b318cd4d40?w=500&h=350&fit=crop&auto=format" alt="Bathroom display" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden mt-8" style={{ height: 220, background: '#1a1a1a' }}>
              <img src="https://images.unsplash.com/photo-1671197244266-73129c97c096?w=500&h=350&fit=crop&auto=format" alt="Kitchen display" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ARCHITECTS & BUILDERS ────────────────────────────────────────────────────
function ForProfessionals() {
  const cards = [
    { icon: '◈', title: 'Project Consultation', desc: 'Dedicated material advisors assigned to your project from specification to delivery.' },
    { icon: '◫', title: 'Bulk Supply', desc: 'Competitive wholesale pricing on large volumes with priority dispatch and dedicated loading bays.' },
    { icon: '◎', title: 'Material Selection', desc: 'Curated shortlists based on your brief, project type, and budget — saving hours of decision time.' },
    { icon: '⬡', title: 'Technical Support', desc: 'Adhesive selection, grout compatibility, and layout planning support from our technical team.' },
    { icon: '◑', title: 'Project Pricing', desc: 'Transparent project-rate pricing with quantity discounts and structured payment terms.' },
    { icon: '◷', title: 'Fast Delivery', desc: 'Phased delivery schedules aligned to your site timeline. Ready stock ensures no delays.' },
  ]

  return (
    <section className="py-28 px-8 md:px-16 tile-pattern" style={{ background: '#FAFAF8' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-5" style={{ color: '#C9A96E' }}>For Professionals</p>
            <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', color: '#111' }}>
              Solutions for Architects,<br />
              <em>Interior Designers</em><br />
              &amp; Builders
            </h2>
          </div>
          <div>
            <p className="text-gray-400 leading-relaxed mb-6" style={{ fontSize: 15 }}>
              We understand the demands of professional projects. Satapara Ceramic has supported over 500 commercial and residential projects with reliable supply, competitive pricing, and expert guidance at every stage.
            </p>
            <img src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=600&h=360&fit=crop&auto=format" alt="Architects reviewing blueprints" className="w-full rounded-2xl object-cover" style={{ height: 220 }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(c => (
            <div key={c.title} className="card-lift p-7 rounded-2xl cursor-pointer" style={{ background: 'white', border: '1px solid #E8DFD5', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <span className="text-2xl mb-4 block" style={{ color: '#C9A96E' }}>{c.icon}</span>
              <h4 className="font-medium mb-2" style={{ color: '#111', fontSize: 14 }}>{c.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-full text-sm font-medium text-white" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)', boxShadow: '0 8px 24px rgba(201,169,110,0.28)' }}>
            Register as Trade Partner
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── ROOM VISUALIZER ──────────────────────────────────────────────────────────
function RoomVisualizer() {
  const [room, setRoom] = useState(0)
  const rooms = [
    { label: 'Bathroom', img: 'https://images.unsplash.com/photo-1754447628644-b2dc91ce3237?w=1200&h=800&fit=crop&auto=format' },
    { label: 'Kitchen', img: 'https://images.unsplash.com/photo-1683629357963-adf2b1fa9ad9?w=1200&h=800&fit=crop&auto=format' },
    { label: 'Living Room', img: 'https://images.unsplash.com/photo-1783125127053-db9f268a847b?w=1200&h=800&fit=crop&auto=format' },
    { label: 'Hotel Lobby', img: 'https://images.unsplash.com/photo-1782718979595-be6003fc498e?w=1200&h=800&fit=crop&auto=format' },
  ]

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#222' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Room Inspiration</p>
          <h2 className="font-serif text-white leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Imagine It In<br /><em style={{ color: '#E8DFD5' }}>Your Space</em>
          </h2>
        </div>

        <div className="flex gap-2 justify-center flex-wrap mb-8">
          {rooms.map((r, i) => (
            <button key={r.label} onClick={() => setRoom(i)} className="px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
              style={room === i ? { background: '#C9A96E', color: 'white' } : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {r.label}
            </button>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 'clamp(300px, 52vw, 560px)' }}>
          <img key={rooms[room].img} src={rooms[room].img} alt={rooms[room].label} className="w-full h-full object-cover transition-all duration-700" />
          <div className="absolute inset-0 flex items-end p-8">
            <div className="glass rounded-2xl px-6 py-4 flex items-center gap-6">
              <div>
                <p className="text-white/55 text-xs mb-0.5">Suggested Collection</p>
                <p className="text-white font-medium text-sm">Marble Finish · 80×80cm</p>
              </div>
              <div className="h-8 w-px" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div>
                <p className="text-white/55 text-xs mb-0.5">Starting</p>
                <p className="text-white font-medium text-sm">₹85/sq.ft</p>
              </div>
              <div className="h-8 w-px" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <button className="px-5 py-2 rounded-xl text-xs font-medium text-white" style={{ background: '#C9A96E' }}>Request Quote</button>
            </div>
          </div>
          <div className="glass-dark absolute top-6 right-6 rounded-xl px-4 py-2">
            <span className="text-white text-xs">✦ Room Inspiration</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PROJECT SHOWCASE ──────────────────────────────────────────────────────────
function Projects() {
  const items = [
    { name: 'Skyline Residences, Ahmedabad', category: 'Residential', img: 'https://images.unsplash.com/photo-1754447628644-b2dc91ce3237?w=900&h=600&fit=crop&auto=format' },
    { name: 'Grand Hyatt Lobby, Surat', category: 'Hospitality', img: 'https://images.unsplash.com/photo-1667550177753-52b318cd4d40?w=600&h=500&fit=crop&auto=format' },
    { name: 'Zara Flagship, Vadodara', category: 'Retail', img: 'https://images.unsplash.com/photo-1781249144216-143445323087?w=600&h=500&fit=crop&auto=format' },
    { name: 'ITC Hotel, Rajkot', category: 'Hospitality', img: 'https://images.unsplash.com/photo-1782718979595-be6003fc498e?w=900&h=600&fit=crop&auto=format' },
  ]
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Residential', 'Hospitality', 'Retail']

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#FAFAF8' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Projects Supplied</p>
            <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#111' }}>
              Projects We've<br /><em>Powered</em>
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300"
                style={filter === f ? { background: '#222', color: 'white' } : { border: '1px solid #E8DFD5', color: '#555' }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 card-lift group relative rounded-3xl overflow-hidden cursor-pointer" style={{ height: 440, background: '#E8DFD5' }}>
            <img src={items[0].img} alt={items[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(17,17,17,0.75) 0%, transparent 50%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block" style={{ background: '#C9A96E', color: 'white' }}>{items[0].category}</span>
              <h3 className="font-serif text-white text-2xl">{items[0].name}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[items[1], items[2]].map(p => (
              <div key={p.name} className="card-lift group relative rounded-3xl overflow-hidden cursor-pointer flex-1" style={{ minHeight: 210, background: '#E8DFD5' }}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(17,17,17,0.75) 0%, transparent 55%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full mb-2 inline-block" style={{ background: '#C9A96E', color: 'white' }}>{p.category}</span>
                  <h3 className="font-serif text-white text-lg">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3 card-lift group relative rounded-3xl overflow-hidden cursor-pointer" style={{ height: 320, background: '#E8DFD5' }}>
            <img src={items[3].img} alt={items[3].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(17,17,17,0.75) 0%, transparent 50%)' }} />
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center p-10">
              <span className="text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block w-fit" style={{ background: '#C9A96E', color: 'white' }}>{items[3].category}</span>
              <h3 className="font-serif text-white text-3xl max-w-sm">{items[3].name}</h3>
              <button className="mt-6 flex items-center gap-2 text-white/65 text-sm hover:text-white transition-colors">
                View Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── BEFORE / AFTER ────────────────────────────────────────────────────────────
function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95)
    setSliderPos(pos)
  }

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#111' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Transformations</p>
          <h2 className="font-serif text-white leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Before &amp; <em style={{ color: '#E8DFD5' }}>After</em>
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden select-none cursor-col-resize"
          style={{ height: 'clamp(260px, 44vw, 500px)', background: '#1a1a1a' }}
          onMouseDown={() => { dragging.current = true }}
          onMouseMove={e => { if (dragging.current) handleMove(e.clientX) }}
          onMouseUp={() => { dragging.current = false }}
          onMouseLeave={() => { dragging.current = false }}
          onTouchMove={e => handleMove(e.touches[0].clientX)}
        >
          <img src="https://images.unsplash.com/photo-1667550109459-7251955bced4?w=1200&h=700&fit=crop&auto=format" alt="Before renovation" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'grayscale(0.65) brightness(0.75)' }} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img src="https://images.unsplash.com/photo-1754522711595-84428937b07a?w=1200&h=700&fit=crop&auto=format" alt="After with Satapara Ceramic tiles" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / sliderPos}%`, maxWidth: 'none' }} />
          </div>
          <div className="absolute top-0 bottom-0 w-0.5 bg-white/80" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-xl bg-white">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4l-4 5 4 5M12 4l4 5-4 5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="glass-dark absolute bottom-6 left-6 rounded-lg px-4 py-2"><span className="text-white text-xs font-medium">Before</span></div>
          <div className="absolute bottom-6 right-6 rounded-lg px-4 py-2" style={{ background: 'rgba(201,169,110,0.9)' }}><span className="text-white text-xs font-medium">After · Satapara Ceramic</span></div>
        </div>
        <p className="text-center text-white/25 text-xs mt-5">Drag the slider to compare</p>
      </div>
    </section>
  )
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
function Gallery() {
  const imgs = [
    { src: 'https://images.unsplash.com/photo-1756079664354-34944e001f6d?w=600&h=800&fit=crop&auto=format', label: 'Luxury Spa Bath', h: 'tall' },
    { src: 'https://images.unsplash.com/photo-1671197244266-73129c97c096?w=600&h=400&fit=crop&auto=format', label: 'Modern Kitchen', h: 'short' },
    { src: 'https://images.unsplash.com/photo-1683629357963-adf2b1fa9ad9?w=600&h=500&fit=crop&auto=format', label: 'Heritage Kitchen', h: 'short' },
    { src: 'https://images.unsplash.com/photo-1782718979595-be6003fc498e?w=600&h=800&fit=crop&auto=format', label: 'Hotel Lobby', h: 'tall' },
    { src: 'https://images.unsplash.com/photo-1783125127053-db9f268a847b?w=600&h=400&fit=crop&auto=format', label: 'Stone Living Room', h: 'short' },
    { src: 'https://images.unsplash.com/photo-1781249144216-143445323087?w=600&h=600&fit=crop&auto=format', label: 'Warm Bathroom', h: 'tall' },
    { src: 'https://images.unsplash.com/photo-1754788358645-d6e6cca12e25?w=600&h=400&fit=crop&auto=format', label: 'Marble Vanity', h: 'short' },
    { src: 'https://images.unsplash.com/photo-1745124372154-81972a68eaae?w=600&h=600&fit=crop&auto=format', label: 'White Tile Hall', h: 'short' },
  ]

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#FAFAF8' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Inspiration Gallery</p>
          <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#111' }}>
            Spaces That<br /><em>Inspire</em>
          </h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {imgs.map((img, i) => (
            <div key={i} className="card-lift group relative rounded-2xl overflow-hidden cursor-pointer mb-4 break-inside-avoid" style={{ background: '#E8DFD5' }}>
              <img src={img.src} alt={img.label} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ height: img.h === 'tall' ? 340 : 220 }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(0deg, rgba(17,17,17,0.7) 0%, transparent 50%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-full text-sm font-medium tracking-wide" style={{ border: '1px solid #222', color: '#222' }}>View Full Gallery</button>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0)
  const testimonials = [
    { quote: "Satapara Ceramic has been our go-to tile supplier for three years. The range is exceptional and the team genuinely understands what architects need from a trading partner.", author: "Rajesh Mehta", role: "Principal Architect, RM Design Studio", stars: 5 },
    { quote: "We sourced all tiles and sanitaryware for a 120-unit residential project through Satapara. Competitive pricing, on-time delivery, and zero quality issues. Highly recommended.", author: "Priya Shah", role: "Builder & Developer, Shah Constructions", stars: 5 },
    { quote: "As an interior designer, having access to 50+ brands under one roof saves me enormous time. The consultation service is outstanding — they understand my clients' taste immediately.", author: "Ananya Desai", role: "Interior Designer, Studio Desai", stars: 5 },
  ]
  const t = testimonials[active]

  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#F5F0E8' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>Client Testimonials</p>
          <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#111' }}>
            Trusted by<br /><em>Professionals</em>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: t.stars }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#C9A96E"><path d="M9 1l2.25 4.55 5.02.73-3.63 3.54.86 5-4.5-2.37-4.5 2.37.86-5L1.73 6.28l5.02-.73z"/></svg>
            ))}
          </div>
          <div className="text-5xl mb-6" style={{ color: '#C9A96E', fontFamily: 'Georgia' }}>&ldquo;</div>
          <p className="font-serif text-xl md:text-2xl leading-relaxed mb-10" style={{ color: '#222', fontStyle: 'italic' }}>
            {t.quote}
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-medium text-white text-lg" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>
              {t.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-medium text-sm" style={{ color: '#111' }}>{t.author}</p>
              <p className="text-xs mt-0.5" style={{ color: '#888' }}>{t.role}</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300"
                style={active === i ? { width: 28, height: 8, background: '#C9A96E' } : { width: 8, height: 8, background: '#C9C5C1' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#111' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ height: 480, background: '#1a1a1a' }}>
              <img src="https://images.unsplash.com/photo-1782718979595-be6003fc498e?w=800&h=700&fit=crop&auto=format" alt="Satapara Ceramic showroom" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(17,17,17,0.6) 0%, transparent 50%)' }} />
            </div>
            {/* Floating card */}
            <div className="glass-dark absolute bottom-8 left-8 right-8 rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>
                  <span className="text-white text-lg">✦</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Trusted Trading Partner</p>
                  <p className="text-white/50 text-xs mt-0.5">Serving Gujarat since 2009</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-5" style={{ color: '#C9A96E' }}>About Satapara Ceramic</p>
            <h2 className="font-serif text-white leading-tight mb-6" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Your Trusted<br />
              <em style={{ color: '#E8DFD5' }}>Ceramic Partner</em>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6" style={{ fontSize: 15 }}>
              Satapara Ceramic is a leading ceramic tiles and sanitaryware trading company based in Gujarat. Since 2009, we have built our reputation on a simple promise: an unmatched product range, honest pricing, and service that genuinely supports our customers.
            </p>
            <p className="text-white/40 leading-relaxed mb-10" style={{ fontSize: 14 }}>
              From individual homeowners tiling a single bathroom to builders delivering 500-unit residential towers, we provide the same expert guidance, competitive rates, and reliable supply that our 1,000+ customers rely on.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Wide product range across 50+ brands', 'Customer-first consultation', 'Premium quality guaranteed', 'Reliable bulk supply'].map(item => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.25)' }}>
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-white/50 text-xs leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 rounded-full text-sm font-medium text-white" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>Our Story</button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── MARQUEE ─────────────────────────────────────────────────────────────────
function BrandMarquee() {
  const names = ['Kajaria', 'Somany', 'Orient Bell', 'RAK Ceramics', 'Nitco', 'Asian Granito', 'Cera', 'Hindware', 'Jaquar', 'Parryware', 'Johnson', 'Simpolo']
  return (
    <section className="py-14 overflow-hidden" style={{ background: '#FAFAF8', borderTop: '1px solid #E8DFD5', borderBottom: '1px solid #E8DFD5' }}>
      <p className="text-center text-xs font-medium tracking-[0.3em] uppercase mb-7" style={{ color: '#C9C5C1' }}>Brands We Stock</p>
      <div className="flex">
        <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
          {[...names, ...names].map((b, i) => (
            <span key={i} className="text-sm font-medium tracking-wide" style={{ color: '#C9C5C1', minWidth: 'max-content' }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="py-28 px-8 md:px-16" style={{ background: '#E8DFD5' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-5" style={{ color: '#C9A96E' }}>Get In Touch</p>
            <h2 className="font-serif leading-tight mb-8" style={{ fontSize: 'clamp(36px, 4vw, 52px)', color: '#111' }}>
              Visit Our<br />Showroom
            </h2>

            {/* TODO: Replace contact information below with official business details */}
            <div className="space-y-5 mb-10">
              {[
                { icon: '◈', label: 'Address', val: 'Satapara Ceramic, Main Market Road, Morbi, Gujarat – 363641' },
                { icon: '◎', label: 'Phone', val: '+91 98765 43210' },
                { icon: '⬡', label: 'Email', val: 'info@sataparaceramics.com' },
                { icon: '◫', label: 'WhatsApp', val: '+91 98765 43210' },
                { icon: '◑', label: 'Business Hours', val: 'Mon–Sat 9:00 AM – 7:00 PM' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl bg-white/60" style={{ backdropFilter: 'blur(10px)' }}>
                  <span className="text-lg flex-shrink-0 mt-0.5" style={{ color: '#C9A96E' }}>{item.icon}</span>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase mb-0.5" style={{ color: '#888' }}>{item.label}</p>
                    <p className="text-sm" style={{ color: '#222' }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TODO: Update social media channel links */}
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'YouTube', 'LinkedIn'].map(s => (
                <div key={s} className="px-4 py-2 rounded-full text-xs font-medium cursor-pointer" style={{ background: 'white', color: '#555', border: '1px solid rgba(0,0,0,0.08)' }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-serif text-2xl mb-2" style={{ color: '#111' }}>Send an Inquiry</h3>
            <p className="text-gray-400 text-sm mb-7">We respond within 24 hours on business days.</p>
            <div className="space-y-4">
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Rajesh Mehta' },
                { label: 'Phone / WhatsApp', type: 'tel', placeholder: '+91 98765 43210' },
                { label: 'Email Address', type: 'email', placeholder: 'rajesh@studio.com' },
                { label: 'Project Type', type: 'text', placeholder: 'Residential / Commercial / Hotel...' },
              ].map(field => (
                <div key={field.label}>
                  <label className="text-xs font-medium tracking-wide text-gray-400 uppercase mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: '#FAFAF8', border: '1px solid #E8DFD5', color: '#222', fontFamily: 'Inter' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,169,110,0.12)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8DFD5'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-medium tracking-wide text-gray-400 uppercase mb-2 block">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirement..."
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none outline-none transition-all"
                  style={{ background: '#FAFAF8', border: '1px solid #E8DFD5', color: '#222', fontFamily: 'Inter' }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,169,110,0.12)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E8DFD5'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>
              <button className="w-full py-4 rounded-xl text-sm font-medium tracking-wide text-white transition-all hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)', boxShadow: '0 8px 24px rgba(201,169,110,0.28)' }}>
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
function Newsletter() {
  return (
    <section className="py-20 px-8 md:px-16" style={{ background: '#111' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #1a1610 0%, #2a2015 50%, #1a1610 100%)', border: '1px solid rgba(201,169,110,0.2)' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-3xl opacity-20" style={{ background: '#C9A96E' }} />
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4 relative" style={{ color: '#C9A96E' }}>Stay Updated</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl mb-4 relative">
            New Arrivals &amp;<br /><em style={{ color: '#E8DFD5' }}>Exclusive Offers</em>
          </h2>
          <p className="text-white/45 mb-8 max-w-md mx-auto text-sm leading-relaxed relative">
            Get notified about new collections, seasonal offers, and design inspiration straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
            <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontFamily: 'Inter' }} />
            <button className="px-7 py-3.5 rounded-xl text-sm font-medium text-white whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: 'Products', links: ['Floor Tiles', 'Wall Tiles', 'Bathroom Tiles', 'Kitchen Tiles', 'Outdoor Tiles', 'Parking Tiles', 'Large Format Slabs', 'Sanitaryware'] },
    { title: 'Brands', links: ['Kajaria', 'Somany', 'Orient Bell', 'RAK Ceramics', 'Cera', 'Hindware', 'Jaquar', 'View All Brands'] },
    { title: 'Company', links: ['About Us', 'Projects', 'Showroom', 'Trade Partner', 'Careers', 'Contact'] },
  ]
  return (
    <footer style={{ background: '#0A0A09' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6 text-white"><LogoMark size={28} /></div>
            <p className="text-white/30 text-xs leading-relaxed mb-6">Premium ceramic tiles &amp; sanitaryware trading company. Morbi, Gujarat.</p>
            <div className="space-y-1.5 mb-6">
              <p className="text-white/30 text-xs">📞 +91 98765 43210</p>
              <p className="text-white/30 text-xs">✉ info@sataparaceramics.com</p>
              <p className="text-white/30 text-xs">📍 Morbi, Gujarat – 363641</p>
            </div>
            <div className="flex gap-2">
              {['IG', 'FB', 'YT', 'LI'].map(s => (
                <div key={s} className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'Inter', fontWeight: 600 }}>{s}</div>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-5" style={{ color: '#C9A96E' }}>{col.title}</p>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link}><a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-white/20 text-xs">© 2026 Satapara Ceramic. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a key={l} href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────
function WhatsApp() {
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      style={{ background: '#25D366', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
      aria-label="Chat on WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M11.997 2C6.48 2 2 6.48 2 11.997c0 1.763.463 3.418 1.268 4.852L2 22l5.341-1.24A9.953 9.953 0 0011.997 22C17.52 22 22 17.52 22 11.997 22 6.48 17.52 2 11.997 2z"/>
      </svg>
    </a>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Nav />
      <Hero />
      <ProductCategories />
      <FeaturedCollections />
      <WhySatapara />
      <Brands />
      <Showroom />
      <ForProfessionals />
      <RoomVisualizer />
      <Projects />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <About />
      <BrandMarquee />
      <Contact />
      <Newsletter />
      <Footer />
      <WhatsApp />
    </div>
  )
}
