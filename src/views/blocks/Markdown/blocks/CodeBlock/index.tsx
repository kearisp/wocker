import React, {useState, useCallback, createContext, Children, PropsWithChildren} from "react";


const Context = createContext<{
    register: (title: string) => void;
    unregister: () => void;
}>({
    register() {},
    unregister() {}
});


type Props = PropsWithChildren<{
    storageKey?: string;
}>;

const CodeBlock: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const [activeTab, setActiveTab] = useState(0);
    const [mapTitles, setMapTitles] = useState<any>({});

    const handleRegisterTab = useCallback((title: string, index: number) => {
        setMapTitles((mapTitles: any) => {
            return {
                ...mapTitles,
                [index]: title
            };
        });
    }, []);

    const handleUnregisterTab = useCallback((index: number) => {
        //
    }, []);

    return (
        <div className="border border-border rounded-lg overflow-hidden my-6 bg-card text-card-foreground">
            <div className="flex border-b border-border bg-muted/50 overflow-x-auto">
                {Children.map(children, (child, index) => {
                    const isActive = activeTab === index;
                    return (
                        <button
                          key={index}
                          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 outline-none whitespace-nowrap ${
                            isActive
                              ? "border-primary text-primary bg-background"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                          onClick={() => setActiveTab(index)}>
                            {mapTitles[index] || "Tab"}
                        </button>
                    );
                })}
            </div>

            {Children.map(children, (child, index) => {
                return (
                    <Context.Provider
                      key={index}
                      value={{
                        register: (title: string) => handleRegisterTab(title, index),
                        unregister: () => handleUnregisterTab(index)
                      }}>
                        <div
                          className={`${activeTab === index ? "block" : "hidden"} [&>pre]:!m-0 [&>pre]:!bg-transparent`}>
                            {child}
                        </div>
                    </Context.Provider>
                );
            })}
        </div>
    );
};


export {
    CodeBlock,
    Context as CodeBlockContext
};
