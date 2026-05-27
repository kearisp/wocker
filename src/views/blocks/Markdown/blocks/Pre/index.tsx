import React, {useState, PropsWithChildren} from "react";
import {PreConsumer} from "./PreConsumer";
import {PreContext} from "./PreContext";


type Props = PropsWithChildren<{
    className?: string;
}>;

const Pre: React.FC<Props> = (props) => {
    const {
        className = "",
        children
    } = props;

    const [cProps, setCProps] = useState({});

    return (
        <PreContext.Provider
          value={{
            hasPre: true,
            setProps: setCProps
          }}>
            <pre
              {...cProps}
              className={`${className} block mb-4 text-primary`}>
                {children}
            </pre>
        </PreContext.Provider>
    );
};


export {
    Pre,
    PreConsumer,
    PreContext
};
