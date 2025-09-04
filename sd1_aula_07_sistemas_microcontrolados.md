---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url("https://marp.app/assets/hero-background.svg")
---

# Introdução aos Sistemas Microcontrolados

---

## Introdução aos Sistemas Embarcados

### O que é um sistema embarcado

* Antes de Definirmos o que é um sistema microcontrolado, é interessante definirmos o que é um sistema embarcado: 
    * Sistema eletrônico para um propósito específico.
    * Seu projeto mistura Hardware (Eletrônica) + Software (Computação) + Mecânica (Limitações físicas/Interface com o mundo).
    * Parte de um sistema maior.
    * Se diferencia dos computadores de uso geral.

---

* Uma classe específica de sistema computadorizado. 

---

### Classes de computadores quanto a sua aplicação

* **Computador pessoal (PC)**: um computador projetado para ser usado por um indivíduo, geralmente incorporando um monitor, um teclado e um mouse.
* **Servidor:** um computador usado para executar programas maiores para vários usuários, muitas vezes simultaneamente, e normalmente acessado apenas através de uma rede.
* **Supercomputador:** uma classe de computadores com o mais alto desempenho e custo; eles são configurados como servidores e normalmente custam dezenas a centenas de milhões de dólares.
* **Computador embarcado:** um computador dentro de outro dispositivo usado para executar um aplicativo predeterminado ou coleção de softwares predeterminada.

---

### Heterogeneidade

* Cada Sistema Embarcado possui um hardware único ou a customização de um hardware padrão.

  * Esse hardware pode variar quanto ao uso de:
    * **Arquiteturas do processador;**
    * **Memórias;**
    * **Fontes de clock;**
    * **Fornecedores;**
    * **Periféricos de Comunicação;**
    * **Periféricos Conversores;**
    * **Alimentação;** 
    * **Coprocessadores.**

  ![SistemaEmporcado01](FIGURAS/SistemaEmbarcado01.png)
  <small>Fonte - (GARCIA, 2018).</small>

---

### Restrições

* **Restrições de Custo:** custo do projeto + fabricação + logística + assistência, concorrência (para produtos de larga escala), ou pouca demanda.
* **Restrições Dimensionais:** produtos portáteis, parte de sistemas maiores.
* **Restrições de Consumo e Autonomia:** aparelhos portáteis, sensoriamento em lugares remotos, etc. 
* **Restrições de Recursos Computacionais:** baixo processamento, pouca memória, número limitado de sensores e/ou atuadores.
* **Restrições Temporais:** Real-Time Systems.   

---

### Complexidade

* Sistemas médicos.
* Aviões e automóveis.
* Aplicações industriais.
* Alta conectividade, alta heterogeneidade.

---

## Organização de Computadores

### As partes que integram um sistema microprocessado

