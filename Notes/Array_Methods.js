/**
 * Array Methods
 * 1)shift :
            Delete form starting
            Returns a value
    2)unshift:
            Add from starting
            Doesn't return a value
 */

            let marvelHeros = ["thor", "Ironman", "spiderman"]

            // marvelHeros = marvelHeros.shift();
            // console.log("Deleted :", marvelHeros);
            
            
            marvelHeros.unshift("C.America");
            console.log("Added :", marvelHeros);
            
            /**
             * 1)slice(): returns a piece of the array
             *          Syntax: slice(startldx, endldx)
             *          
             * 
             * 2)splice(): change the original array (add, remove, replace)
             *              Syntax: splice(startldx, delCount, new)
             */
            
            let dcHeros = ["Batman", "robin", "Superman", "Cyborg"];
            
            console.log(dcHeros.slice(1,3));  //Index 1st and 2nd will be at console
            
            let arr = [1, 2, 3, 4, 5, 6];
            arr.splice(2, 3, 12, 34, 45);
            console.log(arr);
            
            /**
             * Function used with the object is called Methods.
             * suppose, toUpperCase() is a function.
             * So, when it is used with object i,e; "abc".toUpperCase(), it now called as Methods.
             * 
             * #In Js, Function can be passed as an argument.
             * It is called as callback.
             * 
             */
            
            /**
             * forEach loop in Array
             * 
             * ->arr.forEach(callBackFunction) -->forEach is taken as function 
             * ->CallbackFunction: It is a function to execute for each element in the array
             * 
             * *A callback is a function passed as an argument to another function.
            */
            
            let array = [1, 2, 3, 4, 5];
            
            array.forEach(function printVal(val) {  //forEach will access the element in the array and put it in the function.
                console.log(val);
            })
            
            //Generally, the callBack function inside the forEach loop is usually passed using the arrow function.
            
            let city = ["Ktm", "jhapa", "lalitpur", "dharan"];
            
            city.forEach((val) => {
                console.log(val.toUpperCase());
            })
            
            /**
             * Inside the callBack, there are 3 parameters.
             * 1)Value
             * 2)Index
             * 3)Array
             */
            
            let locations = ["Ktm", "jhapa", "lalitpur", "dharan"];
            
            locations.forEach((val , index, array) => {
                console.log(val.toUpperCase(), index, array);
            })
            
            /**
             * forEach is a Higher Order function/method:
             * Those function/Method that either takes another function as a parameter or returns a value to the function.
             */
            
            let num1= [2, 3, 4, 5];
            
            num1.forEach((value) => {
                console.log(value * value);
            })
            
            //Another way
            let num2 = [5,10,15,20];
            
            let calcSquare = (value) => {
                console.log(value * value);
            }
            
            num2.forEach(calcSquare); //Here, we are passing the function as a parameter to the forEach method.
            
            