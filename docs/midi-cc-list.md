---
title: MIDI CC List
description: Uma lista completa com todos os comandos MIDI disponíveis no protocolo MIDI padrão.
---

## Olá músicos!

Esta é uma página de suporte para conhecimentos voltados ao mapeamento MIDI Controller. Você tem aqui à sua disposição, todas as mensagens MIDI disponíveis para o protocolo padrão dessa linguagem tão fantástica.

Aproveite ao máximo, e compartilhe com mais alguém também!

|MIDI CC #|MIDI CC PURPOSE|VALUE|MIDI CC DESCRIPTION|
|:----|:----|:----|:----|
|0|Bank Select (MSB)|0-127|Allows user to switch bank for patch selection. Program change used with Bank Select. MIDI can access 16,384 patches per MIDI channel.|
|1|Modulation Wheel (MSB)|0-127|Generally this CC controls a vibrato effect (pitch, loudness, brighness). What is modulated is based on the patch.|
|2|Breath Controller (MSB)|0-127|Oftentimes associated with aftertouch messages. It was originally intended for use with a breath MIDI controller in which blowing harder produced higher MIDI control values. It can be used for modulation as well.|
|3|Undefined (MSB)|0-127| |
|4|Foot Pedal (MSB)|0-127|Often used with aftertouch messages. It can send a continuous stream of values based on how the pedal is used.|
|5|Portamento Time (MSB)|0-127|Controls portamento rate to slide between 2 notes played subsequently.|
|6|Data Entry (MSB)|0-127|Controls Value for NRPN or RPN parameters.|
|7|Volume (MSB)|0-127|Controls the volume of the channel.|
|8|Balance (MSB)|0-127|Controls the left and right balance, generally for stereo patches. A value of 64 equals the center.|
|9|Undefined (MSB)|0-127| |
|10|Pan (MSB)|0-127|Controls the left and right balance, generally for mono patches. A value of 64 equals the center.|
|11|Expression (MSB)|0-127|Expression is a percentage of volume (CC7).|
|12|Effect Controller 1 (MSB)|0-127|Usually used to control a parameter of an effect within the synth or workstation.|
|13|Effect Controller 2 (MSB)|0-127|Usually used to control a parameter of an effect within the synth or workstation.|
|14|Undefined (MSB)|0-127| |
|15|Undefined (MSB)|0-127| |
|16|General Purpose (MSB)|0-127| |
|17|General Purpose (MSB)|0-127| |
|18|General Purpose (MSB)|0-127| |
|19|General Purpose (MSB)|0-127| |
|20|Undefined (MSB)|0-127| |
|21|Undefined (MSB)|0-127| |
|22|Undefined (MSB)|0-127| |
|23|Undefined (MSB)|0-127| |
|24|Undefined (MSB)|0-127| |
|25|Undefined (MSB)|0-127| |
|26|Undefined (MSB)|0-127| |
|27|Undefined (MSB)|0-127| |
|28|Undefined (MSB)|0-127| |
|29|Undefined (MSB)|0-127| |
|30|Undefined (MSB)|0-127| |
|31|Undefined (MSB)|0-127| |
|32|LSB Controller for 0-31|0-127| |
|33|LSB Controller for 0-31|0-127| |
|34|LSB Controller for 0-31|0-127| |
|35|LSB Controller for 0-31|0-127| |
|36|LSB Controller for 0-31|0-127| |
|37|LSB Controller for 0-31|0-127| |
|38|LSB Controller for 0-31|0-127| |
|39|LSB Controller for 0-31|0-127| |
|40|LSB Controller for 0-31|0-127| |
|41|LSB Controller for 0-31|0-127| |
|42|LSB Controller for 0-31|0-127| |
|43|LSB Controller for 0-31|0-127| |
|44|LSB Controller for 0-31|0-127| |
|45|LSB Controller for 0-31|0-127| |
|46|LSB Controller for 0-31|0-127| |
|47|LSB Controller for 0-31|0-127| |
|48|LSB Controller for 0-31|0-127| |
|49|LSB Controller for 0-31|0-127| |
|50|LSB Controller for 0-31|0-127| |
|51|LSB Controller for 0-31|0-127| |
|52|LSB Controller for 0-31|0-127| |
|53|LSB Controller for 0-31|0-127| |
|54|LSB Controller for 0-31|0-127| |
|55|LSB Controller for 0-31|0-127| |
|56|LSB Controller for 0-31|0-127| |
|57|LSB Controller for 0-31|0-127| |
|58|LSB Controller for 0-31|0-127| |
|59|LSB Controller for 0-31|0-127| |
|60|LSB Controller for 0-31|0-127| |
|61|LSB Controller for 0-31|0-127| |
|62|LSB Controller for 0-31|0-127| |
|63|LSB Controller for 0-31|0-127| |
|64|Damper Pedal on/off|≤63 off, ≥64 on|On/off switch that controls sustain pedal. Nearly every synth will react to CC 64. (See also Sostenuto CC 66)|
|65|Portamento on/off|≤63 off, ≥64 on|On/off switch|
|66|Sostenuto Pedal on/off|≤63 off, ≥64 on|On/off switch – Like the Sustain controller (CC 64), However, it only holds notes that were “On” when the pedal was pressed. People use it to “hold” chords” and play melodies over the held chord.|
|67|Soft Pedal on/off|≤63 off, ≥64 on|On/off switch – Lowers the volume of notes played.|
|68|Legato FootSwitch|≤63 off, ≥64 on|On/off switch – Turns Legato effect between 2 subsequent notes on or off.|
|69|Hold 2|≤63 off, ≥64 on|Another way to “hold notes” (see MIDI CC 64 and MIDI CC 66). However notes fade out according to their release parameter rather than when the pedal is released.|
|70|Sound Controller 1|0-127|Usually controls the way a sound is produced. Default = Sound Variation.|
|71|Sound Controller 2|0-127|Allows shaping the Voltage Controlled Filter (VCF). Default = Resonance also (Timbre or Harmonics)|
|72|Sound Controller 3|0-127|Controls release time of the Voltage controlled Amplifier (VCA). Default = Release Time.|
|73|Sound Controller 4|0-127|Controls the “Attack’ of a sound. The attack is the amount of time it takes for the sound to reach maximum amplitude.|
|74|Sound Controller 5|0-127|Controls VCFs cutoff frequency of the filter.|
|75|Sound Controller 6|0-127|Generic – Some manufacturers may use to further shave their sounds.|
|76|Sound Controller 7|0-127|Generic – Some manufacturers may use to further shave their sounds.|
|77|Sound Controller 8|0-127|Generic – Some manufacturers may use to further shave their sounds.|
|78|Sound Controller 9|0-127|Generic – Some manufacturers may use to further shave their sounds.|
|79|Sound Controller 10|0-127|Generic – Some manufacturers may use to further shave their sounds.|
|80|General Purpose MIDI CC Controller|0-127|Decay Generic or on/off switch - ≤63 off, ≥64 on|
|81|General Purpose MIDI CC Controller|0-127|Hi-Pass Filter Frequency or Generic on/off switch - ≤63 off, ≥64 on|
|82|General Purpose MIDI CC Controller|0-127|Generic on/off switch - ≤63 off, ≥64 on|
|83|General Purpose MIDI CC Controller|0-127|Generic on/off switch - ≤63 off, ≥64 on|
|84|Portamento CC Control|0-127|Controls the amount of Portamento.|
|85|Undefined|—| |
|86|Undefined|—| |
|87|Undefined|—| |
|88|High Resolution Velocity Prefix|0-127|Extends the range of possible velocity values|
|89|Undefined|—| |
|90|Undefined|—| |
|91|Effect 1 Depth|0-127|Usually controls reverb send amount|
|92|Effect 2 Depth|0-127|Usually controls tremolo amount|
|93|Effect 3 Depth|0-127|Usually controls chorus amount|
|94|Effect 4 Depth|0-127|Usually controls detune amount|
|95|Effect 5 Depth|0-127|Usually controls phaser amount|
|96|(+1) Data Increment|N/A|Usually used to increment data for RPN and NRPN messages.|
|97|(-1) Data Decrement|N/A|Usually used to decrement data for RPN and NRPN messages.|
|98|Non-Registered Parameter Number LSB (NRPN)|0-127|For controllers 6, 38, 96, and 97, it selects the NRPN parameter.|
|99|Non-Registered Parameter Number MSB (NRPN)|0-127|For controllers 6, 38, 96, and 97, it selects the NRPN parameter.|
|100|Registered Parameter Number LSB (RPN)|0-127|For controllers 6, 38, 96, and 97, it selects the RPN parameter.|
|101|Registered Parameter Number MSB (RPN)|0-127|For controllers 6, 38, 96, and 97, it selects the RPN parameter.|
|102|Undefined|—| |
|103|Undefined|—| |
|104|Undefined|—| |
|105|Undefined|—| |
|106|Undefined|—| |
|107|Undefined|—| |
|108|Undefined|—| |
|109|Undefined|—| |
|110|Undefined|—| |
|111|Undefined|—| |
|112|Undefined|—| |
|113|Undefined|—| |
|114|Undefined|—| |
|115|Undefined|—| |
|116|Undefined|—| |
|117|Undefined|—| |
|118|Undefined|—| |
|119|Undefined|—| |
|120|All Sound Off|0|Mutes all sound. It does so regardless of release time or sustain. (See MIDI CC 123)|
|121|Reset All Controllers|0|It will reset all controllers to their default.|
|122|Local on/off Switch|0 off, 127 on|Turns internal connection of a MIDI keyboard or workstation, etc. on or off. If you use a computer, you will most likely want local control off to avoid notes being played twice. Once locally and twice when the note is sent back from the computer to your keyboard.|
|123|All Notes Off|0|Mutes all sounding notes. Release time will still be maintained, and notes held by sustain will not turn off until sustain pedal is depressed.|
|124|Omni Mode Off|0|Sets to “Omni Off” mode.|
|125|Omni Mode On|0|Sets to “Omni On” mode.|
|126|Mono Mode|→|Sets device mode to Monophonic. The value equals the number of channels, or 0 if the number of channels equals the number of voices in the receiver.|
|127|Poly Mode|0|Sets device mode to Polyphonic.|
