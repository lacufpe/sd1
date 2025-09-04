# Revisão de C e Entrada e Saídas Digitais

## Objetivos

O objetivo desse documento é que façamos uma rápida revisão sobre os principais aspectos da linguagem C, como utilizar ela de forma estruturada e enfatizar as diferenças encontradas quando estamos trabalhando com o Arduino, cuja a linguagem é fortemente baseada em C.

## Características da Linguagem C

A linguagem C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela ISO 9899:2024 (do inglês *International Organization for Standardization*), criada em 1972 por Dennis Richie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix (originalmente escrito em assembly).

### Expressões

Na linguagem C, uma expressão é uma combinação de **variáveis**, **constantes** e **operadores** que pode ser avaliada computacionalmente, resultando em um valor. O valor resultante é chamado de valor da expressão.

### Variáveis

Uma variável representa um espaço na memória do computador para armazenar um determinado tipo de dado. Na linguagem C, todas as variáveis devem ser explicitamente declaradas. Na declaração da variável deve ser especificados seu **tipo** e seu **nome**:

#### Exemplos:

```c
bool i;       //declarando uma variavel sem  inicializar
int x = 0;    //declarando e indicializando
unsigned long umaVariavel, maisUmaVariavel;
char x, X;     //C e case sansitive, logo X diferente de x
```

#### Tipos de Variáveis no Arduino

* `bool:` valor verdadeiro (`true` = 1) ou falso (`false` = 0).
* `char:` um caractere (8 bits).
* `byte:` um byte, ou sequência de 8 bits.
* `int:` número inteiro de 16 bits com sinal em complemento para 2 (-32768 a 32767).
* `unsigned int:` número inteiro de 16 bits sem sinal (0 a 65535).
* `long:` número inteiro de 32 bits com sinal em complemento para 2 (-2147483648 a 2147483647).
* `unsigned long:` número inteiro de 32 bits sem sinal (0 a 4294967295)
* `float:` número real de precisão simples (ponto flutuante), 32 bits.
* `double:` número real de precisão dupla (ponto flutuante), 64 bits.
* `string:` sequência de caracteres.
* `void:` tipo vazio (não tem tipo).

### Operadores

Um operador é um conjunto de um ou mais caracteres que serve para operar sobre uma ou mais variáveis e/ou constantes:

```c
x = 5+3; //nesse caso 5 e 3 sao constantes;
//variaveis podem receber quase qualquer nome, 
//use isso para deixer seu codigo mais legivel:
temperaturaAtual = temperaturaSensor + temperaturaOffset; 

//Algumas particularidades de C:
x++;     // x = x + 1;
++x;     // x = x = 1;
x += 3;  // x = x + 3;
x /= 2;  // x = x/2;
x = y%2; // x = 0, se y par e x = 1 se y impar;
```

#### Tipos de Operadores

Segue os diferentes tipos de operadores encontrados em C:

* **Operadores aritméticos:**

| | |
|---|---|
| `+` | $\rightarrow$ adição; |
| `-` | $\rightarrow$ subtração; |
| `*` | $\rightarrow$ multiplicação; |
| `/` | $\rightarrow$ divisão; |
| `%` | $\rightarrow$ resto da divisão inteira. |

* **Operadores lógicos**: usados em tomadas de decisão, devolvem `1` se **verdadeiro** e `0` se **falso**:

| | |
|---|---|
| `&&` | $\rightarrow$ `E` lógico; |
| `||` | $\rightarrow$ `OU` lógico; |
| `==` | $\rightarrow$ igualdade; |
| `!=` | $\rightarrow$ desigualdade; |
| `>` | $\rightarrow$ maior que; |
| `<` | $\rightarrow$ menor que; |
| `>=` | $\rightarrow$ maior ou igual; |
| `<=` | $\rightarrow$ menor ou igual; |

* **Operadores bit a bit:**

