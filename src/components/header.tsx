import type HeaderModel from "@/models/header";
import loader from "@/utils/loader";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import * as fa from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { NavLinks } from "./header.client";

export default async function Header({ className }: { className?: string }) {
  const model = await loader.loadAsync<HeaderModel>("header.yaml");
  className ??= "sticky top-0 bg-red border-b border-strong";
  return (
    <header className={className}>
      <nav className="flex items-center justify-between h-14 px-12 md:px-32 font-bold">
        <h1 className="text-xl">
          <Link href="/">@billiano</Link>
        </h1>
        <div className="flex items-center gap-8 max-sm:hidden">
          <NavLinks model={model} />
          <SocialLinks model={model} />
        </div>
      </nav>
    </header>
  );
}

function SocialLinks({ model }: { model: HeaderModel }) {
  return (
    <ul>
      {model.socialLinks.map(({ href, icon }) => {
        const faIcon = fa[icon as keyof typeof fa] as IconDefinition;
        return (
          <li className="inline-block" key={href}>
            <Link className="p-1" href={href}>
              <FontAwesomeIcon className="fa-xl" icon={faIcon} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
