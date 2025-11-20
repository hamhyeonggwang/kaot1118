import React, { useState, useEffect } from 'react';
import { BookOpen, Newspaper, Map, Youtube, Phone, Sparkles } from 'lucide-react';

export default function KioskLanding() {
  const [showLogo, setShowLogo] = useState(true);
  const [showContent, setShowContent] = useState(false);
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
      id: 'intro',
      title: '작업치료 소개\n정보 자료',
      icon: BookOpen,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      link: 'https://kaot.org/pds/definition.jsp',
      description: '작업치료 정의, 교육과정, 자료를 한눈에 확인하세요'
    },
    {
      id: 'news',
      title: '공지·소식\n협회보 / 기사',
      icon: Newspaper,
      color: 'from-purple-500 via-indigo-500 to-blue-500',
      link: 'https://kaot.org/board/index.jsp?code=move',
      description: '협회의 최신 공지와 언론 보도를 빠르게 전달합니다'
    },
    {
      id: 'branch',
      title: '지부 및\n산하단체 안내',
      icon: Map,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      link: 'https://kaot.org/intro/branch.jsp',
      description: '전국 지부, 임원진, 협력 학회 정보를 안내합니다'
    },
    {
      id: 'youtube',
      title: '유튜브 채널\n바로가기',
      icon: Youtube,
      color: 'from-red-500 via-pink-500 to-rose-500',
      link: 'https://www.youtube.com/@kaot-ot-ati',
      description: '작업치료에 대한 다양한 영상 콘텐츠를 확인하세요'
    }
  ];

  const handleMenuClick = (item) => {
    if (item.link) {
      window.open(item.link, '_blank');
    }
  };

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
          <div className="mt-12 md:mt-16 w-full max-w-6xl relative z-10">
            <div className="glass-dark rounded-3xl p-6 md:p-10 text-slate-100 shadow-xl">
              {/* Contact Information */}
              <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed">
                <p className="text-slate-300">
                  서울특별시 영등포구 여의나루로 67 신송빌딩 503 | 대표자 : 이지은 | 고유번호: 110-82-08192
                </p>
                <p className="text-slate-300">
                  TEL : 02-3672-0616 (*운영시간 : 평일 9시-18시 / *전화상담시간 : 11시-12시/13시-15시) (점심시간 : 12시-13시) |
                  Fax. 02-3672-2339
                </p>
                <p className="text-slate-300">
                  이메일: (Korean)kaotoffice@kaot.org / (international)kaot.int@kaot.org
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

