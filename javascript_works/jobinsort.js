const filteredValues = ['SM', 'MD', 'LG', 'XL', '2X', '3X','4X','5X']
    .filter(x => new Set(['LG','XL','4X','4X','3X']).has(x))
console.log(filteredValues)