| | |
|---|---|
| `&` | $\rightarrow$ `E` lógico bit a bit; |
| `|` | $\rightarrow$ `OU` lógico bit a bit; |
| `!` | $\rightarrow$ Inversão bit a bit; |
| `>>` | $\rightarrow$ deslocamento binário a direita; |
| `<<` | $\rightarrow$ deslocamento binário a esquerda; |

* **Operadores de atribuição:**

| | |
|---|---|
| `=` | $\rightarrow$ atribui um valor a uma variável. |

## Controle de Fluxo

Como dito anteriormente, C é uma linguagem estruturada e procedural em que as linhas do código são lidas de cima para baixo em sequência. Mas nem sempre se deseja que esse fluxo siga essa sequência de cima para baixo, do início ao fim. Para mudar o fluxo dessa execução do código que usamos essas estruturas de controle de fluxo, que podemos separá-las em estruturas de **tomada de decisão** e para **construção de laços**.

### Tomada de Decisão

As estruturas de tomada de decisão são utilizadas para definição de ações a serem tomadas a partir do estado atual de uma ou várias variáveis.

#### `if-else`

A estrutura `if` é utilizada para decidir se uma parte específica do código será executada ou não:

*Sintaxe:*

`if(` *expressão* `)`

`{`

  *bloco de comandos*

`}`

*Exemplo:*

```c
if( x <= 13)   //Testa se x e menor ou igual a 13;
{
	//Caso seja verdade, executa o esta entre as chaves;
	y = 1;
}
//Caso falso, pula a execucao para depois das chaves;
```
 
É utilizado `if-else` se é desejado que uma entre duas partes específicas de código devem ser executada:

*Sintaxe:*

`if(` *expressão* `)`

`{`

  *bloco de comandos*

`}`

`else`

`{`

  *bloco de comandos*

`}`

*Exemplo:*

```c
if( x <= 13)   //Testa se x e menor ou igual a 13;
{
	//Caso seja verdade, executa o esta entre as chaves;
	y = 1;
}
else
{
	//Caso falso, executa o codigo contido nas chaves do else;
	y = -1;
}
```

Ainda é possível concatenar vários *ifs* e *elses*:

```c
if( x <= 13)   //Testa se x e menor ou igual a 13;
{
	//Caso seja verdade, executa o esta entre as chaves;
	y = 1;
}
else if(x > 13 && x < 20 ) // caso falso, testa se x esta entre 4 e 19
{
	//Caso seja verdade, eexecuta o esta entre as chaves;
	y = -1;
}
else
{
	//Caso falso, executa o codigo contido nas chaves do else;
	y = 0;
}
```

#### `switch`

O `switch` é usado quando a partir de uma variável ou expressão que pode assumir vários valores você deseja que para valores específicos dessa variável seja executado um código específico. 

*Sintaxe:*

`switch(` *expr* `)`

`{`

`case op1:` 

  *comandos se* `expr == op1` 

  `break;`

`case op2:` 

  *comandos se* `expr == op2` 

  `break;`

(*$\\cdots$*)

`default:` 

  *comandos se* `expr` *diferente de todas as anteriores* 

  `break;`

`}`

*Exemplo:*

```c
typedef enum
{
  ESTADO_S0, //Estado inicial
  ESTADO_S1, //Faz alguma coisa
  ESTADO_S2, //Faz outras coisas
 }   estados;

estados estadoAtual = ESTADO_S0;    //cria uma variavel estadoAtual do tipo estados inicializa com o estado inicial S0
estados estadoFuturo = estadoAtual; //cria uma variavel estadoFuturo do tipo `estados` e inicializa com o estado inicial S0

//(...)

  switch(estadoAtual)
  {
    case ESTADO_S0:
      estadoFuturo = funcEstadoS0();
      break;
    case ESTADO_S1:
      estadoFuturo = funcEstadoS1();
      break;
    case ESTADO_S2:
      estadoFuturo = funcEstadoS2();
      break;
    default:
      estadoFuturo = ESTADO_S0;
      break;
  } 
  estadoAtual = estadoFuturo;       //atualiza o estado atual
```

