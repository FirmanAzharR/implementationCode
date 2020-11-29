const cekVoucher = (voucher) => {
    return new Promise((resolve, reject)=>{
        const voucherList=[
            {name:'ARKAFOOD5',min:50000,disc:50/100,maxDisc:50000},
            {name:'DITRAKTIRDEMY',min:25000,disc:60/100,maxDisc:30000}
        ];
        let getVoucher = voucherList.find(obj => obj.name === voucher);

        if(getVoucher){
            resolve(getVoucher);
        }else{
            reject(new Error('Voucher yang anda masukkan salah'));
        }
    })
}

const useVoucher = (harga,discount) =>{
    if(harga>=discount.min){
        let totalDisc = harga*discount.disc;
        if(totalDisc>discount.maxDisc){
            return discount.maxDisc;
        }else{
            return totalDisc;
        }
    }else{
        return `Voucher tidak dapat digunakan ( pembelian minimal = Rp.${discount.min} )`;
    }
}

const biayaKirim = (jarak) =>{
    if(jarak>2){
        return ((jarak-2)*3000)+5000;
    }else{
        return 5000;
    }
}

const biayaPajak = (harga,pajak) =>{
    if(pajak===true){
        return harga*5/100;
    }else{
        return 0;
    }
} 

async function arkFood(harga,voucher,jarak,pajak){    
    try{
        let findDisc;
        let discount; 
        let total;

        if(typeof harga!=='number'){
            console.log('Harga harus number');
        }else if(typeof jarak!=='number'){
            console.log('jarak harus number');
        }else if(typeof pajak!=='boolean'){
            console.log('pajak harus boolean');
        }else{

            if(voucher!==false){
                findDisc = await cekVoucher(voucher);
                discount  = useVoucher(harga,findDisc);
            }else{
                findDisc = voucher;
                discount = 0;
            }    
            let ongkir = biayaKirim(jarak);
            let bayarPajak = biayaPajak(harga,pajak);            
            if(typeof discount==='number'){
                total = (harga-discount)+ongkir+bayarPajak;
                console.log(
                    `Harga : ${harga}\nPotongan : ${discount}\nBiaya Antar : ${ongkir}\nPajak : ${bayarPajak}\nSubTotal : ${total}`
                )
            }else{
                console.log(discount);
            }
        }

    }
    catch(error){
        console.log(error);
      }
}


arkFood(75000,'ARKAFOOD5',5,true);