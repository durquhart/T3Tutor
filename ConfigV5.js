function TwiddlerConfigV5(byteString)
{
		//create a very simple binary reader
		byteReader = {};
		byteReader.string = byteString;
		byteReader.i = 0;
		byteReader.readByte = function(){
			return this.string.charCodeAt(this.i++);
		};
		byteReader.readWord = function(){
			//little-endian words
			return this.readByte() + this.readByte()*256;
		};
		
		this.header = this.parseHeader(byteReader);
		this.chords = this.parseChords(byteReader);
		this.toChord = {};
		
		for(c of this.chords)
		{
			if(! c.text)
			{
				continue;
			}
			for(a of c.text)
			{
				//console.log(c.text);
				if(! this.toChord[a])
				{
					this.toChord[a] = c;
				}
			}
		}

};

TwiddlerConfigV5.prototype.parseChords = function(byteReader)
{
	hidMap = new HidMap();
	chords = [];
	for(var i = 0; i < this.header.chordCount; i++)
	{
		rep = byteReader.readWord();
		modifier = byteReader.readByte();
		key = byteReader.readByte();
		node = { "representation": rep, "modifier":modifier,"key":key };
		if(modifier != 255)
		{
			node.text = hidMap.fromHidList(key);
		}
		node.chord = this.decodeChord(rep);
		chords.push( node );
	}
	return chords;
}
TwiddlerConfigV5.prototype.parseHeader = function(byteReader)
{
		var header = {};
		header.version = byteReader.readByte();
		header.options = byteReader.readByte();
		header.chordCount = 	byteReader.readWord();
		header.sleepTimeout = 	byteReader.readWord();
		header.mousrLeft = 	byteReader.readWord();
		header.mouseRight = 	byteReader.readWord();
		header.mouseMiddle = 	byteReader.readWord();
		header.mouseAccel = 	byteReader.readByte();
		header.keyRepeatDelay = 	byteReader.readByte();
		header.reserved = 	byteReader.readWord();
		return header;
};

TwiddlerConfigV5.prototype.decodeChord = function(word)
{
	
	chord = [ ["Num","Alt","Ctrl","Shft"],["","",""],["","",""],["","",""],["","",""]];
	for(i = 0; i < 16; i++)
	{
		val = (word & (0x01<<i)) != 0;
		if(i%4 == 0)
		{
			chord[0][i>>2] = val;
		}
		else
		{
			chord[1+(i>>2)][(i%4)-1] = val;
		}
	}
	result = {};
	result.chord = chord;
	return result;
};
	

