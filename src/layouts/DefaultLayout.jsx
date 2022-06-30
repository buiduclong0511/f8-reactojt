function DefaultLayout({ children }) {
    return (
        <>
            <h1>Header</h1>
            {children}
            <h2>Footer</h2>
        </>
    );
}

export default DefaultLayout;
