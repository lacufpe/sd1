// js/chart-loader.js
document.addEventListener('DOMContentLoaded', function() {
  // Aguardar o Reveal.js carregar
  Reveal.addEventListener('ready', function() {
    initializeCharts();
  });
  
  // Reagir a mudanças de slide
  Reveal.addEventListener('slidechanged', function(event) {
    initializeCharts();
  });
  
  function initializeCharts() {
    // Procurar por containers de gráfico na página atual
    const chartContainers = document.querySelectorAll('.computer-evolution-chart');
    
    chartContainers.forEach(container => {
      // Verificar se o container está visível (slide atual)
      const slide = container.closest('.present');
      if (slide && !container.hasAttribute('data-initialized')) {
        // Marcar como inicializado
        container.setAttribute('data-initialized', 'true');
        
        // Inicializar o gráfico
        window.initComputerChart(container.id);
      }
    });
  }
});