var daftarAngka=new Array("","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan");
const ignoreLastMsg = {}
const myUsername = "@nyampahBOT";
// const myUsername = "@nyammBot";

function terbilang(nilai){
    var temp='';
    var hasilBagi,sisaBagi;
    //batas untuk ribuan
    var batas=3;
    //untuk menentukan ukuran array, jumlahnya sesuaikan dengan jumlah anggota dari array gradeNilai[]
    var maxBagian = 5;
    var gradeNilai=new Array("","ribu","juta","milyar","triliun");
    //cek apakah ada angka 0 didepan ==> 00098, harus diubah menjadi 98
    nilai = this.hapusNolDiDepan(nilai);
    var nilaiTemp = ubahStringKeArray(batas, maxBagian, nilai);
    //ubah menjadi bentuk terbilang
    var j = nilai.length;
    //menentukan batas array
    var banyakBagian = (j % batas) == 0 ? (j / batas) : Math.round(j / batas + 0.5);
    var h=0;
    for(var i = banyakBagian - 1; i >=0; i-- ){
        var nilaiSementara = parseInt(nilaiTemp[h]);
        if (nilaiSementara == 1 && i == 1){ 
            temp +="seribu ";
        }else {
            temp +=this.ubahRatusanKeHuruf(nilaiTemp[h])+" ";
    		// cek apakah string bernilai 000, maka jangan tambahkan gradeNilai[i]
            if(nilaiTemp[h] != "000"){
                temp += gradeNilai[i]+" ";
            }
        }h++;
    }return temp;
}

function ubahStringKeArray(batas, maxBagian,kata){
    // maksimal 999 milyar
    var temp= new Array(maxBagian);
    var j = kata.length;
    //menentukan batas array
    var banyakBagian = (j % batas) == 0 ? (j / batas) : Math.round(j / batas + 0.5);
    for(var i = banyakBagian - 1; i >= 0 ; i--){ 
        var k = j - batas;
        if(k < 0) k = 0;
            temp[i]=kata.substring(k,j);
        j = k ;
        if (j == 0)
        break;
        }
    return temp;
    }

function ubahRatusanKeHuruf(nilai){ 
    //maksimal 3 karakter 
    var batas = 2;
    //membagi string menjadi 2 bagian, misal 123 ==> 1 dan 23
    var maxBagian = 2;
    var temp = this.ubahStringKeArray(batas, maxBagian, nilai);
    var j = nilai.length;
    var hasil="";
    //menentukan batas array
    var banyakBagian = (j % batas) == 0 ? (j / batas) : Math.round(j / batas + 0.5);
    for(var i = 0; i < banyakBagian ;i++){
    //cek string yang memiliki panjang lebih dari satu ==> belasan atau puluhan
        if(temp[i].length > 1){
    //cek untuk yang bernilai belasan ==> angka pertama 1 dan angka kedua 0 - 9, seperti 11,16 dst
            if(temp[i].charAt(0) == '1'){
                if(temp[i].charAt(1) == '1') {
                    hasil += "sebelas";
                    }
                else if(temp[i].charAt(1) == '0') {
                    hasil += "sepuluh";
                    }
            else hasil += daftarAngka[temp[i].charAt(1) - '0']+ " belas ";
                }
    //cek untuk string dengan format angka  pertama 0 ==> 09,05 dst
            else if(temp[i].charAt(0) == '0'){
            hasil += daftarAngka[temp[i].charAt(1) - '0'] ;
            }
    //cek string dengan format selain angka pertama 0 atau 1
            else 
            hasil += daftarAngka[temp[i].charAt(0) - '0']+ " puluh " +daftarAngka[temp[i].charAt(1) - '0'] ;
            }
        else {
    //cek string yang memiliki panjang = 1 dan berada pada posisi ratusan
            if(i == 0 && banyakBagian !=1){
                if (temp[i].charAt(0) == '1') 
                    hasil+=" seratus ";
                else if (temp[i].charAt(0) == '0')
                    hasil+=" ";
                else hasil+= daftarAngka[parseInt(temp[i])]+" ratus ";
            }
    //string dengan panjang satu dan tidak berada pada posisi ratusan ==> satuan
            else hasil+= daftarAngka[parseInt(temp[i])];
        }
    }
    return hasil;
}

function hapusNolDiDepan(nilaix){
    nilai = String(nilaix);
    while(nilai.indexOf("0") == 0){
       nilai = nilai.substring(1, nilai.length);
    }
    return nilai;
}

function abjad(){
	for (i = 0; i < 26; i++) {
		var x= "huruf yang ke-"+(i+1)+" adalah "+ (i+10).toString(36) + " ";
		console.log(x);
	}
}

