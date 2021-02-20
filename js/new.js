// console.log("helldo");


// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
    
//     let howManyWords = message.split(' ');
//     return console.log( howManyWords.length * pricePerWord);

//   // Пиши код выше этой строки
// }



// calculateEngravingPrice('JavaScript у меня в крови', 10);
// calculateEngravingPrice('JavaScript у меня в крови', 20);


// function slugify(title) {
//   // Пиши код ниже этой строки
 
//   let slag = title.toLowerCase().split(' ').join('-');
//   return console.log(slag);


//   // Пиши код выше этой строки
// }


// // slugify('Массивы для новичков')
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
// let newArray = firstArray.concat(secondArray);
// if(newArray => maxLength){
//   return console.log(newArray.slice(0,maxLength));
// }
//     return console.log(newArray);
//     // Пиши код выше этой строки
// }
  
// makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
// makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);

const ex4 = [2, 65, 89];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("1", arr[i]);
    for (let j = 0; j < arr.length; j++) {
      console.log("2", arr[j]);
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

// console.log(bubbleSort(ex4));