function printBanana(){
  console.log('banana');
};

printBanana();    //(X)


function printFruit(name){
  console.log(name); 
};

printFruit('banana');
printFruit('apple'); //(O)

function printFruits(name, price){
  console.log(name+"는 "+price+"원 입니다."); 
};

printFruits('banana', 2000)

function printFruitArr(arr){
  console.log(arr[0]+"는 "+arr[1]+"원 입니다.");
}
printFruitArr(['banana', 2000]);

function printFruitObj(obj){
  console.log(obj.name+"은 "+ obj.price+"원 입니다.");
}
printFruitObj({name:'apple', price:3000});