![organizacao](FIGURAS/organizacao.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Preço do processamento:

![historiaProcessador](FIGURAS/historiaProcessador.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Evolução da Tecnologia das Portas Lógicas:

![tecnologiaComputador](FIGURAS/tecnologiaComputador.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Válvulas - *Vacuum tube*

![vaccum](FIGURAS/vaccum.jpg)

---

### Diagrama em blocos do processo de produção de um CI:

![producaoCI](FIGURAS/producaoCI.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Método Chokhralsky de Produção de Silício:

![chmetodo](FIGURAS/chmetodo.png)
<small>Fonte - https://medium.com/@solar.dao/silicon-ingots-and-wafers-production-c75da33337a5.</small>

---

### Método Chokhralsky de Produção de Silício:

![monocristalino](FIGURAS/monocristalino.png)

<small>Fonte - https://medium.com/@solar.dao/silicon-ingots-and-wafers-production-c75da33337a5.</small>

---

### Diagrama em blocos do processo de produção de um CI:

![producaoCI](FIGURAS/producaoCI.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Chips em um *wafer*:

![dicoCI](FIGURAS/dicoCI.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Diagrama em blocos do processo de produção de um CI:

![producaoCI](FIGURAS/producaoCI.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Apple A5

![appleA5](FIGURAS/appleA5.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Abstração entre Hardware e Software:

![abstracao](FIGURAS/abstracao.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Da linguagem de programação de Alto-nível de abstração para linguagem de máquina:

![c](FIGURAS/c.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Da linguagem de programação de Alto-nível de abstração para linguagem de máquina:

![assembly](FIGURAS/assembly.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Da linguagem de programação de Alto-nível de abstração para linguagem de máquina:

![binario](FIGURAS/binario.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

## Microcontroladores

### Microcontroladores

Os microcontroladores são formados por:
* Núcleo de processamento.
* Memórias.
* Periféricos.

![SistemaEmbarcado05](FIGURAS/SistemaEmbarcado05.png)
<small>Fonte - (GARCIA, 2018).</small>

---

Os microcontroladores são formados por:
* Núcleo de processamento.
* Memórias.
* Periféricos.

![SistemaEmbarcado01](FIGURAS/SistemaEmbarcado01.png)
<small>Fonte - (GARCIA, 2018).</small>

---

### Núcleo de Processamento (CPU)

* Unidade Lógica Aritmética.
* Unidade de Controle.
* Registradores.
* Unidade de Controle de Interrupções.

![cpu](FIGURAS/cpu.png)

---

### Unidade Lógica Aritmética (ULA)

* **Primeiro desenvolvimento:** 1946 Von Neumann - Princeton - Institute for Advanced Study - IAS. 
* **Sistema Numérico:** Complemento a dois.
* **Realiza Operações simples:**
    * Aritméticas ( $+$, $-$ , $<$, $>$ , $\leq$, $\geq$, $=$ , $\neq$ ).
    * Lógicas (**OR**, **AND**, **NOT**).
    * Deslocamento (*shift, rotate*).

![ULA](FIGURAS/ULA.pdf)

---

### Unidade de Controle

É a responsável por buscas, decodificar e executar as instruções.

1. Busca a instrução na memória de programa.
2. Decodifica a instrução: 
    * A instrução utilizará a ULA? 
    * Utilizará registradores? 
    * Acessará a memória? 
3. Executa a instrução.
    * Movimentação dos dados.
    * Processamento dos dados.
    * Armazenamento dos dados.

![SistemaEmbarcado02](FIGURAS/SistemaEmbarcado2.png)
<small>Fonte - (GARCIA, 2018).</small>

---

## Arduino

* Arduino é uma plataforma de prototipagem eletrônica de hardware e software livre. 
* O projeto Arduino começou em 2005 como um programa para estudantes do **Instituto de Design de Interação Ivrea**, em Ivrea, Itália, com o objetivo de fornecer uma maneira fácil e de baixo custo para iniciantes e profissionais criarem dispositivos que interagem com seu ambiente usando sensores e atuadores.

![Arduino-uno](FIGURAS/Arduino-uno.png)
<small>Fonte - https://pt.wikipedia.org/wiki/Arduino</small>

---

* As placas do Arduino estão disponíveis comercialmente em forma pré-montada ou como esquemáticos para você fazer por você mesmo.
* Os projetos das placas Arduino usam uma variedade de microprocessadores e controladores. 
* As placas estão equipadas com conjuntos de pinos de entrada/saída digital e analógica que podem ser conectados a várias placas de expansão (*shields*) e outros circuitos.

![Arduino-uno](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Arduino_Uno_-_R3.jpg/220px-Arduino_Uno_-_R3.jpg)


---

* As placas possuem interfaces de comunicação serial (USB) que são usadas para carregar programas de computadores pessoais.
* A plataforma Arduino é programada utilizando linguagem de programação fortemente baseada em C/C++.
* O projeto Arduino fornece um ambiente de desenvolvimento integrado (IDE) baseado no projeto da linguagem Processing.

![Arduino_IDE](FIGURAS/Arduino_IDE.png)

---

## Bibliografia

* PATTERSON, David A., HENESSY, John L. ,**Computer Organization and Design ARM Edition: The Hardware Software Interface**, Elsevier, USA, ISBN: 978-0-12-801733-3, 2017.
* STADZISZ, P. C.; RENAUX, D. P. B. **In: Sistemas embarcados**, 1st. ed. Guarapuava: SBC, 2007. cap. Software Embarcado, p. 107–155.
* GARCIA, F. D., **Introdução aos sistemas embarcados e microcontroladores**, Disponível em:  https://www.embarcados.com.br/sistemas-embarcados-e-microcontroladores/, Portal Embarcados, 2018. 

