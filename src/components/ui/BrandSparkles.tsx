export function BrandSparkles({ className = "" }: { className?: string }) {
    return (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 100 100" fill="currentColor" className={`pointer-events-none ${className}`}>
            <path d="M56 10C60 36 65 41 91 45C65 49 60 54 56 80C52 54 47 49 21 45C47 41 52 36 56 10Z" />
            <path d="M18 2C20 14 23 17 35 19C23 21 20 24 18 36C16 24 13 21 1 19C13 17 16 14 18 2Z" />
            <path d="M20 66C22 77 24 79 35 81C24 83 22 85 20 96C18 85 16 83 5 81C16 79 18 77 20 66Z" />
        </svg>
    );
}
