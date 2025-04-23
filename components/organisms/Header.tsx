"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { FaWineBottle } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

import SearchBar from "@/components/atoms/SearchBar";
import Background from "@/components/organisms/Background";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const iconSize = 18;
  const dropDownWidth = "w-full";

  return (
    <Background color={"secondary"}>
      <div className={`flex w-full justify-between`}>
        <Link href={`/`}>
          <Image
            alt={`logo1`}
            src={`/Logo1.png`}
            width={250}
            height={250}
            priority={true}
            className={`w-2/3 sm:w-full`}
          />
        </Link>
        <div className={`flex items-center justify-end gap-3`}>
          <div className={`hidden sm:flex gap-3`}>
            <SearchBar />
          </div>
          <div className={`hidden lg:flex gap-3`}>
            <InternalLink href={`/`}>
              <AiOutlineHome size={iconSize} /> Home
            </InternalLink>
            <InternalLink href={`/wines`}>
              <FaWineBottle size={iconSize} /> Vinhos
            </InternalLink>
            <InternalLink href={`/about`}>
              <GiWhiteBook size={iconSize} /> Nossa historia
            </InternalLink>
            <InternalLink href={`/contact`}>
              <BiSolidContact size={iconSize} /> Contato
            </InternalLink>
          </div>
          <div
            className={`flex lg:hidden bg-primary rounded-xl sm:bg-transparent`}
          >
            {/* dropdown menu */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`text-xl p-2 text-clear sm:text-neutral rounded-full`}
              >
                <IoMenu size={30} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className={`flex sm:hidden`}>
                  <SearchBar />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <InternalLink href={`/`} className={dropDownWidth}>
                    <AiOutlineHome size={iconSize} /> Home
                  </InternalLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <InternalLink href={`/wines`} className={dropDownWidth}>
                    <FaWineBottle size={iconSize} /> Vinhos
                  </InternalLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <InternalLink href={`/about`} className={dropDownWidth}>
                    <GiWhiteBook size={iconSize} /> Nossa historia
                  </InternalLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <InternalLink href={`/contact`} className={dropDownWidth}>
                    <BiSolidContact size={iconSize} /> Contato
                  </InternalLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Background>
  );
};
export default Header;

// intern link component
interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLAnchorElement>;
}
const InternalLink = ({
  href,
  children,
  className,
  ...props
}: InternalLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={twMerge(
        `flex items-center gap-1 hover:bg-primary hover:text-clear hover:scale-105 p-2 rounded-full`,
        `${href === path ? "bg-primary text-clear" : "text-neutral"}`,
        className
      )}
      {...props}
      onClick={() => onClick()}
    >
      {children}
    </Link>
  );
};
function onClick() {
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
}
