function balesChat(t,loopx) {
	// if(loopx==null || loopx<=0) alert("input gak valid boss");
	// else{
		var teks="Halo gan :D mari belajar berhitung yak, mulai...";
		var i=0;
		do{
		// for(var i=0;i<=loopx; i++){
			window.InputEvent = window.Event || window.InputEvent;
			var d = new Date();
			var event = new InputEvent('input', {bubbles: true});

			var textbox = document.querySelector('#main > footer > div.block-compose > div.input-container > div.pluggable-input.pluggable-input-compose > div.pluggable-input-body.copyable-text.selectable-text');

			if(i>0) 
				textbox.textContent = t+" "+i;
			else 
				textbox.textContent = teks;
			textbox.dispatchEvent(event);
			document.querySelector("button.compose-btn-send").click();
			i++;

		}while(i<=loopx);
	// }
}

balesChat(" ini ..",3);