### Construções de Laços

As estruturas para construção de laços são usadas quando se quer que uma determinada parte de código seja executada mais de uma vez. 

#### `for`

Executa uma parte específica do código por um número específico de vezes.

*Sintaxe:*

`for(` *inicializa a variavel*; *condição de parada*; *incrementa a variavel* `)`

`{`


  *comandos*

`}`

*Exemplo:*

```c
for(i = 0; i < 10; i++)
{
	vetorB[i] = vetorA[i] + vetorC[i];
}
```

#### `while`

Executa uma parte específica do código enquanto uma condição é satisfeita.

*Sintaxe:*

`while(` *expressão* `)`

`{`


*comandos*

`}`

*Exemplo:*

```c
i = 0;
while(i < 10)
{
	vetorB[i] = vetorA[i] + vetorC[i];
	++i;
}
```

#### `do-while`

Executa uma parte específica do código enquanto uma condição é satisfeita, como o *while*. A única diferença é que primeiro o código é executado e só depois a condição é testada. Isso força que o código é executado ao menos uma vez. 

*Sintaxe:*

`do`

`{`


*comandos*

`}` `while(` *expressão* `)`

*Exemplo:*

```c
i = 0;
do
{
	vetorB[i] = vetorA[i] + vetorC[i];
}while(++i < 10);
```

## Funções

Para a construção de programas estruturados, é sempre preferível dividir as grandes tarefas em tarefas menores e utilizar seus resultados parciais para compor o resultado final desejado.

1. **Funções específicas podem ser facilmente reaproveitadas.**
2. **O código gerado fica mais legível.**

*Sintaxe:*

*tipo_retornado nome_da_funcao* `(` *lista de parâmetros* `)`

`{`

  *corpo da função*

  `return` *variavel_retorno*;

`}`

*Exemplo:*

```c
//Funcao retorna o valor do n-esimo bit de um byte
//ENTRADAS: byte n - valor entre 0 e 7 do bit cujo resultado se deseja saber
//          byte variavel - variavel que se deseja saber o 
//                          valor de um bit especifico
//SAIDAS:   bool com o valor do bit desejado
bool ValorBit(byte variavel, byte n)
{
   byte mascara = 0x01;     //variavel interna da funcao;
   bool valorBit = 0;       //variavel interna da funcao;
   valorBit = (variavel >> n) & mascara;
   return valorBit;
}
```

## Trabalhando com Entradas Digitais

Na última prática trabalhamos apenas com saídas digitais. Como foi falado, na a função `pinMode()` também nos permite utilizar os pinos como entradas digitais. O que é muito importante quando estamos falando de sistemas digitais, precisamos de entradas! Vamos então fazer alguns sistemas simples para vermos como utilizar.

### Configurando um Pino como Entrada

Na Figura 1 é mostrado um sistema bem simples com apenas um botão e uma led feito no Tinkercad. Na prática utilizaremos o *shield* Multifunções que possui três botões e quatro leds, entre outras entradas e saídas. Iremos falar mais sobre ele na próxima aula, hoje apenas utilizaremos os botões e leds.   

![AS17_SD11](Figuras/AS17_SD11.png)
<small>Fonte - Produzido pelo autor.</small>

E cole o código mostrado a seguir:

```c
// UFPE - DEMEC - SD1 - AS25 - 2022.2 
// Autor:     Jose Neto
// Objetivo:  Ligar um led quando um botao
//            e apertado


// Definindo os pinos que serao utilizados
//Definindo os botoes do shield:
#define S1 A1  
#define S2 A2  
#define S3 A3
//Definindo os leds dos sheild:
#define D1 13 //Observe que e o mesmo led da placa 
#define D2 12
#define D3 11
#define D4 10

void setup()
{
  //pinMode(S1, INPUT_PULLUP); //Colocando o pull-up interno
  pinMode(S1, INPUT); //Sem colocar um pull-up interno
  pinMode(D1, OUTPUT);         //Led externo como saida
}

void loop()
{
  if(!digitalRead(S1))       //Se o botao foi apertado
  {
    digitalWrite(D1,LOW);     //Liga o Led externo
  }
  else                          //Caso contrario
  { 
    digitalWrite(D1,HIGH);      //Desliga o led
  }
  delay(100);                   //Espera 
}
```

