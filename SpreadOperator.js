const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
console.log(favorites);
console.log(...favorites);

// menggabungkan dua array
const allFavorites = [...favorites, ...others] 

console.log(allFavorites);
console.log(...allFavorites);
