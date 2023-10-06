const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);
  console.log(myMap);


  const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  const priceInJPY = 5000;

  const currency= new Map([
    ["USD","14000"],
    ["JPY","131"],
    ["SGD","11000"],
    ["MYR","3500"]
  ])

  const priceInIDR = priceInJPY*currency.get("JPY")
console.log(priceInIDR)
  // console.log(capital.size);
  // console.log(capital.get("London"));
  // capital.set("New Delhi", "India");
  // console.log(capital.size);
  // console.log(capital.get("New Delhi"))