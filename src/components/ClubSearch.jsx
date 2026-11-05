import { useNavigate, useSearchParams } from "react-router-dom"

export default function ClubSearch({
    formClassName,
    inputClassName,
    buttonClassName,
    placeholder = "جستجو در کانون‌ها...",
    onSearchSubmitted,
}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const currentSearch = searchParams.get("search") || ""

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const query = formData.get("search")?.toString().trim() || ""

        navigate({
            pathname: "/clubs",
            search: query ? `?search=${encodeURIComponent(query)}` : "",
        })
        onSearchSubmitted?.()
    }

    return (
        <form key={currentSearch} className={formClassName} onSubmit={handleSubmit}>
            <input
                type="search"
                className={inputClassName}
                placeholder={placeholder}
                aria-label="جستجو در نام کانون‌ها"
                name="search"
                defaultValue={currentSearch}
            />
            <button type="submit" className={buttonClassName} aria-label="جستجو">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
            </button>
        </form>
    )
}
