export function normalizeSearchText(value) {
    return value
        .replace(/[يى]/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/\s+/g, " ")
        .trim()
}
