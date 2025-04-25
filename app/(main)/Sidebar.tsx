"use client";

import React, { useCallback } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import SearchBar from "@/components/atoms/SearchBar";
import { HorizontalSeparator } from "@/components/atoms/separators";
import { Logo1 } from "@/components/atoms/logos";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { User } from "@supabase/auth-js";
import Image from "next/image";
import { UserCircle } from "lucide-react";

const Links = [
  {
    name : "Início",
    url : "/"
  },
  {
    name : "Catálogo",
    url : "/wines"
  },
  {
    name : "Nossa história",
    url : "/about"
  },
  {
    name : "Eventos",
    url : "/events"
  },
  {
    name : "Contatos",
    url : "/contact"
  },
  {
    name : "Na Mídia",
    url : "/media"
  },
]

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        const userdata = data.user;
        return userdata;
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    };
    checkUser().then((r) => {
      setUser(r);
      setLoading(false);
    });
  }, [supabase.auth]);

  return { user, loading };
};

const useCartSize = () => {
  const supabase = createClient();
  const [cartSize, setCartSize] = useState<number>(0);

  const fetchCartSize = useCallback(async () => {
    const { data: userData } = await supabase.auth.getUser();
    const { data: cartData } = await supabase
      .from("cart")
      .select("id")
      .eq("user_id", userData.user?.id);
    setCartSize(cartData?.length || 0);
  }, [supabase]);

  useEffect(() => {
    fetchCartSize();
  }, [fetchCartSize, supabase]);

  return cartSize;
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useUser();
  const cartSize = useCartSize();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const BUTTON_SIZE = 25;

  return (
    <div className={`relative`}>
      <div
        className={`fixed top-0 bottom-0 ${
          isOpen ? `left-0` : `-left-72`
        } z-[999] transition-all duration-500`}
      >
        <div
          className={`absolute z-10 top-4 -right-14 bg-secondary rounded-xl shadow-md`}
          onClick={handleMenu}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={BUTTON_SIZE} />
        </div>
        <main
          className={`flex flex-col w-72 py-4 h-screen bg-secondary border-r-2 border-primary`}
        >
          <Link href={`/`} onClick={handleMenu} className="px-2 mb-2">
            <Logo1 />
          </Link>
          <div className="flex flex-col justify-between px-2">
            <div className="flex justify-between py-2">
              <UserButton onClick={handleMenu} />
              {/* todo : rajouter un ping avec le nombre d'objets dans le cart */}
              {user && (
                <div className="relative">
                  <Link
                    href={`/cart`}
                    className="p-2 rounded-md bg-primary text-white w-16 flex justify-center items-center hover:opacity-75"
                  >
                    <FaCartShopping className="h-auto w-5" />
                  </Link>
                  {cartSize > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 border border-primary"
                    >
                      {cartSize}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between px-2">
            <SearchBar />
            <HorizontalSeparator />
          </div>
          <div
            className={`flex-1 flex flex-col py-2 justify-start overflow-y-auto`}
          >
            <LinksMenu>
              {Links.map(({name, url}, index) => (
                <LinkButton key={index} href={url} onClick={handleMenu}>
                  {name}
                </LinkButton>
              ))}
            </LinksMenu>
          </div>
        </main>
      </div>
      <div
        onClick={handleMenu}
        className={`${
          isOpen ? `fixed` : `hidden`
        } hover:cursor-pointer z-[100] top-0 bottom-0 right-0 bg-red-50/50 w-screen`}
      />
    </div>
  );
};
export default Sidebar;

const UserButton = ({ onClick }: { onClick: () => void }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>; // Ou un spinner, ou rien si vous préférez
  }

  return (
    <>
      {user ? (
        <>
          <Link
            href={`/user`}
            className="rounded-full border-2 border-primary hover:bg-primary hover:text-white"
            onClick={onClick}
          >
            {user.user_metadata.avatar_url ? (
              <Image
                src={user.user_metadata.avatar_url}
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-primary-foreground" />
              </div>
            )}
          </Link>
        </>
      ) : (
        <Link
          href={`/auth/login`}
          className="w-full text-center p-1 rounded-md border-2 border-primary hover:bg-primary hover:text-white"
        >
          Login
        </Link>
      )}
    </>
  );
};

const LinkButton = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        `
				text-primary
				hover:text-white
				bg-secondary
				hover:bg-primary
				p-2
				transition-all duration-100
				${href === path ? "bg-primary text-white hover:opacity-80" : ""}
				`,
        className,
        { ...props }
      )}
      onClick={props.onClick}
    >
      {children}
    </Link>
  );
};

const LinksMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex flex-col justify-between rounded-md relative`}>
      {children}
    </div>
  );
};
