---
theme: default
background: https://source.unsplash.com/1920x1080/?electronics,circuits
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Circuitos Combinacionais no Logisim
  Sistemas Digitais 1 - ME575
  Universidade Federal de Pernambuco
drawings:
  persist: false
transition: slide-left
title: Circuitos Combinacionais no Logisim
mdc: true
---

# Circuitos Combinacionais no Logisim

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

# Mais Portas Lógicas

---

# Porta NAND

<v-clicks>

- A porta NAND é uma porta AND seguida de um inversor
- Sua saída é o complemento da operação AND
- **Equação:** Y = $\overline{A \cdot B}$

</v-clicks>

<div class="flex justify-center mt-8">

## Símbolo e Tabela Verdade

<div grid="~ cols-2 gap-8">
<div>

```
A ----\
       &o---- Y = A̅·B̅ = A̅ NAND B̅
B ----/
```

</div>
<div>

| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

</div>
</div>

</div>

---

# Porta NOR

<v-clicks>

- A porta NOR é uma porta OR seguida de um inversor
- Sua saída é o complemento da operação OR
- **Equação:** Y = $\overline{A + B}$

</v-clicks>

<div class="flex justify-center mt-8">

## Símbolo e Tabela Verdade

<div grid="~ cols-2 gap-8">
<div>

```
A ----\
       >o---- Y = A̅+B̅ = A̅ NOR B̅
B ----/
```

</div>
<div>

| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

</div>
</div>

</div>

---

# Porta XOR (OU Exclusivo)

<v-clicks>

- A porta XOR produz saída alta quando as entradas são diferentes
- **Equação:** Y = A ⊕ B = A·$\overline{B}$ + $\overline{A}$·B

</v-clicks>

<div class="flex justify-center mt-8">

## Símbolo e Tabela Verdade

<div grid="~ cols-2 gap-8">
<div>

```
A ----\
       =1---- Y = A ⊕ B
B ----/
```

</div>
<div>

| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

</div>
</div>

</div>

---

# Porta XNOR (Coincidência)

<v-clicks>

- A porta XNOR é o complemento da porta XOR
- Produz saída alta quando as entradas são iguais
- **Equação:** Y = $\overline{A \oplus B}$ = A·B + $\overline{A}$·$\overline{B}$

</v-clicks>

<div class="flex justify-center mt-8">

## Símbolo e Tabela Verdade

<div grid="~ cols-2 gap-8">
<div>

```
A ----\
       =o---- Y = A̅ ⊕ B̅
B ----/
```

</div>
<div>

| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

</div>
</div>

</div>

---
layout: section
---

# Projeto e Análise de Circuitos Simples

---

# Circuitos Digitais

<v-clicks>

- Circuitos digitais podem ser feitos com relés eletromagnéticos, válvulas eletrônicas, diodos, transistores, associação desses componentes, ou circuitos integrados discretos

- Dessa forma, vamos usar a abstração **"porta lógica"** para estudar as propriedades dos circuitos digitais sem nos preocuparmos com o que há dentro das portas por enquanto

</v-clicks>

---

# Associação de Portas

<v-clicks>

- Considerando o que foi explanado, é possível inferir corretamente que é possível associar portas

- Ou seja, a saída de uma porta pode servir como entrada de outra, criando combinações de funções lógicas

</v-clicks>

<div class="flex justify-center mt-4">

```
A ----\        ----\
       &-------|    >---- Y
B ----/        |   /
               |  /
C -------------|--
```

**Exemplo:** Y = (A·B) + C

</div>

---

# Análise de Circuitos

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- Para fazer a análise de um circuito parte-se de:
  - Um esquema do circuito
  - Um conjunto de equações
  - Um texto explicando o comportamento do circuito

</v-clicks>

</div>
<div>

<div class="flex justify-center">

```
A ----\
       &----\
B ----/      \
              >---- Y
C -----------/
```

**Y = (A·B) + C**

</div>

</div>
</div>

---

# Projeto Simples com Componentes Discretos

<v-clicks>

- Vamos elaborar a síntese de um projeto simples para entender o passo a passo como transformamos uma necessidade descrita em linguagem natural para um circuito eletrônico

</v-clicks>

---

# Exemplo de Projeto - Controle de Forno

<v-clicks>

**Especificação:**

*"Devemos controlar um forno que deve desligar as resistências sempre que a porta for aberta, deve ligar a resistência quando um sensor (termostato) indicar temperatura baixa, e desligar a resistência quando o sensor indicar que o forno está sobreaquecido"*

</v-clicks>

---

# Etapa 1 - Traduzir as Variáveis

<v-clicks>

**Para resolver o projeto:**

