// for (let i = 0 ; i < 5; i = i + 1) {
//   console.log("hola "+ i);
//   console.log("hola ", i+1);
//   console.log(`hola ${i + 1}`);
// }


// let j=8
// while (j > 0) {
//     console.log("j");
//     j-=2;
// }


// let j=1
// do{
//     console.table(j);
//     j++
// } while (j <= 5)

// let boolean = true
// do{
//     console.log(j)
//     j<35?j++:boolean = false
// } while(boolean);

// for(let i =0; i < 10; i++){
//     if(i===4)
//         console.log("hola")
//     console.log(i)
// }

// for(let i=1; i < 4; i++){
//     // if(i<2){
//     //     console.log("hola")
//     // } else{console.log("bye")}
    
//     i<2 || i==3?console.log("hola"):console.log("bye")
//     console.table(i)
// }


let i = 1
let j = 1
// while(i<=10){
//     console.log(`table del ${i}`)
//     while(j<=10){
//         console.log(`${i} x ${j}=${i*j}`);
//         j++
//     }
//     j=1
//     i++
// }

do{
    console.log(`tabla del ${i}`)
    do{
        console.log(`${i} x ${j}=${i*j}`);
        j++
    }while(j<=10){
        j=1
        i++
    }
}while(i<=10)