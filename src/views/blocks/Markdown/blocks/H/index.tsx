import React, {PropsWithChildren} from "react";


type Props = PropsWithChildren<{
    id: string;
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>;

const H: React.FC<Props> = (props) => {
    const {
        id,
        variant,
        children
    } = props;

    const Tag = variant as keyof JSX.IntrinsicElements;

    const classNames: Record<string, string> = {
        h1: "text-4xl font-bold mt-8 mb-4",
        h2: "text-3xl font-bold mt-8 mb-4 border-b border-border pb-2",
        h3: "text-2xl font-bold mt-6 mb-3",
        h4: "text-xl font-bold mt-6 mb-3",
        h5: "text-lg font-bold mt-4 mb-2",
        h6: "text-base font-bold mt-4 mb-2",
    };

    return (
        <Tag
          id={id}
          className={`${classNames[variant] || ""} flex items-center group scroll-mt-20 text-foreground`}>
            {children}

            <a
              className="ml-3 inline-flex items-center justify-center w-7 h-7 border border-border rounded-lg text-foreground opacity-0 group-hover:opacity-100 hover:border-primary hover:text-primary transition-all"
              href={`#${id}`}
              aria-label="Anchor">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
            </a>
        </Tag>
    );
};


export {H};
