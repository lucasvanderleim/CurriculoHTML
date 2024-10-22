// Função para exibir data e hora atuais no rodapé
function exibirDataHora() {
    const footer = document.querySelector('footer span');
    const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const horaFormatada = data.toLocaleTimeString('pt-BR');
    footer.textContent += ` - Atualizado em: ${dataFormatada} ${horaFormatada}`;
  }
  
  // Função para aplicar efeito de fade-in no iframe ao carregar novo conteúdo
  function aplicarFadeIn() {
    const iframe = document.querySelector('iframe');
    iframe.style.opacity = 0; // Tornar o iframe invisível
    setTimeout(() => {
      iframe.style.opacity = 1; // Aplicar fade-in após 300ms
    }, 300);
  }
  
  // Inicializar funcionalidades ao carregar a página
  window.onload = function() {
    exibirDataHora(); // Exibir a data e hora no rodapé
  
    // Adicionar eventos de click nos links do menu para o efeito de fade-in
    const links = document.querySelectorAll('#menu a');
    links.forEach(link => {
      link.addEventListener('click', aplicarFadeIn);
    });
  };
  