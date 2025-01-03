"use client";

import type HeaderModel from "@/models/header";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavMenu({ model, state }: { model: HeaderModel; state: boolean }) {
  const path = usePathname();
  const className = classNames(
    "max-lg:absolute left-0 right-0 top-14 max-lg:py-4 bg-inherit border-inherit max-lg:border-b",
    {
      "max-lg:hidden": !state,
    }
  );
  return (
    <div className={className}>
      <ul className="flex max-lg:flex-col">
        {model.links.map(({ href, label }) => {
          const className = classNames(
            "px-12 lg:px-6 py-3 lg:py-2 hover:underline",
            {
              underline: path === href,
            }
          );
          return (
            <li className="flex flex-col" key={href}>
              <Link className={className} href={href}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function HamburgerMenu({
  state,
  setState,
}: {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggle = () => setState((state) => !state);

  useEffect(() => {
    const close = () => setState(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [state, setState]);

  return (
    <div className="lg:hidden">
      <button className="px-2 py-3" onClick={toggle}>
        <FontAwesomeIcon className="fa-xl" icon={faBars} />
      </button>
    </div>
  );
}

export default function Nav({ model }: { model: HeaderModel }) {
  const [state, setState] = useState(false);
  return (
    <nav className="flex items-center justify-between h-14 px-12 lg:px-32 font-bold bg-inherit border-inherit">
      <h1 className="text-xl">
        <Link href="/">@darwinbilliano</Link>
      </h1>
      <div className="flex items-center lg:gap-8 bg-inherit border-inherit">
        <NavMenu model={model} state={state} />
        <HamburgerMenu state={state} setState={setState} />
      </div>
    </nav>
  );
}
