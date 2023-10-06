//! This is the Examples for JavaScript Array Methods & Examples:


//! 1.valueOf()
// எந்த மாற்றமும் நிகழாது.இது old version.

// var a = [1,2,3,4,5,"banana","time",9];
// console.log(a.valueOf("zzz"))    //[ 1, 2, 3, 4, 5, 'banana', 'time', 9 ]

// *************************************************************************************************************************
  
//! 2.toString() 
// number ஐ string ஆக மாற்ற பயன்படுகிறது.     

// var a = [1,2,3];
// console.log(a.toString()); // "1,2,3"    

// *************************************************************************************************************************

//! concat() தொடர்பு
// இரண்டு அல்லது அதற்கு மேற்பட்ட Arrayகளை ஒரே Array ஆக இணைத்து அல்லது தொடர்புபடுத்தி தர பயன்படுகிறது.

// var a = [1,2];
// var b = ["a","b"];
// var c = ["x"];
// var d = a.concat(b,c); 
// console.log(d); // [1,2,"a,"b","x"]

// *************************************************************************************************************************

//! push()
// Array க்குள் Last element ஆக ஒரு elements ஐ add செய்ய பயன்படுகிறது.

// let a = ["a", "b", "c"]
// console.log(a.push("z"));
// console.log(a);// ["a","b","c","z"]

//! pop()
// Array க்குள் Last element ஆக ஒரு elements ஐ remove செய்ய பயன்படுகிறது.

// console.log(a.pop("z"));
// console.log(a);// ["a","b","c"]

// *************************************************************************************************************************

//! unshift()
// Array க்குள் first element ஆக ஒரு elements ஐ add செய்ய பயன்படுகிறது.

// console.log(a.unshift("x"));
// console.log(a);//["x","a","b","c"]

//! shift()
// Array க்குள் first element ஆக ஒரு elements ஐ remove செய்ய பயன்படுகிறது.

// console.log(a.shift(x));
// console.log(a);// ["a","b","c"]

// *************************************************************************************************************************

//! splice()  பிளவு
// splice ஆனது Array ல் உள்ள elements ஐ add செய்யும் அல்லது remove செய்யும்.

// Syntax: (starting indexvalue TO end indexvalue ,element1,element2,.....)

// var a = ["a","b","c","d"];
// console.log(a.splice(1,3,"x")); // [b,c,d]  ===>index value 1 இல் இருந்து index value 3 வரை உள்ள elements ஐ remove செய்துவிட்டு புதிதாக "x" என்ற value ஐ add செய்கிறது.
// console.log(a); // ["a","x"]

// var a = ["a","b","c","d"];
// console.log(a.splice(1,3); // [b,c,d]  ===>index value 1 இல் இருந்து index value 3 வரை உள்ள elements ஐ remove செய்துவிட்டு output "a" ஐ மட்டும் display செய்யும்.இவ்வாறும் splice  ஐ உபயோகப்படுத்தலாம்.
// console.log(a); // ["a"]


//! slice() துண்டு 
// separate element மட்டும் நமக்கு வேண்டுமென்றால் slice பயன்படுத்தலாம்.
// புது Array ல் தான் output ஐ தரும்.

// ===>Syntax: (start,end-1)

// var a = [11,22,33,44,55];
// var b = a.slice(2,4);
// console.log(b);      // [33,44]  ஐ மட்டும் output ஆக display செய்யும்.

// *************************************************************************************************************************

//! sort()
// Arrayல் உள்ள elements ஐ ஒழுங்குபடுத்த அதாவது வரிசைப்படுத்த பயன்படுகிறது.

// var a = [8,5,2,58] , b =["x","b","f","a"]
// console.log(a.sort()); // [2,5,8,58]
// console.log(b.sort()); // ["a","b","f","x"]

//! reverse()
// Arrayல் உள்ள elements ஐ தலைகீழாக print செய்ய பயன்படுகிறது.
// var a = ["a","b", "mern"];
// console.log(a.reverse());  // [ 'mern', 'b', 'a' ]

// *************************************************************************************************************************

//! split()

// var a = zdvdsjvbsk;
// var a = cdfjbnkdjnd;
// console.log(a);

//! join()
// var a = ["prabha","geetha","thangavel"];
// var b = a.join(' , ');
// console.log(b); //prabha , geetha , thangavel 

// *************************************************************************************************************************

//! length()
// Array ன் மொத்த length ஐ கண்டறிய பயன்படுகிறது.

// var a = ["prabha",25,"geetha",true,"thangavel",50];
// console.log(a.length); //6

