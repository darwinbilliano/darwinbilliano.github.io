import { accounts } from "@/content/social";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer>
      <section className="section">
        <ul className="flex flex-col items-center">
          {accounts.map(({ name, icon, url }) => (
            <li key={name}>
              <a href={url}>
                <Icon className="size-6" icon={icon} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center">&copy; 2025 Darwin Billiano</p>
      </section>
    </footer>
  );
}
