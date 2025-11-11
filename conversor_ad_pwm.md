# Entradas e Saídas "Analógicas"
## Conversor AD e PWM

**João Paulo Cerquinho Cajueiro**

Baseado em slides de Prof. José Rodrigues de Oliveira Neto  
Universidade Federal de Pernambuco  

---

## Objetivos

Aprender como utilizar:
- Entradas analógicas
- Saídas PWM (pulse width modulation)

A partir das bibliotecas disponíveis na plataforma Arduino

---

## Agenda

1. [Entradas Analógicas](#/entradas-analogicas)
2. [Função analogRead()](#/analogread)
3. [Função analogReference()](#/analogreference)
4. [Saídas Analógicas (PWM)](#/saidas-analogicas)
5. [PWM no Arduino](#/pwm-arduino)
6. [Código Exemplo](#/codigo-exemplo)

---

<!-- .slide: id="entradas-analogicas" -->
## Entradas Analógicas

---

### Conversor AD do ATmega328P

O microcontrolador da placa Arduino Uno R3, o **ATmega328P**, possui:

- Conversor AD (analog-to-digital) de Aproximações Sucessivas
  - **10 bits** de resolução
  - **6 canais** de captura ligados aos pinos **A0** ao **A5**
  - Configuração transparente ao projetista

---

### Funções Principais

Para utilizar o conversor AD, basta usar:
- `analogRead()` - lê o valor de um pino analógico
- `analogReference()` - configura a tensão de referência

---

<!-- .slide: id="analogread" -->
## Função analogRead()

--

### Características

- Lê o valor de um pino analógico especificado
- Conversor analógico-digital de **10 bits** e **6 canais** (Pinos A0 a A5)
- Mapeia tensões entre **0V** e **5V** para valores inteiros entre **0** e **1023**

--

### Resolução do Conversor

A resolução em termos de incremento de tensão δᵥ é dada por:

```
δᵥ = (VRefH - VRefL) / 2ᴺ
δᵥ = (5,0 - 0,0) / 2¹⁰
δᵥ ≈ 0,0049 V ≈ 4,9 mV
```

Onde:
- **VRefH**: tensão de referência alta (normalmente Vcc)
- **VRefL**: tensão de referência baixa (normalmente GND)  
- **N**: resolução do conversor em número de bits (10)

---

### Sintaxe

```c
analogRead(pino)
```

### Parâmetros

- **pino**: nome do pino de entrada analógica que se quer ler (A0 a A5)

---

<!-- .slide: id="analogreference" -->
## Função analogReference()

--

### Propósito

Configura a tensão de referência alta **VRefH** para entrada analógica

### Sintaxe

```c
analogReference(tipo)
```

--

### Parâmetros - Tipo

- **DEFAULT**: Vcc (5V)
- **INTERNAL**: referência interna igual a 1,1V no ATmega328P
- **EXTERNAL**: tensão aplicada ao pino AREF é usada como referência (0 a 5V apenas)

--

### ⚠️ ADVERTÊNCIAS

- **Não use menos que 0V ou mais que 5V** como tensão de referência externa no pino AREF
- Se estiver usando referência externa no pino AREF, configure como `EXTERNAL` **antes** de chamar `analogRead()`
- Do contrário, você pode curto-circuitar a tensão de referência ativa e o pino AREF, **danificando o microcontrolador**

---

<!-- .slide: id="saidas-analogicas" -->
## Saídas Analógicas

---

### Limitação do ATmega328P

- O ATmega328P possui conversor AD
- **Não possui** conversor DA (digital to analog)
- Essa ausência é minimizada pela capacidade de gerar sinais **PWM**

---

### PWM?

**PWM (Pulse Width Modulation)** 
- técnica utilizada por sistemas digitais para variar o valor médio de uma forma de onda periódica
- Mantém a frequência de uma onda quadrada fixa e varia o tempo que o sinal fica em nível lógico alto (**duty cycle**)

--

### Duty Cycle

**Duty Cycle** = ciclo ativo da forma de onda

Para calcular o valor médio da tensão de saída:

```
Vout = (duty cycle) × Vcc
```

Onde:
- **duty cycle**: valor do ciclo ativo do PWM - fração de 0 a 1.
- **Vcc**: tensão de alimentação em V

--

## Exemplos de Duty Cycle

| Duty Cycle | Tensão de Saída (Vcc = 5V) |
|------------|----------------------------|
| 0% | 0V |
| 25% | 1,25V |
| 50% | 2,5V |
| 75% | 3,75V |
| 100% | 5V |

--

### Aplicações do PWM

- Controle de velocidade de motores
- Variação da luminosidade de LEDs
- Geração de sinais analógicos
- Geração de sinais de áudio

---

<!-- .slide: id="pwm-arduino" -->
## PWM no Arduino

A placa Arduino UNO R3 possui pinos específicos para saídas PWM:

**Pinos: 3, 5, 6, 9, 10 e 11**

### Função Principal

`analogWrite()` - auxilia na escrita de valores de duty cycle para esses pinos

**Importante**: O funcionamento não tem relação com `analogRead()`

---

### Configuração Necessária

O pino que será utilizado para gerar o sinal PWM precisa ser inicializado como **saída** durante o setup do sistema:

```c
pinMode(pino, OUTPUT);
```

---

### Sintaxe analogWrite()

```c
analogWrite(pino, valor)
```

### Parâmetros

- **pino**: o pino escolhido (3, 5, 6, 9, 10 ou 11)
- **valor**: o duty cycle (entre 0 - sempre desligado - e 255 - sempre ligado)

--

### Mas não era entre 0 e 1?

O arduino usa um timer para dividir o tempo do pulso em $2^N = 256$ partes.

--

<!-- .slide: id="codigo-exemplo" -->
## Código Exemplo

---

### Exemplo Prático

Código que lê um potenciômetro e controla a luminosidade de um LED via PWM:

```c
// UFPE - DEMEC - SD1 - 2024.2 
// Autor: Jose Neto
// Objetivo: Usando as entradas e saidas "analogicas"

//############### DEFINES ############################
//PINOS DE ENTRADA
#define POTENCIOMETRO A0
//PINOS DE SAIDA
#define LED_PWM       11

//TEMPOS
#define TEMPO_ADC      100 //Tempo entre leituras do ADC
#define TEMPO_SERIAL   2000 //Tempo entre enviar dados pela serial
```

---

### Variáveis Globais

```c
//VARIAVEIS GLOBAIS
unsigned int gValorLidoADC = 0;  // guarda o ultimo valor lido do conversor ADC
unsigned int gValorSaidaPWM = 0; // guarda o ultimo valor do PWM
unsigned long gTempoADC;         // Contador de tempo para atualizar ADC
unsigned long gTempoSerial;      // Contador de tempo para enviar dados pela Serial

bool gAtualiza = false;

```

---

### Função Setup

```c
void setup() {
  //Inicializa a Serial
  Serial.begin(9600); // abre a porta serial a 9600 bps
  //SAIDAS
  pinMode(LED_PWM, OUTPUT);
  // inicializa os contadores de tempo;
  gTempoADC = millis() + TEMPO_ADC;
  gTempoSerial = millis() + TEMPO_SERIAL;
}
```

---

### Função Loop

```c
void loop() {
  gAtualiza = fFazLeituraADC();    // Faz leitura do ADC e seta para atualiza o Duty Cicle do PWM
  fAtualizaSaida(gAtualiza);    // Atualiza o Duty Cicle do PWM
  fEnviaSerial();      // Envia dados pela Serial
}
```

---

### Função de Leitura ADC

```c
bool fFazLeituraADC() {
  unsigned long tempoAtual = millis();
  bool atualiza = ( tempoAtual >= gTempoADC ); //Verifica se passou 100 ms
  if(atualiza)
  {
    gTempoADC += TEMPO_ADC;        //Atualiza o tempo atual
    gValorLidoADC = analogRead(POTENCIOMETRO); //Faz uma leitura do ADC
  }
  return atualiza; // Indica se fez ou não uma medida
}
```

---

### Função de Atualização da saída

```c
unsigned int fAtualizaSaida( bool atualiza ) {
  if (atualiza)
  {
    gValorSaidaPWM = map(gValorLidoADC, 0, 1023, 0, 255) // converte da escala do analogRead para a do analogWrite
    analogWrite(LED_PWM, gValorSaidaPWM); //Atualiza o PWM                              
  }  
}
```


---

### Função de Comunicação Serial

```c
void fEnviaSerial() {
  unsigned long tempoAtual = millis(); //Pega o tempo atual
  if(tempoAtual >= gTempoSerial) //Ve se passou 200 ms
  {
    gTempoSerial += TEMPO_SERIAL; //Atualiza a contagem de tempo
    Serial.print("Valor ADC: "); 
    Serial.print(gValorLidoADC);
    Serial.print(" Valor DutyCycle: ");
    Serial.println(gValorSaidaPWM);
  }
}
```

--

### Função map()

A função `map()` é essencial neste exemplo:

```c
map(gValorLidoADC, 0, 1023, 0, 255)
```

- Converte o valor lido do ADC (0-1023) para o valor do PWM (0-255)
- Permite correspondência linear entre entrada analógica e saída PWM

---

## Funcionamento do Sistema

1. **Leitura**: Potenciômetro conectado ao pino A0 é lido pelo ADC
2. **Conversão**: Valor ADC (0-1023) é mapeado para PWM (0-255)  
3. **Saída**: LED conectado ao pino 11 varia sua luminosidade
4. **Monitoramento**: Valores são enviados pela porta serial

---

## Resumo

- **Entradas Analógicas**: Uso de `analogRead()` nos pinos A0-A5
- **Saídas PWM**: Uso de `analogWrite()` nos pinos 3, 5, 6, 9, 10 e 11  
- **Resolução**: ADC 10 bits, PWM 8 bits
- **Aplicação**: Controle analógico através de sinais digitais
- **Temporização**: Controle não-blocante com `millis()`

---

## Bibliografia

- Arduino Reference Documentation
- ATmega328P Datasheet - Microchip Technology
- Documentação das funções Arduino disponível em: arduino.cc/reference