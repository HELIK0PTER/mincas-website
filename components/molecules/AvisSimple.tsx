import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const AvisSimples: React.FC = () => {
    const avaliacao = Math.floor(Math.random() * 2) + 4; // Gera uma avaliação aleatória entre 4 e 5
    const comentario1 = "Adoro os vinhos naturais da Minca! Uma explosão de sabores autênticos.";
    const comentario2 = "A Cantina Mincarone é uma descoberta incrível. Os vinhos são puros e cheios de personalidade."
    const comentario3 = "Experimentei o Pinot Noir da Minca e fiquei impressionado. Um vinho natural de excelência!"
    const comentarios = [comentario1, comentario2, comentario3];
    const avatars = ["av1.jpg", "av2.jpg", "av3.avif"];

    return (
        <div className="flex flex-col max-w-60 bg-secondary p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center mt-12 mb-2 w-full">
                <div className="w-20 h-auto bg-primary rounded-full mb-3 flex items-center justify-center">
                    <Image alt={`icone d'avatar`} src={`/avatars/${avatars[Math.floor(Math.random() * 3)]}`} width={200} height={200} className={`rounded-full`}/>
                </div>
                <div>
                    <p className="text-primary font-semibold">User Fulano</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={i < avaliacao ? "text-primary fill-primary" : "text-primary"}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-primary flex-1 flex flex-col justify-center text-sm text-center">&#34;{comentarios[Math.floor(Math.random() * 3)]}&#34;</p>
        </div>
    );
};

export default AvisSimples;