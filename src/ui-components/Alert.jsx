//alert v.2.0

export default ({ tip, ikon, children }) => {
    ikon = ikon === undefined ? true : ikon

    return (
        <>
            <div className={`alert alert-${tip}`}>

                {ikon === true && (tip === "warning" ? "❗" : (tip === "info" ? "ℹ" : ""))}

                {children}
            </div>
        </>
    )
}
