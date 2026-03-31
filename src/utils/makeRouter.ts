import {useMemo} from "react";
import {
    useNavigate, NavigateOptions,
    generatePath, PathParam,
    matchPath,
    PathPattern,
    useLocation
} from "react-router";


export type Routes = {
    [key: string]: string | PathPattern;
};

type HasKeys<T> = keyof T extends never ? false : true;

type Params<T extends string | PathPattern> =
    T extends string
        ? {[K in PathParam<T>]: string | number | null;}
        : T extends PathPattern
            ? {[K in PathParam<T["path"]>]: string | number | null;}
            : never;

type RoutesWithParams<T extends Routes> = {
    [K in keyof T]: HasKeys<Params<T[K]>> extends true ? K : never;
}[keyof T];

type RoutesWithoutParams<T extends Routes> = {
    [K in keyof T]: HasKeys<Params<T[K]>> extends false ? K : never;
}[keyof T];

export const makeRouter = <T extends Routes>(routes: T) => {
    const handlePattern = <R extends keyof T>(route: R): PathPattern => {
        const pattern = routes[route];

        if(typeof pattern === "string") {
            return {
                path: pattern
            };
        }

        return pattern;
    };

    const handleRoute = <R extends keyof T>(route: R) => {
        return handlePattern(route).path;
    };

    function handleUrl<R extends RoutesWithoutParams<T>>(route: R): string;
    function handleUrl<R extends RoutesWithParams<T>>(route: R, params: Params<T[R]>): string;
    function handleUrl<R extends keyof T>(route: R, params?: Params<T[R]>) {
        return generatePath(handlePattern(route).path, params);
    }

    return {
        pattern: handlePattern,
        path: handleRoute,
        url: handleUrl,
        useRouter: () => {
            const navigate = useNavigate();
            const {pathname} = useLocation();

            return useMemo(() => {
                function handleTo<R extends RoutesWithoutParams<T>>(
                    route: R,
                    params?: never,
                    options?: NavigateOptions
                ): void|Promise<void>;
                function handleTo<R extends RoutesWithParams<T>>(
                    route: R,
                    params: Params<T[R]>,
                    options?: NavigateOptions
                ): void|Promise<void>;
                function handleTo<R extends keyof T>(
                    route: R,
                    params?: Params<T[R]>,
                    options?: NavigateOptions
                ) {
                    return navigate(generatePath(handlePattern(route).path, params), options);
                }

                const handleMatch = <R extends keyof T>(route: R, path: string = pathname) => {
                    return matchPath(handlePattern(route), path);
                };

                return {
                    to: handleTo,
                    match: handleMatch,
                    route: handleRoute
                };
            }, [navigate, pathname]);
        }
    };
};
