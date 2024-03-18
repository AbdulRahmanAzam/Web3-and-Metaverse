var arr: number[] = [1,2,3,4,5,6,7,8,9];

for(const num of arr){
    if(num === 1){
        console.log(`${num}st`);
    }else if(num === 2){
        console.log(`${num}nd`);
    }else if(num === 3){
        console.log(`${num}rd`);
    }else if(num > 3 && num <= 9){
        console.log(`${num}th`);
    }
}