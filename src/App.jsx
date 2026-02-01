import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
  FaTools,
  FaGraduationCap,
  FaCode,
  FaGlobe,
  FaFileExcel,
  FaTerminal,
  FaGithub,
  FaComments,
  FaJava,
  FaPhp,
  FaBolt,
} from "react-icons/fa";
import { SiFlutter, SiPython } from "react-icons/si";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const year = useMemo(() => new Date().getFullYear(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:hugopbruu@gmail.com?subject=Mensagem%20do%20Site&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailto;
    setMessage("");
    setChatOpen(false);
  };

  // ✅ Scroll mais lento e suave
  const scrollToContato = () => {
    const target = document.getElementById("contato");
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 40; // offset do topo
    const distance = targetY - startY;

    const duration = 1100; // 👈 mais alto = mais devagar (ms)
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (elapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-10 space-y-16 relative"
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      {/* CONTAINER GLOBAL */}
      <div className="mx-auto w-full max-w-6xl space-y-16">
        {/* HERO / HEADER */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -top-28 -left-24 h-56 w-56 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-56 w-56 rounded-full bg-purple-600/15 blur-3xl" />

          <motion.header
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex flex-col gap-5">
              <div className="mx-auto md:mx-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 w-fit">
                <FaBolt className="text-blue-400" />
                Disponível para projetos remotos
              </div>

              <div className="text-center md:text-left space-y-3">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
                  style={{ fontFamily: "Poppins, Inter, system-ui, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                    Hugo Henrique
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300">
                  Desenvolvedor • Automação • Tecnologia
                </p>

                <p className="max-w-2xl text-gray-400 leading-relaxed mx-auto md:mx-0">
                  Eu crio soluções práticas com foco em resultado: automações, sites,
                  apps e organização de dados. Rápido para aprender, organizado e
                  direto ao ponto.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center md:justify-start">
                {/* 👇 Scroll suave (lento) até contato */}
                <button
                  type="button"
                  onClick={scrollToContato}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-gray-100 transition"
                >
                  <FaEnvelope />
                  Falar comigo
                </button>

                <a
                  href="https://github.com/hugopbruu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  <FaGithub />
                  Ver GitHub
                </a>
              </div>
            </div>
          </motion.header>
        </section>

        {/* SEÇÕES */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16">
          <AnimatedSection icon={<FaGlobe />} title="Objetivo Profissional">
            <p className="text-gray-300">
              Atuar de forma remota na área de tecnologia, aplicando conhecimentos em
              programação, automação, desenvolvimento de aplicativos, sites e
              organização de dados, contribuindo para soluções eficientes e
              inovadoras.
            </p>
          </AnimatedSection>

          <AnimatedSection icon={<FaGraduationCap />} title="Formação e Cursos">
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Ensino Médio Completo</li>
              <li>Informática Básica</li>
              <li>Programação Básica e Avançada – Alura (Online)</li>
              <li>Gestão e Organização de Arquivos</li>
              <li>Conhecimento Avançado em Microsoft Excel e Pacote Office</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection icon={<FaTools />} title="Experiência Profissional">
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Automação com Python para otimização de tarefas</li>
              <li>Apps mobile com Flutter</li>
              <li>Criação de sites e aplicações web</li>
              <li>Criação de aplicativos multiplataforma</li>
              <li>Correção de bugs e manutenção de sistemas</li>
              <li>Tratamento de dados com Excel</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection icon={<FaCode />} title="Habilidades Técnicas">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
              <li className="flex items-center gap-2">
                <SiPython /> Python – Automação
              </li>
              <li className="flex items-center gap-2">
                <SiFlutter /> Flutter & Dart
              </li>
              <li className="flex items-center gap-2">
                <FaLaptopCode /> Web & Sites
              </li>
              <li className="flex items-center gap-2">
                <FaPhp /> PHP – Backend
              </li>
              <li className="flex items-center gap-2">
                <FaJava /> Java – OO
              </li>
              <li className="flex items-center gap-2">
                <FaFileExcel /> Excel Avançado
              </li>
              <li className="flex items-center gap-2">
                <FaCode /> Lógica
              </li>
              <li className="flex items-center gap-2">
                <FaTerminal /> VS Code
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection icon={<FaLaptopCode />} title="Competências">
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Trabalho remoto</li>
              <li>Aprendizado rápido</li>
              <li>Boa comunicação</li>
              <li>Organização e foco</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection icon={<FaGlobe />} title="Idiomas">
            <p className="text-gray-300">
              Português – Nativo | Inglês – Básico/Intermediário
            </p>
          </AnimatedSection>
        </section>

        <AnimatedSection icon={<FaGithub />} title="Projetos no GitHub">
          <a
            href="https://github.com/hugopbruu"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gray-800 px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Visitar meu GitHub
          </a>
        </AnimatedSection>

        {/* CONTATO (alvo do scroll) */}
        <section id="contato">
          <AnimatedSection icon={<FaPhone />} title="Contato">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaPhone className="text-green-400" />
                <a href="tel:+554499378366" className="hover:text-white transition">
                  +55 44 9937-8366
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-400" />
                <a
                  href="mailto:hugopbruu@gmail.com"
                  className="hover:text-white transition"
                >
                  hugopbruu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="text-pink-500" />
                <a
                  href="https://instagram.com/hugo__henrrique"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  @hugo__henrrique
                </a>
              </li>
            </ul>
          </AnimatedSection>
        </section>

        <footer className="pt-10 text-center text-gray-600 text-sm">
          © {year} Hugo Henrique. Todos os direitos reservados.
        </footer>
      </div>

      {/* BOTÃO CHAT */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Abrir chat"
      >
        <FaComments className="text-xl" />
      </button>

      {/* CHAT */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-sm bg-white text-black rounded-2xl shadow-2xl p-4 z-50"
          >
            <button
              onClick={() => setChatOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg"
              aria-label="Fechar chat"
            >
              ×
            </button>

            <h3 className="font-semibold mb-2">Enviar mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-2">
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function AnimatedSection({ icon, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 text-xl font-bold">
        {icon} <h2>{title}</h2>
      </div>
      <div className="ml-6 border-l border-gray-700 pl-4">{children}</div>
    </motion.section>
  );
}
