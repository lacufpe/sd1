---
theme: default
background: https://source.unsplash.com/1920x1080/?memory,sequential
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Lógica Sequencial
  Sistemas Digitais 1 - ME575
  Universidade Federal de Pernambuco
drawings:
  persist: false
transition: slide-left
title: Lógica Sequencial
mdc: true
---

# Lógica Sequencial

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

# Circuitos com Memória

<v-clicks>

- Até agora temos trabalhado com sistemas que são ditos combinacionais

- Ou seja, cuja a saída em um dado instante de tempo apenas dependa de uma combinação do estado atual das entradas:

</v-clicks>

<div class="flex justify-center mt-8">

```
Entradas → [Sistema Combinacional] → Saídas
```

**Saída = f(Entradas atuais)**

</div>

---

# Necessidade de Memória

<v-clicks>

- No entanto, para vários dos sistemas que nos deparamos no dia a dia realizam uma sequência de ações para um mesmo comando

- Logo, a saída desses sistemas não dependem apenas da entrada em um dado instante de tempo, como também necessitam do **estado** atual dele

- Ou seja, o sistema precisa guardar informação sobre as ações que já foram realizadas, ou seja, o sistema necessita ter **memória**

- Nessa aula vamos justamente ver como criar essas memórias nos sistemas digitais

</v-clicks>

---

# Sistema Sequencial

<div class="flex justify-center">

```
Entradas → [Sistema Sequencial] → Saídas
              ↑        ↓
           [Memória/Estado]
```

**Saída = f(Entradas atuais, Estado anterior)**

</div>

---
layout: section
---

# Latch

---

# Latch com Inversores

<v-clicks>

- Existem várias maneiras de guardar informação de forma digital, mas começaremos com uma bem simples, os *latches*

- Primeiramente, vamos pensar no funcionamento do sistema mostrado abaixo:

</v-clicks>

<div class="flex justify-center mt-4">

```
    ┌─────┐
A ──┤  1  ├─── Q
    └─────┘
        │
    ┌─────┐
    │  0  │
    └─────┘
        │
        └─── Q̅
```

**Dois inversores conectados em loop**

</div>

<v-clicks>

- Este circuito tem dois estados estáveis: Q=0 ou Q=1
- Uma vez estabelecido um estado, ele se mantém indefinidamente

</v-clicks>

---

# Latch com Transistores de Passagem

<v-clicks>

- O exemplo anterior usava chaves mecânicas
- Em sistemas digitais podemos implementar essas chaves com transistores:

</v-clicks>

<div class="flex justify-center mt-4">

```
        NMOS (passa 0 bem)
D ──────┤├────── Q
         │
        CLK

        PMOS (passa 1 bem)  
D ──────├┤────── Q
         │
        CLK̅
```

**Transistores MOSFET como chaves**

</div>

---

# Latch Transparente

<div class="flex justify-center">

```
D ──┬─── [Transmission Gate] ──┬─── Q
    │                          │
    │    ┌─────┐    ┌─────┐    │
    └────┤  1  ├────┤  0  ├────┘
         └─────┘    └─────┘
             │
           EN
```

**Latch D transparente**

</div>

<v-clicks>

**Funcionamento:**
- Quando EN = 1: Q segue D (transparente)
- Quando EN = 0: Q mantém o último valor de D (memória)

</v-clicks>

---

# Tabela Verdade do Latch Transparente

<div class="flex justify-center">

| EN | D | Q(t+1) | Operação |
|----|---|--------|----------|
| 0  | X | Q(t)   | Manter   |
| 1  | 0 | 0      | Reset    |
| 1  | 1 | 1      | Set      |

</div>

<v-clicks>

**Características:**
- **Transparente:** Quando habilitado, a saída segue a entrada
- **Memória:** Quando desabilitado, mantém o estado anterior
- **Nível sensitivo:** Responde ao nível do sinal de controle

</v-clicks>

---

# Análise de Estado do Latch

<v-clicks>

- Apesar da análise minuciosa do circuito parecer complicada, o circuito *latch* é simples de se compreender:

1. Quando a entrada **EN** sofre uma transição para habilitada, o *latch* se torna transparente, e durante esse período a saída **Q** segue o valor da entrada **D**

2. Quando a entrada **EN** sofre uma transição para desabilitada, a saída **Q** retém o último valor do dado presente na entrada **D** antes da transição, até que a energia do sistema seja desligada

</v-clicks>

---

# Capacidade de Memória

<v-clicks>

- Isso significa que um *latch* tem capacidade de memorizar um bit de dado digital presente na entrada **D** na transição que desabilita o *enable*

- Esta é a base da memória digital: a capacidade de armazenar informação binária

</v-clicks>

---

# Latch com Portas Lógicas

<div class="flex justify-center">

```
    ┌─────┐
S ──┤     │
    │ NOR ├─── Q
  ┌─┤     │
  │ └─────┘
  │
  │ ┌─────┐
  └─┤     │
R ──┤ NOR ├─── Q̅
    │     │
    └─────┘
```

**Latch SR com portas NOR**

</div>

<v-clicks>

| S | R | Q | Q̅ | Operação |
|---|---|---|---|----------|
| 0 | 0 | Q | Q̅ | Manter   |
| 0 | 1 | 0 | 1 | Reset    |
| 1 | 0 | 1 | 0 | Set      |
| 1 | 1 | 0 | 0 | Proibido |

