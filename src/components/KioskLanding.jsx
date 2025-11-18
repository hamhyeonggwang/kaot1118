import React, { useState, useEffect } from 'react';
import { Youtube, Info, Users, Phone, X, Sparkles } from 'lucide-react';

export default function KioskLanding() {
  const [showLogo, setShowLogo] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [particles, setParticles] = useState([]);

  // 파티클 효과 생성
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setTimeout(() => setShowContent(true), 500);
    }, 3000);

    return () => clearTimeout(logoTimer);
  }, []);

  const menuItems = [
    {
      id: 'youtube',
      title: '작업치료\n더 알아보기',
      icon: Youtube,
      color: 'from-red-500 via-pink-500 to-rose-500',
      link: 'https://www.youtube.com/@kaot-ot-ati',
      description: '작업치료에 대한 다양한 영상 콘텐츠를 확인하세요'
    },
    {
      id: 'info',
      title: '유용한\n정보',
      icon: Info,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      action: 'info',
      description: '작업치료 관련 최신 정보와 자료를 제공합니다'
    },
    {
      id: 'partners',
      title: '협력기관',
      icon: Users,
      color: 'from-purple-500 via-indigo-500 to-blue-500',
      action: 'partners',
      description: '국내외 협력기관과의 네트워크를 확인하세요'
    },
    {
      id: 'contact',
      title: '연락하기',
      icon: Phone,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      link: 'http://kaot.org',
      description: '협회에 문의하거나 연락하실 수 있습니다'
    }
  ];

  const handleMenuClick = (item) => {
    if (item.link) {
      window.open(item.link, '_blank');
    } else if (item.action) {
      setSelectedMenu(item.action);
    }
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };

  const infoContent = [
    {
      title: '작업치료 최신 자료',
      items: ['학술 논문 및 연구 자료', '치료 프로토콜 가이드', '증례 연구 모음']
    },
    {
      title: '교육 프로그램',
      items: ['보수 교육 과정', '전문가 세미나', '온라인 강의']
    },
    {
      title: '학술활동',
      items: ['영역별 전문학술활동', '컨퍼런스', '워크샵 일정']
    },
    {
      title: '면허 회원 혜택',
      items: ['교육 할인 혜택', '자료실 이용', '네트워킹 기회']
    }
  ];

  const partnersContent = [
    {
      title: '의료기관',
      items: ['대학병원', '재활병원', '요양시설', '재가서비스']
    },
    {
      title: '교육기관',
      items: ['작업치료학과', '대학원', '연수원', '교육센터']
    },
    {
      title: '연구기관',
      items: ['연구소', '학술단체', '국제기구', '협력 네트워크']
    },
    {
      title: '정부기관',
      items: ['보건복지부', '지방자치단체', '공공기관', '정책연구소']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Opening Logo Animation */}
      {showLogo && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-1000 ${
            showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
          <div className="relative text-center animate-pulse">
            <div className="relative">
              <div className="text-8xl md:text-9xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                  KAOT
                </span>
              </div>
              <div className="absolute inset-0 text-8xl md:text-9xl font-bold mb-6 blur-xl opacity-50">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  KAOT
                </span>
              </div>
            </div>
            <div className="text-3xl md:text-4xl text-slate-700 font-semibold mt-4">
              대한작업치료사협회
            </div>
            <div className="flex justify-center mt-8 gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Main Kiosk Interface */}
      {showContent && (
        <div
          className={`w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8 md:mb-16 relative z-10">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                <span className="text-shadow-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  대한작업치료사협회
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl rounded-full -z-10 animate-pulse" />
              </h1>
              <p className="text-lg md:text-2xl text-slate-600 font-medium">
                원하시는 메뉴를 선택해주세요
              </p>
            </div>
          </div>

          {/* 4 Button Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl relative z-10">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`group relative h-64 md:h-80 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl transform-gpu`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-all duration-500 group-hover:brightness-110`}
                />
                
                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Glass Morphism Overlay */}
                <div className="absolute inset-0 glass-dark rounded-3xl flex flex-col items-center justify-center gap-6 p-8 transition-all duration-500 group-hover:bg-slate-900/30">
                  {/* Icon with Glow Effect */}
                  <div className="relative">
                    <item.icon
                      className="w-16 h-16 md:w-24 md:h-24 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      strokeWidth={1.5}
                    />
                    <div className="absolute inset-0 blur-xl bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Title */}
                  <span className="text-2xl md:text-3xl font-bold text-white whitespace-pre-line text-center text-shadow">
                    {item.title}
                  </span>

                  {/* Description (shown on hover) */}
                  <p className="text-sm md:text-base text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center max-w-xs">
                    {item.description}
                  </p>

                  {/* Sparkle Effect */}
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500" />
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 md:mt-16 text-center text-slate-500 text-sm md:text-base">
            <p>© 대한작업치료사협회 (KAOT)</p>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {selectedMenu === 'info' && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="glass-dark rounded-3xl p-6 md:p-12 max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <Info className="w-8 h-8 text-blue-400" />
                유용한 정보
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infoContent.map((section, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-blue-300 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-blue-100 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={closeModal}
              className="mt-8 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl text-lg md:text-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* Partners Modal */}
      {selectedMenu === 'partners' && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="glass-dark rounded-3xl p-6 md:p-12 max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-400" />
                협력기관
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnersContent.map((section, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-purple-300 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-purple-100 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={closeModal}
              className="mt-8 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 rounded-xl text-lg md:text-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              닫기
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

