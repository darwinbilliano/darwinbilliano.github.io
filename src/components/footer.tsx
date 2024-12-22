import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/darwinbilliano">
          <FontAwesomeIcon className="fa-xl" icon={faGithub} />
        </a>
      </div>
      <br />
      <p>&copy; 2024 Darwin Billiano</p>
      <p>This website is under construction...</p>
    </footer>
  );
}
