import MainPageCarousel from "@/components/molecules/MainPageCarousel";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import PopularWines from "@/components/molecules/PopularWines";
import Link from "next/link";

import Section from "@/components/templates/Section";
import { MainPageEvents } from "@/components/molecules/EventsList";

export default function Home() {
  return (
    <main>
      <Section id={`presentation`}>
        <div
          className={`flex flex-col gap-4 px-20 pb-10 text-center w-full text-primary`}
        >
          <h1 className={`flex justify-center text-6xl md:text-8xl`}>
            <p
              className={`bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-200 `}
            >
              Minca
            </p>
          </h1>
          <p className={`text-3xl md:text-6xl`}>Vinhos Naturais</p>
        </div>
        <div
          className={`flex flex-col lg:flex-row gap-20 justify-center items-center`}
        >
          <div
            className={`flex flex-col justify-between items-center w-[350px] md:w-[400px] h-[350px] md:h-[380px]`}
          >
            <div
              className={`
            flex flex-col items-center justify-between
            w-full h-full bg-[#F6E9D9] rounded-xl shadow-[inset_0_2px_5px_1px_rgba(0,0,0,5)] p-5`}
            >
              <Image
                priority={true}
                alt={`Mincas`}
                src={`/Logo2.png`}
                width={200}
                height={200}
                className={`w-[60%] h-auto`}
              />
              <div
                className={`flex flex-col items-center gap-5
                font-medium text-lg`}
              >
                <p className={`text-center`}>
                  Descubra nossa paixão pelos vinhos naturais.
                </p>
                <p className={`text-center`}>
                  Biodynamicos, respeitosos da natureza e uma textura unica !
                </p>
              </div>
              <div className={`grid grid-cols-2 gap-5`}>
                <Link href={`/wines`}>
                  <Button>Nossos Vinhos</Button>
                </Link>
                <Link href={`/about`}>
                  <Button>Sobre Nos</Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`xl:row-start-1 flex justify-center items-center w-[350px] md:w-[400px] h-[350px] md:h-[380px]`}
          >
            <MainPageCarousel />
          </div>
        </div>
      </Section>
      <Section bgColor={`primary`} id={`wines`}>
        <div
          className={`py-16 gap-8 flex flex-col items-center justify-center`}
        >
          <PopularWines />
          <Link href={`/wines`}>
            <Button>Ver Mais</Button>
          </Link>
        </div>
      </Section>
      <Section id={`about`}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-8">
            Sobre Vinhos Naturais
          </h2>
          <div className="grid md:grid-cols-3 items-center gap-8 p-3 rounded-lg relative">
            <div className="col-span-2">
              <p className="">
                Vinhos naturais são produzidos com{" "}
                <span className="font-semibold text-primary">
                  mínima intervenção
                </span>
                , do cultivo das uvas ao engarrafamento, priorizando{" "}
                <span className="text-primary">
                  práticas sustentáveis e orgânicas
                </span>
                .
              </p>
              <br />
              <p className="font-bold text-lg">
                Na{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-400">
                  Minca
                </span>
                , nossos vinhos naturais são:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-pretty">
                <li className="">
                  Feitos com{" "}
                  <span className="text-primary underline">
                    uvas cultivadas organicamente
                  </span>
                  , sem químicos sintéticos
                </li>
                <li className="">
                  Fermentados com{" "}
                  <span className="text-primary underline">
                    leveduras naturais
                  </span>
                </li>
                <li className="">
                  <span className="bg-clip-text text-transparent bg-primary">
                    Livres de aditivos
                  </span>{" "}
                  e conservantes artificiais
                </li>
                <li className="">
                  Não filtrados, preservando{" "}
                  <span className="text-primary">sabores e nutrientes</span>
                </li>
              </ul>
              <br />
              <p className="font-bold text-lg">
                Escolher os vinhos naturais da{" "}
                <span className="bg-clip-text text-transparent bg-primary">
                  Minca
                </span>{" "}
                é experimentar algo único e apoiar uma vinicultura{" "}
                <span className="text-primary">ecologicamente responsável</span>
                .
              </p>
            </div>
            <div className={`hidden z-10 md:block relative`}>
              <Image
                src="/Image5.jpg"
                alt="Vinhos Naturais"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </Section>
      {/*
        <Section bgColor={`primary`} id={`comments`}>
          <div className="flex flex-1 w-full">
            <div className="px-24 flex-1 flex justify-around gap-4">
              <AvisSimple/>
              <AvisSimple/>
              <AvisSimple/>
            </div>
          </div>
        </Section>
      */}

      <Section bgColor={`primary`} id={`events`}>
        <h2 className="text-3xl font-bold mb-8 md:pl-6 w-full flex justify-center">
          Nossos Vinhos Especiais
        </h2>
        <>Special wines</>
      </Section>

      <Section id={`events`}>
        <h2 className="text-3xl text-primary text-center md:text-left font-bold mb-8 md:pl-6 w-full">
          Próximos Eventos
        </h2>
        <div className="xl:flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 gap-5 px-6">
          <MainPageEvents />
        </div>
      </Section>
    </main>
  );
}
