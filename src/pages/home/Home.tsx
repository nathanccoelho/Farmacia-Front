
function Home() {
    return (
        <>
            <div className="bg-slate-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Olá, seja bem vindo!
                        </h2>
                        <p className='text-xl'>
                            Encontre aqui seu medicamento.
                        </p>



                        <div className="grid justify-end">
                            <div className="
                    grid
                    grid-cols-[1fr_2fr] 
                    gap-5 
                    bg-slate-400
                    mx-7 
                    my-7 
                    px-5 
                    py-5 
                    max-w-4xl 
                    rounded-2xl 
                    border 
                    shadow-md 
                    shadow-slate-400
                ">
                                <div>
                                    <img className="max-w-xs" src="https://images.vexels.com/media/users/3/208407/isolated/preview/7ad2615dc81ce96bf6618e9a48ee5b3b-icone-de-sacola-de-farmacia.png" alt="Imagem" />
                                </div>
                                <div>
                                    <h2 className="
                            text-center 
                            text-4xl 
                            py-4 
                            font-bold
                            text-slate-900
                        ">Novo Produto</h2>
                                    <p className="
                            
                            text-xl 
                            py-4
                            text-slate-900
                        ">Cadastre um novo produto cliando aqui.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        </>
    )
}

export default Home