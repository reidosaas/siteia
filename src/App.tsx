import React, { useState } from 'react';
import { 
  MapPin, 
  Shield, 
  BarChart3, 
  Satellite, 
  Smartphone, 
  Clock,
  Users,
  AlertTriangle,
  MessageCircle,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  Car,
  Navigation,
  Activity,
  Building2,
  TrendingUp,
  Zap,
  Award,
  DollarSign,
  Settings
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/512x512.png" 
                alt="TOP TRACKING Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">TOP TRACKING</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="https://montesuacentral.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg transform hover:scale-105"
              >
                Início
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Benefícios</a>
              <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Planos</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Depoimentos</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                  href="https://montesuacentral.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold text-center mb-2"
                >
                  Início
                </a>
                <a href="#beneficios" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Benefícios</a>
                <a href="#planos" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Planos</a>
                <a href="#depoimentos" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Depoimentos</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://media.istockphoto.com/id/886693608/pt/v%C3%ADdeo/t-l-aerial-view-of-rush-hour-traffic-on-multiple-highways-at-night-beijing-china.mp4?s=mp4-640x640-is&k=20&c=qOHnXV25uaZdKdm5aTiw73MdBTZlQdDCSpLWRe-N_Do=" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent">
                  Rastreamento Veicular
                </span>
                <br />
                <span className="text-white">Profissional ao Seu Alcance</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Tenha controle total da sua frota ou veículo em tempo real com a tecnologia da TOP TRACKING.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToPlans}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 hover:border-white/50 transition-all shadow-lg"
                >
                  Ver Planos
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center text-white">
                    <div className="bg-gradient-to-br from-green-400 to-green-500 p-2 rounded-lg mr-4 shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Localização em tempo real</h3>
                      <p className="text-blue-100">Acompanhe seus veículos 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-2 rounded-lg mr-4 shadow-lg">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Monitoramento 24/7</h3>
                      <p className="text-blue-100">Alertas instantâneos e relatórios</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-500 p-2 rounded-lg mr-4 shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Máxima segurança</h3>
                      <p className="text-blue-100">Proteção total para sua frota</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-2 rounded-lg mr-4 shadow-lg">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">App Mobile</h3>
                      <p className="text-blue-100">Controle total na palma da mão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Label Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plataforma <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">White Label</span> para Seu Negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tenha sua própria marca de rastreamento veicular com nossa tecnologia completa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-blue-100">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sua Própria Marca</h3>
              <p className="text-gray-600">
                Personalize completamente a plataforma com sua logo, cores e identidade visual.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-blue-100">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-yellow-200 group-hover:to-yellow-300 transition-all">
                <DollarSign className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Receita Recorrente</h3>
              <p className="text-gray-600">
                Gere renda mensal com assinaturas dos seus clientes e comissões atrativas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-blue-100">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Escalabilidade Total</h3>
              <p className="text-gray-600">
                Cresça sem limites com nossa infraestrutura robusta e suporte técnico completo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-blue-100">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementação Rápida</h3>
              <p className="text-gray-600">
                Comece a vender em poucos dias com nossa plataforma pronta para uso.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-blue-100">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suporte Especializado</h3>
              <p className="text-gray-600">
                Equipe técnica dedicada para treinar sua equipe e dar suporte aos seus clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group border border-blue-100">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-teal-200 group-hover:to-teal-300 transition-all">
                <Settings className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Painel Administrativo</h3>
              <p className="text-gray-600">
                Gerencie todos os seus clientes, relatórios e faturamento em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha o <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Plano Ideal</span>
            </h2>
            <p className="text-xl text-gray-600">
              Planos pensados para atender desde pessoas físicas até grandes empresas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Start Plan */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Start</h3>
                <p className="text-gray-600 mb-6">Ideal para empresas iniciantes - até 100 rastreadores</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                  R$ 197<span className="text-lg text-gray-600 font-normal">/mês</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Plataforma pronta para uso</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Suporte e treinamento completo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Plataforma web e app Android</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Descontos exclusivos nos rastreadores e chips</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Sistema financeiro integrado banco Asaas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Até 100 rastreadores ativos</span>
                </div>
              </div>

              <button className="w-full bg-white border-2 border-blue-500 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-600 transition-all transform hover:scale-105 shadow-lg">
                Contratar Plano Start
              </button>
            </div>

            {/* Professional Plan - Highlighted */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl p-8 relative transform hover:scale-105 transition-all shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  MAIS POPULAR
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Profissional</h3>
                <p className="text-blue-100 mb-6">Ideal para empresas e frotas - até 300 rastreadores</p>
                <div className="text-4xl font-bold mb-2">
                  R$ 347<span className="text-lg text-blue-200 font-normal">/mês</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Todos os recursos do plano Start</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Notificações push em tempo real</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>App iOS disponível</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Sistema financeiro integrado banco Asaas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Até 300 rastreadores ativos</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg transform hover:scale-105">
                Contratar Plano Profissional
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">clientes dizem</span>
            </h2>
            <p className="text-xl text-gray-600">
              Milhares de clientes confiam na TOP TRACKING
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">
                "Com a TOP TRACKING consegui reduzir em 30% os custos com combustível e controlar melhor minha frota. O sistema é muito intuitivo e o suporte é excepcional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-semibold">CA</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Carlos A.</p>
                  <p className="text-gray-600">Empresário de Transportes</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">
                "Rastreamento funciona perfeitamente, e o suporte é excelente. Consigo acompanhar meu carro em tempo real pelo celular. Super recomendo!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-semibold">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Juliana M.</p>
                  <p className="text-gray-600">Cliente Pessoal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-blue-600/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sua segurança e controle em um clique
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Escolha seu plano e comece agora com suporte completo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg">
              Quero Começar Agora
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg">
              Falar com um Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/512x512.png" 
                  alt="TOP TRACKING Logo" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">TOP TRACKING</span>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Liderança em tecnologia de rastreamento veicular com soluções confiáveis e suporte especializado.
              </p>
              <div className="flex space-x-4">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Suporte</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(11) 9 6658-3001</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contato@montesuacentral.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contato@toptracking.com.br</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 TOP TRACKING. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;