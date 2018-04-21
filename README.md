
# T3Tutor

This is a project to provide a simple typing tutor for users of the Tek Gear Twiddler3 keyboard with non-standard layouts such as [BackSpice](https://github.com/AlexBravo/Twiddler) or [CoolHand](https://github.com/CoohLand/CoolHand).

This project is not affiliated with Tek Gear and is released under the GNU GENERAL PUBLIC LICENSE Version 3. The author Daniel Urquhart reserves the right to dual-license in the future.

This project supports loading custom configurations directly from the binary [twiddler.cfg V5 Config File](http://twiddler.tekgear.com/doc/static/twiddler3_config_format_v5_rev0.pdf).


Configuration Support Goals:
 - [x] Loading binary .cfg file header & key mappings
 - [x] Handling lower case letters and numbers
 - [ ] Handling shifted characters (upper case and most punctuation)
 - [ ] Parsing MMCs

Typing Tutor Support Goals:
 - [x] Visualize chords
 - [ ] Show chord for next character to type 
 - [ ] Accept input and advance to next character
 - [ ] Support loading text to type from a file/web
 - [ ] ....

For now this is being developed on and for Firefox.
At this time my goals are limited to a very basic tutor with support for western characters.  However, others may find the configuration parser helpful in writing other tools.  I am also open to collaboration and pull requests.
