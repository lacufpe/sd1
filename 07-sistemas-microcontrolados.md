# Introdução aos Sistemas Microcontrolados
### Prof. João Paulo Cerquinho Cajueiro
#### Baseado em slides de Prof. José Rodrigues de Oliveira Neto

Universidade Federal de Pernambuco  
Departamento de Engenharia Mecânica

---

## Introdução aos Sistemas Embarcados

### O que é um sistema embarcado

* Sistema eletrônico para um propósito específico.
* Hardware (Eletrônica) + Software (Computação) + Mecânica (Limitações físicas/Interface com o mundo).
* Parte de um sistema maior.
* Se diferencia dos computadores de uso geral.

---

## Uma classe específica de sistema computadorizado. 

---

### Classes de computadores quanto a sua aplicação

* **Computador pessoal (PC)**: um computador projetado para ser usado por um indivíduo, geralmente incorporando um monitor, um teclado e um mouse.
* **Servidor:** um computador usado para executar programas maiores para vários usuários, muitas vezes simultaneamente, e normalmente acessado apenas através de uma rede.
* **Supercomputador:** uma classe de computadores com o mais alto desempenho e custo; eles são configurados como servidores e normalmente custam dezenas a centenas de milhões de dólares.
* **Computador embarcado:** um computador dentro de outro dispositivo usado para executar um aplicativo predeterminado ou coleção de softwares predeterminada.

---

### Heterogeneidade

* Cada Sistema Embarcado possui um hardware único ou a customização de um hardware padrão.

<div class="columns">
<div class="column">

  * Esse hardware pode variar quanto ao uso de:
    * **Arquiteturas do processador;**
    * **Memórias;**
    * **Fontes de clock;**
    * **Fornecedores;**
    * **Periféricos de Comunicação;**
    * **Periféricos Conversores;**
    * **Alimentação;** 
    * **Coprocessadores.**
</div>
<div class="column">

  ![SistemaEmporcado01](images/muctrl/SistemaEmbarcado01.png)

  <small>Fonte - (GARCIA, 2018).</small>

</div>
</div>

---

### Restrições

* **Financeiras:** custo do projeto + fabricação + logística + assistência, concorrência (para produtos de larga escala), ou pouca demanda.
* **Dimensionais:** produtos portáteis, parte de sistemas maiores.
* **de Consumo e Autonomia:** aparelhos portáteis, sensoriamento em lugares remotos, etc. 
* **de Recursos Computacionais:** baixo processamento, pouca memória, número limitado de sensores e/ou atuadores.
* **Temporais:** Real-Time Systems.   

---

### Complexidade

* Sistemas médicos.
* Aviões e automóveis.
* Aplicações industriais.
* Alta conectividade, alta heterogeneidade.

---

## Organização de Computadores

---

### As partes que integram um sistema microprocessado

