let text = 'Malam';

if(typeof (text)==="string"){
    let hasil = "";
    text = text.toLowerCase();
    let x = text.length - 1;
    while (x >= 0) {
        hasil = hasil + text[x];
        x = x - 1;
    }
    if (hasil === text) {
        console.log("Palindrom");
    } else {
        console.log("Bukan Palindrom");
    }
}
else{
    console.log("tipe data bukan string");
}


cekPalindrom = (kata) => {
    if(typeof (text)!="string"){
        console.log("tipe data bukan string");
    }
    else{
        let hasil = "";
        text = text.toLowerCase();
        let x = text.length - 1;
        while (x >= 0) {
            hasil = hasil + text[x];
            x = x - 1;
        }
        if (hasil === text) {
            console.log("Palindrom");
        } else {
            console.log("Bukan Palindrom");
        }
    }
    
}

cekPalindrom(text);