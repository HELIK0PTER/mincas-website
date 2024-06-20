import Background from "@/components/organisms/Background";

import MainPageCarousel from "@/components/molecules/MainPageCarousel";

import Image from 'next/image'
import {Button} from "@/components/ui/button";
import Sidebar from "@/components/organisms/Sidebar";
import Footer from "@/components/organisms/Footer";
import React from "react";
import PopularWines from "@/components/molecules/PopularWines";

export default function Home() {

  return (
    <div className={`flex flex-grow`}>
      <div className={`w-72`}>
        <Sidebar/>
      </div>
      <div className={`flex flex-1 flex-col justify-between`}>
          <main className={`flex flex-col justify-start`}>
            <Section id={`presentation`}>
              <div
                className={`px-20 pb-10 text-center text-7xl w-full`}
              >
                <h1 className={``}>Minca</h1>
                <p className={``}>Vinhos Naturais</p>
              </div>
              <div className={`flex flex-col xl:flex-row gap-20 justify-center`}>
                <div
                  className={`flex flex-col justify-between items-center w-[350px] md:w-[400px] h-[350px] md:h-[380px]`}
                >
                  <div
                    className={`
                  flex flex-col items-center justify-between
                  w-full h-full bg-[#F6E9D9] rounded-xl shadow-[inset_0_2px_5px_1px_rgba(0,0,0,5)] p-5`}>
                    <Image alt={`Mincas`} src={`/Logo2.png`} width={200} height={200} className={`w-[60%] h-auto`}/>
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
                <Button>
                  Ver Mais
                </Button>
              </div>
            </Section>
            <Section id={`about`}>
              <p>Caio Ana</p><p>Caio Ana</p><p>Caio Ana</p><p>Caio Ana</p><p>Caio Ana</p><p>Caio Ana</p>
            </Section>
          </main>
        <Footer/>
      </div>
    </div>
  );
}

const Section = (
  {
    children,
    bgColor = "none",
    ...props
  }: {
    children: React.ReactNode,
    bgColor?: "none" | "primary" | "secondary" | "background" | undefined,
    id?: string
  }
) => {

  return (
    <section id={props.id} className={`py-6 min-h-[50vh]`}>
      <Background color={bgColor}>
        {children}
      </Background>
    </section>
  );
}