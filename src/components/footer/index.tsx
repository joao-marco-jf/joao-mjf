import Link from "next/link";
import { FaFigma, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="flex flex-col md:flex-row px-4 lg:px-40 2xl:px-80 justify-between items-center gap-2 py-8 text-zinc-800">
            <div className="flex gap-4 ">
                <Link target="_blank" href={"https://www.linkedin.com/in/joão-marcos-jensen-francisco"}><FaLinkedin size={24}/></Link>
                <Link target="_blank" href={"https://wa.me/5542998230563"}><FaWhatsapp size={24}/></Link>
                <Link target="_blank" href={"https://www.instagram.com/joao.mjf/"}><FaInstagram size={24}/></Link>
                <Link target="_blank" href={"https://www.figma.com/@joao_mjf"}><FaFigma size={24}/></Link>
                <Link target="_blank" href={"https://github.com/joao-marco-jf"}><FaGithub size={24}/></Link>
            </div>
            <div className="tracking-tighter">Todos os direitos reservados © 2024</div>
        </footer>
    )
}