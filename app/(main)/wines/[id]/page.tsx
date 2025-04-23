import React from "react";

import Background from "@/components/organisms/Background";
import { createClient } from "@/utils/supabase/client";
import { price } from "@/utils/functions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

async function getWine(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase.from("wines").select("*").eq("id", id);
  if (error) throw error;

  if (data && data.length > 0) {
    const wine = data[0];
    return (
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 w-full max-w-6xl mx-auto bg-card border-t-2 border-primary-50 sm:border-t-0 sm:rounded-xl shadow-lg p-4 md:p-8">
        <div className="flex-1 flex justify-center items-center rounded-xl p-4 md:p-8">
          <Image
            alt={wine.name}
            src={wine.image_url}
            width={400}
            height={600}
            className="object-contain max-h-[400px] md:max-h-[500px] w-auto rounded-md"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 md:gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              {wine.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {wine.vintage}
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Descrição</CardTitle>
              </CardHeader>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <p>
                  {wine.description ||
                    "Um vinho excepcional com notas delicadas e um buquê aromático único."}
                </p>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detalhes</CardTitle>
              </CardHeader>
              <div className="px-4 md:px-6 pb-4 md:pb-6 grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Região</p>
                  <p>{wine.region || "Não especificado"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Uva</p>
                  <p>{wine.grape || "Não especificado"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Álcool</p>
                  <p>
                    {wine.alcohol ? `${wine.alcohol}%` : "Não especificado"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Volume</p>
                  <p>{wine.volume || "750ml"}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex items-center gap-4">
              {wine.price_reduction > 0 ? (
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="line-through text-muted-foreground text-lg">
                    {price(wine.price)}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {price(wine.price * (1 - wine.price_reduction / 100))}
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-sm font-medium">
                    -{wine.price_reduction}%
                  </span>
                </div>
              ) : (
                <span className="text-2xl md:text-3xl font-bold">
                  {price(wine.price)}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3 md:gap-4 pb-4">
              <Button size="lg" className="w-full">
                Adicionar ao carrinho
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Comprar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  <div className="text-center py-10">Vinho não encontrado</div>;
}

export default async function Page({ params }: { params: { id: string } }) {
  const wine = await getWine(params.id);
  return (
    <Background>
      <div className="absolute top-[30px] sm:top-4 left-4 z-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wines">Catálogo</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Vinho</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="py-10 sm:py-16 sm:px-4 md:px-6 lg:px-8">{wine}</div>
    </Background>
  );
}
