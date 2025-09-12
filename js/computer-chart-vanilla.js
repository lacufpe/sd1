// js/computer-chart.js
class ComputerEvolutionChart {
  constructor(containerId) {
    this.containerId = containerId;
    this.currentChart = 'performance';
    
    this.data = [
      { year: 1951, name: "UNIVAC I", size: 28.3, power: 125000, performance: 2000, memory: 48, performancePrice: 1 },
      { year: 1964, name: "IBM S/360 model 50", size: 1.70, power: 10000, performance: 500000, memory: 64, performancePrice: 263 },
      { year: 1965, name: "PDP-8", size: 0.23, power: 500, performance: 330000, memory: 4, performancePrice: 10855 },
      { year: 1976, name: "Cray-1", size: 1.64, power: 60000, performance: 166000000, memory: 32000, performancePrice: 21842 },
      { year: 1981, name: "IBM PC", size: 0.028, power: 150, performance: 240000, memory: 256, performancePrice: 42105 },
      { year: 1991, name: "HP 9000/750", size: 0.057, power: 500, performance: 50000000, memory: 16384, performancePrice: 3556188 },
      { year: 1996, name: "Intel PPro PC (200 MHz)", size: 0.057, power: 500, performance: 400000000, memory: 16384, performancePrice: 47846890 },
      { year: 2003, name: "Intel Pentium 4 PC (3.0 GHz)", size: 0.057, power: 500, performance: 6000000000, memory: 262144, performancePrice: 1875000000 },
      { year: 2007, name: "AMD Barcelona PC (2.5 GHz)", size: 0.057, power: 250, performance: 20000000000, memory: 2097152, performancePrice: 12500000000 },
      { year: 2010, name: "Intel Core i7-980X", size: 0.014, power: 130, performance: 107000000000, memory: 8388608, performancePrice: 107107107 },
      { year: 2013, name: "Intel Core i7-4770K", size: 0.0085, power: 84, performance: 200000000000, memory: 33554432, performancePrice: 573065902 },
      { year: 2017, name: "AMD Ryzen 7 1800X", size: 0.0057, power: 95, performance: 1300000000000, memory: 67108864, performancePrice: 2605210420 },
      { year: 2019, name: "Intel Core i9-9900K", size: 0.0043, power: 95, performance: 2200000000000, memory: 134217728, performancePrice: 4508196721 },
      { year: 2020, name: "AMD Ryzen 9 5950X", size: 0.0028, power: 105, performance: 4500000000000, memory: 134217728, performancePrice: 5631789474 },
      { year: 2022, name: "Intel Core i9-12900K", size: 0.0023, power: 125, performance: 6800000000000, memory: 268435456, performancePrice: 11545988258 },
      { year: 2023, name: "AMD Ryzen 9 7950X", size: 0.0020, power: 170, performance: 9500000000000, memory: 268435456, performancePrice: 13590844921 },
      { year: 2024, name: "Intel Core i9-14900K", size: 0.0017, power: 125, performance: 12000000000000, memory: 536870912, performancePrice: 20373785087 },
      { year: 2025, name: "Estimated Next-Gen CPU", size: 0.0014, power: 150, performance: 18000000000000, memory: 1073741824, performancePrice: 27692307692 }
    ];

    this.chartConfig = {
      performance: { key: 'performance', color: '#2563eb', name: 'Performance (ops/sec)', scale: 'log' },
      performancePrice: { key: 'performancePrice', color: '#dc2626', name: 'Performance/Preço', scale: 'log' },
      power: { key: 'power', color: '#16a34a', name: 'Potência (Watts)', scale: 'linear' },
      memory: { key: 'memory', color: '#7c3aed', name: 'Memória (KB)', scale: 'log' },
      size: { key: 'size', color: '#ea580c', name: 'Tamanho (m³)', scale: 'log' }
    };
  }

  formatNumber(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
  }

