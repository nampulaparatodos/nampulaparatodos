       // Dados dos prestadores
        const prestadores = [
            {
                nome: "Amina Abdul",
                categoria: "Costura",
                avaliacao: 4.8,
                localizacao: "Bairro Mutuanha",
                descricao: "Costureira experiente com mais de 2 anos de mercado. Faço ajustes, roupas sob medida e consertos.",
                icone: "fas fa-tshirt",
                cor: "#1a73e8",
                corFundo: "#e3f2fd",
                telefone: "+258847791199"
            },
            {
                nome: "Carlos Alberto",
                categoria: "Canalização",
                avaliacao: 4.9,
                localizacao: "Bairro Central",
                descricao: "Especialista em reparos hidráulicos residenciais e comerciais. Atendo emergências 24 horas.",
                icone: "fas fa-faucet",
                cor: "#34a853",
                corFundo: "#e8f5e9",
                telefone: "+258847791199"
            },
            {
                nome: "Ana & Filhos",
                categoria: "Alimentação",
                avaliacao: 5.0,
                localizacao: "Bairro Namicopo",
                descricao: "Comida caseira tradicional com ingredientes frescos. Entrega rápida em toda Nampula.",
                icone: "fas fa-utensils",
                cor: "#f9ab00",
                corFundo: "#fff3e0",
                telefone: "+258847791199"
            },
            {
                nome: "António Massingue",
                categoria: "Reparação de Celulares",
                avaliacao: 4.7,
                localizacao: "Muhala Expansão",
                descricao: "Especialista em conserto de smartphones, tablets e notebooks. Peças originais e garantia.",
                icone: "fas fa-mobile-alt",
                cor: "#e91e63",
                corFundo: "#fce4ec",
                telefone: "+258847791199"
            },
            {
                nome: "José Mário",
                categoria: "Carpintaria",
                avaliacao: 4.9,
                localizacao: "Bairro Napipine",
                descricao: "Móveis sob medida, portas, janelas e reparos em madeira. Qualidade e pontualidade garantidas.",
                icone: "fas fa-hammer",
                cor: "#5c6bc0",
                corFundo: "#e3f2fd",
                telefone: "+258847791199"
            },
            {
                nome: "Transporte Mukurua",
                categoria: "Transporte",
                avaliacao: 4.8,
                localizacao: "Bairro Muatala",
                descricao: "Transporte seguro e confortável para qualquer ponto de Nampula. Preços acessíveis e motoristas experientes.",
                icone: "fas fa-car",
                cor: "#43a047",
                corFundo: "#e8f5e9",
                telefone: "+258847791199"
            },
            {
                nome: "Isabela Costa",
                categoria: "Limpeza",
                avaliacao: 4.6,
                localizacao: "Bairro Central",
                descricao: "Serviços de limpeza residencial e comercial com produtos ecológicos. Profissional e pontual.",
                icone: "fas fa-broom",
                cor: "#795548",
                corFundo: "#efebe9",
                telefone: "+258847791199"
            },
            {
                nome: "Pedro Electricista",
                categoria: "Electricidade",
                avaliacao: 4.9,
                localizacao: "Bairro Namicopo",
                descricao: "Instalações e reparos elétricos residenciais e comerciais. Trabalho com segurança e garantia.",
                icone: "fas fa-bolt",
                cor: "#ff9800",
                corFundo: "#fff3e0",
                telefone: "+258847791199"
            },
           
];

        // Alternar menu mobile
        const botaoMenuMobile = document.querySelector('.botao-menu-mobile');
        const menuNavegacao = document.querySelector('.menu-navegacao');
        const botoesAutenticacao = document.querySelector('.botoes-autenticacao');
        
        botaoMenuMobile.addEventListener('click', () => {
            menuNavegacao.classList.toggle('ativo');
            botoesAutenticacao.classList.toggle('ativo');
            
            // Mudar ícone
            const icone = botaoMenuMobile.querySelector('i');
            if (icone.classList.contains('fa-bars')) {
                icone.classList.replace('fa-bars', 'fa-times');
            } else {
                icone.classList.replace('fa-times', 'fa-bars');
            }
        });
        
// Formulário newsletter com envio para email
document.getElementById('form-newsletter').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const botao = document.getElementById('botao-inscrever');
    const email = document.getElementById('email-newsletter').value;
    const mensagemStatus = document.getElementById('mensagem-status');
    

    if (!email || !email.includes('@')) {
        mostrarMensagem('Por favor, insira um email válido.', 'erro');
        return;
    }

    try {
        // Mostrar
        botao.disabled = true;
        botao.innerHTML = 'Enviando...';
        
        // Enviar para o Formspree
        const response = await fetch('https://formspree.io/f/movwyzpz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                _subject: 'Novo inscrito na newsletter' 
            })
        });

        if (response.ok) {
            mostrarMensagem('✅ Obrigado por se inscrever! Você receberá nossas atualizações em breve.', 'sucesso');
            document.getElementById('email-newsletter').value = '';
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Erro no servidor');
        }
    } catch (error) {
        mostrarMensagem('⚠️ Ocorreu um erro. Por favor, tente novamente mais tarde.', 'erro');
        console.error('Erro:', error);
    } finally {
        botao.disabled = false;
        botao.innerHTML = 'Inscrever';
    }
});

