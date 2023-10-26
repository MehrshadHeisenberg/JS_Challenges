const sumup = (objects , propertyName) =>{
  let sum = 0 

   for (let key in objects) {
    if (objects.hasOwnProperty(key)) {
      const value = parseFloat(objects[key][propertyName]);

      if (!isNaN(value)) {
        sum += value;
      }
    }
  }
  return sum
}
