// delete repeated elements in array
let arr = [1,1,2,2,3,3]
let new_arr = arr.filter(
  (value, index) => arr.indexOf(value) >= index
)