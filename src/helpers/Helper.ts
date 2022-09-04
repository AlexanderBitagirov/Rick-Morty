
export const generateQuery = (queries:Record<string, string>) => {
    if(queries) {
        return new URLSearchParams(queries).toString();
    }
}