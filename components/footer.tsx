import type SocialModel from "@/models/social";
import yaml from "@/utils/content/yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function SocialLinks({ model }: { model: SocialModel }) {
  return (
    <ul className="flex justify-center">
      {model.links.map(({ href, icon }) => (
        <li key={href}>
          <Link className="p-2" href={href}>
            <FontAwesomeIcon className="fa-xl" icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function Footer() {
  const model = await yaml.read<SocialModel>("social.yaml");
  return (
    <footer className="p-8">
      <SocialLinks model={model} />
      <br />
      <p className="text-center">&copy; 2024 Darwin Billiano</p>
    </footer>
  );
}
