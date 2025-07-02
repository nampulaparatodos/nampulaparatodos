       // Dados de produtos
        const produtos = [
            {
                id: 1,
                nome: "iphone X",
                categoria: "Acessórios",
                preco: 9000,
                descricao: "64GB Bateria 94%",
                vendedor: "Aple Store NPL",
                telefone: "+258847791199",
                bairro: "Mercado Central",
                imagem: "iphoneX.jpg"
            },
            {
                id: 2,
                nome: "Iphone 13 Simple",
                categoria: "Acessórios",
                preco: 30000,
                descricao: "128gb Bateria 100%",
                vendedor: "Aple Store NPL",
                telefone: "+258847791199",
                bairro: "Mercado Central",
                imagem: "iphone13.jpg"
            },
            {
                id: 3,
                nome: "Sapato Tamanho 39",
                categoria: "Sapatos",
                preco: 1200,
                descricao: "",
                vendedor: "Juma Fashion",
                telefone: "+258847791199",
                bairro: "Napipine",
                imagem: "sapato1200.jpg"
            },
            {
                id: 4,
                nome: "Bota ",
                categoria: "Sapatos",
                preco: 1700,
                descricao: "",
                vendedor: "Juma Store",
                telefone: "+258847791199",
                bairro: "Napipine",
                imagem: "Bota1700.jpg"
            },
            {
                id: 5,
                nome: "Iphone 7 plus",
                categoria: "Acessórios",
                preco: 8000,
                descricao: "Face ID On, Bateria 100%",
                vendedor: "Aple Store NPL",
                telefone: "+258847791199",
                bairro: "Mercado Central",
                imagem: "iphone7plus.jpg"
            },
            {
                id: 6,
                nome: "Relogio Casio",
                categoria: "Acessórios",
                preco: 1500,
                descricao: "",
                vendedor: "Juma Store",
                telefone: "+258847791199",
                bairro: "Napipine",
                imagem: "RelógioCasio1500.jpg"
            },
            {
                id: 7,
                nome: "Iphone X",
                categoria: "Acessórios",
                preco: 9999,
                descricao: "64gb 95%Face ID of",
                vendedor: "Aple Store NPL",
                telefone: "+258847791199",
                bairro: "Mercado Central",
                imagem: "iphone10.jpg"
            },
            {
                id: 8,
                nome: "Aparelho de Tensao Arterial",
                categoria: "Acessórios",
                preco: 2000,
                descricao: "",
                vendedor: "Juma Store",
                telefone: "+258847791199",
                bairro: "Napipine",
                imagem: "AparelhoTensaoArterial2000.jpg"
            },
            
        ];

        // Categorias disponíveis
        const categorias = ["Todos", "Roupas", "Artesanato", "Sapatos", "Alimentos", "Acessórios"];

        // Função para gerar os produtos
        function gerarProdutos(produtosParaExibir) {
            const container = document.getElementById('container-produtos');
            container.innerHTML = '';
            
            produtosParaExibir.forEach(produto => {
                const produtoElement = document.createElement('div');
                produtoElement.className = 'cartao-produto';
                produtoElement.innerHTML = `
                    <div class="imagem-produto">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                    </div>
                    <div class="info-produto">
                        <div class="categoria-produto">${produto.categoria}</div>
                        <h3 class="nome-produto">${produto.nome}</h3>
                        <div class="preco-produto">${produto.preco} MZN</div>
                        <div class="vendedor-info">
                            <i class="fas fa-store"></i> ${produto.vendedor}
                        </div>
                        <div class="localizacao-vendedor">
                            <i class="fas fa-map-marker-alt"></i> ${produto.bairro}
                        </div>
                        <div class="botoes-produto">
                            <a href="tel:${produto.telefone}" class="botao botao-ligar">
                                <i class="fas fa-phone"></i> Ligar
                            </a>
                            <a href="https://wa.me/${produto.telefone}" target="_blank" class="botao botao-whatsapp">
                                <i class="fab fa-whatsapp"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                container.appendChild(produtoElement);
            });
        }

        // Função para gerar as categorias
        function gerarCategorias() {
            const container = document.getElementById('categorias-container');
            
            categorias.forEach(categoria => {
                const botao = document.createElement('button');
                botao.className = 'botao-categoria';
                botao.textContent = categoria;
                botao.dataset.categoria = categoria;
                
                if (categoria === "Todos") {
                    botao.classList.add('ativo');
                }
                
                botao.addEventListener('click', () => {
                  
                    document.querySelectorAll('.botao-categoria').forEach(btn => {
                        btn.classList.remove('ativo');
                    });
                    
                    // Adicionar classe
                    botao.classList.add('ativo');
                    
                    // Filtrar produtos
                    filtrarProdutos(categoria);
                });
                
                container.appendChild(botao);
            });
        }

        // Função para filtrar produtos
        function filtrarProdutos(categoria) {
            const termoBusca = document.getElementById('campo-busca').value.toLowerCase();
            
            let produtosFiltrados;
            
            if (categoria === "Todos") {
                produtosFiltrados = produtos;
            } else {
                produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
            }
            
            // Aplicar filtro de busca
            if (termoBusca) {
                produtosFiltrados = produtosFiltrados.filter(produto => 
                    produto.nome.toLowerCase().includes(termoBusca) ||
                    produto.descricao.toLowerCase().includes(termoBusca) ||
                    produto.vendedor.toLowerCase().includes(termoBusca) ||
                    produto.bairro.toLowerCase().includes(termoBusca)
                );
            }
            
            gerarProdutos(produtosFiltrados);
        }

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
        
        // Evento de busca
        document.getElementById('campo-busca').addEventListener('input', () => {
            const categoriaAtiva = document.querySelector('.botao-categoria.ativo').dataset.categoria;
            filtrarProdutos(categoriaAtiva);
        });
  
window.addEventListener('DOMContentLoaded', () => {
    produtos.push({
        id: 9,
        nome: "Bolo Caseiro",
        categoria: "Alimentos",
        preco: 200,
        descricao: "",
        vendedor: "Sabores de Domiltia",
        telefone: "+258842223344",
        bairro: "Mutaunha",
        imagem: "bolo1.jpg"
    },
    {id: 10,
        nome: "Tecno POP 9",
        categoria: "Acessórios",
        preco: 9000,
        descricao: "Celular amado",
        vendedor: "Aple Store NPL",
        telefone: "+258842223344",
        bairro: "Mercado Central",
        imagem: "tecnopop9.jpg"
    },    
    {id: 11,
        nome: "Pasta",
        categoria: "Acessórios",
        preco: 1000,
        descricao: "",
        vendedor: "Helder Limao",
        telefone: "+258842223344",
        bairro: "Mercado Central",
        imagem: "Pasta1000.jpg"
    }, 
    {id: 12,
        nome: "Pasta",
        categoria: "Acessórios",
        preco: 1000,
        descricao: "",
        vendedor: "Helder Limao",
        telefone: "+258842223344",
        bairro: "Mercado Central",
        imagem: "pasta10001.jpg"
    }, 
    {id: 13,
        nome: "Pasta",
        categoria: "Acessórios",
        preco: 1500,
        descricao: "",
        vendedor: "Helder Limao",
        telefone: "+258842223344",
        bairro: "Mercado Central",
        imagem: "Pasta1500.jpg"
    }, 
    {id: 14,
        nome: "Pasta",
        categoria: "Acessórios",
        preco: 1500,
        descricao: "",
        vendedor: "Helder Limao",
        telefone: "+258842223344",
        bairro: "Mercado Central",
        imagem: "Pasta15001.jpg"
    },    
    );

    gerarCategorias();
    gerarProdutos(produtos);
});

