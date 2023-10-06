const visitsCountMap = new Map();
function countUser(user){
    let count = visitsCountMap.get(user)||0
    visitsCountMap.set(user,count+1)
}
let jonas ={name:"jonas"}
countUser(jonas)
junas = null

setTimeout(function(){
    console.log(visitsCountMap)
})


// codingan weakmap
const{inspect}= require('util')

const visitsCountMap2 = new WeakMap()

function countUser2(user){
    let count = visitsCountMap2.get(user)||0
    visitsCountMap2.set(user, count+1)

}

let adi ={ nama:"adi"}

countUser2(adi)

setTimeout(function(){
    console.log(inspect(visitsCountMap2, {showHidden:true}))
},10000)
