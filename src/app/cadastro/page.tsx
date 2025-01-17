"use client"

import Link from "next/link";
import { useState } from "react";

export default function Cadastro(){
    const [nome, setNome] = useState("")

    return(
        <div className="flex flex-col gap-3 items-center justify-center h-screen">
            <h1>Cadastro</h1>
            
            <input 
                type="text"
                placeholder="digite seu nome"
                className="text-black p-2 rounded-md" 
                onChange={ e => setNome(e.target.value) } value={nome}
            />
            
            <p> {nome} </p>
            
            <Link href="/">
                <button className="bg-red-600 p-2 rounded-md px-10 animate-pulse">Voltar</button>
            </Link>
        </div>
    )
}