export function ButtonCmp({ children, className, onClick, key }) {
    return (
        <button onClick={onClick} className={className} key={key}>
            {children}
        </button>
    )
}