![organizacao](images/muctrl/organizacao.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

<!-- ### Preço do processamento: -->

<!-- ![historiaProcessador](images/muctrl/historiaProcessador.png) -->
<div id="computer-chart-1" class="computer-evolution-chart"></div>

<small>Fonte - (PATTERSON, 2017).</small>

---

### Evolução da Tecnologia das Portas Lógicas:

![tecnologiaComputador](images/muctrl/tecnologiaComputador.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

### Válvulas - *Vacuum tube*

![vaccum](images/muctrl/vaccum.jpg)

---

### Transistores

<div class="columns">
<div class="column">

![firsttransistor](images/replica-of-first-transistor.webp)

</div>
<div class="column">

![transistors](images/transistors1960.webp)

</div>
</div>

---

### Produção de um CI:

![producaoCI](images/muctrl/producaoCI.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

### Método Chokhralsky de Produção de Silício:

![chmetodo](images/muctrl/chmetodo.png)

<small>Fonte - https://medium.com/@solar.dao/silicon-ingots-and-wafers-production-c75da33337a5.</small>

---

### Método Chokhralsky de Produção de Silício:

![monocristalino](images/muctrl/monocristalino.png)

<small>Fonte - https://medium.com/@solar.dao/silicon-ingots-and-wafers-production-c75da33337a5.</small>

---

### Diagrama em blocos do processo de produção de um CI:

![producaoCI](images/muctrl/producaoCI.png)
<small>Fonte - (PATTERSON, 2017).</small>

---

### Chips em um *wafer*:

![dicoCI](images/muctrl/dicoCI.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

### Produção de um CI:

![producaoCI](images/muctrl/producaoCI.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

### Apple A5

![appleA5](images/muctrl/appleA5.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

![transistorCount](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Moore%27s_Law_Transistor_Count_1970-2020.png/1280px-Moore%27s_Law_Transistor_Count_1970-2020.png)

<small>Fonte - (wikipedia).</small>

---

### Abstração entre Hardware e Software:

![abstracao](images/muctrl/abstracao.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

### Da linguagem de programação de Alto-nível de abstração para linguagem de máquina:

![c](images/muctrl/c.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

### Da linguagem de programação de Alto-nível de abstração para linguagem de máquina:

![assembly](images/muctrl/assembly.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

### Da linguagem de programação de Alto-nível de abstração para linguagem de máquina:

![binario](images/muctrl/binario.png)

<small>Fonte - (PATTERSON, 2017).</small>

---

## Microcontroladores
<div class="columns">
<div class="column">

Formados por:
* Núcleo de processamento.
* Memórias.
* Periféricos.

</div>
<div class="column">

![SistemaEmbarcado05](images/muctrl/SistemaEmbarcado05.png)

<small>Fonte - (GARCIA, 2018).</small>

</div>
</div>

---

<div class="columns">
<div class="column">

Os microcontroladores são formados por:
* Núcleo de processamento.
* Memórias.
* Periféricos.


![SistemaEmbarcado01](images/muctrl/SistemaEmbarcado01.png)

<small>Fonte - (GARCIA, 2018).</small>

</div>
</div>

---

### Núcleo de Processamento (CPU)

<div class="columns">
<div class="column">

![cpu](images/muctrl/cpu.png)

</div>
<div class="column">

* Unidade Lógica Aritmética.
* Unidade de Controle.
* Registradores.
* Unidade de Controle de Interrupções.

</div>
</div>

---

### Unidade Lógica Aritmética (ULA)

Desenvolvido em 1946 por Von Neumann - Princeton - Institute for Advanced Study - IAS. 

<div class="columns">
<div class="column">

* **Sistema Numérico:** Complemento a dois.
* **Realiza Operações simples:**
    * Aritméticas ( $+$, $-$ , $<$, $>$ , $\leq$, $\geq$, $=$ , $\neq$ ).
    * Lógicas (**OR**, **AND**, **NOT**).
    * Deslocamento (*shift, rotate*).

</div>
<div class="column">

![ULA](images/muctrl/ULA.png)

</div>
</div>

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

![SistemaEmbarcado02](images/muctrl/SistemaEmbarcado02.png)
<small>Fonte - (GARCIA, 2018).</small>

---

## Arduino

<div class="columns">
<div class="column">

* Arduino é uma plataforma de prototipagem eletrônica de hardware e software livre. 
* O projeto Arduino começou em 2005 como um programa para estudantes do **Instituto de Design de Interação Ivrea**, em Ivrea, Itália, com o objetivo de fornecer uma maneira fácil e de baixo custo para iniciantes e profissionais criarem dispositivos que interagem com seu ambiente usando sensores e atuadores.

</div>
<div class="column">

![Arduino-uno](images/muctrl/Arduino-uno.png)

<small>Fonte - https://pt.wikipedia.org/wiki/Arduino</small>

</div>
</div>

---

![Arduino-uno](./images/muctrl/arduino-uno-r3.jpg)


---

* As placas possuem interfaces de comunicação serial (USB) que são usadas para carregar programas de computadores pessoais.
* A plataforma Arduino é programada utilizando linguagem de programação fortemente baseada em C/C++.
* O projeto Arduino fornece um ambiente de desenvolvimento integrado (IDE) baseado no projeto da linguagem Processing.

![Arduino_IDE](images/muctrl/Arduino_IDE.png)

---

## Bibliografia

* PATTERSON, David A., HENESSY, John L. ,**Computer Organization and Design ARM Edition: The Hardware Software Interface**, Elsevier, USA, ISBN: 978-0-12-801733-3, 2017.
* STADZISZ, P. C.; RENAUX, D. P. B. **In: Sistemas embarcados**, 1st. ed. Guarapuava: SBC, 2007. cap. Software Embarcado, p. 107–155.
* GARCIA, F. D., **Introdução aos sistemas embarcados e microcontroladores**, Disponível em:  https://www.embarcados.com.br/sistemas-embarcados-e-microcontroladores/, Portal Embarcados, 2018. 

