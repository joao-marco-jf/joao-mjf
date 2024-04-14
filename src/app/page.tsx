import Form from "@/components/form";
import { Bot, DraftingCompass, Globe, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col px-4 lg:px-40 2xl:px-80 tracking-tighter gap-48">
      <section id="hero" className="flex flex-col gap-4 justify-center md:items-center h-screen">
        <h1 className="md:text-center text-6xl md:text-7xl font-extrabold tracking-tighter">Construindo aplicações para aprimorar seus resultados.</h1>
        <p className="md:text-center md:w-2/3 text-lg md:text-xl text-zinc-500">Supere sua concorrência e destaque-se no seu ramo de mercado com aplicações desenvolvidas especificamente para o seu negócio.</p>
        <div className="flex gap-2">
          <Link href={"#contact"} className="p-[.6rem] px-[2rem] bg-blue-600 shadow text-white text-lg w-fit rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">Enviar mensagem</Link>
          <button className="p-[.6rem] px-[2rem] border shadow text-lg font-semibold w-fit rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">Ver mais</button>
        </div>
      </section>
      <section id="services" className="columns-1 md:columns-2 space-y-4">
        <h2 className="text-6xl md:text-7xl font-extrabold tracking-tighter">Serviços oferecidos</h2>
        <div className="flex flex-col gap-2 p-4 border shadow rounded-md">
          <h3 className="flex gap-2 text-2xl font-bold"><DraftingCompass strokeWidth={2} size={28}/> UX/UI Design</h3>
          <p className="text-xl text-zinc-500">Serviço voltado para aprimoramento e construção de marca nas redes. Trabalho diretamente com você para criar designs de alta qualidade que cativem seu público-alvo e fortaleçam a presença online da sua empresa.</p>
        </div>
        <div className="flex flex-col gap-2 p-4 border shadow rounded-md">
          <h3 className="flex gap-2 text-2xl font-bold"><Globe strokeWidth={2} size={28}/> Aplicações Web</h3>
          <p className="text-xl text-zinc-500">Desenvolvimento de aplicações Web para os mais variados contextos de uso. Crio soluções web intuitivas e eficazes, personalizadas para atender às suas necessidades específicas e impulsionar o sucesso do seu negócio.</p>
        </div>
        <div className="flex flex-col gap-2 p-4 border shadow rounded-md">
          <h3 className="flex gap-2 text-2xl font-bold"><Bot strokeWidth={2} size={28}/> Automações</h3>
          <p className="text-xl text-zinc-500">Automações para processos internos do seu negócio. Desenvolvo sistemas automatizados que simplificam tarefas complexas, permitindo que você e sua equipe se concentrem no que é mais importante para o crescimento da empresa.</p>
        </div>
        <div className="flex flex-col gap-2 p-4 border shadow rounded-md">
          <h3 className="flex gap-2 text-2xl font-bold"><Smartphone strokeWidth={2} size={28}/> Aplicações mobile</h3>
          <p className="text-xl text-zinc-500">Aplicações mobile para os mais variádos cenários do seu negócio. Crio aplicativos móveis sob medida que oferecem uma experiência excepcional aos usuários, ajudando a impulsionar o engajamento e a fidelidade dos clientes.</p>
        </div>
      </section>
      <section id="contact" className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter">Vamos construir uma aplicação juntos?</h2>
          <p className="text-xl text-zinc-500">Vamos trabalhar juntos para criar uma aplicação que destacará seu negócio perante ao seus concorrentes. Preencha o furmulário e me envie um e-mail, ou se preferir, entre em contato comigo pelo Whatsapp.</p>
        </div>
        <Form />
      </section>
    </main>
  );
}