  formatMemory(kb) {
    if (kb >= 1024 * 1024) return (kb / (1024 * 1024)).toFixed(1) + 'GB';
    if (kb >= 1024) return (kb / 1024).toFixed(1) + 'MB';
    return kb + 'KB';
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="computer-chart">
        <div class="chart-controls">
          <button class="chart-btn active" data-chart="performance">Performance</button>
          <button class="chart-btn" data-chart="performancePrice">Performance/Preço</button>
          <button class="chart-btn" data-chart="power">Potência</button>
          <button class="chart-btn" data-chart="memory">Memória</button>
          <button class="chart-btn" data-chart="size">Tamanho</button>
        </div>
        <canvas id="chart-canvas" width="1200" height="720"></canvas>
        <div id="chart-tooltip" class="chart-tooltip"></div>
      </div>
    `;

    this.setupEventListeners();
    this.drawChart();
  }

  setupEventListeners() {
    const buttons = document.querySelectorAll(`#${this.containerId} .chart-btn`);
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        buttons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.currentChart = e.target.dataset.chart;
        this.drawChart();
      });
    });

    const canvas = document.getElementById('chart-canvas');
    canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    canvas.addEventListener('mouseout', () => this.hideTooltip());
  }

  drawChart() {
    const canvas = document.getElementById('chart-canvas');
    const ctx = canvas.getContext('2d');
    const config = this.chartConfig[this.currentChart];
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Configurações do gráfico
    const padding = { top: 40, right: 40, bottom: 60, left: 80 };
    const chartWidth = canvas.width - padding.left - padding.right;
    const chartHeight = canvas.height - padding.top - padding.bottom;
    
    // Obter valores min/max
    const values = this.data.map(d => d[config.key]);
    const years = this.data.map(d => d.year);
    
    let minValue, maxValue;
    if (config.scale === 'log') {
      minValue = Math.log10(Math.min(...values));
      maxValue = Math.log10(Math.max(...values));
    } else {
      minValue = Math.min(...values);
      maxValue = Math.max(...values);
    }
    
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    
    // Desenhar grade
    this.drawGrid(ctx, padding, chartWidth, chartHeight);
    
    // Desenhar eixos
    this.drawAxes(ctx, padding, chartWidth, chartHeight, minYear, maxYear, minValue, maxValue, config);
    
    // Desenhar linha
    this.drawLine(ctx, padding, chartWidth, chartHeight, minYear, maxYear, minValue, maxValue, config);
    
    // Desenhar pontos
    this.drawPoints(ctx, padding, chartWidth, chartHeight, minYear, maxYear, minValue, maxValue, config);
  }

  drawGrid(ctx, padding, chartWidth, chartHeight) {
    ctx.strokeStyle = '#e5e5e5';
    ctx.lineWidth = 1;
    
    // Linhas verticais
    for (let i = 0; i <= 10; i++) {
      const x = padding.left + (chartWidth / 10) * i;
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, padding.top + chartHeight);
      ctx.stroke();
    }
    
    // Linhas horizontais
    for (let i = 0; i <= 10; i++) {
      const y = padding.top + (chartHeight / 10) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartWidth, y);
      ctx.stroke();
    }
  }

  drawAxes(ctx, padding, chartWidth, chartHeight, minYear, maxYear, minValue, maxValue, config) {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000';
    
    // Eixo X
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + chartHeight);
    ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
    ctx.stroke();
    
    // Eixo Y
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartHeight);
    ctx.stroke();
    
    // Labels do eixo X (anos)
    for (let i = 0; i <= 5; i++) {
      const year = minYear + ((maxYear - minYear) / 5) * i;
      const x = padding.left + (chartWidth / 5) * i;
      ctx.fillText(Math.round(year).toString(), x - 15, padding.top + chartHeight + 20);
    }
    
    // Labels do eixo Y
    for (let i = 0; i <= 5; i++) {
      const value = minValue + ((maxValue - minValue) / 5) * i;
      const y = padding.top + chartHeight - (chartHeight / 5) * i;
      let label;
      
      if (config.scale === 'log') {
        const actualValue = Math.pow(10, value);
        label = config.key === 'memory' ? this.formatMemory(actualValue) : this.formatNumber(actualValue);
      } else {
        label = config.key === 'memory' ? this.formatMemory(value) : this.formatNumber(value);
      }
      
      ctx.fillText(label, padding.left - 70, y + 4);
    }
    
    // Título do eixo Y
    ctx.save();
    ctx.translate(20, padding.top + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = '14px Arial';
    ctx.fillText(config.name, 0, 0);
    ctx.restore();
  }

  drawLine(ctx, padding, chartWidth, chartHeight, minYear, maxYear, minValue, maxValue, config) {
    ctx.strokeStyle = config.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    this.data.forEach((point, index) => {
      const x = padding.left + ((point.year - minYear) / (maxYear - minYear)) * chartWidth;
      let value = point[config.key];
      
      if (config.scale === 'log') {
        value = Math.log10(value);
      }
      
      const y = padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
  }

  drawPoints(ctx, padding, chartWidth, chartHeight, minYear, maxYear, minValue, maxValue, config) {
    ctx.fillStyle = config.color;
    
    this.data.forEach((point) => {
      const x = padding.left + ((point.year - minYear) / (maxYear - minYear)) * chartWidth;
      let value = point[config.key];
      
      if (config.scale === 'log') {
        value = Math.log10(value);
      }
      
      const y = padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });
  }

  handleMouseMove(e) {
    const canvas = document.getElementById('chart-canvas');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width)
    const y = e.clientY - rect.top;
    
    // Encontrar o ponto mais próximo
    const padding = { top: 40, right: 40, bottom: 60, left: 80 };
    const chartWidth = canvas.width - padding.left - padding.right;
    const chartHeight = canvas.height - padding.top - padding.bottom;
    
    const years = this.data.map(d => d.year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    
    let closestPoint = null;
    let minDistance = Infinity;
    
    this.data.forEach((point) => {
      const pointX = padding.left + ((point.year - minYear) / (maxYear - minYear)) * chartWidth;
      const distance = Math.abs(x - pointX);
      
      if (distance < minDistance && distance < 20) {
        minDistance = distance;
        closestPoint = point;
      }
    });
    
    if (closestPoint) {
      this.showTooltip(e.clientX, e.clientY, closestPoint);
    } else {
      this.hideTooltip();
    }
  }

  showTooltip(x, y, point) {
    const tooltip = document.getElementById('chart-tooltip');
    const config = this.chartConfig[this.currentChart];
    
    let valueText;
    if (config.key === 'memory') {
      valueText = this.formatMemory(point[config.key]);
    } else if (config.key === 'power') {
      valueText = this.formatNumber(point[config.key]) + 'W';
    } else if (config.key === 'size') {
      valueText = point[config.key] + ' m³';
    } else {
      valueText = this.formatNumber(point[config.key]);
    }
    
    tooltip.innerHTML = `
      <div class="tooltip-title">${point.name} (${point.year})</div>
      <div class="tooltip-value">${config.name}: ${valueText}</div>
    `;
    
    tooltip.style.left = x + 10 + 'px';
    tooltip.style.top = y - 10 + 'px';
    tooltip.style.display = 'block';
  }

  hideTooltip() {
    const tooltip = document.getElementById('chart-tooltip');
    tooltip.style.display = 'none';
  }
}

// Função global para inicializar o gráfico
window.initComputerChart = function(containerId) {
  const chart = new ComputerEvolutionChart(containerId);
  chart.render();
};