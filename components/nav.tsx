"use client";

import type NavModel from "@/models/header";
import type SocialModel from "@/models/social";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavLinks({ model }: { model: NavModel }) {
  const path = usePathname();
  return (
    <ul className="flex max-md:flex-col">
      {model.links.map(({ href, label }) => {
        const className = classNames(
          "w-full px-12 md:px-6 py-3 md:py-2 hover:underline",
          {
            underline: path.startsWith(href),
          }
        );
        return (
          <li className="flex" key={href}>
            <Link className={className} href={href}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function SocialLinks({ model }: { model: SocialModel }) {
  return (
    <ul className="flex items-center justify-center">
      {model.links.map(({ href, icon }) => {
        return (
          <li className="flex" key={href}>
            <Link className="p-3 md:p-2" href={href}>
              <FontAwesomeIcon className="fa-xl" icon={icon} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function Links({
  model,
  socialModel,
  toggle,
}: {
  model: NavModel;
  socialModel: SocialModel;
  toggle: boolean;
}) {
  const className = classNames(
    "max-md:absolute flex max-md:flex-col items-stretch md:gap-8 w-full left-0 top-14 max-md:py-4 bg-inherit border-inherit max-md:border-b",
    {
      "max-md:hidden": !toggle,
    }
  );
  return (
    <div className={className}>
      <NavLinks model={model} />
      <SocialLinks model={socialModel} />
    </div>
  );
}

export default function Nav({
  model,
  socialModel,
}: {
  model: NavModel;
  socialModel: SocialModel;
}) {
  const [state, setState] = useState(false);

  function toggle() {
    setState((state) => !state);
  }

  function close() {
    setState(false);
  }

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [state]);

  return (
    <nav className="relative flex items-center justify-between h-14 px-12 md:px-24 lg:px-32 font-bold bg-inherit border-inherit">
      <h1 className="text-xl">
        <Link href="/">@billiano</Link>
      </h1>
      <div className="flex items-center bg-inherit border-inherit">
        <Links model={model} socialModel={socialModel} toggle={state} />
        <div className="md:hidden">
          <button className="px-4 py-2" onClick={toggle}>
            <FontAwesomeIcon className="fa-xl" icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
}