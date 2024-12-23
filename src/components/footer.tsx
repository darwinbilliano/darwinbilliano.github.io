import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-8 text-center">
      <div className="flex justify-center">
        <Link href="https://github.com/darwinbilliano">
          <FontAwesomeIcon className="fa-xl" icon={faGithub} />
        </Link>
      </div>
      <br />
      <p>&copy; 2024 Darwin Billiano</p>
      <p>This website is under construction...</p>
    </footer>
  );
}
