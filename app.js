console.log(Boolean(false));

for(let i=0; i<10; i++){
    if(i%2==0){
        continue
    }else{
        console.log(i);
    }
}



Опиши в деталях, шаг за шагом, что произойдет с кодом. 


function findIndex(array, element){
    for (let i =0; i<array.length; i++){
        if (array[i]===element){
            return i
        }else{
            return 'Could not find'
        }
    }
}