Para adicionarmos um botão ou chave ao nosso circuito digital é muito importante adicionar um sistema de *pull-up* ou *pull-down* nessa ligação. Um exemplo de um sistema com resistor de *pull-up* mostrado na Figura 2.

![Pullup_Resistor](Figuras/Pullup_Resistor.png)
<small>Fonte - https://en.wikipedia.org/wiki/Pull-up_resistor.</small>

A ideia por trás desse circuito é que o pino de entrada do nosso microcontrolador não fique ligado ``a nada'' quando o botão ou *switch* não estiver acionado. Poderíamos adicionar esse sistema de forma externa a nossa placa Arduino UNO R3, como está ocorrendo no *shield* Multifunções, o microcontrolador já possui esse sistema internamente bastando a nós configurarmos o pino corretamente para usá-lo:

```c
  pinMode(BOTAO, INPUT_PULLUP); //Colocando o pull-up interno
```

### Adicionando um Sistema de *Debounce*

Na vida real chaves e botões apresentam *bounce*. *Bounce* é uma variação espúria no sinal lido quando um botão sai de não apertado para apertado e vice-versa. A Figura 3 mostra justamente a característica do sinal no tempo que gera esse problema.

![Switch_Debounce_2](Figuras/Switch_Debounce_2.png)
<small>Fonte - https://www.geeksforgeeks.org/switch-debounce-in-digital-circuits/.</small>

Existem várias maneiras de resolver esse problema e a essas soluções damos o nome de *debounce*. Vamos mostrar uma das possíveis maneiras de fazer *debouce* por software. Ela não é muito diferente da mostrada em um exemplo dentro da própria IDE do Arduino, mas tentaremos quebrar ela em partes para simplificar o entendimento.

Primeiramente um código que apenas inverte o valor de um led caso um botão seja apertado:

```c
// UFPE - DEMEC - SD1 - 2023.2 
// Autor:     Jose Neto
// Objetivo:  Inverter o valor do LED
//            quando o BOTAO for apertado


// Definindo os pinos que serao utilizados
//Definindo os botoes do shield:
#define S1 A1  
#define S2 A2  
#define S3 A3
//Definindo os leds dos sheild:
#define D1 13 //Observe que e o mesmo led da placa 
#define D2 12
#define D3 11
#define D4 10
//Constantes de Tempo
#define DELAY_DEBOUCE  50 //Tempo esperado para o sinal estabilizar


// Definindo variaveis globais
bool ledEstado = HIGH;          //guarda o estado atual do LED
bool botaoEstado =  HIGH;      //guarda o estado atual do Botao

void setup()
{
  pinMode(S2, INPUT); //Sem colocar um pull-up interno
  pinMode(D2, OUTPUT);         //Led externo como saida
}

void loop()
{
  bool botaoLido = digitalRead(S2);

  
  if((botaoLido == LOW) && (botaoEstado == HIGH)) // Testa se o botao foi 
  {                                               // apertado.
    botaoEstado = botaoLido;                      // Atualiza o valor do estado 
                                                  // do Botao;
    delay(DELAY_DEBOUCE);                         // Espera um tempo para o 
                                                  // sinal se estabilizar;
    botaoLido = digitalRead(S2);                  // Le novamente o botao
    if(botaoLido == botaoEstado)                  // Se o botao continua 
    {                                             // apertado;
      ledEstado = !ledEstado;                     // Inverte o valor do led;
    }
  }
  botaoEstado = botaoLido;                        // Atualiza o estado do botao;
  digitalWrite(D2, ledEstado);                    // Atualiza a saida do led;
}
```

