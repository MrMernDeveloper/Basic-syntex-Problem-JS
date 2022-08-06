
// object 
var laptop = {
    brand: 'lenevo',
    processor: 'i-7',
    color: 'black',
    price: 45000,
    books: 5,
    pen: 24,   
}
// console.log(laptop);
// const value = laptop['brand'];
// console.log(value);

const propertiesName = Object.keys(laptop);
const propertiesValue = Object.values(laptop);
// console.log(propertiesName ,propertiesValue);
// for (const propertiesName in laptop) {
//     const value = laptop[propertiesName];
//     console.log(propertiesName , value);
// }
for (var i = 0; i < propertiesName.length; i++){
    var properties = propertiesName[i];
    var allValue = propertiesValue[i];
    console.log(properties ,allValue );
}
 
// laptop['brand'] = 10;
// console.log(laptop);

// laptop.brand = 'DELL';
// console.log(laptop);

// const device = Object.keys(laptop);
// const propertyValues = Object.values(laptop);
// var pencount = laptop['pen'];
// var colors = laptop.color;



// console.log(laptop.brand);
// console.log(device);
// console.log(propertyValues);
// console.log(pencount);



