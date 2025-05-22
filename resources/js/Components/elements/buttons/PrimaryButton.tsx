import { InertiaLinkProps, Link } from "@inertiajs/react";
import { ButtonHTMLAttributes } from "react";

const classes =
    "inline-flex items-center px-8 py-3 bg-primaryBtnColor border border-transparent rounded-full font-bold text-xl text-white capitalize  hover:brightness-90 focus:brightness-90 active:brightness-90 focus:outline-none  transition ease-in-out duration-150";

const disabledClasses = "opacity-25 cursor-not-allowed";

export function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={` ${classes} ${
                disabled && disabledClasses
            } ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export function PrimaryLink({
    className = "",
    disabled,
    children,
    href,
    ...props
}: InertiaLinkProps & {
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            {...props}
            className={` ${classes} ${
                disabled && disabledClasses
            } ${className}`}
            disabled={disabled}
        >
            {disabled ? <span className="animate-ping">...</span> : children}
        </Link>
    );
}
