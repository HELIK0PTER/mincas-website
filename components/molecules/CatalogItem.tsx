"use client"

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
    const [quantity, setQuantity] = useState(1);
    const [inputValue, setInputValue] = useState('1');
    const router = useRouter();

    const handleIncrement = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setQuantity((prev) => Math.min(prev + 1, 99))
    }, [])

    const handleDecrement = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setQuantity((prev) => Math.max(prev - 1, 1))
    }, [])

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        const value = e.target.value;
        // Allow only numbers and empty string
        if (value === '' || /^\d+$/.test(value)) {
            setInputValue(value);
        }
    }, []);

    const handleInputBlur = useCallback(() => {
        const newQuantity = parseInt(inputValue, 10);
        if (isNaN(newQuantity)) {
            setQuantity(1);
            setInputValue('1');
        } else {
            const validQuantity = Math.max(1, Math.min(newQuantity, 99));
            setQuantity(validQuantity);
            setInputValue(validQuantity.toString());
        }
    }, [inputValue]);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log(`Added ${quantity} of ${name} to cart`);
        // Here you would typically dispatch an action to add the item to the cart
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
                <div className={`font-bold`}>
                    {name}
                </div>
                <div>
                    R$ {price.toFixed(2)}
                </div>
            </CardContent>
            <CardFooter className="">
                <div className={`w-full flex justify-center gap-2`}>
                    <div className={`flex w-16`}>
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            className="focus-visible:ring-0 focus-visible:ring-none focus-visible:border-none focus-visible:scale-100 h-full rounded-r-none rounded-l-md  text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className={`w-8`}>
                            <button
                                className="w-full p-0 bg-primary hover:bg-[#394d50] text-primary-foreground rounded-none rounded-tr-md"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                            <button
                                className="w-full p-0 bg-primary hover:bg-[#394d50] text-primary-foreground rounded-none rounded-br-md"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <div>
                        <Button
                            className="flex-1 bg-primary hover:bg-[#394d50] text-primary-foreground h-full"
                            onClick={handleAddToCart}
                        >
                            Adicionar ao carrinho
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default WineCatalogItem;