// terbilang(2030);
var berhitung= function(dest) {
// function balesChat(dest) {
// function balesChat(dest,loopx) {
// function balesChat(loopx) {
	// if(loopx==null || loopx<=0) alert("input gak valid boss");
	// else{
		var d = new Date();
		var jam = d.getHours();
		var menit = d.getMinutes();
		var loopx = menit;
		// var destName = document.getElementsByClassName("emojitext ellipsify")[0].getAttribute("title");
		// console.log(destName);

		var pukul = (jam<10?"0"+jam:jam)+"."+(menit<10?"0"+menit:menit);
		var teks="Halo "+(dest==null?"":dest)+" 😀 .. , karena sekarang pukul "+pukul+" "+(menit==0?"tepat":"")+", jadi mari kita belajar berhitung 1 s/d "+(menit==0?jam:menit)+"  yak?  siap 😉 , mulai... \n\n*nyamm*🤤 ";
		kirimPesan(teks);

		var i=1;
		do{
			teksx = " ini "+i+" dibaca *"+(terbilang(i).rtrim())+"*";
			kirimPesan(teksx);
			// kirimPesan(teksx.rtrim());
			i++;
		}while(i<=loopx);
}

function kirimPesan(text) {
	// var d = new Date();
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {bubbles: true});
	var textbox = document.querySelector('#main > footer > div.block-compose > div.input-container > div.pluggable-input.pluggable-input-compose > div.pluggable-input-body.copyable-text.selectable-text');

	textbox.textContent = text;

	textbox.dispatchEvent(event);
	document.querySelector("button.compose-btn-send").click();
}
// balesChat(" moduser ",12);

const cekNotif = (_chats, cnt = 0) => {
    // get next unread chat
    const chats = _chats || document.querySelectorAll('.unread.chat')
    const chat = chats[cnt]

    if (chats.length == 0 || !chat) {
        console.log(new Date(), 'nothing to do now... (1)', chats.length, chat)
        return goAgain(start, 3)
    }

    // get infos
    const title = chat.querySelector('.emojitext').title + ''
    const lastMsg = (chat.querySelector('.inlineblock') || { innerText: '' }).innerText //.last-msg returns null when some user is typing a message to me
    // const lastMsg = (chat.querySelector('.last-msg') || { innerText: '' }).innerText //.last-msg returns null when some user is typing a message to me

    // avoid sending duplicate messaegs
    if ((ignoreLastMsg[title]) == lastMsg) {
        console.log(new Date(), 'nothing to do now... (2)', title, lastMsg)
        return goAgain(() => { start(chats, cnt + 1) }, 0.1)
    }

    // what to answer back?
    let sendText

	var isUsername  = lastMsg.indexOf(myUsername); 
	var isBerhitung = lastMsg.indexOf('berhitung'); 
	var isAbjad     = lastMsg.indexOf('abjad'); 
    console.log("user="+isUsername);
    console.log("hitung="+isBerhitung);
    console.log("abjad="+isAbjad);

    // if (lastMsg.indexOf(myUsername) > -1){
    if (isUsername >-1 && isBerhitung > -1){
 		berhitung(title);
    }else if (isUsername >-1 && isAbjad > -1){
    	abjad(title,frontName);
    	// kirimPesan("aku belum bisa apal abjad ajari kaka :( ");
    } else if(isUsername> -1){
        sendText = `
        apa sih *${title}* colek2, kangen yak 😌! 
        ada yang bisa dibanting ?
        1. *berhitung*
        2. *abjad*` ;
        kirimPesan(sendText);
    }
    console.log("sendText ="+sendText);

    // if (lastMsg.toUpperCase().indexOf('@HELP') > -1)
    //     sendText = `
    //         halo gan ${title}! ada yang bisa :
    //         1. *@TIME*
    //         2. *@JOKE*`

    // if (lastMsg.toUpperCase().indexOf('@TIME') > -1)
    //     sendText = `
    //         Don't you have a clock, dude?
    //         *${new Date()}*`


    // if (lastMsg.toUpperCase().indexOf('@JOKE') > -1)
    //     sendText = jokeList[rand(jokeList.length - 1)]

    // // that's sad, there's not to send back...
    // if (!sendText) {
    //     ignoreLastMsg[title] = lastMsg
    //     console.log(new Date(), 'new message ignored -> ', title, lastMsg)
    //     return goAgain(() => { start(chats, cnt + 1) }, 0.1)
    // }

    // console.log(new Date(), 'new message to process, uhull -> ', title, lastMsg)

    // // select chat and send message
    // selectChat(chat, () => {
    //     sendMessage(chat, sendText.trim(), () => {
    //         goAgain(() => { start(chats, cnt + 1) }, 0.1)
    //     })
    // })
    // balesChat(title, sendText);
}

String.prototype.rtrim = function () {
    return this.replace(/((\s*\S+)*)\s*/, "$1");
}

setInterval(function(){
	// wa_("moduser");
	// console.log("cek detikan");
	cekNotif();
    // selectChat(chat, () => {
    //     sendMessage(chat, sendText.trim(), () => {
    //         goAgain(() => { start(chats, cnt + 1) }, 0.1)
    //     })
    // })
},1000);
