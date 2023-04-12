//your JS code here. If required.
function secondHighest(arr){
    if(arr.length===0 || arr.length===1){
        return -Infinity;
    } 
    let same = arr.reduce((prev, ele)=>{
        if(prev===ele){
            return ele;
        }
    })
    if(same===arr[0]){
        return -Infinity
    }
    arr.sort();
    return arr[arr.length-2];
}