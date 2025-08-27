# Representações Numéricas

### Prof. João Paulo Cerquinho Cajueiro
#### Baseado em slides de Prof. José Rodrigues de Oliveira Neto

---

## Introdução aos Sistemas Digitais

### Por que estudar Sistemas Digitais?

* Resposta mais simples: **o mundo vive uma era digital**.
    * Computação, Automação, Robótica, Inteligência Artificial, Ciências Médicas, Transportes, Entretenimento, Exploração Espacial, etc.
* Resposta mais completa exige definir o que é um Sistema Digital,
    * Depende de **sinais digitais** e **sinais analógicos**.

---

### Sinais Analógicos x Sinais Digitais

* **Sinal Analógico:**
    * Pode assumir qualquer valor ao longo de uma faixa contínua em cada instante de tempo
        * Temperatura em uma sala.
        * Vazão de água em uma torneira.
        * Tensão elétrica em uma tomada.

* **Quantidade Digital:**
    * É uma sequência discreta (descontínua) no tempo e em amplitude.
    * Isso significa que um sinal digital só é definido em determinados instantes de tempo (**tempo discreto**) e que o conjunto de valores que pode assumir é finito (**sinal quantizado**).

---

### Vantagens e Limitações das Técnicas Digitais

* **Vantagens:**
    * **Fácil de ser projetado** <!-- Os circuitos de chaveamento não se importam com os valores exatos de tensão ou corrente, apenas com a faixa em que eles se encontram. -->
    * **Fácil armazenamento de informação** <!-- As técnicas de armazenamento digital podem armazenar bilhões de bits em um espaço físico relativamente pequeno. -->
    * **Maior precisão e exatidão** <!-- A precisão nos sistemas analógicos é limitada, pois os valores de tensão e corrente dependem diretamente dos componentes do circuito e são muito afetados por ruídos. -->
    * **As operações podem ser programadas** <!-- É fácil e conveniente desenvolver sistemas digitais cuja operação é controlada por um conjunto de instruções previamente armazenadas, chamado de programa. -->
    * Os sistemas analógicos também podem ser programados, mas a variedade e a complexidade das operações são bastante limitadas.

---

## Números e Sistemas Numéricos

### Sistema Decimal

* Algarismos indo-arábicos: $\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$.
* Notação posicional com base 10. Um valor $x$ pode ser representado pelo polinômio:

$$x = \cdots + d_3 \times 10^3 + d_2 \times 10^2 + d_1 \times 10^1 + d_0 \times 10^0 +d_{-1} \times 10^{-1} + d_{-2} \times 10^{-2} + \cdots$$

* Onde $d_r \in D$ para $r \in \mathbb{Z}$ , e $D= \\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$.
* Por exemplo, o valor 54,02 pode ser representado como:

$$x = 5 \times 10^1 + 4 \times 10^0 + 0 \times 10^{-1} + 2 \times 10^{-2}$$
$$x = 5 \times 10 + 4 \times 1 + 0 \times 0.1 + 2 \times 0.01$$ 

---

### Sistema numérico com N símbolos

* Podemos reescrever a notação posicional para um sistema com $N$ símbolos:

$$x = \cdots + d_3 \times N^3 + d_2 \times N^2 + d_1 \times N^1 + d_0 \times N^0 +d_{-1} \times N^{-1} + d_{-2} \times N^{-2} + \cdots$$

* Onde $d_r \in d$ para $r \in \mathbb{Z}$  e $D= \\{0, \cdots, N-1\\}$.
* Por exemplo, o valor 212 na base 3 ($N=3$) é:

$$x = 2 \times 3^2 + 1 \times 3^1 + 2 \times 3^0$$$$x = 2 \times 9 + 1 \times 3 + 2 \times 1$$$$x = 18 + 3 + 2$$
$$x = 23_d$$ 

---

### Sistema binário

