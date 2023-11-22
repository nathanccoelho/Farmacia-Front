
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

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://images.vexels.com/media/users/3/208407/isolated/preview/7ad2615dc81ce96bf6618e9a48ee5b3b-icone-de-sacola-de-farmacia.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home