# 🎚️IN1 e IN2

Estas duas tracks são responsáveis por enviar sinal MIDI para as demais tracks do projeto inteiro, sendo que cada botão tem a função de oitavar o timbre de acordo com o ajuste selecionado.

<figure markdown="span">
  ![REDKEYS v2.5 | IN1 e IN2](../../../assets/images/redkeys2.5/redkeys2.5%20-%20IN1%20e%20IN2.png)
  <figcaption>REDKEYS v2.5 | IN1 e IN2</figcaption>
</figure>

Um detalhe extremamente importante sobre essas duas tracks nós falaremos na sequência, então se atente para tudo o que for falado aqui, pois você obterá melhor aproveitamento de 100% dos recursos que são exclusivos e que desenvolvemos dentro do pack visando facilitar cada vez mais o uso da Red Keys ao vivo.

Roteamento: por padrão a track chamada "IN 1" enviar sinal para as seguintes tracks abaixo:

* **Pianos**
* **Pads**
* **Wold Session**
* **ARP MELODY e ARP PULSE**

Do mesmo modo, a track chamada "IN 2" envia sinal para a track de **"SYNTH"**.

Isto foi pensado dessa forma para que quando o usuário resolver usar dois timbres em oitavas e regiões diferentes ele possa conseguir somente fazendo esta separação de canais e assim tornando mais fácil o uso das duas mãos para tocar com timbres diferentes, mesmo sendo um piano polofônico + um timbre de sintetizador monofônico, por exemplo.

Abaixo temos aqui uma imagem que representa perfeitamente este roteamento de sinal dentro das tracks:

<figure markdown="span">
  ![REDKEYS v2.5 | Roteamento de sinais MIDI das tracks IN1 e IN2](../../../assets/images/redkeys2.5/redkeys2.5%20-%20IN1%20e%20IN2%20Routing.avif)
  <figcaption>REDKEYS v2.5 | Roteamento de sinais MIDI das tracks IN1 e IN2</figcaption>
</figure>

A seguir, iremos falar detalhadamente sobre cada um dos módulos que foram inclusos dentro do pack que não são nativos do Ableton Live, mas que funcionam sem precisar de outros plugins externos, graças à tecnologia do Max for Live, disponível apenas na versão Suite do Ableton.

**RED KEYS SPLIT:** esse módulo é responsável por fazer a divisão do teclado em uma região específica ou pelo teclado inteiro.

O botão "Limit Low" vai dizer a partir de qual tecla os sons do IN 1 irão funcionar, e o "Limit High" irá atuar da mesma forma, porém delimitando as regiões agudas da track IN 1.

O botão de "Offset" determina a partir de qual região tudo isso vai funcionar. É indispensável deixar exatamente como está, na região "C0".

<figure markdown="span">
  ![REDKEYS v2.5 | REDKEYS Split](../../../assets/images/redkeys2.5/redkeys2.5%20-%20Split.png)
  <figcaption>REDKEYS v2.5 | REDKEYS Split</figcaption>
</figure>

Vale lembrar também que nesta versão da [REDKEYS v2.5](https://youtu.be/r2r32nUes9g) este plugin teve o seu tamanho de tela expandido, facilitando assim a visualização das 88 teclas disponíveis em seu teclado, tornando mais completa a operação e manuseio do plugin.

**MIDI-Filter:** através desse módulo é possível filtrar sinais MIDI que são enviados para as tracks. Você pode cancelar o envio de cada um desses sinais listados na imagem.

O botão "Exclude" serve para que você escolha determinado sinal MIDI para ser ignorado. Neste caso a track IN 2 virá com o botão ativado, pois representa que nos synths não haverá nenhum sinal de CC64 (Sustain) sendo enviado para as tracks de sintetizadores, mas casi queira que o pedal funcione também nessas tracks, basta desabilitar o botão "Exclude" e voltará ao normal.

<figure markdown="span">
  ![REDKEYS v2.5 | MIDI Filter](../../../assets/images/redkeys2.5/redkeys2.5%20-%20MIDI%20Filter.png)
  <figcaption>REDKEYS v2.5 | MIDI Filter</figcaption>
</figure>

No vídeo abaixo também fizemos um tutorial bem prático, simples e rápido sobre o uso deste módulo para trazer ainda mais clareza sobre o seu uso.

<div style="display: flex; justify-content: center;">
<iframe src="https://www.youtube.com/embed/8U-11kwY9Uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="aspect-ratio: 16 / 9; width: 100% !important;"></iframe>
</div>

**Veloticy:** é um plugin nativo do Ableton Live que possibilita fazer ajustes na curva de velocidade das teclas, que por sua vez atuam nos timbres como pianos por exemplo, e fazem com que o músico possa aproveitar melhor a dinâmica do seu instrumento ao utilizar a RED KEYS como motor sonoro durante sua performance.

<figure markdown="span">
  ![REDKEYS v2.5 | Velocity (Ableton Plugin)](../../../assets/images/redkeys2.5/redkeys2.5%20-%20Velocity%20Plugin.png)
  <figcaption>REDKEYS v2.5 | Velocity (Ableton Plugin)</figcaption>
</figure>

**Octave:** não é um plugin nativo do Ableton, porém já está incluso dentro do pack sem necessidade de instalações e configurações adicionais. Ele serve exatamente para oitavar a região em que está tocando, disponível desde a região -4 até +4. Também é possível monitorar em tempo real a quantidade de Modwheel e Pitchbend que está sendo enviada pelo teclado, e você ainda pode remapear o CC1 do Modwheel para outro controle MIDI, como por exemplo CC11 que serve para pedal de expressão.

<figure markdown="span">
  ![REDKEYS v2.5 | Octave](../../../assets/images/redkeys2.5/redkeys2.5%20-%20Octave%20Plugin.png)
  <figcaption>REDKEYS v2.5 | Octave</figcaption>
</figure>

**Tran (Ou transpose):** é um plugin nativo do Ableton, que possibilita ao usuário usar o transpose em determinado canal como IN 1 ou 2 e ainda usar o Octave simultaneamente, sem perder nenhum dos dois recursos.

<figure markdown="span">
  ![REDKEYS v2.5 | Tran (Transpose)](../../../assets/images/redkeys2.5/redkeys2.5%20-%20Transpose%20Plugin.png)
  <figcaption>REDKEYS v2.5 | Tran (Transpose)</figcaption>
</figure>

Vale lembrar ainda que, por conta de uma otimização de processamento e desempenho, podem ocorrer situações como por exemplo de o timbre aparentemente cortar muito rápido. Para isto, fizemos este tutorial afim de sanar essas e mais dúvidas relacionadas a este assunto:

<div style="display: flex; justify-content: center;">
<iframe src="https://www.youtube.com/embed/YX9UoNyu09A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="aspect-ratio: 16 / 9; width: 100% !important;"></iframe>
</div>

Finalizamos então a parte técnica do manual, e temos disponível também uma sessão de dúvidas frequentes, em que respondemos algumas perguntas já feitas anteriormente por nossos clientes.