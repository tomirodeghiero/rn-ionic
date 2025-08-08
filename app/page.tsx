"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Settings,
  CheckCircle,
  AlertTriangle,
  Package,
  BarChart3,
  Brain,
  ArrowRight,
  Smartphone,
  Code,
  Zap,
  Users,
  Wrench,
  TrendingUp,
  Star,
} from "lucide-react";
import HeaderHero from "@/components/header-hero";

type Slide = {
  id: number;
  title: string;
  subtitle?: string;
  icon: any;
  gradient: string;
  content: React.ReactNode;
  headerHidden?: boolean;
};

const slides: Slide[] = [
  {
    id: 1,
    title: " ",
    subtitle: " ",
    icon: Target,
    gradient: "from-transparent to-transparent",
    headerHidden: true,
    content: (
      <div className="h-[87.5vh] flex items-center justify-center">
        <HeaderHero />
      </div>
    ),
  },
  {
    id: 2,
    title: "⚙️ Diferencias Clave",
    subtitle: "Análisis técnico comparativo",
    icon: Settings,
    gradient: "from-brand to-brand",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white text-ink p-6 rounded-2xl border border-ink/10 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold">React Native</h3>
            </div>
            <p className="text-ink/80">Aplicaciones nativas con JavaScript</p>
          </div>

          <div className="bg-white text-ink p-6 rounded-2xl border border-ink/10 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold">Ionic</h3>
            </div>
            <p className="text-ink/80">
              Aplicaciones híbridas basadas en la Web
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-ink/10 shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-brand/10">
                  <th className="p-4 text-left font-bold text-ink">Aspecto</th>
                  <th className="p-4 text-left font-bold text-brand">
                    React Native
                  </th>
                  <th className="p-4 text-left font-bold text-ink">Ionic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: "Tipo de app",
                    reactNative: "Nativa (JS + componentes nativos)",
                    ionic: "Híbrida (WebView con HTML/CSS/JS)",
                  },
                  {
                    aspect: "UI",
                    reactNative: "Realmente nativa",
                    ionic: "Simulación de nativo con CSS",
                  },
                  {
                    aspect: "Rendimiento",
                    reactNative: { text: "Alto", badge: "brand" },
                    ionic: {
                      text: "Medio-bajo (limitado por WebView)",
                      badge: "ink",
                    },
                  },
                  {
                    aspect: "Lenguaje base",
                    reactNative: "JavaScript + React",
                    ionic: "HTML, CSS, JS + Angular/React/Vue",
                  },
                  {
                    aspect: "Acceso nativo",
                    reactNative: "Bridge directo + módulos",
                    ionic: "Plugins vía Capacitor/Cordova",
                  },
                ].map((row: any, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-ink/[0.02]"
                    } hover:bg-brand/5 transition-colors duration-200`}
                  >
                    <td className="p-4 font-semibold text-ink">{row.aspect}</td>
                    <td className="p-4">
                      {typeof row.reactNative === "object" ? (
                        <Badge
                          className={
                            row.reactNative.badge === "brand"
                              ? "bg-brand/10 text-brand"
                              : "bg-ink/10 text-ink"
                          }
                        >
                          {row.reactNative.text}
                        </Badge>
                      ) : (
                        <span className="text-ink/80">{row.reactNative}</span>
                      )}
                    </td>
                    <td className="p-4">
                      {typeof row.ionic === "object" ? (
                        <Badge
                          className={
                            row.ionic.badge === "brand"
                              ? "bg-brand/10 text-brand"
                              : "bg-ink/10 text-ink"
                          }
                        >
                          {row.ionic.text}
                        </Badge>
                      ) : (
                        <span className="text-ink/80">{row.ionic}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "✅ Ventajas y Desventajas",
    subtitle: "Análisis detallado de pros y contras",
    icon: CheckCircle,
    gradient: "from-brand to-brand",
    content: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="bg-white border border-ink/10 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-white text-ink rounded-t-lg border-b border-ink/10">
              <CardTitle className="flex items-center space-x-3">
                <span>React Native</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-ink mb-4 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand" />
                    <span>Ventajas</span>
                  </h4>
                  <div className="space-y-3">
                    {[
                      "UX fluida y nativa",
                      "Buen performance",
                      "Gran comunidad",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-brand/5 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-brand rounded-full" />
                        <span className="text-ink">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-ink mb-4 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-ink" />
                    <span>Desventajas</span>
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Curva técnica más compleja",
                      "Dependencia de módulos externos",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-ink/5 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-ink rounded-full" />
                        <span className="text-ink/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-white border border-ink/10 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-white text-ink rounded-t-lg border-b border-ink/10">
              <CardTitle className="flex items-center space-x-3">
                <span>Ionic</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-ink mb-4 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand" />
                    <span>Ventajas</span>
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Rápida curva de aprendizaje web",
                      "Código único web/mobile",
                      "Integración PWA/web app",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-brand/5 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-brand rounded-full" />
                        <span className="text-ink">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-ink mb-4 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-ink" />
                    <span>Desventajas</span>
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Rendimiento limitado",
                      "UI menos pulida en interacciones complejas",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-ink/5 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-ink rounded-full" />
                        <span className="text-ink/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "📦 Casos de Uso Ideales",
    subtitle: "Escenarios óptimos para cada tecnología",
    icon: Package,
    gradient: "from-brand to-brand",
    content: (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-ink/10 shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-brand/10">
                  <th className="p-6 text-left font-bold text-ink">
                    Contexto de Uso
                  </th>
                  <th className="p-6 text-center font-bold text-brand">
                    React Native
                  </th>
                  <th className="p-6 text-center font-bold text-ink">Ionic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    context: "UX avanzada + Transiciones complejas",
                    reactNative: { status: "✔️", text: "Sí", color: "brand" },
                    ionic: {
                      status: "❌",
                      text: "No recomendado",
                      color: "ink",
                    },
                  },
                  {
                    context: "App ERP con lógica pesada y offline",
                    reactNative: { status: "✔️", text: "Sí", color: "brand" },
                    ionic: { status: "⚠️", text: "Limitado", color: "ink" },
                  },
                  {
                    context: "Prototipado rápido o MVP empresarial",
                    reactNative: {
                      status: "⚠️",
                      text: "Posible",
                      color: "ink",
                    },
                    ionic: { status: "✔️", text: "Ideal", color: "brand" },
                  },
                  {
                    context: "Web + PWA + Mobile en un solo codebase",
                    reactNative: {
                      status: "⚠️",
                      text: "Parcial (con WebView)",
                      color: "ink",
                    },
                    ionic: { status: "✔️", text: "Nativo", color: "brand" },
                  },
                ].map((row: any, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-ink/[0.02]"
                    } hover:bg-brand/5 transition-all duration-300`}
                  >
                    <td className="p-6 font-semibold text-ink">
                      {row.context}
                    </td>
                    <td className="p-6 text-center">
                      <div className="inline-flex items-center space-x-2">
                        <span className="text-lg">
                          {row.reactNative.status}
                        </span>
                        <Badge
                          className={
                            row.reactNative.color === "brand"
                              ? "bg-brand/10 text-brand"
                              : "bg-ink/10 text-ink"
                          }
                        >
                          {row.reactNative.text}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="inline-flex items-center space-x-2">
                        <span className="text-lg">{row.ionic.status}</span>
                        <Badge
                          className={
                            row.ionic.color === "brand"
                              ? "bg-brand/10 text-brand"
                              : "bg-ink/10 text-ink"
                          }
                        >
                          {row.ionic.text}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "📊 Comparación Técnica",
    subtitle: "Métricas de rendimiento y capacidades",
    icon: BarChart3,
    gradient: "from-brand to-brand",
    content: (
      <div className="space-y-6">
        <div className="grid gap-6">
          {[
            {
              criterio: "Performance UI",
              reactNative: { status: "🟢", text: "Excelente", score: 95 },
              ionic: { status: "🔴", text: "Limitado por WebView", score: 65 },
            },
            {
              criterio: "Acceso hardware",
              reactNative: { status: "🟢", text: "Directo", score: 90 },
              ionic: { status: "🟡", text: "A través de plugins", score: 75 },
            },
            {
              criterio: "Escalabilidad",
              reactNative: { status: "🟢", text: "Alta", score: 88 },
              ionic: { status: "🟡", text: "Media", score: 70 },
            },
            {
              criterio: "Experiencia devs",
              reactNative: { status: "🟢", text: "React moderna", score: 85 },
              ionic: { status: "🟢", text: "Web stack conocido", score: 80 },
            },
            {
              criterio: "Mantenimiento futuro",
              reactNative: {
                status: "🟢",
                text: "Fuerte comunidad",
                score: 92,
              },
              ionic: { status: "🟡", text: "Comunidad más pequeña", score: 72 },
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-ink/10 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-6 items-center">
                <div className="font-bold text-ink text-lg">
                  {item.criterio}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{item.reactNative.status}</span>
                      <span className="font-medium text-ink">React Native</span>
                    </div>
                    <span className="text-sm font-bold text-brand">
                      {item.reactNative.score}%
                    </span>
                  </div>
                  <div className="w-full bg-ink/10 rounded-full h-2">
                    <div
                      className="bg-brand h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.reactNative.score}%` }}
                    />
                  </div>
                  <span className="text-sm text-ink/80">
                    {item.reactNative.text}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{item.ionic.status}</span>
                      <span className="font-medium text-ink">Ionic</span>
                    </div>
                    <span className="text-sm font-bold text-ink">
                      {item.ionic.score}%
                    </span>
                  </div>
                  <div className="w-full bg-ink/10 rounded-full h-2">
                    <div
                      className="bg-ink h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.ionic.score}%` }}
                    />
                  </div>
                  <span className="text-sm text-ink/80">{item.ionic.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "🧠 Recomendación Final",
    subtitle: "IT Móvil 3.0 - Empresa Oliver",
    icon: Brain,
    gradient: "from-brand to-brand",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-brand/10 px-8 py-4 rounded-2xl mb-6 border border-brand/20">
            <span className="w-8 h-8 rounded-xl bg-brand grid place-items-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </span>
            <span className="text-2xl font-bold text-brand">
              React Native es la elección óptima
            </span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-ink/10 shadow">
          <h3 className="font-bold text-ink text-2xl mb-6">
            {"¿Por qué React Native para IT Móvil 3.0?"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Experiencia nativa fluida",
                desc: "Experiencia móvil de alta calidad, similar a apps nativas.",
              },
              {
                icon: TrendingUp,
                title: "Escalabilidad empresarial",
                desc: "Listo para offline, gráficos y reportes complejos.",
              },
              {
                icon: Users,
                title: "Comunidad robusta",
                desc: "Ecosistema grande y soporte a largo plazo.",
              },
              {
                icon: Wrench,
                title: "Arquitectura sólida",
                desc: "Alineado con proyectos de largo ciclo de vida.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-brand/5 rounded-xl"
              >
                <div className="w-12 h-12 bg-brand rounded-xl grid place-items-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-ink mb-1">{item.title}</h4>
                  <p className="text-ink/80 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ink/5 p-6 rounded-2xl border border-ink/10">
          <h3 className="font-bold text-ink mb-2">Consideración adicional</h3>
          <p className="text-ink/80">
            <strong>Ionic</strong> podría considerarse para{" "}
            <strong>módulos internos simples</strong> o{" "}
            <strong>prototipos rápidos</strong> si el equipo ya domina stack
            web.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "🔜 Hoja de Ruta",
    subtitle: "Plan de implementación para IT Móvil 3.0",
    icon: ArrowRight,
    gradient: "from-brand to-brand",
    content: (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-brand mb-2">
            Próximos pasos para IT Móvil 3.0
          </h3>
          <p className="text-ink/80">
            Roadmap de implementación con React Native
          </p>
        </div>

        <div className="grid gap-6">
          {[
            {
              step: "1",
              title: "Prototipo MVP",
              description: "Pantallas clave del ERP de Oliver.",
              duration: "2-3 semanas",
              color: "black",
              tasks: [
                "Login y autenticación",
                "Dashboard principal",
                "Inventario básico",
              ],
            },
            {
              step: "2",
              title: "Validación técnica",
              description: "Performance, navegación e integración backend.",
              duration: "1-2 semanas",
              color: "ink",
              tasks: [
                "Tests de rendimiento",
                "Integración API",
                "Pruebas de navegación",
              ],
            },
            {
              step: "3",
              title: "Módulos nativos",
              description: "Push, cámara, acceso offline.",
              duration: "3-4 semanas",
              color: "brand",
              tasks: [
                "Notificaciones push",
                "Captura de documentos",
                "Sincronización offline",
              ],
            },
            {
              step: "4",
              title: "Arquitectura y CI/CD",
              description: "Arquitectura final y pipeline.",
              duration: "2-3 semanas",
              color: "ink",
              tasks: [
                "Arquitectura escalable",
                "Pipeline automatizado",
                "Testing automatizado",
              ],
            },
          ].map((item, index) => (
            <div key={item.step} className="group relative">
              <div className="bg-white p-6 rounded-2xl border border-ink/10 shadow hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-xl text-ink">
                        {item.title}
                      </h4>
                      <Badge className="bg-ink/5 text-ink font-medium">
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-ink/80 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tasks.map((task, taskIndex) => (
                        <span
                          key={taskIndex}
                          className="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm"
                        >
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < 3 && (
                <div className="flex justify-center mt-4">
                  <ArrowRight className="w-6 h-6 text-ink/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-brand/5 rounded-2xl border border-brand/20 text-ink">
          <h3 className="font-bold mb-2">Resultado esperado</h3>
          <p>
            <strong>Oliver</strong> contará con una app móvil robusta, escalable
            y de alto rendimiento que eleva la productividad y la experiencia de
            usuario empresarial.
          </p>
        </div>
      </div>
    ),
  },
];

export default function ITMovilEvaluation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 150);
  };

  const slide = slides[currentSlide];
  const IconComponent = slide.icon;
  const isFirst = currentSlide === 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[rgba(238,115,38,0.08)] via-white to-[rgba(48,56,65,0.06)]">
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Slide */}
          <div
            className={`transition-all duration-300 ${
              isAnimating
                ? "opacity-0 transform scale-95"
                : "opacity-100 transform scale-100"
            }`}
          >
            <Card
              className={`mb-8 overflow-hidden ${
                isFirst
                  ? "bg-transparent border-0 shadow-none"
                  : "shadow bg-white border border-ink/10"
              }`}
            >
              {!slide.headerHidden && (
                <CardHeader className="bg-white text-ink border-b border-ink/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-brand" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold">
                          {slide.title}
                        </CardTitle>
                        {slide.subtitle && (
                          <p className="text-ink/70 mt-1">{slide.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-ink/60 text-sm">Slide</div>
                      <div className="text-2xl font-bold text-ink">
                        {currentSlide + 1}/{slides.length}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              )}
              <CardContent className={isFirst ? "p-0" : "p-8"}>
                <div className={isFirst ? "" : "animate-fadeIn"}>
                  {slide.content}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final Summary */}
          {currentSlide === slides.length - 1 && (
            <div className="mt-8 p-8 bg-white rounded-2xl border border-ink/10 shadow animate-fadeIn">
              <div className="text-center">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-ink">
                    Decisión Final
                  </h3>
                </div>
                <p className="text-ink/80 text-lg max-w-4xl mx-auto">
                  <strong>React Native</strong> es la tecnología recomendada
                  para <strong>IT Móvil 3.0 de Oliver</strong> por su
                  rendimiento y escalabilidad.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
      <p className="flex items-center justify-center mt-5 gap-2 text-center text-gray-800 font-open-sans">
        Desarrollado por
        <span className="font-medium">💻 Tomás Rodeghiero.</span>
      </p>
    </div>
  );
}