//! indexOf()
// Array ன் மொத்த index ஐ கண்டறிய பயன்படுகிறது.
// இல்லாத elementsன் value ஐ கொடுக்கும்போது அது -1 என்று வரும்.

// var a = [10,20,30,40,50,"prabha","678","geetha"];
// console.log(a.indexOf("geetha")); // [7]
// console.log(a.indexOf(90));       // -1 

// *****************************************************************************************

// To find the elements 3 methods:
// Array க்குள் உள்ள elements ஐ கண்டறிய 3 முறைகள்:


//! includes()  ===>preferred 
// var a = [1,2,3,"abc"];
// console.log(a.includes(2));//true
// console.log(a.includes("abc"));//true
// console.log(a.includes(50));//false
// console.log(a.includes("cde"));//false


//! indexOf()
// Array ன் மொத்த index ஐ கண்டறிய பயன்படுகிறது.
// இல்லாத elementsன் value ஐ கொடுக்கும்போது அது -1 என்று வரும்.

// var a = [10,20,30,40,50,"prabha","678","geetha"];
// console.log(a.indexOf("geetha")); // [7]
// console.log(a.indexOf(90));       // -1 


//! lastIndexOf()
// Array ன் கடைசி index ஐ கண்டறிய பயன்படுகிறது.
// இல்லாத elementsன் value ஐ கொடுக்கும்போது அது -1 என்று வரும்.

// Syntax: arrayname.length-1

// var a = ["prabha","geetha","thangavel","erode","tamilnadu","india"];
// var b = a.length-1;
// console.log(b); //5

// var a = [10,20,30,40,50,"prabha","678","geetha"];
// console.log(a.indexOf("geetha") !== -1); //true
// console.log(a.indexOf("ERODE") !== -1); //false

// *************************************************************************************************************************

//! isArray()
// கொடுக்கப்பட்ட code or input ஆனது Array ஆக உள்ளதா என்பதை கண்டுபிடிக்க பயன்படுத்தப்படுகிறது.
// இதில் let அல்லது const ஐ மட்டுமே பயன்படுத்த வேண்டும்.

// Syntax:
// Array.isArray(variablename)

// let a = [1,2,3,"4","5","prabha","geetha",49];
// console.log(Array.isArray(a));      //true

// let a = 1,2,3;
// console.log(Array.isArray(a));      //false

// let a = "prabha" "geetha" ;
// console.log(Array.isArray(a));     //false


//! entries():
// Use to find both the index value and the value of the elements in an Array.
// ஒரு Array ல் உள்ள index value மற்றும் elements உடைய value இரண்டையும் கண்டுபிடிக்க பயன்படுத்துவது.

// Syntax:
// arrayname.next().value

// Example:
// var a = [anniyan,beast,chandramuki,darling,elephant,friends];
// var b = a.entries();
// console.log(b);
// console.log(b.next().value);   //[0,'anniyan']
// console.log(b.next().value);   //[1,'beast']
// console.log(b.next().value);   //[2,'chandramuki']
// console.log(b.next().value);   //[3,'darling']
// console.log(b.next().value);   //[4,'elephant']
// console.log(b.next().value);   //[5,'friends']
// console.log(b.next().value);   //undefined


//! flat() 
// ஒரு Array க்குள் nested/sub Array கொடுக்கப்பட்டிருப்பின் அதை பிரித்து ஒரே Array ஆக மாற்ற பயன்படுகிறது.

// var a = [[1,2],[3,4],[5,6],[7],8,9,[10],11];
// var b = a.flat(Infinity);
// console.log(b);               //[1,2,3,4,5,6,7,8,9,10,11]


//! Array from()

// Creates an Array from an object.
// Object ஐ Array ஆக மாற்றும்.

// var a = Array.from("DHONI");
// console.log(a);                 //[ 'D', 'H', 'O', 'N', 'I' ]

// *************************************************************************************************************************

//! fill() நிரப்புதல்
// இது ஒரு Arrayக்குள் குறிப்பிட்ட elements க்கு  value ஐ நிரப்ப பயன்படுகிறது.

// Syntax: arrayname.fill(value,start,end-1) 

// value    ===> user defined the value
// start,end===> index value starting element and index value end element-1

// Example1:
// var a = [1,2,3,4,5];
// console.log(a.fill("zzz"))    //[ 'zzz', 'zzz', 'zzz', 'zzz', 'zzz' ]===>அனைத்து elements க்கும் zzz என்று மாறி வருகிறது.

