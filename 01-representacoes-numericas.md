---
theme: default
background: https://source.unsplash.com/1920x1080/?technology,digital
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Representações Numéricas
  Sistemas Digitais 1 - ME575
  Universidade Federal de Pernambuco
drawings:
  persist: false
transition: slide-left
title: Representações Numéricas
mdc: true
---

# Representações Numéricas

ME575 - Sistemas Digitais 1

**José Rodrigues de Oliveira Neto**  
Universidade Federal de Pernambuco  
Departamento de Engenharia Mecânica

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Pressione espaço para a próxima página <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# Sumário

<Toc maxDepth="1"></Toc>

---
layout: section
---

# Introdução aos Sistemas Digitais

---

# Por que estudar Sistemas Digitais?

<v-clicks>

- Vamos ao longo dos próximos meses estudar as bases dos chamados **Sistemas Digitais**

- Mas antes de nos debruçar em conceitos matemáticos e projetos desses tipos de sistemas é interessante entender o porque estudá-los

- A resposta simples é dizer que a algumas décadas **o mundo vive uma era digital**:
  - Computação, Automação, Robótica, Inteligência Artificial, Ciências Médicas, Transportes, Entretenimento, Exploração Espacial, etc...

- Uma resposta mais completa parte de conseguirmos definir o que é um Sistema Digital, e para isso precisamos falar do que são **sinais digitais** e o que são **sinais analógicos**

</v-clicks>

---

# Sinais Analógicos x Sinais Digitais

<div grid="~ cols-2 gap-4">
<div>

## Sinal Analógico

<v-clicks>

- Um sinal analógico pode assumir qualquer valor ao longo de uma faixa contínua em cada instante de tempo

- **Exemplos:**
  - Temperatura em uma sala
  - Vazão de água em uma torneira
  - Pressão dentro de um compressor de ar
  - Tensão elétrica em uma tomada

</v-clicks>

</div>
<div>

<img src="https://www.embarcados.com.br/wp-content/uploads/2016/03/sinal_analogico.png" class="h-80 mx-auto" alt="Sinal Analógico">

<p class="text-xs text-center mt-2">Fonte: embarcados.com.br</p>

</div>
</div>

---

# Sinais Analógicos x Sinais Digitais

<div grid="~ cols-2 gap-4">
<div>

## Quantidade Digital

<v-clicks>

- Um sinal digital é uma sequência discreta (descontínua) no tempo e em amplitude

- Isso significa que um sinal digital só é definido para determinados instantes de tempo (**tempo discreto**) e que o conjunto de valores que pode assumir é finito (**sinal quantizado**)

</v-clicks>

</div>
<div>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Digital.signal.svg/400px-Digital.signal.svg.png" class="h-80 mx-auto" alt="Sinal Digital">

<p class="text-xs text-center mt-2">Fonte: Wikipedia</p>

</div>
</div>

---

# Vantagens e Limitações das Técnicas Digitais

## Desvantagens

<img src="https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Mundo+Real+%E2%86%92+Analógico+%E2%86%92+Digital+%E2%86%92+Processamento+%E2%86%92+Digital+%E2%86%92+Analógico+%E2%86%92+Mundo+Real" class="mx-auto" alt="Fluxo de processamento digital">

<p class="text-xs text-center mt-2">Fonte: (TOCCI; WIDMER, 2011)</p>

---

# Vantagens das Técnicas Digitais

<v-clicks>

- **Fácil de ser projetado:** os circuitos utilizados são circuitos de chaveamento, nos quais não importam os valores exatos de tensão ou corrente, mas apenas a faixa na qual eles se encontram

- **Fácil armazenamento de informação:** técnicas de armazenamento digitais podem armazenar bilhões de bits em um espaço físico relativamente pequeno

- **Maior precisão e exatidão:** nos sistemas analógicos, a precisão é limitada porque os valores de tensão e corrente são diretamente dependentes dos valores dos componentes do circuito, além de serem muito afetados por ruídos

</v-clicks>

---

# Vantagens das Técnicas Digitais (cont.)

<v-clicks>

- **As operações podem ser programadas:** é relativamente fácil e conveniente desenvolver sistemas digitais cuja operação possa ser controlada por um conjunto de instruções previamente armazenadas, denominado programa

- Os sistemas analógicos também podem ser programados, mas a variedade e a complexidade das operações envolvidas são bastante limitadas

</v-clicks>

---
layout: section
---

# Números e Sistemas Numéricos

---

# Sistema Decimal

<v-clicks>

- Os algarismos usados hoje para representar números são conhecidos como indo-arábicos, com os símbolos {9, 8, 7, 6, 5, 4, 3, 2, 1 e 0}

- Utilizamos a notação posicional para representar pela posição do número se ele indica quantas dezenas, centenas ou milhares eles representam