Se colocarmos na simulação, veremos que o código funciona. Mas como foi dito, estamos em um ambiente simulado, mesmo sem essa sistema de *debounce* provavelmente o sistema iria funcionar. Logo, um teste em um ambiente real é necessário para testar a solução apresentada. Outra coisa importante é que esse tempo de *delay* para o *debounce* vai depender muito da qualidade dos botões e das ligações elétricas utilizadas. 

### Usando um *Delay* Não Blocante

Embora o código mostrado na Seção 4.2 funcione, ele é pouco prático em um sistema onde tenhamos várias coisas funcionando ``ao mesmo tempo''. Pois sempre que a condição do `if` a seguir for verdadeira:
```c
if((botaoLido == LOW) && (botaoEstado == HIGH)
```

O nosso sistemas irá ficar parado pelo tempo configurado em 
```c
#define DELAY_DEBOUCE  50 //Tempo esperado para o sinal estabilizar
```

Por isso, necessitamos uma maneira de contar o tempo de forma não comprometer o funcionamento do restante do código. Como tudo em programação, existem diferentes soluções, iremos mostrar um delas a partir do uso da função `millis()`.

Esta função devolve um número de 32 bits sem sinal (ou seja, um `unsigned long`) com o tempo em milissegundos desde que a placa foi ligada. Com isso, podemos contar a passagem de tempo apenas atualizando uma base de tempo e comparando com o retorno da função `mills()`. Modificando o algoritmo apresentado na Seção 4.2, teremos:

```c
// UFPE - DEMEC - SD1 - 2023.2
// Autor:     Jose Neto
// Objetivo:  Inverter o valor do LED
//            quando o BOTAO for apertado 
//            com debounce nao blocante


// Definindo os pinos que serao utilizados
//Definindo os botoes do shield:
#define S1 A1  
#define S2 A2  
#define S3 A3
//Definindo os leds dos sheild:
#define D1 13 //Observe que e o mesmo led da placa 
#define D2 12
#define D3 11
#define D4 10
//Constantes de Tempo
#define DELAY_DEBOUCE  50 //Tempo esperado para o sinal estabilizar


// Definindo variaveis globais
bool ledEstado = HIGH;          //guarda o estado atual do LED
bool botaoEstado =  HIGH;      //guarda o estado atual do Botao
bool debounce    =  false;        //precisa contar tempo? 
unsigned long tempoDebounce = 0;  //guarda o tempo desde o ultimo debounce;

void setup()
{
  pinMode(S3, INPUT); //Sem colocar um pull-up interno
  pinMode(D3, OUTPUT);         //Led externo como saida
}

void loop()
{
  bool botaoLido = digitalRead(S3);

  
  if((botaoLido == LOW) && (botaoEstado == HIGH)) // Testa se o botao foi 
  {                                               // apertado;
    botaoEstado = botaoLido;                      // Atualiza o valor do estado 
                                                  // do Botao;
    tempoDebounce = millis();                     // Atualiza o valor do 
                                                  // contador de tempo;
    debounce = true;                              // inicializa a contagem de
  }                                               //  tempo;
  if(debounce)
  {
    if((millis() - tempoDebounce) > DELAY_DEBOUCE)
    {
      botaoLido = digitalRead(S3);             // Le novamente o botao
      if(botaoLido == LOW)                        // Se o botao continua 
      {                                           // apertado;
        ledEstado = !ledEstado;                   // inverte o estado do LED;
      }
      debounce =  false;                          // para de contar tempo
    }
  }

  botaoEstado = botaoLido;                        // Atualiza o estado do botao;
  digitalWrite(D3, ledEstado);                    // Atualiza a saida do led;
}
```

Note ainda que a contagem de tempo é reiniciada sempre que o botão vai de um para zero. Logo, o código força que o led só tenha seu valor invertido depois de passar 50 ms com o valor do botão estável em zero.

## Bibliografia

* bibliografia.bib

