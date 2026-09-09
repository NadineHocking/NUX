import Link from "next/link";
import {
  FiArrowRight,
  FiMail,
  FiExternalLink,
} from "react-icons/fi";

const icons = {
  arrow: FiArrowRight,
  mail: FiMail,
  external: FiExternalLink,
};

export default function Button({
  href,
  children,
  variant = "primary", "secondary":
  icon = "arrow",
}) {
  const Icon = icons[icon];

  return (
    <Link href={href} className={`button button-${variant}`}>
      <span>{children}</span>
      <Icon className="button-icon" aria-hidden="true" />
    </Link>
  );
}