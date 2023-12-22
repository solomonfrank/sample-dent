import { classNames } from "@/lib/classNames";
import Link, { LinkProps } from "next/link";
import { forwardRef, createElement } from "react";
import { cva, VariantProps } from "class-variance-authority";

type ButtonProps = VariantProps<typeof buttonClasses> & {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & (
    | (Omit<JSX.IntrinsicElements["a"], "onClick" | "href" | "ref"> &
        LinkProps & { type?: never })
    | (Omit<JSX.IntrinsicElements["button"], "ref" | "disabled" | "onClick"> & {
        href?: never;
      })
  );

const buttonClasses = cva(
  "inline-flex items-center rounded-md gap-2  text-md justify-center border border-slate-400 bg-white py-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary-color",
        secondary:
          "text-primary bg-white bg-opacity-10 border border-white-08 backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in-out ",
        textiary: "",
      },
      size: {
        small: "text-xs px-3 h-7",
        medium: "text-sm px-4 h-8",
        large: "text-md px-6 h-12",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    prefixIcon,
    suffixIcon,
    loading,
    type = "button",
    variant,
    size,
    ...passThroughProps
  } = props;

  const disabled = loading || props.disabled;
  const elementType = props.href ? "a" : "button";

  const element = createElement(
    elementType,
    {
      ...passThroughProps,
      type: props.href ? undefined : type,
      disabled: disabled,
      ref,
      className: classNames(buttonClasses({ variant, size }), props.className),
      onClick: disabled
        ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => e.preventDefault()
        : props.onClick,
    },
    <>
      {prefixIcon && prefixIcon}
      {props.children}
      {suffixIcon && suffixIcon}
    </>
  );

  if (props.href) {
    return (
      <Link href={props.href} legacyBehavior passHref>
        {element}
      </Link>
    );
  }

  return <>{element}</>;
});