- **Exemplo:** O número 1234 significa:
  - Um milhar
  - Duas centenas  
  - Três dezenas
  - Quatro unidades

</v-clicks>

---

# Sistema Decimal - Notação Posicional

<v-clicks>

- No sistema decimal a base numérica é o 10, ou seja, usamos 10 símbolos (algarismos) para representar cada um dos valores da base

- Para representar um valor qualquer usamos a notação posicional em que um valor $x$ pode ser representado pelo polinômio:

$$x = \cdots + \psi_3 \times 10^3 + \psi_2 \times 10^2 + \psi_1 \times 10^1 + \psi_0 \times 10^0 +\psi_{-1} \times 10^{-1} + \psi_{-2} \times 10^{-2} + \cdots$$

- em que:
  - $\psi_{r} \in \Psi$ para $r \in \mathbb{Z}$
  - e $\Psi= \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9 \}$

</v-clicks>

---

# Exemplo - Sistema Decimal

Logo, o valor 54,02 representado pela equação anterior, fica:

$$\begin{align}
x &= 5\times 10^1 + 4\times 10^0 + 0\times 10^{-1} + 2\times 10^{-2} \\
x &= 5\times 10 + 4 \times 1 + 0 \times 0,1 + 2 \times 0,01
\end{align}$$

---

# Exercício 1

**Escreva na forma da notação posicional os seguintes números:**

a) 0,03  
b) 1830

<div class="h-40"></div>

---

# Sistema numérico com N símbolos

<v-clicks>

- Podemos reescrever a notação posicional para definir um sistema com $N$ símbolos:

$$x = \cdots + \psi_3 \times N^3 + \psi_2 \times N^2 + \psi_1 \times N^1 + \psi_0 \times N^0 +\psi_{-1} \times N^{-1} + \psi_{-2} \times N^{-2} + \cdots$$

- em que:
  - $\psi_{r} \in \Psi$ para $r \in \mathbb{Z}$
  - e $\Psi= \{0, \cdots N-1 \}$

</v-clicks>

---

# Exemplo - Base 3

Logo, se pegarmos o valor 212 na base 3 (ou seja, $N = 3$) e substituirmos na equação anterior, teremos:

$$\begin{align}
x &= 2\times 3^2 + 1\times 3^1 + 2\times 3^{0} \\
x &= 2\times 9 + 1 \times 3 + 2 \times 1 \\
x &= 18 + 3 + 2 \\
x &= 23_d
\end{align}$$

---

# Exercício 2

**Converta os números para Decimal:**

a) $421_5$  
b) $123_6$  
c) $123_8$

<div class="h-40"></div>

---

# Sistema Binário

<v-clicks>

- O sistema binário é a base da Eletrônica Digital

- Porque é mais simples trabalhar com apenas dois valores de tensão:
  - **Vcc** (tensão de alimentação)
  - **GND** (0 V)

- Dentre outros motivos, porque torna o sistema mais imune a ruído

</v-clicks>

---

# Sistema Binário - Definição

<v-clicks>

- Como o nome já nos indica, o sistema binário possui apenas dois valores, logo $N =2$, e reescrevendo a equação temos:

$$x = \cdots + \psi_3 \times 2^3 + \psi_2 \times 2^2 + \psi_1 \times 2^1 + \psi_0 \times 2^0 +\psi_{-1} \times 2^{-1} + \psi_{-2} \times 2^{-2} + \cdots$$

- em que:
  - $\psi_{r} \in \Psi$ para $r \in \mathbb{Z}$
  - e $\Psi= \{0, 1 \}$

</v-clicks>

---

# Exemplo - Sistema Binário

Logo, se pegarmos o valor 1001,01 na base 2 (ou seja, $N = 2$) e substituirmos na equação, teremos:

$$\begin{align}
x &= 1 \times 2^3 + 0\times 2^2 + 0\times 2^{1} +  1 \times 2^0 + 0 \times 2^{-1} +  1 \times 2^{-2} \\
x &= 1 \times 8 + 1 \times 1 + 0,25 \\
x &= 9,25
\end{align}$$

---

# Sistema Hexadecimal

<v-clicks>

- Um sistema de numeração muito usado em computação e sistemas digitais é o sistema hexadecimal

- Nele temos $N = 16$ e usualmente são utilizados os símbolos:
  - $\Psi = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F\}$

- São muito utilizados por ter uma correspondência direta entre as palavras de 4 bits com um dígito em hexadecimal

</v-clicks>

---

# Tabela de Correspondência

<div class="flex justify-center">

