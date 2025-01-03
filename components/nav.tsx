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
    <ul className="flex max-lg:flex-col">
      {model.links.map(({ href, label }) => {
        const className = classNames(
          "w-full px-12 lg:px-6 py-3 lg:py-2 hover:underline",
          {
            underline: path === href,
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
            <Link className="p-3 lg:p-2" href={href}>
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
    "flex max-lg:flex-col items-stretch lg:gap-8 w-full max-lg:py-4 max-lg:absolute left-0 top-14 bg-inherit border-inherit max-lg:border-b",
    {
      "max-lg:hidden": !toggle,
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
    <nav className="flex items-center justify-between h-14 px-12 lg:px-32 relative font-bold bg-inherit border-inherit">
      <h1 className="text-xl">
        <Link href="/">@billiano</Link>
      </h1>
      <div className="flex items-center bg-inherit border-inherit">
        <Links model={model} socialModel={socialModel} toggle={state} />
        <div className="lg:hidden">
          <button className="px-4 py-2" onClick={toggle}>
            <FontAwesomeIcon className="fa-xl" icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
}
