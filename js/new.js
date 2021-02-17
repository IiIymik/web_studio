console.log("helldo");


function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
    
    let howManyWords = message.split(' ');
    return console.log( howManyWords.length * pricePerWord);

  // Пиши код выше этой строки
}



calculateEngravingPrice('JavaScript у меня в крови', 10);
calculateEngravingPrice('JavaScript у меня в крови', 20);