| Decimal | Binário | Hexadecimal |
|---------|---------|-------------|
| 0       | 0000    | 0           |
| 1       | 0001    | 1           |
| 2       | 0010    | 2           |
| 3       | 0011    | 3           |
| 4       | 0100    | 4           |
| 5       | 0101    | 5           |
| 6       | 0110    | 6           |
| 7       | 0111    | 7           |
| 8       | 1000    | 8           |
| 9       | 1001    | 9           |
| 10      | 1010    | A           |
| 11      | 1011    | B           |
| 12      | 1100    | C           |
| 13      | 1101    | D           |
| 14      | 1110    | E           |
| 15      | 1111    | F           |

</div>

---

# Número de Combinações Possíveis

<v-clicks>

- Na tabela anterior é possível ver que com quatro bits é possível escrever 16 números diferentes

- De uma forma geral, para um sistema numérico com $N$ símbolos é possível escrever $M$ números diferentes:

$$M = N^d$$

- em que $d$ é o número de dígitos

- Para o exemplo anterior, $d = 4$ e $N = 2$, logo:

$$M = 2^4 = 16$$

</v-clicks>

---
layout: section
---

# Conversão entre Sistemas de Numeração

---

# Binário para Decimal

<v-clicks>

- Como os sistemas digitais utilizam o sistema binário, mas "nós utilizamos" o sistema decimal, é interessante que consigamos converter um número de uma base para outra

- Para converter de binário para decimal, basta utilizar a equação da notação posicional, como já tínhamos feito

- De uma forma geral, para converter de qualquer base para a base decimal basta utilizar a equação geral da notação posicional

</v-clicks>

---

# Exercício 3

**Converta para decimal os números binários a seguir:**

a) $0011_2$  
b) $1010{,}1001_2$  
c) $1101_2$

<div class="h-40"></div>

---

# Decimal para Binário

<v-clicks>

- A conversão de decimal para binário é um pouco mais trabalhosa, porque envolve fatoração

- O valor decimal é dividido por 2 até que o último quociente seja menor que 2

- Por exemplo, 69 e 68 são convertidos:

</v-clicks>

<div class="flex justify-center mt-4">
<img src="https://via.placeholder.com/600x300/4A90E2/FFFFFF?text=Exemplo+de+Conversão+Decimal+para+Binário" alt="Conversão Decimal para Binário">
</div>

---

# Algoritmo de Conversão

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- Como o divisor será sempre "2" o resto de cada etapa das divisões sucessivas será sempre 0 ou 1

- O resto da primeira divisão é o bit menos significativo (LSB, do inglês *least significant bit*)

- O quociente da última divisão é o bit mais significativo (MSB, do inglês *most significant bit*)

</v-clicks>

</div>
<div>

<img src="https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Algoritmo+de+Divisão" alt="Algoritmo de Divisão">

</div>
</div>

---

# Exercício 4

**Converta de decimal para binário os seguintes números:**

a) $33_{10}$  
b) $180_{10}$  
c) $12{,}75_{10}$  
d) $2{,}33_{10}$ (Aproxime até 4 casas decimais)

<div class="h-40"></div>

---

# Binário para Hexadecimal e Vice-versa

<v-clicks>

- Para converter um valor de binário para hexadecimal basta agrupar, da direita para a esquerda, grupos de 4 em 4 bits e trocar o valor dos quatro bits pelo respectivo valor em hexadecimal

- **Exemplo:** seja $x = 11010100001110101_b$:

$$\begin{align}
x &= 11010100001110101_b \\
x &= 1\_1010\_1000\_0111\_0101_b \\
x &= \text{1A875}_h \\
x &= \text{0x1A875}
\end{align}$$

</v-clicks>

---

# Hexadecimal para Binário

<v-clicks>

- Na conversão de hexadecimal para binário faz-se o contrário, ou seja, cada dígito hexadecimal gera 4 bits em binário

- **Exemplo:** seja $x = \text{4ED2}_h$:

$$\begin{align}
x &= \text{4ED2}_h \\
x &= 0100\_1110\_1101\_0010_b \\
x &= 100111011010010_b
\end{align}$$

</v-clicks>

---

# Exercício 5

**Converta os seguintes números binários para hexadecimal (ou de hexadecimal para binário):**

a) $11011110_2$  
b) $101010_2$  
c) $3F_{16}$  
d) $2C0_{16}$

<div class="h-40"></div>

---
layout: section
---

# Números Naturais x Inteiros

---

# Sinal-Magnitude

<v-clicks>

- Uma forma de representar valores negativos é reservar um bit para o **sinal** enquanto os outros bits mostram a **magnitude** do número

- Esta representação é chamada então de sinal-magnitude (SMR, do inglês *signed magnitude representation*)

- O MSB é usado para o sinal e os bits restantes são utilizados para valor

- **Exemplo:**
  $$10000011_b = -3_d$$

</v-clicks>

---

# Tabela Sinal-Magnitude

<div class="flex justify-center">

