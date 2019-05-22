// delete repeated elements in array
let arr = [1, 1, 2, 2, 3, 3];
let new_arr = arr.filter((value, index) => arr.indexOf(value) >= index);

//searh in array
search_in_array = () => {
  let items = ["palo", "pelo", "hola", "sape"];
  var test = "palo";
  var updatedList = items;
  updatedList = updatedList.filter(item => {
    return item.toLowerCase().search(test.toLowerCase()) !== -1;
  });
  return updatedList;
};
