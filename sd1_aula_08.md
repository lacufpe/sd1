# Memórias

## Introdução

* A adição de **memória** aos sistemas digitais os torna mais complexos ao mesmo tempo que aumenta exponencialmente a capacidade desses sistemas. 
* Os sistemas microcontrolados trabalham a partir de um código que é salvo em uma **memória de programa**, que as variáveis internas ao núcleo de processamento são salvas em um banco de **registradores** e que os dados gerados pelos programas são salvos em uma **memória de dados**. 

  ![SistemaEmbarcado05](FIGURAS/SistemaEmbarcado05.png)
  <small>Fonte - (GARCIA, 2018).</small>

* Iremos falar sobre os diferentes tipos de memórias que acabamos encontrando quando estamos falando de sistemas embarcados.
* Mas antes, vamos construir uma memória RAM (*random access memory*) a partir das tecnologias que já vinhemos trabalhando ao longo do período como uma forma de vermos quais são os aspectos que são comuns a todas as memórias. 

  ![CPU](FIGURAS/CPU.png)
  <small>Fonte - (GARCIA, 2018).</small>

## Memória RAM conceitual

* Construiremos uma RAM conceitual no Logisim para poder simulá-la.
* No entanto é bom vermos o sistema como uma caixa preta separamos suas entradas:
    * **Dados de Entrada;**
    * **Sinais de Controle.**
* e suas saídas:
    * **Dados de Saída.**

  ![Nfig01](FIGURAS/Nfig01.png)
  <small>Fonte - Produzido pelo autor.</small>

* Vamos fazer uma memória que guarda 8 palavras de 8 bits, logo:
    * **Dados de Entrada:** 8 bits {`IN0`, `IN1`, $\cdots$, `IN7`}
    * **Sinais de Controle:**
        * Endereço da palavra: 3 bits {`ADD0` , `ADD1`, `ADD2`}.
        * Escrever ou Ler: 1 bit {$\mathsf{WE/\overline{RE}}$}.
    * **Dados de Saída:** 8 bits {`OUT0`, `OUT1`, $\cdots$, `OUT7`}

  ![Nfig02](FIGURAS/Nfig02.png)
  <small>Fonte - Produzido pelo autor.</small>

* Internamente, cada uma dessas palavras de 8 bits será guardada em um registrador implementado com Flip-Flops tipo D.
* Em que **`le`** habilita a escrita no registrador e **`oe`** habilita a leitura no registrador.

  ![Rfig03](FIGURAS/Rfig03.png)
  <small>Fonte - (RANHEL, 2021).</small>

* Na nossa implementação nós já adicionamos o fato que só habilitaremos a leitura ou a escrita em um dado instante ($\mathsf{WE/\overline{RE}}$). 
* Além do fato de que como teremos vários registradores ligados ao mesmo barramento de entrada, que apenas quando o endereço de um registrador específico for selecionado é que a escrita ou leitura estará habilitada (`ADD`).

  ![Nfig03](FIGURAS/Nfig03.png)
  <small>Fonte - Produzido pelo autor.</small>

* Logo necessitaremos de um circuito que decodifique o nosso endereço `ADD[0:2]` para habilitar apenas um dos 8 registradores `S[0:7]`

  ![Rfig02](FIGURAS/Rfig02.png)
  <small>Fonte - (RANHEL, 2021).</small>

* Logo necessitaremos de um circuito que decodifique o nosso endereço `ADD[0:2]` para habilitar apenas um dos 8 registradores `S[0:7]`

  ![Nfig04](FIGURAS/Nfig04.png)
  <small>Fonte - Produzido pelo autor.</small>

* Poderíamos ainda ter cada bit de cada um dos registradores indo para um circuito multiplexador onde apenas uma das 8 entradas (`IN[0:7]`) estaria habilitada a parir de um sinal de controle (`C[0:2]`): 

  ![Nfig05](FIGURAS/Nfig05.png)
  <small>Fonte - Produzido pelo autor.</small>

* No entanto, parte do multiplexador já tinha sido implementada pelo decodificado: 

  ![Nfig06](FIGURAS/Nfig06.png)
  <small>Fonte - Produzido pelo autor.</small>

## Guardando Informação em Sistemas Embarcados

### Introdução

* Várias tecnologias e dispositivos tem sido desenvolvidos para armazenar informação em sistemas embarcados. 
* Podemos agrupá-los em dois grandes grupos:
    * **Armazenamento volátil;**
    * **Armazenamento não-volátil.**

  ![fig01](FIGURAS/fig01.png)
  <small>Fonte - (COOLING, 2018).</small>

### Armazenamento Não-Volátil de Dados

* Existem três categorias de armazenamento não-volátil, dependendo de como a informação pode ser reprogramada:
    * **Armazenamento não apagável;** 
    * **Armazenamento apagável por UV;**
    * **Memória de escrita e leitura não-volátil**;

* Existem dois tipos de memórias não apagáveis:
    * **mask PROM:** *mask programmable ready-only memory* - são programadas durante a manufatura, são as mais baratas.
    * **OTPROM:** *one-time programmable read-only memory* - são vendidas no estado **apagado** e então são programadas uma única vez eletricamente. 

* Chamadas de EPROM: *UV-erasable electrically programmable read-only memory*; nessas memórias o conteúdo pode ser apagado com luz ultravioleta.

  ![eprom](FIGURAS/eprom.png)
  <small>Fonte - https://www.reichelt.com/de/en/c-mos-uv-eprom-c-dil-42-2mx8-1mx16-100-ns-27c160-100-p40037.html.</small>

* Existem dois principais tipos de memórias não-voláteis de escrita e leitura:
    * **EEPROM:** *elctrically erasable programmable read-only memory*;
    * **Fash momory:** muito utilizadas em *single-chip mocrocontrollers*;
* Existem outros tipos menos utilizados, como as FRAM (*ferro-electric rando access memory*) e as MRAM (*magnetoresistive RAM*).

### Armazenamento Volátil de Dados

* Em geral, os dispositivos de armazenamento de dados voláteis são chamados de RAM (*random access memories*), mesmo que isso não seja verdade sempre.
* Podem vir em duas formas:
    * **SRAM:** *static RAM*;
    * **DRAM:** *dynamic RAM*.
* Não focaremos em como elas trabalham e sim em:
    * custo;
    * velocidade;
    * densidade de bits;
    * consumo de energia;
    * confiabilidade.

### Dispositivos de Memória - Flash-RAM

* Considerando apenas os tipos de memórias mais utilizadas: Flash, SRAM e DRAM. 
* A primeira vista, seria possível dizer que a memória Flash seria suficiente para todas as necessidades de um sistemas embarcado.
* No entanto, existem duas coisas que impactam muito o uso dela como única forma de armazenamento de dados:
    * Velocidade;
    * Desgaste;

* Quanto a velocidade, a leitura de dados da memória Flash é rápida, tão rápida quanto as SRAM de propósito geral.
* No entanto, a escrita é cerca de 10 vezes mais lenta. 
* A diferença se dá pois para escrever um novo dado na Flash é preciso primeiro apagá-la antes de escrever um novo dado. 
* Se a maior parte das operações na memória forem de leitura, a performance da Flash é comparável com uma RAM. 

* Quanto a vida útil, o processo de apagar e escrever na memória Flash causa um desgaste no chip.
* Com isso, a vida útil das memórias Flash é menor que as memórias RAM.
* O mesmo problema ocorre com as memórias EEPROM.
* Com o avanço da tecnologia, o número de ciclos de escrita e leitura das memórias Flash vem aumentando, tanto que são cada vez mais utilizadas no lugar de HDs em computadores pessoais.

