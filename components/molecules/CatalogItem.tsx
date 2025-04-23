"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { addToCart } from "@/app/(main)/wines/actions";

interface WineCatalogItemProps {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

const WineCatalogItem: React.FC<WineCatalogItemProps> = ({
  id,
  name,
  price,
  image_url,
}) => {
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(parseInt(id));
    // the cart badge on the sidebar has now to be updated
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Check if the click was on the card itself and not on a child element
    if (e.target === e.currentTarget || e.target instanceof HTMLImageElement) {
      router.push(`/wines/${id}`);
    }
  };

  return (
    <Card
      className="w-full rounded-none max-w-xs mx-auto overflow-hidden bg-secondary text-secondary-foreground hover:bg-opacity-50 hover:cursor-pointer hover:scale-[100.5%] hover:shadow-md transition-all duration-100 ease-in-out"
      onClick={handleCardClick}
    >
      <div className="relative aspect-[2/3]">
        <Image
          src={image_url}
          alt={name}
          fill
          sizes="99%"
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className={`font-bold`}>{name}</div>
        <div>R$ {price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className={`justify-center`}>
        <Button
          className="bg-primary hover:bg-[#394d50] text-primary-foreground"
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WineCatalogItem;