1. **Porta** (P): aberta P=0; fechada P=1
2. **Termostato** (T): temperatura baixa T=0; sobreaquecimento T=1  
3. **Saída do sistema: resistência** (R): resistência ligada R=1; resistência desligada R=0

</v-clicks>

---

# Etapa 2 - Gerar a Tabela Verdade

<div class="flex justify-center">

| **Porta** | **Termostato** | **Resistência** |
|-----------|----------------|-----------------|
| P         | T              | R               |
| 0         | 0              | 0               |
| 0         | 1              | 0               |
| 1         | 0              | 1               |
| 1         | 1              | 0               |

</div>

<v-clicks>

**Análise:**
- Se porta aberta (P=0) → resistência sempre desligada
- Se porta fechada (P=1) e temperatura baixa (T=0) → resistência ligada
- Se porta fechada (P=1) e sobreaquecimento (T=1) → resistência desligada

</v-clicks>

---

# Etapa 3 - Extrair a Equação Booleana

<v-clicks>

Da tabela verdade, temos R=1 apenas quando P=1 e T=0:

**R = P · $\overline{T}$**

</v-clicks>

<div class="flex justify-center mt-8">

```
P ----\
       &---- R
T̅ ----/
```

</div>

---

# Exemplo 2 - Sala com 3 Interruptores

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

**Especificação:**
- Uma sala com 3 portas com interruptores em cada uma delas e uma lâmpada ao centro
- Quando uma pessoa entrar por uma porta ela liga ou desliga o interruptor da porta
- A lâmpada deve acender ou apagar cada vez que um interruptor mudar de estado

</v-clicks>

</div>
<div>

<div class="flex justify-center">
<img src="https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Sala+com+3+Interruptores" alt="Sala com 3 interruptores">
</div>

</div>
</div>

---

# Definindo as Convenções

<v-clicks>

**Variáveis:**
- **A, B, C:** Estados dos interruptores (0 = desligado, 1 = ligado)
- **LAMPADA:** Estado da lâmpada (0 = apagada, 1 = acesa)

**Lógica:**
- A lâmpada deve estar acesa quando um número ímpar de interruptores estiver ligado
- A lâmpada deve estar apagada quando um número par de interruptores estiver ligado

</v-clicks>

---

# Tabela Verdade - 3 Interruptores

<div class="flex justify-center">

| A | B | C | LAMPADA |
|---|---|---|---------|
| 0 | 0 | 0 | 0       |
| 0 | 0 | 1 | 1       |
| 0 | 1 | 0 | 1       |
| 0 | 1 | 1 | 0       |
| 1 | 0 | 0 | 1       |
| 1 | 0 | 1 | 0       |
| 1 | 1 | 0 | 0       |
| 1 | 1 | 1 | 1       |

</div>

---

# Extraindo a Equação Booleana

<v-clicks>

Da tabela verdade, extraímos a equação para LAMPADA=1:

**LAMPADA = $\overline{A}$·$\overline{B}$·C + $\overline{A}$·B·$\overline{C}$ + A·$\overline{B}$·$\overline{C}$ + A·B·C**

Esta é a função XOR de três variáveis:

**LAMPADA = A ⊕ B ⊕ C**

</v-clicks>

---

# Implementação no Logisim

<div class="flex justify-center">

```
A ----\
       =1----\
B ----/        \
                =1---- LAMPADA
C -------------/
```

**Circuito usando portas XOR**

</div>

<v-clicks>

**Vantagens do Logisim:**
- Simulação em tempo real
- Interface gráfica intuitiva
- Verificação de funcionamento
- Geração de circuitos otimizados

</v-clicks>

---

# Recursos do Logisim

<v-clicks>

**Principais funcionalidades:**
- Biblioteca completa de portas lógicas
- Componentes de entrada (chaves, botões)
- Componentes de saída (LEDs, displays)
- Ferramentas de análise (tabela verdade, minimização)
- Simulação passo a passo
- Exportação de circuitos

**Links úteis:**
- Tutorial: http://www.cburch.com/logisim/docs/2.7/pt/html/guide/index.html
- Download: https://github.com/logisim-evolution/logisim-evolution/releases

</v-clicks>

---
layout: section
---

# Bibliografia

---

# Bibliografia

- RANHEL, João. **"Eletrônica Digital, Verilog e FPGA"**, 1ª ed., Clube do Autor, 2021.

- CAJUEIRO, J. P. C., **Álgebra de Boole**, Notas de Aula, 19 de agosto de 2009.

- Tutorial Logisim: http://www.cburch.com/logisim/docs/2.7/pt/html/guide/index.html

- Link para download do Logisim: https://github.com/logisim-evolution/logisim-evolution/releases

---
layout: end
---

# Obrigado!

**Perguntas?**

