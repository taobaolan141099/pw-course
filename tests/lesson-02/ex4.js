const weight = 72;
const height = 165;

oddHeight = height % 100; // Lấy số lẻ của chiều cao 
idealWeight = weight * 9 / 10; // Cân nặng lý tưởng
maxWeight = oddHeight; // Cân nặng tối đa
minWeight = oddHeight * 8 / 10; // Cân nặng tối thiểu

console.log(`Chiều cao: ${height}, cân nặng: ${weight}`);
console.log(`Cân nặng lý tưởng: ${idealWeight}, Cân nặng tối đa: ${maxWeight}, Cân nặng tối thiểu: ${minWeight}`);
