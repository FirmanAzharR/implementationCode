let text = 'Sedang belajar javascript';

if(typeof(text)==="string"){
    let hasil = "";
    kalimat = text.split(" ");
    let x = kalimat.length-1;
    while(x>=0){
        hasil = hasil+kalimat[x]+" ";
        x = x-1;
    }
    console.log(hasil);
}
else{
    console.log("Input anda salah");
}

reverseWord = (kalimat) =>{
    if(typeof(kalimat)!="string"){
        console.log("Input anda salah");
    }
    else{
        let hasil = "";
        kalimat = kalimat.split(" ");
        let x = kalimat.length-1;
        while(x>=0){
            hasil = hasil+kalimat[x]+" ";
            x = x-1;
        }
        console.log(hasil);
    }
}
reverseWord(text);


reverseWordMethod = (kalimat) =>{
    if(typeof(kalimat)!="string"){
        console.log("Input anda salah");
    }
    else{
        let hasil = "";
        splitText = kalimat.split(" ");
        reverseText = splitText.reverse();
        joinText = reverseText.join(" ");
        console.log(joinText);
    }
}
reverseWordMethod(text);