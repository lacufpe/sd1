---
theme: default
background: https://source.unsplash.com/1920x1080/?mathematics,binary
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Aritmética Binária
  Sistemas Digitais 1 - ME575
  Universidade Federal de Pernambuco
drawings:
  persist: false
transition: slide-left
title: Aritmética Binária
mdc: true
---

# Aritmética Binária

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

# Introdução

---

# Introdução

<v-clicks>

- Como vimos na última aula, podemos representar qualquer valor numérico no sistema binário (incluindo números negativos e fracionários)

- Portanto, se é possível representar números em binário, deve ser possível realizar operações aritméticas com eles

- De fato, as operações seguem as mesmas regras que utilizamos para as operações na base decimal, sendo que agora nossos dígitos só podem ter 2 valores: {0,1}

</v-clicks>

---
layout: section
---

# Adição

---

# Adição Binária

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- A adição binária é intuitiva

- Na tabela ao lado temos $S = A + B$, em que $A$ e $B$ $\in \{0,1\}$

- Como $1 + 1 = 2_{10} = 10_2$, por isso o resultado da última linha da Tabela é $S = 0$ e o *carry* $= 1$

- Como ocorre como fazemos em decimal, transportamos o valor *carry* para o bit de ordem superior

</v-clicks>

</div>
<div>

## Tabela da Adição

| A | B | S | Carry |
|---|---|---|-------|
| 0 | 0 | 0 | 0     |
| 0 | 1 | 1 | 0     |
| 1 | 0 | 1 | 0     |
| 1 | 1 | 0 | 1     |

</div>
</div>

---

# Exemplo de Adição Binária

<div class="flex justify-center">

```
    1011₂  (11₁₀)
  + 1101₂  (13₁₀)
  -------
   11000₂  (24₁₀)
```

</div>

<v-clicks>

**Passo a passo:**
1. 1 + 1 = 10₂ → escreve 0, vai 1
2. 1 + 0 + 1(carry) = 10₂ → escreve 0, vai 1  
3. 0 + 1 + 1(carry) = 10₂ → escreve 0, vai 1
4. 1 + 1 + 1(carry) = 11₂ → escreve 1, vai 1
5. 0 + 0 + 1(carry) = 1₂ → escreve 1

</v-clicks>

---

# Exercício 1

**Realize as seguintes operações binárias, dado que os números estão em notação sinal+magnitude e depois refaça como se eles estivessem em notação complemento para 2:**

a) $10000001 + 10000001$  
b) $10000001 + 00011001$

<div class="h-40"></div>

---
layout: section
---

# Subtração

---

# Subtração Binária

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- A subtração binária é executada da mesma forma que operamos a subtração decimal

- Da tabela ao lado, talvez, apenas a linha $S = 0 - 1$, pode gerar alguma confusão, devido ao *carry* ser igual a 1

- No entanto, é apenas o ato de "emprestar um" do dígito seguinte como também ocorre na aritmética na base 10

</v-clicks>

</div>
<div>

## Tabela da Subtração

| A | B | S | Borrow |
|---|---|---|--------|
| 0 | 0 | 0 | 0      |
| 0 | 1 | 1 | 1      |
| 1 | 0 | 1 | 0      |
| 1 | 1 | 0 | 0      |

</div>
</div>

---

# Algoritmo de Subtração Decimal

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

**Seja o minuendo 93 e o subtraendo 78:**

1. Primeiro testamos os valores das unidades: 3 - 8
2. Tomamos emprestado uma dezena: 13 - 8 = 5
3. A partir daqui podemos seguir 3 algoritmos diferentes:
   - **a)** Somamos +1 ao subtraendo da dezena: 7+1 = 8
   - **b)** Subtraímos -1 do minuendo da dezena: 9-1 = 8  
   - **c)** Subtraímos 9-7 = 2, e depois subtraímos o valor emprestado 2-1 = 1

</v-clicks>

</div>
<div class="text-center">

```
   93
 - 78
 ----
   15
```

</div>
</div>

---

# Exemplo de Subtração Binária

<div class="flex justify-center">

```
   1101₂  (13₁₀)
 - 1010₂  (10₁₀)
 -------
   0011₂  (3₁₀)
```

</div>

<v-clicks>

**Passo a passo:**
1. 1 - 0 = 1
2. 0 - 1 → empresta 1 → 10 - 1 = 1, marca borrow
3. 1 - 0 - 1(borrow) = 0
4. 1 - 1 = 0

</v-clicks>

---

# Overflow na Subtração

<v-clicks>

- Se nenhuma coluna for capaz de pagar o que foi emprestado a uma coluna anterior, o *carry* resultará '1'

