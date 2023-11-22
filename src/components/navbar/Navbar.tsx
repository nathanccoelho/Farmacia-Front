
function Navbar() {
    return (
        <>
            <div className='w-full bg-slate-900 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    <div className="font-bold text-xl">
                    Farmácia
                    </div>
                    

                    <div className='flex gap-4'>
                        <span>Produtos</span>
                        <span>Categoria</span>
                        <span>Cadastrar categoria</span>
                        <span>Perfil</span>
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar