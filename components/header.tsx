import type HeaderModel from "@/models/header";
import type SocialModel from "@/models/social";
import loader from "@/utils/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { NavLinks } from "./header.client";

function SocialLinks({ model }: { model: SocialModel }) {
  return (
    <ul>
      {model.links.map(({ href, icon }) => {
        return (
          <li className="inline-block" key={href}>
            <Link className="p-1" href={href}>
              <FontAwesomeIcon className="fa-xl" icon={icon} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default async function Header({ className }: { className?: string }) {
  const model = await loader.loadAsync<HeaderModel>("header.yaml");
  const socialModel = await loader.loadAsync<SocialModel>("social.yaml");
  return (
    <header className={className}>
      <nav className="flex items-center justify-between h-14 px-12 md:px-32 font-bold">
        <h1 className="text-xl">
          <Link href="/">@billiano</Link>
        </h1>
        <div className="flex items-center gap-8 max-sm:hidden">
          <NavLinks model={model} />
          <SocialLinks model={socialModel} />
        </div>
      </nav>
    </header>
  );
}
