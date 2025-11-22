const Weight = 72;
const Height = 165;

oddHeight = Height%100; // Lấy số lẻ của chiều cao 
idealWeight = Weight*9/10; // Cân nặng lý tưởng
maxWeight = oddHeight; // Cân nặng tối đa
minWeight = oddHeight*8/10; // Cân nặng tối thiểu

console.log(`Chiều cao: ${Height}, cân nặng: ${Weight}`);
console.log(`Cân nặng lý tưởng: ${idealWeight}, Cân nặng tối đa: ${maxWeight}, Cân nặng tối thiểu: ${minWeight}`);
