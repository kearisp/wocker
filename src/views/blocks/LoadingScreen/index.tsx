import React from "react";
import {Loader2} from "lucide-react";


export const LoadingScreen: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <Loader2
              className="w-12 h-12 animate-spin text-primary" />
        </div>
    );
};
