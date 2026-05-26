import React, { useState } from 'react';
import { ChevronDown, Menu as MenuIcon, X, Calendar, ShoppingCart, MapPin, Phone, Mail, Clock } from 'lucide-react';

const YunnanTeahouse = () => {
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderItems, setOrderItems] = useState({});
  const [activeSection, setActiveSection] = useState('home');

  const translations = {
    en: {
      siteName: "Cloud Peak Tea House",
      tagline: "Authentic Yunnan Tea Experience",
      nav: {
        home: "Home",
        about: "About",
        menu: "Menu",
        order: "Order",
        reserve: "Reserve"
      },
      hero: {
        welcome: "Welcome to",
        subtitle: "Experience the ancient art of Yunnan tea culture in the heart of the city",
        cta: "Explore Menu"
      },
      about: {
        title: "Our Story",
        content: "Nestled in the misty mountains of Yunnan, our tea traditions span centuries. We bring you authentic Pu'er tea, handcrafted dim sum, and the warm hospitality of Southwest China. Each cup tells a story of ancient tea forests and skilled artisans.",
        features: [
          { title: "Traditional Tea Ceremony", desc: "Experience authentic Gongfu tea preparation" },
          { title: "Premium Pu'er Selection", desc: "Aged teas from century-old tea trees" },
          { title: "Yunnan Cuisine", desc: "Authentic flavors from China's tea capital" }
        ]
      },
      menu: {
        title: "Our Menu",
        tea: {
          title: "Premium Teas",
          items: [
            { name: "Aged Pu'er (10 Year)", desc: "Rich, earthy notes with smooth finish", price: "฿280" },
            { name: "Phoenix Mountain Oolong", desc: "Floral aroma with fruity undertones", price: "฿240" },
            { name: "Dian Hong Black Tea", desc: "Malty sweetness with golden tips", price: "฿220" },
            { name: "Silver Needle White Tea", desc: "Delicate, naturally sweet", price: "฿260" },
            { name: "Jasmine Dragon Pearl", desc: "Hand-rolled green tea with jasmine", price: "฿200" }
          ]
        },
        food: {
          title: "Authentic Dishes",
          items: [
            { name: "Crossing Bridge Noodles", desc: "Signature Yunnan rice noodles in rich broth", price: "฿180" },
            { name: "Steam Pot Chicken", desc: "Traditional herbal chicken soup", price: "฿320" },
            { name: "Rose Flower Cake", desc: "Sweet pastry with rose petal filling", price: "฿80" },
            { name: "Dim Sum Selection", desc: "Chef's choice of 6 pieces", price: "฿160" },
            { name: "Wild Mushroom Platter", desc: "Local seasonal mushrooms", price: "฿240" }
          ]
        }
      },
      order: {
        title: "Place Your Order",
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        delivery: "Delivery Address",
        items: "Select Items",
        quantity: "Quantity",
        notes: "Special Instructions",
        submit: "Submit Order",
        total: "Total"
      },
      reserve: {
        title: "Reserve Your Table",
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        date: "Date",
        time: "Time",
        guests: "Number of Guests",
        notes: "Special Requests",
        submit: "Confirm Reservation"
      },
      contact: {
        title: "Visit Us",
        address: "123 Silom Road, Bangkok",
        phone: "+66 2 123 4567",
        email: "info@cloudpeaktea.com",
        hours: "Daily 10:00 - 22:00"
      }
    },
    th: {
      siteName: "ร้านชาเมฆยอดเขา",
      tagline: "ชาอู่หลงแท้จากยูนนาน",
      nav: {
        home: "หน้าแรก",
        about: "เกี่ยวกับเรา",
        menu: "เมนู",
        order: "สั่งอาหาร",
        reserve: "จองโต๊ะ"
      },
      hero: {
        welcome: "ยินดีต้อนรับสู่",
        subtitle: "สัมผัสศิลปะการชงชายูนนานโบราณในใจกลางเมือง",
        cta: "ดูเมนู"
      },
      about: {
        title: "เรื่องราวของเรา",
        content: "ท่ามกลางหมอกหมอกบนภูเขายูนนาน ประเพณีชาของเรามีมายาวนานหลายศตวรรษ เรานำเสนอชาผู่เอ๋อแท้ ติ่มซำทำด้วยมือ และการต้อนรับอันอบอุ่นจากจีนตะวันตกเฉียงใต้ ชาทุกถ้วยเล่าเรื่องราวของป่าชาโบราณและช่างฝีมือผู้ชำนาญ",
        features: [
          { title: "พิธีชงชาแบบดั้งเดิม", desc: "สัมผัสการชงชากงฟูแท้" },
          { title: "ชาผู่เอ๋อชั้นเลิศ", desc: "ชาบ่มจากต้นชาอายุร้อยปี" },
          { title: "อาหารยูนนาน", desc: "รสชาติแท้จากเมืองหลวงชาของจีน" }
        ]
      },
      menu: {
        title: "เมนูของเรา",
        tea: {
          title: "ชาพรีเมียม",
          items: [
            { name: "ชาผู่เอ๋อบ่ม 10 ปี", desc: "กลิ่นอายดินเข้มข้นจบรสนุ่มลื่น", price: "฿280" },
            { name: "อูหลงภูเขาฟีนิกซ์", desc: "กลิ่นดอกไม้พร้อมกลิ่นผลไม้", price: "฿240" },
            { name: "ชาดำเตี้ยนหง", desc: "หวานมอลต์พร้อมยอดทอง", price: "฿220" },
            { name: "ชาขาวเข็มเงิน", desc: "ละเอียดอ่อนหวานธรรมชาติ", price: "฿260" },
            { name: "มังกรไข่มุกมะลิ", desc: "ชาเขียวม้วนมือกับมะลิ", price: "฿200" }
          ]
        },
        food: {
          title: "อาหารต้นตำรับ",
          items: [
            { name: "ก๋วยเตี๋ยวข้ามสะพาน", desc: "ก๋วยเตี๋ยวข้าวยูนนานในน้ำซุปเข้มข้น", price: "฿180" },
            { name: "ไก่หม้อนึ่ง", desc: "ซุปไก่สมุนไพรแบบดั้งเดิม", price: "฿320" },
            { name: "ขนมกุหลาบ", desc: "ขนมหวานไส้กลีบกุหลาบ", price: "฿80" },
            { name: "ติ่มซำรวม", desc: "เชฟคัดสรร 6 ชิ้น", price: "฿160" },
            { name: "จานเห็ดป่า", desc: "เห็ดท้องถิ่นตามฤดูกาล", price: "฿240" }
          ]
        }
      },
      order: {
        title: "สั่งอาหาร",
        name: "ชื่อ-นามสกุล",
        phone: "เบอร์โทรศัพท์",
        email: "อีเมล",
        delivery: "ที่อยู่จัดส่ง",
        items: "เลือกรายการ",
        quantity: "จำนวน",
        notes: "คำแนะนำพิเศษ",
        submit: "ยืนยันคำสั่งซื้อ",
        total: "ยอดรวม"
      },
      reserve: {
        title: "จองโต๊ะ",
        name: "ชื่อ-นามสกุล",
        phone: "เบอร์โทรศัพท์",
        email: "อีเมล",
        date: "วันที่",
        time: "เวลา",
        guests: "จำนวนผู้ใหญ่",
        notes: "คำขอพิเศษ",
        submit: "ยืนยันการจอง"
      },
      contact: {
        title: "เยี่ยมชมเรา",
        address: "123 ถนนสีลม กรุงเทพฯ",
        phone: "+66 2 123 4567",
        email: "info@cloudpeaktea.com",
        hours: "เปิดทุกวัน 10:00 - 22:00"
      }
    },
    zh: {
      siteName: "云峰茶馆",
      tagline: "正宗云南茶艺体验",
      nav: {
        home: "首页",
        about: "关于",
        menu: "菜单",
        order: "订餐",
        reserve: "订位"
      },
      hero: {
        welcome: "欢迎光临",
        subtitle: "在市中心体验古老的云南茶文化艺术",
        cta: "查看菜单"
      },
      about: {
        title: "我们的故事",
        content: "坐落于云南雾蒙蒙的群山之中，我们的茶传统跨越数百年。我们为您带来正宗的普洱茶、手工点心和中国西南部的温馨待客之道。每一杯茶都讲述着古老茶林和技艺精湛的工匠的故事。",
        features: [
          { title: "传统茶艺", desc: "体验正宗的功夫茶冲泡" },
          { title: "优质普洱精选", desc: "来自百年古树的陈年茶" },
          { title: "云南美食", desc: "来自中国茶都的正宗风味" }
        ]
      },
      menu: {
        title: "我们的菜单",
        tea: {
          title: "精品茶类",
          items: [
            { name: "陈年普洱（10年）", desc: "浓郁的泥土香韵，回味顺滑", price: "฿280" },
            { name: "凤凰山乌龙", desc: "花香四溢，带有果香", price: "฿240" },
            { name: "滇红", desc: "麦芽甜味配金毫", price: "฿220" },
            { name: "银针白茶", desc: "细腻，自然清甜", price: "฿260" },
            { name: "茉莉龙珠", desc: "手工绿茶配茉莉花", price: "฿200" }
          ]
        },
        food: {
          title: "正宗菜肴",
          items: [
            { name: "过桥米线", desc: "云南招牌米线配浓郁高汤", price: "฿180" },
            { name: "汽锅鸡", desc: "传统草药炖鸡汤", price: "฿320" },
            { name: "鲜花饼", desc: "玫瑰花瓣馅甜点", price: "฿80" },
            { name: "点心拼盘", desc: "主厨精选6件", price: "฿160" },
            { name: "野生菌拼盘", desc: "当地时令菌类", price: "฿240" }
          ]
        }
      },
      order: {
        title: "下单订餐",
        name: "姓名",
        phone: "电话号码",
        email: "电子邮箱",
        delivery: "送货地址",
        items: "选择项目",
        quantity: "数量",
        notes: "特殊说明",
        submit: "提交订单",
        total: "总计"
      },
      reserve: {
        title: "预订座位",
        name: "姓名",
        phone: "电话号码",
        email: "电子邮箱",
        date: "日期",
        time: "时间",
        guests: "人数",
        notes: "特殊要求",
        submit: "确认预订"
      },
      contact: {
        title: "访问我们",
        address: "曼谷 Silom 路 123 号",
        phone: "+66 2 123 4567",
        email: "info@cloudpeaktea.com",
        hours: "每日 10:00 - 22:00"
      }
    }
  };

  const t = translations[language];

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const updateOrderItem = (itemName, quantity) => {
    setOrderItems(prev => ({
      ...prev,
      [itemName]: quantity
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    Object.entries(orderItems).forEach(([itemName, quantity]) => {
      const allItems = [...t.menu.tea.items, ...t.menu.food.items];
      const item = allItems.find(i => i.name === itemName);
      if (item && quantity > 0) {
        const price = parseInt(item.price.replace('฿', ''));
        total += price * quantity;
      }
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+SC:wght@300;400;500;600;700&family=Noto+Serif+Thai:wght@300;400;500;600;700&display=swap');
        
        :root {
          --color-tea-dark: #3d2817;
          --color-tea-medium: #6b4423;
          --color-tea-light: #a67c52;
          --color-jade: #4a7c59;
          --color-mist: #d4cfc9;
          --color-gold: #c9a961;
        }

        body {
          font-family: 'Cormorant Garamond', 'Noto Serif SC', 'Noto Serif Thai', serif;
        }

        .font-display {
          font-family: 'Cinzel', 'Noto Serif SC', 'Noto Serif Thai', serif;
        }

        .tea-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(201, 169, 97, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(74, 124, 89, 0.05) 0%, transparent 50%);
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--color-gold);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .menu-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,252,245,0.95) 100%);
        }

        .menu-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(61, 40, 23, 0.15);
        }

        .form-input {
          transition: all 0.3s ease;
          border: 2px solid rgba(107, 68, 35, 0.2);
          background: rgba(255, 255, 255, 0.8);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-tea-medium);
          background: white;
          box-shadow: 0 0 0 4px rgba(107, 68, 35, 0.1);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--color-tea-medium) 0%, var(--color-tea-dark) 100%);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(61, 40, 23, 0.3);
        }

        .hero-bg {
          background: 
            linear-gradient(135deg, rgba(61, 40, 23, 0.7) 0%, rgba(107, 68, 35, 0.6) 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="tea-leaves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><ellipse cx="30" cy="40" rx="15" ry="25" fill="rgba(201,169,97,0.1)" transform="rotate(-20 30 40)"/><ellipse cx="70" cy="60" rx="15" ry="25" fill="rgba(74,124,89,0.1)" transform="rotate(25 70 60)"/></pattern></defs><rect width="1200" height="600" fill="url(%23tea-leaves)"/></svg>');
          background-size: cover;
          background-position: center;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes steam {
          0% { opacity: 0; transform: translateY(0) scale(1); }
          50% { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-100px) scale(1.5); }
        }

        .steam {
          animation: steam 4s ease-out infinite;
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-stone-800 rounded-full flex items-center justify-center">
                <span className="text-amber-100 text-xl font-display">茶</span>
              </div>
              <span className="text-2xl font-display font-semibold text-stone-800">{t.siteName}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                  className={`nav-link text-stone-700 hover:text-stone-900 font-medium ${activeSection === key ? 'active' : ''}`}
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2 bg-stone-100 rounded-full p-1">
              {['en', 'th', 'zh'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    language === lang
                      ? 'bg-white text-stone-800 shadow-md'
                      : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stone-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                  className="block w-full text-left px-4 py-2 text-stone-700 hover:bg-stone-50 rounded"
                >
                  {value}
                </button>
              ))}
              <div className="flex space-x-2 pt-3 border-t border-stone-200">
                {['en', 'th', 'zh'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`flex-1 px-4 py-2 rounded font-medium transition-all ${
                      language === lang
                        ? 'bg-stone-800 text-white'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 tea-pattern opacity-30"></div>
        
        {/* Decorative steam elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/20 rounded-full blur-3xl steam" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/15 rounded-full blur-3xl steam" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-white/20 rounded-full blur-3xl steam" style={{ animationDelay: '3s' }}></div>

        <div className="relative z-10 text-center px-4 max-w-4xl float-animation">
          <div className="mb-6">
            <div className="inline-block p-6 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-7xl">🍵</span>
            </div>
          </div>
          <p className="text-amber-200 text-lg mb-4 tracking-widest uppercase font-display">{t.hero.welcome}</p>
          <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {t.siteName}
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl inline-flex items-center space-x-2"
          >
            <span>{t.hero.cta}</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-5xl font-display font-bold text-stone-800 text-center mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-stone-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {t.about.content}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {t.about.features.map((feature, index) => (
              <div
                key={index}
                className="menu-card p-8 rounded-2xl border border-stone-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-stone-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">
                    {index === 0 ? '🫖' : index === 1 ? '🍃' : '🥟'}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-semibold text-stone-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-stone-600 text-center leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-5xl font-display font-bold text-stone-800 text-center mb-16">
            {t.menu.title}
          </h2>

          {/* Tea Menu */}
          <div className="mb-20">
            <h3 className="text-3xl font-display font-semibold text-stone-700 mb-8 text-center flex items-center justify-center">
              <span className="mr-3">🍵</span>
              {t.menu.tea.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.menu.tea.items.map((item, index) => (
                <div key={index} className="menu-card p-6 rounded-xl border border-stone-200">
                  <h4 className="text-xl font-display font-semibold text-stone-800 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold text-amber-700">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food Menu */}
          <div>
            <h3 className="text-3xl font-display font-semibold text-stone-700 mb-8 text-center flex items-center justify-center">
              <span className="mr-3">🥟</span>
              {t.menu.food.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.menu.food.items.map((item, index) => (
                <div key={index} className="menu-card p-6 rounded-xl border border-stone-200">
                  <h4 className="text-xl font-display font-semibold text-stone-800 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold text-amber-700">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-5xl font-display font-bold text-stone-800 text-center mb-16">
            {t.order.title}
          </h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-stone-700 font-medium mb-2">{t.order.name}</label>
                <input
                  type="text"
                  className="form-input w-full px-4 py-3 rounded-lg"
                  placeholder={t.order.name}
                />
              </div>
              <div>
                <label className="block text-stone-700 font-medium mb-2">{t.order.phone}</label>
                <input
                  type="tel"
                  className="form-input w-full px-4 py-3 rounded-lg"
                  placeholder={t.order.phone}
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-2">{t.order.email}</label>
              <input
                type="email"
                className="form-input w-full px-4 py-3 rounded-lg"
                placeholder={t.order.email}
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-2">{t.order.delivery}</label>
              <textarea
                className="form-input w-full px-4 py-3 rounded-lg"
                rows="3"
                placeholder={t.order.delivery}
              ></textarea>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-4">{t.order.items}</label>
              <div className="space-y-4 max-h-96 overflow-y-auto p-4 bg-stone-50 rounded-lg">
                {[...t.menu.tea.items, ...t.menu.food.items].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-stone-200">
                    <div className="flex-1">
                      <p className="font-medium text-stone-800">{item.name}</p>
                      <p className="text-sm text-stone-600">{item.price}</p>
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      defaultValue="0"
                      onChange={(e) => updateOrderItem(item.name, parseInt(e.target.value) || 0)}
                      className="form-input w-20 px-3 py-2 rounded-lg text-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-100 p-6 rounded-lg border-2 border-stone-300">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span className="text-stone-700">{t.order.total}:</span>
                <span className="text-amber-700">฿{calculateTotal()}</span>
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-2">{t.order.notes}</label>
              <textarea
                className="form-input w-full px-4 py-3 rounded-lg"
                rows="3"
                placeholder={t.order.notes}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 rounded-full text-white text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>{t.order.submit}</span>
            </button>
          </form>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-amber-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-5xl font-display font-bold text-stone-800 text-center mb-16">
            {t.reserve.title}
          </h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-stone-700 font-medium mb-2">{t.reserve.name}</label>
                <input
                  type="text"
                  className="form-input w-full px-4 py-3 rounded-lg"
                  placeholder={t.reserve.name}
                />
              </div>
              <div>
                <label className="block text-stone-700 font-medium mb-2">{t.reserve.phone}</label>
                <input
                  type="tel"
                  className="form-input w-full px-4 py-3 rounded-lg"
                  placeholder={t.reserve.phone}
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-2">{t.reserve.email}</label>
              <input
                type="email"
                className="form-input w-full px-4 py-3 rounded-lg"
                placeholder={t.reserve.email}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-stone-700 font-medium mb-2">{t.reserve.date}</label>
                <input
                  type="date"
                  className="form-input w-full px-4 py-3 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-medium mb-2">{t.reserve.time}</label>
                <input
                  type="time"
                  className="form-input w-full px-4 py-3 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-medium mb-2">{t.reserve.guests}</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  defaultValue="2"
                  className="form-input w-full px-4 py-3 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-2">{t.reserve.notes}</label>
              <textarea
                className="form-input w-full px-4 py-3 rounded-lg"
                rows="4"
                placeholder={t.reserve.notes}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 rounded-full text-white text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>{t.reserve.submit}</span>
            </button>
          </form>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-stone-700 rounded-full flex items-center justify-center">
                  <span className="text-amber-100 text-2xl font-display">茶</span>
                </div>
                <span className="text-3xl font-display font-semibold">{t.siteName}</span>
              </div>
              <p className="text-amber-200 mb-4">{t.tagline}</p>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-4">{t.contact.title}</h3>
              <div className="space-y-3 text-stone-300">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <span>{t.contact.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="flex-shrink-0" />
                  <span>{t.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="flex-shrink-0" />
                  <span>{t.contact.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center">
                <Clock size={20} className="mr-2" />
                {t.contact.hours.split(' ')[0]}
              </h3>
              <p className="text-stone-300">{t.contact.hours.split(' ').slice(1).join(' ')}</p>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8 text-center text-stone-400">
            <p>&copy; 2026 {t.siteName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YunnanTeahouse;