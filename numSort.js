const numSorts = (numbers) =>{
    if(typeof numbers === 'number'){
        let numArr;
        let numSort = [];
        let temp = [];
        numArr = numbers.toString().replace(/\D/g, '0').split('').map(Number);
        numArr.push(0);
        numArr.map(x=>{
            if(x!==0){
                temp.push(x);
            }else{
                temp.sort((a,b) => a-b);
                numSort = numSort.concat(temp);
                temp = [];
            }
        })
        numSort = numSort.join('');
        numSort = parseInt(numSort);
        return console.log(numSort);
    }else{
        return console.log('input harus number');
    }
}
numSorts(5956560159466056);

