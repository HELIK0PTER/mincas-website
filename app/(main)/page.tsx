import MainPageCarousel from "@/components/molecules/MainPageCarousel";

import Image from 'next/image'
import {Button} from "@/components/ui/button";
import React from "react";
import PopularWines from "@/components/molecules/PopularWines";
import Link from "next/link";

import Section from "@/components/templates/Section";

export default function Home() {

  return (
    <main>
      <Section id={`presentation`}>
        <div
          className={`px-20 pb-10 text-center text-7xl w-full`}
        >
          <h1>Minca</h1>
          <p>Vinhos Naturais</p>
        </div>
        <div className={`flex flex-col xl:flex-row gap-20 justify-center items-center`}>
          <div
            className={`flex flex-col justify-between items-center w-[350px] md:w-[400px] h-[350px] md:h-[380px]`}
          >
            <div
              className={`
            flex flex-col items-center justify-between
            w-full h-full bg-[#F6E9D9] rounded-xl shadow-[inset_0_2px_5px_1px_rgba(0,0,0,5)] p-5`}>
              <Image priority={true} alt={`Mincas`} src={`/Logo2.png`} width={200} height={200} className={`w-[60%] h-auto`}/>
              <div
                className={`flex flex-col items-center gap-5 
                font-medium text-lg`}
              >
                <p className={`text-center`}>
                  Descobra nossa paixão para os vinhos naturais.
                </p>
                <p className={`text-center`}>
                  Biodynamicos, respeituosos da natureza e uma textura unica !
                </p>
              </div>
              <div className={`grid grid-cols-2 gap-5`}>
                <Button>Nossos Vinhos</Button>
                <Button>Sobre Nos</Button>
              </div>
            </div>
          </div>
          <div
            className={`xl:row-start-1 flex justify-center items-center w-[350px] md:w-[400px] h-[350px] md:h-[380px]`}>
            <MainPageCarousel/>
          </div>
        </div>
      </Section>
      <Section bgColor={`primary`} id={`wines`}>
        <div
          className={`py-16 gap-8 flex flex-col items-center justify-center`}
        >
          <PopularWines/>
          <Link href={`/wines`}>
            <Button>
              Ver Mais
            </Button>
          </Link>
        </div>
      </Section>
      <Section id={`about`}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-8">Sobre Vinhos Naturais</h2>
          <div className="grid grid-cols-3 items-center gap-5">
            <div className="col-span-2">
              <p>
                Vinhos naturais são produzidos com mínima intervenção, desde o cultivo das uvas até o engarrafamento. 
                Eles representam uma abordagem pura e autêntica à vinificação, priorizando práticas sustentáveis e orgânicas.
              </p>
              <p>
                Na Minca, nossos vinhos naturais são:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Feitos com uvas cultivadas organicamente, sem pesticidas ou herbicidas sintéticos</li>
                <li>Fermentados com leveduras nativas presentes naturalmente nas uvas</li>
                <li>Livres de aditivos ou conservantes artificiais</li>
                <li>Minimamente filtrados ou não filtrados, preservando sabores e nutrientes</li>
                <li>Uma expressão verdadeira do terroir e da safra</li>
              </ul>
              <p>
                Ao escolher vinhos naturais Minca, você está optando por uma experiência de degustação única e apoiando 
                práticas vinícolas ecologicamente responsáveis.
              </p>
            </div>
            <Image
              src="/image5.jpg"
              alt="Vinhos Naturais"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </Section>
      <Section bgColor={`primary`} id={`responses`}>
        <div className="flex">
          Avis
        </div>
      </Section>
    </main>
  );
}