- Isso pode ser interpretado como um sinal negativo para resultado da subtração, ou um *overflow*, indicando incapacidade do circuito de representar o resultado correto para a operação com aquela quantidade de bits

</v-clicks>

<div class="flex justify-center mt-4">

```
   0101₂  (5₁₀)
 - 1010₂  (10₁₀)
 -------
  ?????₂  (resultado negativo)
```

</div>

---

# Vantagem do Complemento para 2

<v-clicks>

- Uma vantagem da representação complemento para 2 (Cp2) é que as operações de soma e subtração apresentam resultados diretos, sem necessidade de conversão

- Em outras palavras, subtração de um número representado em Cp2 é simplesmente uma questão de inverter o sinal desse número e somar com outro operando

</v-clicks>

<div class="flex justify-center mt-4">

**Exemplo:** $A - B = A + (-B)$

Onde $-B$ é obtido pelo complemento para 2 de $B$

</div>

---

# Exercício 2

**Realize as seguintes operações binárias, dado que os números estão em notação sinal+magnitude e depois refaça como se eles estivessem em notação complemento para 2:**

a) $11100001 - 00011001$  
b) $01100001 - 10011001$  
c) $01100001 - 00011001$

<div class="h-40"></div>

---
layout: section
---

# Multiplicação

---

# Multiplicação Binária

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- A multiplicação também é intuitiva e direta

- Para multiplicar vetores binários seguimos as regras da tabela ao lado e o algoritmo de multiplicação de números com representação posicional

</v-clicks>

</div>
<div>

## Tabela da Multiplicação

| A | B | A × B |
|---|---|-------|
| 0 | 0 | 0     |
| 0 | 1 | 0     |
| 1 | 0 | 0     |
| 1 | 1 | 1     |

</div>
</div>

---

# Exemplo de Multiplicação Binária

<div class="flex justify-center">

```
      1011₂  (11₁₀)
    ×  101₂  (5₁₀)
    -------
      1011   (1011 × 1)
     0000    (1011 × 0, deslocado)
    1011     (1011 × 1, deslocado)
    -------
   110111₂   (55₁₀)
```

</div>

<v-clicks>

**Verificação:** $11 \times 5 = 55$ ✓

</v-clicks>

---

# Multiplicação em Complemento para 2

Para multiplicação binária em complemento para 2, existem algoritmos específicos que tratam adequadamente os números negativos.

**Referência adicional:**  
[Multiplicação Binária - IFSC](https://wiki.sj.ifsc.edu.br/index.php/Multiplica%C3%A7%C3%A3o_Bin%C3%A1ria)

---

# Exercício 3

**Realize as seguintes operações binárias, dado que os números estão em notação sinal+magnitude e depois refaça como se eles estivessem em notação complemento para 2:**

a) $00010011 \times 00000011$  
b) $10010011 \times 00000011$

<div class="h-40"></div>

---
layout: section
---

# Divisão

---

# Divisão Binária

<v-clicks>

- A divisão não é tão trivial quanto as operações anteriores, porque as regras da divisão não se aplicam a todos possíveis valores para dois bits:
  - $\frac{A}{B}: \frac{1}{1} = 1$
  - $\frac{A}{B}: \frac{0}{1} = 0$

- No entanto não podemos dividir por 0

</v-clicks>

---

# Algoritmo de Divisão

<v-clicks>

- Um algoritmo possível para divisão é a partir de subtrações sucessivas

- **Divisão Euclidiana:** $\frac{d_i}{d_v}$

$$d_i = d_v \times q + r$$

- em que:
  - $d_i$ = dividendo
  - $d_v$ = divisor  
  - $q$ = quociente
  - $r$ = resto

- $\{d_i, d_v, q, r\} \in \mathbb{N}$ e $d_v \neq 0$

</v-clicks>

---

# Exemplo de Divisão por Subtração

**Dividir 13 ÷ 3:**

<v-clicks>

1. $13 - 3 = 10$ (1ª subtração)
2. $10 - 3 = 7$ (2ª subtração)  
3. $7 - 3 = 4$ (3ª subtração)
4. $4 - 3 = 1$ (4ª subtração)
5. $1 < 3$ → parar

**Resultado:** $q = 4$, $r = 1$

**Verificação:** $13 = 3 \times 4 + 1$ ✓

</v-clicks>

---
layout: section
---

# Bibliografia

---

# Bibliografia

- RANHEL, João. **"Eletrônica Digital, Verilog e FPGA"**, 1ª ed., Clube do Autor, 2021.

- TOCCI, R. J., WIDMER, N. S., **"Sistemas Digitais Princípios e Aplicações"**, 11ª ed., Prentice Hall, 2011.

---
layout: end
---

# Obrigado!

**Perguntas?**

