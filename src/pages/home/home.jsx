import './home.css'
import { importAssets } from '../../assets/importAssets.js'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'motion/react'

function Home() {

    const cards = [
        {
            id: 1,
            titulo: "Studio Bella Suria",
            img: importAssets.studio1,
            mp4: 'https://www.youtube.com/embed/vlehHmWoD6c',
            alt: 'imagem do site Studio Bella Suria',
            subTitulo: "Uma Land Page para um salão de beleza.",
            descricao: 
            [
                "Studio Bella Suria é uma aplicação Front-End ( HTML5, CSS3 & JavaScript ). Esse foi o meu primeiro projeto que realmente teve utilidade e foi usado por alguém, além de ser apenas um 'projeto teste'.", 

                "Eu criei essa Land Page com o intuito de ajudar a minha mãe no salão de beleza, para trazer mais clientes e passar uma aparência de sosfiticação.", 

                "Aqui utilizei algumas ferramentas para criação:",
                "- Unsplash: uma plataforma que oferece imagens gratuitas de alta qualidade para uso pessoal e comercial, sem necessidade de atribuição.",
                "- Font Awesome: uma biblioteca de ícones amplamente utilizada para adicionar elementos visuais modernos e personalizáveis em sites e aplicações.",
                "- Google: como ambiente de pesquisa e de inpiração.",
                "- VS Code: uma plataforma que permite o desenvolvimento de aplicações web.",

                "Eu demorei cerca de 3 dias para a realização do site, sem contar com o tempo gasto na criação dos designs webs."
            ],
            data: '25 de Março de 2026',
            keys: ['HTML5', 'CSS3', 'JavaScript'],
            linkOn: 'https://studiobellasuria.netlify.app/'
        },
        {
            id: 2,
            titulo: 'Users & Products',
            img: importAssets.usuariosProdutos1,
            mp4: 'https://www.youtube.com/embed/YdtWroVvvlU',
            alt: 'imagem do site Usuários e Produtos',
            subTitulo: 'Uma aplicação Full Stack com API.',
            descricao: 
            [
                "Users & Products é uma aplicação que permite que os usuários criem uma conta e realizem o cadastro de produtos. Nesse projeto eu criei primeiro uma API Rest em C# .NET para assim depois fazer o consumo dessa API com React e criei um Banco de Dados em PostgreSQL para o armazenamento de informações.",

                "Eu crie essa aplicação Full Stack com o intuito de testar meus conhecimentos em C# e aprender a desenvolver um projeto em React. Aqui eu utilizei algumas ferramentas como Vite e o VS Code.",

                "A API foi desenvolvida com mais ferramentas e utilidades do que o React pode fazer no momento:",
                "Desenvolvi uma hierarquia dentro do projeto onde existem dois níveis, o mais baixo sendo o de 'Usuário' e o mais alto de 'Adiministrador'.",
                "Existe uma obrigatoriedade de login dentro da aplicação, onde o sistema não deixa ninguém que não esteja logado fazer qualquer tipo de ação dentro dele.",

                "Nesse projeto demorei cerca de 6 dias para a confecção da API em C# .NET e do Banco de Dados, já na parte do React demorei 4 dias para a realização de todo o projeto ( levando em consideração que foi o meu primeiro projeto em React )."
            ],
            data: "30 de Abril de 2026",
            keys: ['React', 'HTML5', 'CSS3', 'JavaScript', '.NET', 'C#'],
            linkOn: false
        },
        {
            id: 3,
            titulo: 'Browser Extensões',
            img: importAssets.browser1,
            mp4: 'https://www.youtube.com/embed/hno6aCgNAtM',
            alt: 'imagem do site Browser Extensions',
            subTitulo: 'Um gerenciador de extensões do chrome.',
            descricao: 
            [
                "Browser Extensões é uma aplicação de aprendizagem pensada no FrontEnd Mentor. Esse projeto foi feito a partir de uma estrutura mais simples, apenas HTML, CSS e JavaScript.",

                "Eu criei essa aplicação Front End em um momento que eu estava sem ideia de projetos. Foi aí que eu procurei o FrontEnd Mentor, que é um site onde ficam disponíveis várias ideias de projetos diferentes e essa foi uma delas, onde meu objetivo era:",

                "Alternar extensões entre estados ativo e inativo.",
                "Filtrar extensões ativas e inativas.",
                "Remover extensões da lista.",
                "Selecionar seu tema de cores.",
                "Ver o layout otimizado dependendo do tamanho da tela do dispositivo.",
                "Ver estados hover e focus para todos os elementos interativos.",

                "Nesse projeto demorei 2 dias inteiros para a realização de todo o projeto e deixá-lo mais próximo com o design original do FrontEnd Mentor."
            ],
            data: "10 de Março de 2026",
            keys: ['HTML5', 'CSS3', 'JavaScript', 'FrontEnd Mentor'],
            linkOn: 'https://browserextensionn.netlify.app/'
        }, 
        {
            id: 4,
            titulo: 'Fanta',
            img: importAssets.fanta1,
            mp4: 'https://www.youtube.com/embed/4EYCZsmduIQ',
            alt: 'imagem do site Fanta',
            subTitulo: 'Uma Land Page animada da Fanta.',
            descricao: 
            [
                "Fanta é uma aplicação de aprendizagem do curso 'Rei do Código'. Foi nesse projeto onde comcei a aprender um pouco sobre animação em scroll.",

                "Desenvolvi esse projeto Front End ao longo das aulas de HTML, CSS e JavaScript. Aqui eu aprendi um pouco sobre animação em scroll, usando GSAP criei uma timeline com animações sincronizadas com o scroll deixando o site mais interativo. Quando o usuário rolasse o scroll para baixo e para cima poderia ver os elementos gráficos desse site se movimentando por toda a tela.",

                "Nessa aplicação demorei apenas 1 dia para concluir com tudo que estava sendo cobrado."
            ],
            data: "06 de Março de 2026",
            keys: ['HTML5', 'CSS3', 'Javascript'] ,
            linkOn: 'https://fantaprojct.netlify.app/'
        },
        {
            id: 5,
            titulo: 'Tarefas',
            img: importAssets.tarefas1,
            mp4: 'https://www.youtube.com/embed/OGS2vpVtxdA',
            alt: 'imagem do site Tarefas',
            subTitulo: 'Um site que faz registros de tarefas.',
            descricao: 
            [
                "Tarefas é uma aplicação que eu fiz no meu curso técnico de Desenvolvimento de Sistemas no Senai Centro 4.0. A ideia desse projeto era para ter o primeiro contato com API, com conexão do Front End com o Back End e também a conexão com o Banco de Dados.",

                "Desenvolvi esse projeto ao longo das minhas férias de Dezembro usando Python para o Back End e uma estrutura simples de HTML, CSS e JavaScript para o Front End. Nesse projeto não usei requisições http para a consumação da API, mas sim templates, isso porquê era mais fácil a implementação considerando que foi o meu primeiro projeto Full Stack. Nele os usuários são capazes de realizar as seguintes ações:",
                "Criar uma conta com email, nome e senha.",
                "Fazer a recuperação da senha através do email.",
                "Fazer o login com email e senha da conta criada.",
                "Criar, editar e excluir uma tarefa.",
                "Fazer análises de suas tarefas através de um DashBoard.",

                "Esse projeto levou cerca de 20 dias para ser concluído por completo, considerando que foi o meu primeiro projeto Full Stack."
            ],
            data: "03 de Janeiro de 2026",
            keys: ['Python', 'Flask', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'],
            linkOn: false
        }
    ]

    const skils = [
        {
            nome: 'HTML5',
            img: importAssets.html5
        },
        {
            nome: 'CSS3',
            img: importAssets.css3
        },
        {
            nome: 'JavaScript',
            img: importAssets.javascript
        },
        {
            nome: 'Vite',
            img: importAssets.vite
        },
        {
            nome: 'React.js',
            img: importAssets.react
        },
        {
            nome: 'Node.js',
            img: importAssets.node
        },
        {
            nome: 'Motion',
            img: importAssets.motion
        },
        {
            nome: 'PostgreSQL',
            img: importAssets.postgres
        },
        {
            nome: 'MySQL',
            img: importAssets.mysql
        },
        {
            nome: 'Arduino',
            img: importAssets.arduino
        },
        {
            nome: 'Esp32',
            img: importAssets.esp32
        },
        {
            nome: 'SQLite',
            img: importAssets.sqlite
        },
        {
            nome: 'Python',
            img: importAssets.python
        },
        {
            nome: 'Flask.py',
            img: importAssets.flask,
            img_escuro: importAssets.flask_logo_escuro
        },
        {
            nome: 'Django.py',
            img: importAssets.django
        },
        {
            nome: 'C#',
            img: importAssets.csharp
        },
        {
            nome: 'C# .NET',
            img: importAssets.dotnet
        },
        {
            nome: 'WinForms',
            img: importAssets.winforms
        },
        {
            nome: 'GitHub',
            img: importAssets.github,
            img_escuro: importAssets.github_logo_escuro
        },
        {
            nome: 'Git',
            img: importAssets.git
        },
        {
            nome: 'Stripe',
            img: importAssets.stripe
        },
        {
            nome: 'VS Code',
            img: importAssets.vscode,
            img_escuro: importAssets.vscode_logo_escuro
        }
    ]

    const [cardAtivo, setCardAtivo] = useState(null)
    const [aberto, setAberto] = useState(false)
    const [dark, setDark] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (aberto || open) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [aberto, open])

    function fechar() {
        setAberto(false)
    }

    function styleDark() {
        if (dark) {
            return {
                color: 'white'
            }
        }
    }

    return(
        <body style={{
            backgroundColor: dark? 'rgb(0, 0, 0)' : '#EBF4F6',
                    color: dark? 'white' : 'rgb(23, 33, 85)'
        }}>
            <div className='blur' onClick={() => {
                if (open) {
                    setOpen(false)
                } else {
                    return
                }
            }} style={{ visibility: open? 'visible' : 'hidden' }}></div>
        <div className='container'>
            <motion.header initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} id='header' style={{
                    backgroundColor: dark? 'rgb(0, 0, 0)' : 'white' 
                }}>
                <motion.button className='menu' whileTap={{ scale: 0.8 }} transition={{ type: 'spring' }} onClick={() => {
                    if (open){
                        setOpen(false)
                    } else {
                        setOpen(true)
                    }
                }} style={{ backgroundColor: dark? 'black' : 'white' }}>
                    <i class="fa-solid fa-bars" style={{ color: dark? 'white' : 'black' }}></i>
                </motion.button>

                <motion.nav className='navbar' style={{ visibility: open? 'visible' : 'hidden' }}>
                    <h1>Bem vindo ao meu PORTFÓLIO</h1>

                    <div className='links-nav'>
                        <motion.a whileTap={{scale: 0.7}} href="#banner">HOME</motion.a>
                        <motion.a whileTap={{scale: 0.7}} href="#projetos">PROJETOS</motion.a>
                        <motion.a whileTap={{scale: 0.7}} href="#habilidades">HABILIDADES</motion.a>
                        <motion.a whileTap={{scale: 0.7}} href="#contato">CONTATO</motion.a>
                    </div>
                    
                    <div className='buttons-nav'>
                        <motion.a whileTap={{scale: 0.7}} href='https://github.com/Uesile-Alisson' className='button-nav-1'>ExploreProjetos no GitHub</motion.a>
                        <motion.a whileTap={{scale: 0.7}} href='mailto:uesiledev@gmail.com?subject=Contato%20pelo%20Portfólio%20online.'className='button-nav-2' style={{
                        color: 'rgb(65, 97, 255)',
                        }}>Entre em Contato Comigo</motion.a>
                    </div>
                </motion.nav>

                <div className='header-inicio'>
                    <a href="#banner"><h2 style={{ color: dark? 'white' : 'black' }}>Portfólio</h2></a>
                </div>

                <div className='header-meio'>
                    <a style={styleDark()} href="#banner">Home</a>
                    <a style={styleDark()} href="#projetos">Projetos</a>
                    <a style={styleDark()} href="#habilidades">Habilidades</a>
                    <a style={styleDark()} href="#contato">Contato</a>
                </div>

                <div className='header-end'>
                    <input type="checkbox" id='chk' onChange={(e) => {setDark(e.target.checked)}} />
                    <label htmlFor="chk" className='switch'>
                        <span className='slider'></span>
                    </label>
                </div>
            </motion.header>

            <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} id='banner' >
                <img className='svg' src={importAssets.svg} alt="svg" style={{
                    display: dark? 'block' : 'none'
                }}/>
                <img className='svg' src={importAssets.svg_escuro} alt="svg" style={{
                    display: dark? 'none' : 'block'
                }}/>
                <img className='img-banner' src={importAssets.banner} alt="code" style={{
                    display: dark? 'none' : 'block'
                }}/>
                <img className='img-banner' src={importAssets.banner_escuro} alt="code" style={{
                    display: dark? 'block' : 'none'
                }}/>

                <div className='conteudo-banner'>
                    <h1 style={{
                        color: dark? 'white' : 'rgb(23, 33, 85)'
                    }}>Olá, eu sou o <br /><span className='destaque'>Uesile Alisson</span></h1>
                    <p style={{
                        color: dark? 'white' : 'rgb(23, 33, 85)'
                    }}>Desenvolvedor Full Stack <br />criando soluções web completas.</p>

                    <div className='buttons-banner'>
                        <motion.a whileTap={{scale: 0.6}} href='https://github.com/Uesile-Alisson' className='button-banner-1'>Explore Projetos no GitHub</motion.a>
                        <motion.a whileTap={{scale: 0.6}} href='mailto:uesiledev@gmail.com?subject=Contato%20pelo%20Portfólio%20online.' className='button-banner-2' style={{
                            color: dark? 'white' : 'rgb(23, 33, 85)'
                        }}>Entre em Contato Comigo</motion.a>
                    </div>
                </div>

                <div className='about'>
                    <h2>Quem Sou Eu</h2>
                    <p>Sou um desenvolvedor Full Stack Júnior, tenho 18 anos e estou concluindo o curso técnico em Desenvolvimento de Sistemas, com planos de iniciar a graduação em Engenharia de Software.</p>
                    <p>Tenho experiência com tecnologias como HTML, CSS, JavaScript, React, Node.js, PostgreSQL, MySQL, Flask, Django, C# e .NET, além de conhecimentos em Git, GitHub, Stripe, Arduino e ESP32. Já desenvolvi projetos web, desktop e embarcados, sempre buscando aprender novas tecnologias e evoluir como profissional.</p>
                    <p>Atualmente, procuro uma oportunidade de estágio para aplicar meus conhecimentos na prática e crescer na área de tecnologia.</p>
                </div>
                
            </motion.div>

            <motion.div id='projetos' initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}>
                <div className='blur' onClick={fechar} style={{ visibility: aberto? 'visible' : 'hidden' }}></div>
                <h1>Projetos</h1>
                
                <div className='projects'>
                    {cards.map((p) => (
                        <motion.div onClick={() => {setCardAtivo(p.id), setAberto(true)}} id='card-min' key={p.id} style={{
                            backgroundColor: dark? 'rgb(51, 131, 252)' : ''
                        }} whileTap={{scale: 0.8}} whileHover={{scale: 1.2}}>
                            <div className='capa'>
                                <h3>{p.titulo}</h3>
                            </div>
                            <img src={p.img} alt={p.alt} />

                            <div className='corpo-card' style={{
                                backgroundColor: dark? 'rgb(71, 71, 71)' : '',
                                
                            }}>
                                <h3>{p.titulo}</h3>
                                <p>{p.subTitulo}</p>

                                <div className='spans'>
                                    {p.keys.map((tech, index) => (
                                        <span key={index} className={dark? 'hacks dark' : 'hacks'}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {cards.map((p) => (
                        cardAtivo === p.id && (
                            <div key={p.id} id='card-max' style={{ visibility: aberto? 'visible' : 'hidden' }}>
                                <div className='left'>
                                    <iframe className='video' src={p.mp4} width='100%' height="100%" title={p.titulo} allowFullScreen></iframe>
                                
                                    <div className='left-button'>
                                        <a className='button-left-1' href="">Acessar Projeto no GitHub</a>
                                    
                                        {p.linkOn && (
                                            <a className='button-left-2' href={p.linkOn}>Acessar projeto</a>
                                        )}
                                    </div>                                
                                </div>

                                <div className='right'>
                                    <motion.button className='button-fechar' onClick={() => {
                                        if (aberto) {
                                            setAberto(false)
                                        } else {
                                            return
                                        }
                                    }}>
                                        <motion.i class="fa-solid fa-circle-xmark" whileTap={{ scale: 0.7 }}></motion.i>
                                    </motion.button>
                                    

                                    <h2>{p.titulo}</h2>
                                
                                    <div className='descricao'>
                                        {p.descricao.map((tech, index) => (
                                            <p key={index}>{tech}</p>
                                        ))}
                                    </div>

                                    <span>{p.data}</span>

                                    <div className='right-button'>
                                        <a className='button-right-1' href="">Acessar Projeto no GitHub</a>
                                    
                                        {p.linkOn && (
                                            <a className='button-right-2' href={p.linkOn}>Acessar projeto</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </motion.div>

            <motion.div id='habilidades' initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}>
                <h1>Habilidades</h1>

                <div className='cards-skils'>
                    {skils.map((s) => (
                        <div className='card-skils' style={{
                            backgroundColor: dark? 'rgb(54, 54, 54)' : ''
                        }}>
                            <h3>{s.nome}</h3>
                            <img src={s.img} alt="logo"/>
                        </div>
                    ))}
                    
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} id='contato'>
                <h1>Contatos</h1>

                <div className='cards-contact'>
                    <div className='card-contact'>
                        <a href="mailto:uesiledev@gmail.com?subject=Contato%20pelo%20Portfólio%20online.">
                            <i class="fa-solid fa-envelope"></i>
                            <h2 style={{
                                color: dark? 'white' : ''
                            }}>Email</h2>
                            <h3>uesiledev@gmail.com</h3>
                        </a>
                    </div>

                    <div className='card-contact'>
                        <a href="https://wa.me/5531995063566?text=Olá%20,gostaria%20de%20falar%20com%20você.">
                            <i class="fa-solid fa-phone"></i>
                            <h2 style={{
                                color: dark? 'white' : ''
                            }}>Telefone</h2>
                            <h3>(31) 99506-3566</h3>
                        </a>
                    </div>

                    <div className='card-contact'>
                        <a href="https://github.com/Uesile-Alisson">
                            <i class="fa-brands fa-github"></i>
                            <h2 style={{
                                color: dark? 'white' : ''
                            }}>GitHub</h2>
                            <h3>@Uesile-Alisson</h3>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
        </body>
    )
}

export default Home