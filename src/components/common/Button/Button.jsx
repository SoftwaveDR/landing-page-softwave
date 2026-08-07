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
  disabled = false,
}) {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    icon ? "button--with-icon" : "",
    disabled ? "button--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const safeRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="button__icon button__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}

      <span className="button__label">{children}</span>

      {icon && iconPosition === "right" && (
        <span className="button__icon button__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={safeRel}
        aria-label={ariaLabel}
        onClick={onClick}
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
      disabled={disabled}
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

  disabled: PropTypes.bool,
};

export default Button;
