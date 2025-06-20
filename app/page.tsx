import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Brain,
  Heart,
  Leaf,
  MessageCircle,
  User,
  Instagram,
  Phone,
  Stethoscope,
  Home,
  Globe,
  GraduationCap,
  Users,
  Award,
} from "lucide-react"
// Import the BackgroundPattern component
import { BackgroundPattern } from "@/components/background-pattern"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/subtle-pattern.png')] bg-repeat">
      <header className="sticky top-0 z-40 w-full bg-custom-offWhite/95 backdrop-blur supports-[backdrop-filter]:bg-custom-offWhite/60">
        {/* Top Bar with Social Media */}
        <div className="border-b border-custom-sand/20 bg-custom-sand text-custom-offWhite">
          <div className="container flex h-10 items-center justify-end">
            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/5549991077291"
                target="_blank"
                className="flex items-center gap-1 text-xs hover:text-custom-offWhite transition-colors"
              >
                <Phone className="h-3 w-3" />
                WhatsApp
              </Link>
              <Link
                href="https://instagram.com/saudecompaixao"
                target="_blank"
                className="flex items-center gap-1 text-xs hover:text-custom-offWhite transition-colors"
              >
                <Instagram className="h-3 w-3" />
                @saudecompaixao
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Placeholder for Logo/Icon */}
            <div className="flex items-center gap-2">
              <Image
                src="/logoazuld.png"
                alt="Logo Dra. Geovana Paixão Tegon"
                width={180}
                height={48}
                className="object-contain h-72 w-full"
                priority
              />
            </div>
           
          </div>
          <nav className="hidden md:flex gap-6 mx-auto">
            <Link href="#home" className="text-sm font-medium hover:text-custom-sand transition-colors">
              Home
            </Link>
            <Link href="#tratamentos" className="text-sm font-medium hover:text-custom-sand transition-colors">
              Tratamentos
            </Link>
            <Link href="#diferenciais" className="text-sm font-medium hover:text-custom-sand transition-colors">
              Diferenciais
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-custom-sand transition-colors">
              Sobre
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-custom-sand transition-colors">
              Depoimentos
            </Link>
          </nav>
          <Button asChild variant="outline" className="hidden md:flex border-[#012840] text-[#012840] hover:bg-custom-sand hover:border-custom-sand hover:text-custom-offWhite font-bold">
            <Link href="https://wa.me/5549991077291" target="_blank">
            <MessageCircle className="mr-2 h-5 w-5" />
              AGENDAR CONSULTA
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-14 md:py-10 bg-white overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#d8ccae_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10"></div>
          <BackgroundPattern className="opacity-20" />
          <div className="container grid gap-8 md:grid-cols-2 items-center relative">
            <div className="space-y-4 md:space-y-6 z-10">
            
              <span className="block text-lg md:text-xl font-medium text-[#012840] mt-2">
                  CRM-RS 60715 | RQE 24411
                </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-custom-brown leading-tight">
                Dra. Geovana <br /> Paixão Tegon
              </h1>

              <p className="text-muted-foreground">
                Atendimento presencial em Taquara e Parobé – RS | Online para todo o Brasil
              </p>
              <p className="text-xl md:text-2xl font-medium text-[#012840]">
                Médica de Família com foco em <span className="text-[#012840] font-bold">Saúde Mental</span> e <span className="text-[#012840] font-bold">Cuidado Integral</span>
              </p>
             
              <Button asChild size="lg" className="bg-custom-sand hover:bg-custom-sand/90 text-custom-offWhite shadow-lg">
                <Link href="https://wa.me/5549991077291" target="_blank" className="uppercase font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                AGENDAR CONSULTA
                </Link>
              </Button>
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[600px] flex items-center justify-center mt-10 md:mt-0">
              <Image
                src="/2.png"
                alt="Dra. Geovana Paixão Tegon"
                fill
                className="object-contain object-right-bottom transform scale-125"
                priority
              />
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="tratamentos" className="py-16 md:py-24 relative bg-custom-offWhite">
          <BackgroundPattern className="opacity-20" />
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display">Saúde <span className="text-[#3c6eb5]">Mental</span>  e Cuidado <span className="text-[#3c6eb5]">Integral</span></h2>
              <p className="text-muted-foreground">
                A saúde mental é parte essencial do cuidado integral. Como médica de família e comunidade, a Dra.
                Geovana acolhe cada pessoa em sua totalidade — corpo, mente, histórico e contexto.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Ansiedade",
                  icon: <Brain className="h-10 w-10 text-custom-offWhite mx-auto" />,
                },
                {
                  title: "Depressão",
                  icon: <Heart className="h-10 w-10 text-custom-offWhite mx-auto" />,
                },
                {
                  title: "Insônia",
                  icon: <Leaf className="h-10 w-10 text-custom-offWhite mx-auto" />,
                },
                {
                  title: "Tabagismo",
                  icon: <Leaf className="h-10 w-10 text-custom-offWhite mx-auto" />,
                },
                {
                  title: "TOC",
                  icon: <Brain className="h-10 w-10 text-custom-offWhite mx-auto" />,
                },
                {
                  title: "Transtorno Afetivo Bipolar",
                  icon: <Heart className="h-10 w-10 text-custom-offWhite mx-auto" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group "
                >
                  <CardContent
                    className={`flex flex-col items-center justify-center p-6 text-center h-full ${index % 2 === 0 ? 'bg-custom-sand' : 'bg-[#3c6eb5]'}  text-custom-offWhite relative`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {item.icon}
                      <h3 className="mt-4 font-semibold text-sm md:text-base font-display">{item.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6 max-w-3xl mx-auto mt-12 p-8 bg-custom-offWhite shadow-sm border border-custom-sand/20">
              <h3 className="text-2xl font-bold font-display text-center text-[#012840]">Atendimento Clínico Geral</h3>
              <p className="text-muted-foreground">Dra. Geovana também atua como médica de família, oferecendo:</p>
              <ul className="space-y-2 list-disc pl-6 text-muted-foreground">
                <li>Acompanhamento de doenças crônicas (diabetes, hipertensão, obesidade, tireoide).</li>
                <li>Consultas de rotina para crianças (puericultura), adultos e idosos.</li>
                <li>Solicitação de exames e orientações preventivas.</li>
                <li>Atenção integral à saúde da mulher e do homem.</li>
              </ul>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="bg-custom-sand hover:bg-custom-sand/90 text-custom-offWhite">
                  <Link href="https://wa.me/5549991077291" target="_blank" className="uppercase font-bold">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    AGENDAR CONSULTA
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section id="diferenciais" className="relative py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: "url('/bannerbranco.png')" }}>
          <div className="absolute inset-0 bg-custom-offWhite opacity-70"></div> {/* Overlay para manter legibilidade */}
          <div className="container space-y-12 relative z-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display">Por que escolher a <span className="text-custom-sand">Dra. Geovana</span></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Visão Integral",
                  description:
                    "Avalio não apenas a saúde mental, mas todo o contexto do paciente — exames, histórico clínico e hábitos de vida.",
                  icon: <Stethoscope className="h-8 w-8 text-[#012840]" />,
                },
                {
                  title: "Médica de Família",
                  description:
                    "Atendimento completo para todas as idades, desde consultas pediátricas até acompanhamento geriátrico.",
                  icon: <Users className="h-8 w-8 text-[#012840]" />,
                },
                {
                  title: "Consultas online",
                  description: "Atendimento para todo o Brasil",
                  icon: <Globe className="h-8 w-8 text-[#012840]" />,
                },
                {
                  title: "Atendimento domiciliar",
                  description: "Para pacientes com mobilidade reduzida",
                  icon: <Home className="h-8 w-8 text-[#012840]" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-custom-offWhite/90 border border-custom-sand/100 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group rounded-tr-2xl rounded-br-2xl"
                >
                  <div className="flex items-center mx-auto justify-center w-16 h-16 bg-custom-sand/10 mb-4 group-hover:bg-custom-sand/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium font-display text-custom-sand mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: "Formação especializada",
                  description: "Medicina de Família e Comunidade",
                  icon: <GraduationCap className="h-8 w-8 text-[#012840]" />,
                },
                {
                  title: "Ambiente acolhedor",
                  description: "Atendimento humanizado e personalizado",
                  icon: <Heart className="h-8 w-8 text-[#012840]" />,
                },
                {
                  title: "Atualização constante",
                  description: "Em psiquiatria e saúde mental",
                  icon: <Award className="h-8 w-8 text-[#012840]" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-custom-offWhite/90 border border-custom-sand/100 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group rounded-tr-2xl rounded-br-2xl"
                >
                  <div className="flex items-center mx-auto justify-center w-16 h-16 bg-custom-sand/10 mb-4 group-hover:bg-custom-sand/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium font-display text-custom-sand mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="bg-custom-sand hover:bg-custom-sand/90 text-custom-offWhite">
                <Link href="https://wa.me/5549991077291" target="_blank" className="uppercase font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  AGENDAR CONSULTA
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24 relative bg-custom-offWhite">
          <BackgroundPattern className="opacity-20" />
          <div className="container">
            <div className="max-w-8xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-full md:w-1/2 aspect-square overflow-hidden flex items-center justify-center">
                  <Image
                    src="/geovana4.png"
                    alt="Dra. Geovana Paixão Tegon"
                    fill
                    className="object-cover rounded-b-3xl"
                  />
                </div>

                <div className="space-y-6 md:w-1/2">
                  <div className="space-y-4 mb-6">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-custom-sand/20 rounded-xl">
                      <User className="h-5 w-5 text-[#012840] mr-2" />
                      <span className="text-[#012840] font-medium">Sobre Mim</span>
                    </div>
                    <h2 className="text-3xl font-bold font-display">Conheça a <span className="text-[#012840]">Dra. Geovana Paixão Tegon</span></h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Médica formada pela <span className="text-[#012840] font-bold">Universidade Federal Fluminense</span>, com residência em Medicina de Família e
                    Comunidade e pós-graduação em <span className="text-[#012840] font-bold">Psiquiatria</span> pelo Hospital Israelita Albert Einstein.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Minha formação em <span className="text-[#012840] font-bold">Medicina de Família e Comunidade</span> me permite cuidar de você e sua família em todas as fases da vida.
                  </p>

                  <blockquote className="border-l-4 border-custom-sand pl-4 italic bg-custom-sand/5 p-4">
                    "Minha missão é cuidar do ser humano por inteiro: corpo, mente e história de vida."
                  </blockquote>

                  <div className="pt-4">
                    <Button asChild className="bg-custom-sand hover:bg-custom-sand/90 text-custom-offWhite">
                      <Link href="https://wa.me/5549991077291" target="_blank" className="uppercase font-bold">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      AGENDAR CONSULTA
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="relative py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: "url('/bannerbranco.png')" }}>
          <div className="absolute inset-0 bg-custom-offWhite opacity-70"></div> {/* Overlay para manter legibilidade */}
          <div className="container space-y-12 relative z-10">
            <h2 className="text-3xl font-bold font-display text-center text-[#012840]">O que dizem meus pacientes</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { text: "A Dra. Geovana é incrível, me senti acolhida desde a primeira consulta.", author: "Maria S." },
                { text: "Abordagem humanizada que me ajudou a entender minhas emoções.", author: "João P." },
                { text: "Médica da família que acompanha todas as fases da vida.", author: "Ana C." },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-custom-offWhite/90 border border-custom-sand/20 shadow-md rounded-tr-2xl rounded-br-2xl">
                  <CardContent className="p-6 space-y-4">
                    <p className="italic text-muted-foreground">{testimonial.text}</p>
                    <p className="font-medium text-custom-sand">{testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild size="lg" className="bg-custom-sand hover:bg-custom-sand/90 text-custom-offWhite">
                <Link href="https://wa.me/5549991077291" target="_blank" className="uppercase font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  AGENDAR CONSULTA
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 relative bg-custom-offWhite">
          <BackgroundPattern className="opacity-20" />
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold font-display text-center">Perguntas e Respostas</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Como funciona o atendimento online?</AccordionTrigger>
                  <AccordionContent>
                    As consultas são realizadas por plataformas seguras, com a mesma qualidade do presencial.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quais os valores das consultas?</AccordionTrigger>
                  <AccordionContent>Presencial: R$ 330 | Online: R$ 240 | Domiciliar: R$ 400.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>A Dra. Geovana atende por plano de saúde?</AccordionTrigger>
                  <AccordionContent>Visando a um melhor atendimento e visto que as consultas têm duração de 40 min a 1 hora, a Dra. Geovana não atende pelo plano.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Quanto tempo dura cada consulta?</AccordionTrigger>
                  <AccordionContent>
                    As consultas têm duração de 40 minutos a 1 hora, permitindo um atendimento mais completo e personalizado.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex justify-center pt-6">
                <Button asChild size="lg" className="bg-[#012840] hover:bg-[#012840]/90">
                  <Link href="https://wa.me/5549991077291" target="_blank" className="uppercase font-bold">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    AGENDAR CONSULTA
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-custom-sand/20 bg-custom-brown relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#d8ccae_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="flex justify-start items-start">
              <Image
                src="/logobranca.png"
                alt="Geovana"
                width={260}
                height={80}
                className="object-contain h-auto"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium font-display mb-4 text-white">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-white" />
                  <Link
                    href="https://wa.me/5549991077291"
                    target="_blank"
                    className="text-sm text-white hover:text-custom-sand transition-colors"
                  >
                    WhatsApp
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-white" />
                  <Link
                    href="https://instagram.com/saudecompaixao"
                    target="_blank"
                    className="text-sm text-white hover:text-custom-sand transition-colors"
                  >
                    @saudecompaixao
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium font-display mb-4 text-white">Links Rápidos</h3>
              <div className="grid grid-cols-1 gap-2">
                <Link href="#home" className="text-sm text-white hover:text-custom-sand transition-colors">
                  Home
                </Link>
                <Link href="#tratamentos" className="text-sm text-white hover:text-custom-sand transition-colors">
                  Tratamentos
                </Link>
                <Link href="#sobre" className="text-sm text-white hover:text-custom-sand transition-colors">
                  Sobre
                </Link>
                <Link href="#depoimentos" className="text-sm text-white hover:text-custom-sand transition-colors">
                  Depoimentos
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium font-display mb-4 text-white">Desenvolvido por</h3>
              <div className="flex justify-start">
                <Image
                    src="/logo02.png"
                    alt="HW"
                    width={200}
                    height={60}
                    className="object-contain"
                  />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-custom-sand/20 text-center text-sm text-white">
            <p>&copy; {new Date().getFullYear()} Dra. Geovana Paixão Tegon. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