* Base da Eletrônica Digital.
* Circuitos com apenas dois valores de tensão: **Vcc** (tensão de alimentação) e **GND** (0 V).
    * Mais imune a ruído, entre outras razões.
* $N=2$:

$$x = \cdots + d_3 \times 2^3 + d_2 \times 2^2 + d_1 \times 2^1 + d_0 \times 2^0 +d_{-1} \times 2^{-1} + d_{-2} \times 2^{-2} + \cdots$$

* Onde $d_r \in d$ para $r \in \mathbb{Z}$, e $D= \\{0, 1\\}$.
* Por exemplo, o valor $1001.01_b$ na base 2 é:

$$x = 1 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 + 0 \times 2^{-1} + 1 \times 2^{-2}$$$$x = 1 \times 8 + 1 \times 1 + 0.25$$$$x = 9.25$$ 

---

### Sistema Hexadecimal

* $N = 16$. $D = \\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F\\}$.
* Correspondência direta entre palavras de 4 bits e um dígito hexadecimal.
* Para um sistema numérico com $N$ símbolos, é possível escrever $M$ números diferentes:

$$M = N^d$$

* Onde $d$ é o número de dígitos. Por exemplo, com 4 bits ($d=4$) e base 2 ($N=2$), temos:

$$M = 2^4 = 16$$

---

## Conversão entre Sistemas de Numeração

### Binário para Decimal

* Basta usar a fórmula de notação posicional para a base 2.
* De modo geral, para converter de qualquer base para a base decimal, use a fórmula de notação posicional para a base N.

---

### Decimal para Binário

* Por divisões sucessivas por 2, até que o último quociente seja menor que 2.
* O resto da primeira divisão é o **bit menos significativo (LSB)**, e o quociente da última divisão é o **bit mais significativo (MSB)**.

---

### Binário para Hexadecimal e Vice-versa

* Binário para hexadecimal: agrupe os bits de quatro em quatro, substitua cada grupo pelo seu valor hexadecimal.
    * **Exemplo:** $11010100001110101_b$
        * Agrupe: $1\_1010\_1000\_0111\_0101_b$
        * Converta: $1A875_h$ 
* Hexadecimal para binário: processo inverso - cada dígito hexadecimal gera 4 bits em binário.
    * **Exemplo:** $4ED2_h$
        * Converta: $0100\_1110\_1101\_0010_b$

---

## Números Naturais x Inteiros

### Sinal-Magnitude

* Uma forma de representar números negativos é reservar um bit para o **sinal**, enquanto os outros bits mostram a **magnitude**.
* Essa representação é chamada de **sinal-magnitude** (SMR).
* O bit mais significativo (MSB) é usado para o sinal, e os bits restantes para o valor.
* **Exemplo:** $10000011_b = -3_d$
* Nessa notação, existem dois valores para o zero: +0 e -0.
* O sinal-magnitude foi usado em computadores antigos, como o IBM 7090, e ainda tem uso em certas aplicações.

---

### Complemento para 1

* O formato de representação **complemento para 1** é obtido invertendo-se todos os bits de um número binário.
* Foi usado em vários computadores nos anos 1960 e 1970.
* Atualmente, a maioria dos processadores utiliza a representação de complemento para 2.

---

### Complemento para 2

* O complemento para 2 é um processo para representar números com sinal em base dois.
* É necessário definir o número de dígitos para a representação.
* Com $n$ bits, um valor negativo $-X$ é representado por uma quantidade positiva $Y$, obtida por:

$$Y = 2^n - X$$

* **Algoritmo rápido:** Para obter o complemento para 2, basta inverter os bits do número e somar 1 ao resultado.
    * **Exemplo:** Para codificar $-3_d$ em complemento para 2:
        1.  **Pega-se o número:** $00000011_b$ (= $3_d$).
        2.  **Inverte-se todos os bits:** $11111100$.
        3.  **Soma-se 1:** $11111101$.

---