// Example2:
// var a = [1,2,3,4,5];
// console.log(a.fill("zzz",0,3));    //[ 'zzz', 'zzz', 'zzz', 4, 5 ]===>index value ஐ பொருத்து மாறுகிறது.

// *************************************************************************************************************************

//! copywithin நகல் உள்ளே
// It is used to copy specific elements within an Array.
// இது ஒரு Arrayக்குள் குறிப்பிட்ட elements க்கு நகல் எடுக்க பயன்படுகிறது.

// Syntax: (target,start,end-1)
//       target    ===>user target the index of array
// start and end-1 ===> copy the index value starting element and index value end element-1

// Example:
// var a = ["a","b","c","d","e","f"];
// console.log(a.copyWithin(0,2,4));     // [ 'c', 'd', 'c', 'd', 'e', 'f' ]
                            
// ஒருவேளை ending point ஐ நாம் குறிப்பிடாமல் இருந்தால்
// நாம் கொடுத்த starting point ல் இருந்து அந்த Array ல் உள்ள மற்ற மொத்த elementயும் எடுத்துக்கொண்டு
// copy செய்துவிடும்.
// console.log(a.copyWithin(0,2));      //[ 'c', 'd', 'e', 'f', 'e', 'f' ]

// *************************************************************************************************************************

//! find()
// To check if an array contains a value.
// Array ல் ஒரு value உள்ளதா என்பதை check செய்வதற்கு.

// functions method
// Syntax:arrayname.find(using function)

// var a = [10,20,30,40,50,"prabha","678","geetha"];
// console.log(a.find(val => val === 40)); //40
// console.log(a.find(val => val === 100)); //undefined


//! findIndex():
// ===>We use it to find the index value of the elements in an Array or to find the index in which the particular elements are.
//     ஒரு Array ல் elements ன் index value கண்டுபிடிக்க அல்லது குறிப்பிட்ட elements எந்த index ல் உள்ளது என்பதை கண்டறிய பயன்படுத்துகிறோம்.



// var a = arr.findIndex
              
// *************************************************************************************************************************

//! This is the Examples for JavaScript String types & Examples:

//Method 1:
// var a = "Prabha";
// var b = "ERODE";
// console.log(b); //ERODE

//Method 2:
// var a = "Prabha";
// var b = "ERODE";
// console.log(a+b);//PrabhaERODE 

//Method 3:
// var a = 5.5;
// var b = "Prabha";
// var c = a + b;
// console.log(c);
// console.log(typeof(c));//5.5Prabha //datatype:string

//Method 4:
// var a = "prabha";
// var b = 5.5;
// var c = a+b;
// console.log(c);
// console.log(typeof(c)); //prabha5.5 //datatype:string 

// var a = 5.5;
// var b = 1991;
// var c = "Prabha";
// console.log(a+b+c);
// console.log(typeof(c)); //1996.5Prabha //datatype:string

// var a = "Prabha";
// var b = 1991;
// var c = 5.5;
// console.log(a+b+c);
// console.log(typeof(c));//Prabha19915.5 // datatype:number

// var a;
// a = 5.5;
// a = "Prabha";
// console.log(a);//Prabha // datatype:string

// *************************************************************************************************************************

//This is the Example based on formula:

// Formula:
//           S+N=S
//           N+S=N
//           S+S+N=S
//           N+N+S=N

// Method 1:S+N=S
// var a = "10";
// var b = 20;
// var c = a+b; //"10"+20
// console.log(c);
// console.log(typeof(c)); //1020 datatype:string


// Method 2:N+S=N
// var a = 10;
// var b = "20";
// var c = a+b; //10+"20"
// console.log(c);
// console.log(typeof(c)); // datatype:

// Method 3:S+S+N=S
// var a = "10";
// var b = "20";
// var c = 30;
// var d = a+b+c; //"10"+"20"+30
// console.log(d);
// console.log(typeof(d)); // datatype:


// Method 4:N+N+S=N
// var a = 10;
// var b = 20;
// var c = "30";
// var d = a+b+c; //10+20+"30"
// console.log(d);
// console.log(typeof(d)); // datatype:

// Method 5:
// var a = "10";
// var b = 20;...
// var c = "30";
// var d = a+b+c; //"10"+20+"30"
// console.log(d);
// console.log(typeof(d)); // datatype:string

// Method6:
// var a = "10";
// var b = 20;
// var c = 30;
// var d = a+b+c; //"10"+20+30
// console.log(d);
// console.log(typeof(d)); // datatype:string

// *************************************************************************************************************************
