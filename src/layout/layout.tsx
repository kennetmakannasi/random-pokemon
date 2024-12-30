function Layout({children}: { children: React.ReactNode }){
    return(
        <>
            <div className="bg-gray-900 p-5">
                <p className="text-xl font-semibold">Random Pokemon Generator</p>
                <a className="text-sm">Dibuat dengan </a>
                <a className="text-sm hover:underline hover:underline-offset-4" href="https://pokeapi.co/">PokéApi</a>
            </div>
            <div>
            {children}
            </div>
        </>
    )
}

export default Layout;