"use client"
import axios from "axios";
import Link from "next/link";
import { useState } from "react"

import { FaWhatsapp } from "react-icons/fa";

export default function Form(){
    const [fullname, setFullname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [required, setRequired] = useState<boolean>(false)

    const handleMail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(fullname == "" || email == "" || message == ""){
          setRequired(true);
          return;
        }

        axios("/api/send/mail", {method: "POST", data: {
            fullname,
            email,
            subject: "Requisição de serviços de desenvolvimento",
            message
        }})
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }

    return(
        <form onSubmit={handleMail} className="flex w-full flex-col gap-4">
          <Link target="_blank" href={"https://wa.me/5542998230563"} className="flex justify-center items-center gap-1 p-[.6rem] px-[2rem] border shadow text-green-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-500 font-medium text-lg rounded-md"><FaWhatsapp /> Whatsapp</Link>
          <div className="flex items-center gap-4">
            <div className="w-full border-t"></div>
            <p className="text-center">ou</p>
            <div className="w-full border-t"></div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome</label>
            <input required={required} className="p-[.6rem] shadow border rounded-md outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 required:invalid:outline-red-600" onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" id="name" aria-label="name" placeholder="John Smith"/>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input required={required} className="p-[.6rem] shadow border rounded-md outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 required:invalid:outline-red-600" onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" aria-label="email" placeholder="exemplo@email.com"/>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="body">Mensagem</label>
            <textarea required={required} className=" h-60 resize-none p-[.6rem] shadow border rounded-md outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 required:invalid:outline-red-600" onChange={(e) => setMessage(e.target.value)} value={message} id="body" aria-label="body" placeholder="Conte-me um pouco mais sobre suas ideias e sua empresa aqui"/>
          </div>

          <input className="p-[.6rem] px-[2rem] bg-blue-600 shadow text-white text-lg rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600" type="submit" value="Enviar" />
        </form>
    )
}