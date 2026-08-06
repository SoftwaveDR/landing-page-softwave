import PropTypes from "prop-types";

import "./Button.css";

function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  icon,
  iconPosition = "right",
  type = "button",
  onClick,
  target,
  rel,
  ariaLabel,
}) {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    icon ? "button--with-icon" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "default", "large"]),
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;