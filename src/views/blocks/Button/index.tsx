import React, {useCallback, useState} from "react";
import clsx from "clsx";
import {PolymorphicComponentProps} from "react-compose-form/lib/types/PolymorphicComponentProps";


type ButtonProps = {
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    iconOnly?: boolean;
    onClick?: React.MouseEventHandler;
};

type Ripple = {
    id: number;
    x: number;
    y: number;
    size: number;
};

export const Button = <T extends React.ElementType = "button">(
    props: PolymorphicComponentProps<T, ButtonProps>
) => {
    const {
        as: Component = "button",
        variant = "primary",
        iconOnly = false,
        className,
        children,
        onClick,
        ...rest
    } = props;

    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget,
              rect = button.getBoundingClientRect(),
              size = Math.max(rect.width, rect.height);

        const newRipple: Ripple = {
            id: Date.now(),
            x: event.clientX - rect.left - size / 2,
            y: event.clientY - rect.top - size / 2,
            size
        };

        setRipples((prev) => [...prev, newRipple]);

        if(onClick) {
            onClick(event);
        }

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
    }, [onClick]);

    const variants = {
        primary: "text-primary-foreground bg-primary hover:bg-primary/90 shadow",
        secondary: "text-secondary-foreground bg-secondary hover:bg-secondary/80",
        outline: "text-secondary-foreground bg-background border border-border hover:text-accent-foreground hover:bg-accent"
    };

    return (
        <Component
          {...rest}
          className={clsx(
            "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9",
            iconOnly ? "w-9 rounded-full" : "rounded-md px-4 py-2",
            variants[variant],
            className
          )}
          onClick={handleClick}>
            {children}

            <span
              className={
                clsx(
                "absolute inset-0 pointer-events-none overflow-hidden",
                    iconOnly ? "rounded-full" : "rounded-md"
                )
              }>
                {ripples.map((ripple) => (
                    <span
                      key={ripple.id}
                      style={{
                        width: ripple.size,
                        height: ripple.size,
                        top: ripple.y,
                        left: ripple.x
                      }}
                      className="absolute bg-white/30 rounded-full animate-ripple" />
                ))}
            </span>
        </Component>
    );
};