| Binário (8 bits) | Decimal |
|------------------|---------|
| 00000000         | +0      |
| 00000001         | +1      |
| 00000010         | +2      |
| 00000011         | +3      |
| ...              | ...     |
| 01111111         | +127    |
| 10000000         | -0      |
| 10000001         | -1      |
| 10000010         | -2      |
| 10000011         | -3      |
| ...              | ...     |
| 11111111         | -127    |

</div>

<v-click>

**Observação:** Na notação sinal-magnitude temos dois valores que representam o zero: +0 e -0

</v-click>

---

# Exercício 6

**Considerando os números binários a seguir estando na notação sinal+magnitude, qual é o seu valor em decimal?**

a) $100000_2$  
b) $000000_2$  
c) $11011110_2$  
d) $101010_2$

<div class="h-40"></div>

---

# Complemento para 1

<v-clicks>

- Como veremos na próxima aula, um dos problemas com representações de números com sinal são as operações aritméticas que podem ser feitas de forma mais ou menos direta, o que representa hardware mais ou menos simples

- O formato de representação **complemento para 1** (complemento de 1), é obtido invertendo-se todos os bits de um número binário; ou seja, obtendo-se o complemento desse valor

- **Exemplo:**
  $$11111100_b = -3_d$$

</v-clicks>

---

# Tabela Complemento para 1

<div class="flex justify-center">

| Binário (8 bits) | Decimal |
|------------------|---------|
| 00000000         | +0      |
| 00000001         | +1      |
| 00000010         | +2      |
| 00000011         | +3      |
| ...              | ...     |
| 01111111         | +127    |
| 11111111         | -0      |
| 11111110         | -1      |
| 11111101         | -2      |
| 11111100         | -3      |
| ...              | ...     |
| 10000000         | -127    |

</div>

<v-click>

**Nota:** A notação complemento para 1 foi utilizada em vários computadores nos anos 1960 e 1970

</v-click>

---

# Exercício 7

**Considerando os números binários a seguir estando na notação complemento para 1, qual é o seu valor em decimal?**

a) $100000_2$  
b) $000000_2$  
c) $11011110_2$  
d) $101010_2$

<div class="h-40"></div>

---

# Complemento para 2

<v-clicks>

- O complemento para dois é um processo para representar números com sinal em base dois

- É necessário definir o número de dígitos em que serão representados os números, sendo apenas considerados como válidos esses dígitos

- Assim, com $n$ bits e complemento para dois, representa-se um valor negativo $-X$ por uma quantidade positiva $Y$ obtida por:

$$Y = 2^n - X$$

</v-clicks>

---

# Exemplo - Complemento para 2

Por exemplo, seja $n = 8$ e queremos saber como representar $-3_d$ em complemento para 2:

$$\begin{align}
Y &= 2^8 - 3 \\
Y &= 256 - 3 \\
Y &= 253_d \\
Y &= 11111101_b
\end{align}$$

---

# Algoritmo Rápido - Complemento para 2

<v-clicks>

- Além da definição do complemento para 2, é possível converter um número através de um **algoritmo rápido**:

- **Para conseguir o complemento para 2 de um número, basta inverter os bits do número e somar 1 ao resultado**

- **Exemplo:** Para codificar $-3_d$ em complemento para 2:
  1. **Pega-se o número:** $00000011_b$ = $3_d$
  2. **Inverte-se todos os bits do número:** $11111100_b$
  3. **Soma-se 1 ao resultado:** $11111101_b$

</v-clicks>

---

# Tabela Complemento para 2

<div class="flex justify-center">

| Binário (8 bits) | Decimal |
|------------------|---------|
| 00000000         | 0       |
| 00000001         | +1      |
| 00000010         | +2      |
| 00000011         | +3      |
| ...              | ...     |
| 01111111         | +127    |
| 10000000         | -128    |
| 10000001         | -127    |
| 10000010         | -126    |
| 10000011         | -125    |
| ...              | ...     |
| 11111111         | -1      |

</div>

---

# Exercício 8

**Considerando os números binários a seguir estando na notação complemento para 2, qual é o seu valor em decimal?**

a) $100000_2$  
b) $000000_2$  
c) $11011110_2$  
d) $101010_2$

<div class="h-40"></div>

---
layout: section
---

# Bibliografia

---

# Bibliografia

- RANHEL, João. **"Eletrônica Digital, Verilog e FPGA"**, 1ª ed., Clube do Autor, 2021.

- TOCCI, R. J., WIDMER, N. S., **"Sistemas Digitais Princípios e Aplicações"**, 11ª ed., Prentice Hall, 2011.

- ALVES, José Carlos, **"Sistemas Digitais"**, V0.51, FEUP/DEEC, 2004.

---
layout: end
---

# Obrigado!

**Perguntas?**

