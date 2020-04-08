declare const buildIndexUrl: (key: string) => string;
declare const buildSheetUrl: (key: string, sheetId: string) => string;
declare const allowedKeys: (rawEntry: Record<string, {
    $t: string;
}>) => string[];
declare const stripKeys: (keys: string[]) => string[];
declare const getSheets: (ids: string[], key: string) => Promise<SheetV1[]>;
declare const process: ({ entries, allowed, cleaned, }: {
    entries: Entries;
    allowed: string[];
    cleaned: string[];
}) => [string, string][][];
declare const getData: (key: string, onSuccess: (output: {
    id: string;
    title: string;
    entries: [string, string][][];
}[]) => void, onFailure?: ((e: Error) => void) | undefined) => Promise<void>;
export { buildIndexUrl, buildSheetUrl, getData, allowedKeys, stripKeys, getSheets, process, };
declare type Entries = Array<{
    [k: string]: {
        $t: string;
    };
}>;
declare type SheetV1 = {
    data: {
        feed: {
            entry: Entries;
        };
    };
};
