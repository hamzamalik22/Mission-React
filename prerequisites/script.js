// 1. Arrays
    
    // Array is a data structure to store multiple values
    let arr = [1,2,3,4,5,6];
    let names = ['Hamza','Malik','Awan']
    let mix = [1,2,3,'Hammza',function(){}]


// 2. Destructuring

    // Destructuring means create a convenient way to to access most accessing items
    let info = {
        name : 'Hamza', age : 20, email = 'hamzamalikaj22@gmail.com'
    };

    console.log(info.email); // everytime i write this if i want email, instead

    const {email} = info; //  I will use Destructuring and access the email with just typing email

    console.log(email);  // simple as that

    // this is very useful when we are accessing nested elements. i.e.

    let myInfo = {name : 'Hamza', age : 20, social : {
        facebook : {
            first : 'Hamza Malik',
            second : 'Hamza Aj'
        },
        instagram : {
            first : 'hamzamalik22',
            second : 'mayaxhamzamalik'
        }
    }};


    console.log(myInfo.social.instagram.second);  // without Destructuring

    const {second} = myInfo.social.instagram;

    console.log(second);  // with Destructuring , it's become piece of cake


// 3. Spread Operator

    // Used to make copy of referencce objects

    let myarr = [1,2,3,4,5];
    let mycopy = [...myarr];

    console.log(copy);


// 4. Map & Filter

    // Map - perform any operation on all elements of array and return an array after operation 
    //       Return original number of values in answer array
    let theArray = [1,2,3,4,5,6];
    const answer = theArray.map(val => val*2);  // using implicit return

    // Filter - Perform operation on all elements and return only the elements that satisfy the condition
    //       Return the number of values that satisfy the condition
    let arrayy = [1,2,3,4,5,6];
    const ans = arrayy.filter(elem => elem>4);



// 5. Ternary Operators

    let state = [11,22,3,4,5,6,2,4,7,12,13,14];
    const ansState= state.map(elem => elem>5 ? elem+5 : elem);  // using implicit return
    // This means that Check every element of array, if it is greater than 5 , then add 5 to it and return.
    // if not then return the original value