function mostrarMensagem(texto, tipo) {
    const mensagemStatus = document.getElementById('mensagem-status');
    mensagemStatus.textContent = texto;
    mensagemStatus.style.display = 'block';
    
    // Estilização baseada no tipo
    mensagemStatus.style.backgroundColor = tipo === 'sucesso' 
        ? 'rgba(40, 167, 69, 0.1)' 
        : 'rgba(220, 53, 69, 0.1)';
    mensagemStatus.style.border = tipo === 'sucesso' 
        ? '1px solid var(--sucesso)' 
        : '1px solid var(--erro)';
    mensagemStatus.style.color = tipo === 'sucesso' 
        ? 'var(--sucesso)' 
        : 'var(--erro)';

    // Esconder após 5 segundos
    setTimeout(() => {
        mensagemStatus.style.display = 'none';
    }, 5000);
}
        
        // Rolagem para âncoras
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Fechar o menu mobile
                if (menuNavegacao.classList.contains('ativo')) {
                    menuNavegacao.classList.remove('ativo');
                    botoesAutenticacao.classList.remove('ativo');
                    botaoMenuMobile.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
                
                const target = this.getAttribute('href');
                if (target === '#') {
                    // Rolar topo
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    document.querySelector(target).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Controle de e registro
        const registroOverlay = document.getElementById('registroOverlay');
        const fecharRegistro = document.getElementById('fecharRegistro');
        const botaoCancelar = document.getElementById('botaoCancelar');
        const formularioRegistro = document.getElementById('formularioRegistro');
        const botaoEnviar = document.getElementById('botaoEnviar');
        const spinner = document.getElementById('spinner');
        const textoBotao = document.getElementById('textoBotao');
        const mensagemFormulario = document.getElementById('mensagemFormulario');
        
        // Abrir registro
        document.querySelectorAll('#botaoRegistrarHeader, #botaoRegistrarHero, #botaoRegistrarCTA').forEach(botao => {
            botao.addEventListener('click', (e) => {
                e.preventDefault();
                registroOverlay.classList.add('ativo');
                document.body.style.overflow = 'hidden';
                // Resetar o formulário e mensagens
                formularioRegistro.reset();
                mensagemFormulario.style.display = 'none';
            });
        });
        
        // Fechar registro
        function fecharOverlay() {
            registroOverlay.classList.remove('ativo');
            document.body.style.overflow = 'auto';
            // Resetar to botão
            botaoEnviar.disabled = false;
            spinner.style.display = 'none';
            textoBotao.style.display = 'block';
        }
        
        fecharRegistro.addEventListener('click', fecharOverlay);
        botaoCancelar.addEventListener('click', fecharOverlay);
        
        // Fechar overlay clicando fora
        registroOverlay.addEventListener('click', (e) => {
            if (e.target === registroOverlay) {
                fecharOverlay();
            }
        });
        
        // Enviar formulário de registro
        formularioRegistro.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validar campos obltotio
            const camposObrigatorios = formularioRegistro.querySelectorAll('[required]');
            let valido = true;
            
            camposObrigatorios.forEach(campo => {
                if (!campo.value.trim()) {
                    campo.style.borderColor = 'var(--erro)';
                    campo.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.2)';
                    valido = false;
                } else {
                    campo.style.borderColor = '';
                    campo.style.boxShadow = '';
                }
            });
            
            if (!valido) {
                mostrarMensagem('Por favor, preencha todos os campos obrigatórios.', 'erro');
                return;
            }
            
            // Mostrar  desabilitar botão
            botaoEnviar.disabled = true;
            spinner.style.display = 'block';
            textoBotao.style.display = 'none';
            
            try {
                const formData = new FormData(formularioRegistro);
                
                // Enviar usando Formspree
                const response = await fetch(formularioRegistro.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Sucesso
                    mostrarMensagem('Cadastro enviado com sucesso! Seu perfil será analisado e em breve estará disponível na plataforma.', 'sucesso');
                    formularioRegistro.reset();
                    
                    // Fechar o após 3 segundos
                    setTimeout(() => {
                        fecharOverlay();
                    }, 3000);
                } else {
                    // Erro
                    mostrarMensagem('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.', 'erro');
                }
            } catch (error) {
                // Erro de rede
                mostrarMensagem('Erro de conexão. Por favor, verifique sua internet e tente novamente.', 'erro');
            } finally {
                // Restaurar es
                botaoEnviar.disabled = false;
                spinner.style.display = 'none';
                textoBotao.style.display = 'block';
            }
        });
        
        // Função r mensagens de feedback
        function mostrarMensagem(texto, tipo) {
            mensagemFormulario.textContent = texto;
            mensagemFormulario.className = 'mensagem-formulario';
            
            if (tipo === 'sucesso') {
                mensagemFormulario.classList.add('mensagem-sucesso');
            } else {
                mensagemFormulario.classList.add('mensagem-erro');
            }
            
            mensagemFormulario.style.display = 'block';
            
            // Rolar para a mensagem
            mensagemFormulario.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Função para gerar cartões de prestadores
        function gerarCartoesPrestadores(prestadores) {
            const container = document.getElementById('container-prestadores');
            container.innerHTML = '';
            
            prestadores.forEach(prestador => {
                const cartao = document.createElement('div');
                cartao.className = 'cartao-prestador';
                cartao.innerHTML = `
                    <div class="imagem-prestador" style="background-color: ${prestador.corFundo};">
                        <i class="${prestador.icone}" style="color: ${prestador.cor};"></i>
                    </div>
                    <div class="info-prestador">
                        <div class="cabecalho-prestador">
                            <h3 class="nome-prestador">${prestador.nome}</h3>
                            <div class="avaliacao-prestador">
                                <i class="fas fa-star"></i>
                                <span>${prestador.avaliacao}</span>
                            </div>
                        </div>
                        <div class="categoria-prestador">${prestador.categoria}</div>
                        <p class="descricao-prestador">${prestador.descricao}</p>
                        <div class="contato-prestador">
                            <div class="localizacao-prestador">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${prestador.localizacao}</span>
                            </div>
                            <div class="botoes-contato">
                                <a href="tel:${prestador.telefone}" class="botao-ligar">
                                    <i class="fas fa-phone"></i> Ligar
                                </a>
                                <a href="https://wa.me/${prestador.telefone}" class="botao-contato" target="_blank">
                                    <i class="fab fa-whatsapp"></i> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(cartao);
            });
        }

        // Filtrar prestadores por categoria
        function filtrarPrestadoresPorCategoria(categoria) {
            if (categoria === 'todos') {
                return prestadores;
            }
            return prestadores.filter(prestador => prestador.categoria === categoria);
        }

        // Ordenar prestadores
        function ordenarPrestadores(prestadores, ordenarPor) {
            return [...prestadores].sort((a, b) => {
                if (ordenarPor === 'avaliacao') {
                    return b.avaliacao - a.avaliacao;
                } else if (ordenarPor === 'recente') {
                    // Para  por nome
                    return a.nome.localeCompare(b.nome);
                }
                return 0; // Padrão: sem ordenação
            });
        }

        // Buscar prestadores
        function buscarPrestadores(prestadores, consulta) {
            if (!consulta) return prestadores;
            const consultaMinuscula = consulta.toLowerCase();
            return prestadores.filter(prestador => 
                prestador.nome.toLowerCase().includes(consultaMinuscula) || 
                prestador.categoria.toLowerCase().includes(consultaMinuscula) ||
                prestador.descricao.toLowerCase().includes(consultaMinuscula)
            );
        }

        // Atualizar exibição de prestadores
        function atualizarExibicaoPrestadores() {
            const categoria = document.getElementById('filtro-categoria').value;
            const ordenarPor = document.getElementById('selecao-ordenacao').value;
            const consultaBusca = document.getElementById('campo-busca').value.toLowerCase();
            
            let prestadoresFiltrados = filtrarPrestadoresPorCategoria(categoria);
            prestadoresFiltrados = buscarPrestadores(prestadoresFiltrados, consultaBusca);
            prestadoresFiltrados = ordenarPrestadores(prestadoresFiltrados, ordenarPor);
            
            gerarCartoesPrestadores(prestadoresFiltrados);
        }

        // Filtrar por clique nas categorias
        document.querySelectorAll('.cartao-categoria').forEach(cartao => {
            cartao.addEventListener('click', () => {
                const categoria = cartao.getAttribute('data-categoria');
                document.getElementById('filtro-categoria').value = categoria;
                atualizarExibicaoPrestadores();
                
                // Rolar para a seção de prestadores
                document.getElementById('prestadores').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Inicializar prestadores
        gerarCartoesPrestadores(prestadores);

        // Event listeners para filtros
        document.getElementById('filtro-categoria').addEventListener('change', atualizarExibicaoPrestadores);
        document.getElementById('selecao-ordenacao').addEventListener('change', atualizarExibicaoPrestadores);
        document.getElementById('campo-busca').addEventListener('input', atualizarExibicaoPrestadores);
        
        // Animação ao rolar
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('mostrar');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.cartao-categoria, .cartao-prestador, .passo, .cartao-depoimento, .cartao-loja').forEach(el => {
            el.classList.add('animar-ao-rolar');
            observador.observe(el);
        });