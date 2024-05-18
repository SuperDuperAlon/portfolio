export function ButtonCmp({ children, className, onClick, key, title }) {
    return (
        <button onClick={onClick} className={className} key={key} title={title}>
            {children}
        </button>
    )
}