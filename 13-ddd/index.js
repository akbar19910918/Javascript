
//                    CRUD mavzusi

let students =[
    {id: 1, year:2002, name: "Iqboljon Yuldashev" },
    {id: 2, year:2002, name: "Najmiddin Nazarov" },
    {id: 3, year:2000, name: "Asilbek Tolipov" },
    {id: 4, year:2002, name: "Mominov Abdulloh " },
    {id: 5, year:1995, name: "Sardor Tursunboyev" },
    {id: 6, year:2002, name: "Hudoybediyeva Mohichexra" },
    {id: 7, year:2007, name: "Muhammad Nurmirzayev" },
    {id: 8, year:2002, name: "Shohruh Shukurov" },

 ]
// const sortByYear = () =>{
//     let res=students.sort((a,b)=> a.year-b.year );
//     res=students;
// };
// sortByYear();
// console.log(students);

// const sortByAlphabet = () =>{
//     let res=students.sort((a,b)=> a.name.localeCompare(b.name) );
//     res=students;
// };
// sortByAlphabet()
// console.log(students);

// const deleteUser = (id) => {
//     let res = students.filter((value) => value.id !== id);
//     res = students;
// };
// deleteUser(5);
// console.log(students);



// const addUser = (user) => {
//     students = [...students, {id:students.length+1, ...user}]
// };
// addUser( { year:2019, name:"webbrain" });
// console.log(students);

// const updateUser = (data) => {
//     let res = students.map((value) =>
//     (value.id ===data.id ? {...value, [data.type] :data.value } : value));
//     students = res;
// }
// updateUser({ id:2, type:"name",value:"gulbashkar" } );
// updateUser({ id:2, type:"year",value: 1999 } );
// console.log(students);


// const getFilterByName = (key) => {
//     let res = students.filter((value) =>
//     value.name.toLowerCase() .includes(key.toLowerCase()));
//   students = res;  
// }
// getFilter("sardor");
// console.log(students);


// const getFilterById = (key) => {
//     let res = students.filter((value) =>
//     value.id === key);
//   students = res;  
// }
// getFilterById(7);
// console.log(students);


// const getFilter = ({key,value}) => {
//     let res = students.filter((usr) =>
//     `${usr[key]}`.toLowerCase() .includes(`${value}`.toLowerCase()));
//   students = res;  
// }
// getFilter({value:"Abdulloh", key: "name"});
// getFilter({value:6, key: "id"});
// console.log(students);





