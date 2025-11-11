# Protocolos de Comunicação Serial

**ME575 - Sistemas Digitais 1**

José Rodrigues de Oliveira Neto  
Universidade Federal de Pernambuco  
Departamento de Engenharia Mecânica

---

## Agenda

1. [Introdução](#/introducao)
2. [Protocolo SPI](#/spi)
3. [Protocolo I2C](#/i2c)
4. [UART](#/uart)
5. [Bibliografia](#/bibliografia)

---

<!-- .slide: id="introducao" -->
## Introdução

---

### Contexto dos Sistemas Embarcados

- Sistemas com cada vez mais funções
- Requer uso de vários circuitos integrados em um mesmo sistema embarcado
- A comunicação entre diferentes sistemas embarcados também é uma necessidade
- Comunicação pode ser **paralela** (N bits de cada vez) ou **serial** (um bit por vez)

---

### Barramentos Paralelos

- Tipicamente a comunicação do processador com a memória e os periféricos internos é paralela
- Para ligação entre chips ou entre placas há problemas:
  - Muitos fios ou trilhas - impacta tamanho e custo.
  - Sincronismo é complicado.
- Diversas tecnologias de interligação serial de dispositivos foram desenvolvidas

---

### Protocolos Seriais

**Protocolos Assíncronos**
- Não possuem um sinal exclusivo de sincronismo dedicado (clock) participando da transmissão

**Protocolos Síncronos**
- O sinal de sincronismo é um dos sinais que participam da comunicação

---

### Comparação dos Protocolos

| Protocolo | Tipo | Barramento (Fios) | Taxa Máxima | Fluxo de Dados |
|-----------|------|-------------------|-------------|----------------|
| UART (RS232) | Assíncrono | 2 | 115200 bps | Half ou Full Duplex |
| SPI | Síncrono | 3 + nº de Slaves | 2 Mbps | Full Duplex |
| I2C | Síncrono | 2 | 400 Kbps | Half Duplex |

**Legenda:**
- bps - bits por segundo
- Half Duplex - ou envia ou recebe dados por vez
- Full Duplex - pode receber ou enviar dados ao mesmo tempo

---

<!-- .slide: id="spi" -->
## Protocolo SPI

### Serial Periphery Interface

---

### Características do SPI

- Desenvolvida pela Motorola na década de 1980
- Suporta um dispositivo mestre e um ou mais escravos conectados no barramento
- Caracteriza-se pela simplicidade e eficiência, podendo alcançar velocidades de até 70 MHz

---

### Sinais do Barramento SPI

O barramento é composto por quatro linhas de comunicação:

- **SCLK/SCK:** serial clock
- **MOSI/SIMO/SDI/DI/SI:** master-output, slave input
- **MISO:** master-input, slave-output
- **SS/CS/TE:** slave select

--

#### Transferência de Dados

- Escravos são selecionados pelo pino SS.
- A cada pulso do clock é transmitido 1 bit em cada direção.
- A transmissão pode ser iniciada pelo LSB (least significant bit) ou pelo MSB (most significant bit), variando conforme o dispositivo
- O sinal de clock pode ser configurado de quatro formas distintas, combinando polaridade (CKP) e fase (CKE)
- Os dados transferidos são normalmente representados por 8 bits

---

#### Processo de Comunicação

1. O master seleciona o slave com o qual deseja se comunicar, colocando o pino SS no estado baixo '0'
2. O slave se prepara para se comunicar (alguns dispositivos necessitam de um pequeno atraso)
3. Ao mesmo tempo em que o master envia dados para o slave, ele também pode receber dados
4. Após realizar as operações desejadas, o master finaliza a comunicação (SS = 1)

---

<!-- .slide: id="i2c" -->
## Protocolo I2C

---

### Características do I2C

- O I2C (Inter-Integrated Circuit) é um protocolo de comunicação síncrono mestre-escravo criado pela PHILIPS
- Finalidade de simplificar a comunicação entre dispositivos eletrônicos
- Largamente difundido e adotado por diversos fabricantes (drivers de LCD, memórias, conversores AD e DA, RTCs, microcontroladores, etc.)
- O barramento do I2C é do tipo multi-master

---

### Endereçamento I2C

- Geralmente, os dispositivos configurados como master são microcontroladores ou microprocessadores
- Cada dispositivo conectado ao barramento possui um endereço único, representado por 7 ou 10 bits
- Pode atuar como transmissor ou receptor
- Um barramento I2C possui dois resistores de pull-up que mantêm as linhas SCL (clock) e SDA (dados) em Vcc

---

### Taxas de Transferência

Para evitar erros de comunicação, deve-se garantir que a frequência do clock gerado pelo master não ultrapasse os limites de frequência dos dispositivos slaves.

Taxas padronizadas:
- 100 kbps
- 400 kbps
- 1 Mbps

---

### Funcionamento do Protocolo I2C

---

#### Condições de Início e Parada

O início e o término de uma comunicação I2C são identificados por duas condições:
- **START:** início da comunicação
- **STOP:** parada da comunicação

---

#### Endereçamento de 7 bits

Na comunicação com endereçamento de 7 bits:
1. O dispositivo master envia o START
2. Seguido de 8 bits que compreendem:
   - Endereço do dispositivo slave
   - Tipo de operação (R/W̄)

---

#### Endereçamento de 10 bits

No modo de endereçamento de 10 bits:
- Os 5 bits mais significativos do primeiro pacote são constantes: {1, 1, 1, 1, 0}
- Indicando que o endereçamento será de 10 bits

---

#### Processo de Comunicação

1. Após o envio de endereço e tipo de operação, dispositivos slaves verificam se o endereço pertence a um deles
2. Retornam o sinal de ACK (forçar a linha SDA para '0' antes do nono pulso de clock)
3. Caso ninguém responda, o master deve enviar uma condição de STOP
4. Se alguém responder, procede de acordo com a operação (leitura ou escrita)

---

#### Operações de Leitura e Escrita

**Se leitura:**
- O master envia oito pulsos de clock
- A cada pulso efetua uma leitura do nível lógico presente na linha SDA
- Bits enviados pelo slave a partir do MSB
- O master deve responder enviando um nono pulso com ACK

**Se escrita:**
- O master envia 8 pulsos de clock, carregando o dado na linha SDA
- O slave deve responder com um ACK
- Múltiplos bytes podem ser enviados/recebidos

---

<!-- .slide: id="uart" -->
## UART

---

### Características da UART

- A UART (Universal Asynchronous Receiver Transmitter) é também conhecida como interface de comunicação serial
- Permite a comunicação half ou full-duplex entre dispositivos de forma serial
- Uma aplicação muito comum é a comunicação assíncrona pelo protocolo RS-232

---

### Protocolo RS232

---

#### Características do RS232

- O protocolo RS232 é um padrão de comunicação serial criado pela EIA (Electronic Industries Association)
- Também conhecida por EIA-232
- O pacote enviado é constituído de 10 ou 11 bits:
  - 8 bits constituem a mensagem
  - 1 bit de início (start bit)
  - 1/1,5/2 bits de parada (stop bit)
  - 1 bit de paridade (parity bit)
- Trabalha com taxas de transmissão de até 20 kbps a uma distância de até 15 metros

---

### Funcionamento do Protocolo RS232

---

#### Processo de Transmissão

1. Quando o canal não está transmitindo nenhum dado, ele apresenta um nível lógico '1'
2. Para sinalizar o início de uma comunicação, o transmissor coloca o canal em nível lógico '0' (start bit)
3. O receptor dá início à contagem de clock, internamente, para receber os dados
4. Após o start bit, o transmissor envia a mensagem (8 bits), iniciando pelo LSB
5. Seguindo vem o bit de paridade (opcional) e o stop bit

---

#### Taxas de Transmissão Comuns

- 300 bps
- 600 bps
- 1200 bps
- 2400 bps
- 4800 bps
- 9600 bps
- 19200 bps
- (...)

---

#### Controle de Erro

- O bit de paridade é responsável pelo controle de erro
- Ele assume o valor '0' se a mensagem possuir um número par de bits iguais a '1'
- Caso contrário, ele será igual a '1'
- A comunicação RS232 é assíncrona, logo, um erro da configuração das taxas de transmissão entre os dispositivos acarretará em erro de comunicação

---

### Níveis Lógicos da Interface RS232

---

#### Conectores

As portas seriais normalmente utilizam conectores do tipo:
- DB9
- RJ45

---

#### Níveis de Tensão

Na interface RS232 os níveis lógicos são representados por:

- **'0' lógico:** tensão entre +3V e +25V
- **'1' lógico:** tensão entre -3V e -25V

Estas são tensões bem diferentes das utilizadas nos sistemas microcontrolados.

---

#### Conversores de Nível

- Para ligar em uma porta serial é necessário um conversor
- Entre os mais conhecidos estão o MAX232 e o MAX3232
- Hoje em dia é incomum achar dispositivos ligados ao computador pela porta serial
- O mais comum é utilizar uma porta USB (ou alguma comunicação sem fio)

---

#### USB para Serial

- O protocolo USB é muito pesado computacionalmente para várias famílias de microcontroladores
- O mais comum é utilizar algum circuito integrado para fazer a conversão do sinal no protocolo serial para o USB
- Um usado em várias placas de desenvolvimento Arduino é o CP2102N

---

<!-- .slide: id="bibliografia" -->
## Bibliografia

- MIYADAIRA, Alberto Noboru, **"Microcontroladores PIC18: Aprenda e programe em linguagem C"**, 4ª ed., Editora Érica, 2009.

- RANHEL, João. **"Eletrônica Digital, Verilog e FPGA"**, 1ª ed., Clube do Autor, 2021.

---

## Obrigado!

**Perguntas?**

José Rodrigues de Oliveira Neto  
joserodrigues.oliveiraneto@ufpe.br

Universidade Federal de Pernambuco  
Departamento de Engenharia Mecânica  
ME575 - Sistemas Digitais 1