</v-clicks>

---

# Latch Transparente tipo D com Portas Lógicas

<div class="flex justify-center">

```
D ──┬─── S ──┐
    │        │  ┌─────┐
    │        └──┤     │
    │           │ NOR ├─── Q
    │         ┌─┤     │
    │         │ └─────┘
    │         │
    │         │ ┌─────┐
    │         └─┤     │
    │      ┌────┤ NOR ├─── Q̅
    │      │    │     │
    └──[NOT]    └─────┘
         │
       EN
```

**Latch D implementado com portas NOR**

</div>

---

# Latch tipo D com Preset e Clear

<div class="flex justify-center">

```
PRE ────┐
        │  ┌─────┐
D ──────┼──┤     │
        │  │     ├─── Q
EN ─────┼──┤  D  │
        │  │     │
CLR ────┘  └─────┘
```

**Latch D com controles assíncronos**

</div>

<v-clicks>

**Sinais de controle:**
- **PRE (Preset):** Força Q = 1 independente de D e EN
- **CLR (Clear):** Força Q = 0 independente de D e EN
- **Assíncronos:** Atuam imediatamente, sem depender de EN

</v-clicks>

---
layout: section
---

# Circuitos Sensíveis à Bordas

---

# Como construir um Detector de Bordas

<v-clicks>

- Nas descrições de *latches* anteriores vimos que enquanto o sinal de *enable* (**LE**) estiver ativo a saída **Q** do circuito se modifica

- Há várias aplicações para *latches* transparentes e eles são muito usados por serem fáceis de serem construídos

- No entanto, nem sempre se quer que transições da entrada **D** se propaguem imediatamente para saída **Q**

- Para esses casos, alguns circuitos discretos colocam sensores de borda de subida ou de descida no sinal de controle

</v-clicks>

---

# Detector de Bordas

<v-clicks>

- A figura abaixo ilustra dois circuitos detectores de bordas no sinal *clock* (**clk**):

</v-clicks>

<div class="flex justify-center mt-4">

```
CLK ──┬─── [Delay] ──┐
      │              │  ┌─────┐
      │              └──┤     │
      │                 │ AND ├─── Borda de Subida
      └─────────────────┤     │
                        └─────┘

CLK ──┬─── [Delay] ──┐
      │              │  ┌─────┐
      │          [NOT]──┤     │
      │              │  │ AND ├─── Borda de Descida
      └─────────────────┤     │
                        └─────┘
```

</div>

---

# Diferença entre Latches e Flip-Flops

<v-clicks>

- **LATCH** - é um circuito construído de tal forma que continuamente altera suas saídas em função das entradas (são transparentes). *Latches* são controlados por uma variável de controle "*enable*" (**LE**)

- **FLIP-FLOP** - como os *latches*, são circuitos básicos para construção de lógica sequencial, são criados a partir de *latches* modificados, e alteram as saídas em função das entradas no evento de subida ou de descida do sinal de *clock*. Portanto, *flip-flops* não são transparentes

</v-clicks>

---

# Comparação: Latch vs Flip-Flop

<div class="flex justify-center">

```
Latch D:
EN ──────┐
         │  ┌─────┐
D ───────┼──┤  D  ├─── Q
         │  │  L  │
         └──┤     ├─── Q̅
            └─────┘

Flip-Flop D:
CLK ─────┐
         │  ┌─────┐
D ───────┼──┤  D  ├─── Q
         │  │ FF  │
         └──┤ >   ├─── Q̅
            └─────┘
```

</div>

<v-clicks>

**Principais diferenças:**
- **Latch:** Sensível ao nível (transparente quando EN=1)
- **Flip-Flop:** Sensível à borda (muda apenas na transição do clock)

</v-clicks>

---

# Implementação de Flip-Flop D

<div class="flex justify-center">

```
        ┌─────────┐    ┌─────────┐
D ──────┤ Latch 1 ├────┤ Latch 2 ├─── Q
        │   (M)   │    │   (S)   │
CLK ────┤ EN      │    │      EN ├─── Q̅
        └─────────┘    └─────────┘
             │              │
             └──── [NOT] ────┘
```

**Master-Slave Flip-Flop**

</div>

<v-clicks>

**Funcionamento:**
1. **CLK = 0:** Latch Master ativo, Latch Slave inativo
2. **CLK = 1:** Latch Master inativo, Latch Slave ativo
3. **Resultado:** Mudança apenas na borda de subida do clock

</v-clicks>

---

# Timing Diagram

<div class="flex justify-center">

```
CLK   ┌─┐   ┌─┐   ┌─┐   ┌─┐
      │ │   │ │   │ │   │ │
    ──┘ └───┘ └───┘ └───┘ └──

D     ──┐     ┌─────┐
        │     │     │
      ──┘     └─────┘

Q       ┌─────┐     ┌─────
        │     │     │
    ────┘     └─────┘
        ↑     ↑     ↑
     Borda  Borda  Borda
```

**Q muda apenas nas bordas de subida do CLK**

</div>

---
layout: section
---

# Bibliografia

---

# Bibliografia

- RANHEL, João. **"Eletrônica Digital, Verilog e FPGA"**, 1ª ed., Clube do Autor, 2021.

- Tutorial Logisim: http://www.cburch.com/logisim/docs/2.7/pt/html/guide/index.html

---
layout: end
---

# Obrigado!

**Perguntas?**

