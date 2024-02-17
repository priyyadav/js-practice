let arr=[1,2,3,4,5,6,7,8,9]


// push polyfill

// Array.prototype.custompush=function(element)
// {
  
//     let len=this.length;
//     this[len]=element;
//     return len+1;
  
// }

// console.log(arr.custompush(999))
// console.log(arr)



// pop polyfill

// Array.prototype.custompop=function()
// {
//     let element=this[this.length-1];
//     this.length = this.length - 1;
//     return element
// }
// console.log(arr.custompop());
// console.log(arr)




//  slice polyfill


// Array.prototype.customslice=function(startindex, endindex)
// {
//   let result=[];
//   if(startindex>endindex)
//   {
//     return result;
//   }
//   else{
//     let start=startindex;
 
//     if(startindex<0)
//    {
//     start=this.length+startindex
//    }
//    let end=endindex!=null? endindex : this.length;
//    if(endindex<0)
//    {
//     end=this.length+endindex
//    }
//    start = start < 0 ? 0 : start;
//    end = end > this.length ? this.length : end;
//    for(let i=start; i<end; i++)
//    {
//     result.push(this[i])
//    }
//    return result;
//   }
// }
// console.log(arr.customslice(1))




// splice polyfill


// Array.prototype.customsplice=function(startindex, endindex, ...elements)
// {
//     let start=startindex;
//     let end=endindex!=null?endindex: 1;
//     if(startindex<0)
//     {
//         start=this.length+start
//     }
//     const originalLength = this.length;
//     this.length = originalLength+elements.length - (end-start+1);
//     console.log(this.length)
//     console.log(originalLength,"o")

//     for (let i = originalLength - 1; i >= start + end; i--) {
//         console.log(this[i], i, "i")
//         this[i + elements.length - (end - start+1)] = this[i];
//     }

//     let insertionIndex = start;
//     for (const element of elements) {
//         this[insertionIndex++] = element;
//     }

// }

// if (!Array.prototype.customsplice) {
//     Array.prototype.customsplice = function(start, deleteCount,...elements) {
//         const len = this.length;
//         if(start<0) {
//             start=start+len;
//         }
//         start = start < 0 ? 0 : start;
//         if(deleteCount<0) {
//             deleteCount=0;
//         }
//         else {
//             deleteCount=deleteCount>len-start ? len-start : deleteCount;
//         }

//         const delta = elements.length - deleteCount;
//         const newLength = len + delta;
//         for (let i = len - 1; i >= start + deleteCount; i--) {
//             this[i + delta] = this[i];
//         }

//         // Insert new elements
//         for (let i = 0; i < elements.length; i++) {
//             this[start + i] = elements[i];
//         }

//         // Delete or insert undefined
//         for (let i = len; i < newLength; i++) {
//             delete this[i];
//         }

//         this.length = newLength;

//         // return removed;
//     };
// }

// const fruits = ["Banana","Orange","l","k","p"];
// fruits.customsplice(1,2,"Lemon");
// console.log(fruits)

// Array.prototype.customsplice = function (start, deleteCount, ...elements) {
    
//     const len = this.length;
    
//             if(start<0) {
//             start=start+len;
//         }
//         start = start < 0 ? 0 : start;
//         if(deleteCount<0) {
//             deleteCount=0;
//         }
//         else {
//             deleteCount=deleteCount>len-start ? len-start : deleteCount;
//         }
  
//     const delta = elements.length - deleteCount;
//     const newLength = len + delta;
//     console.log("de", delta)
//     console.log("new", newLength)
  
//     if (delta > 0) { 
//       for (let i = len - 1; i >= start + deleteCount; i--) {
//         this[i + delta] = this[i];
//         console.log(this,"right")
//       }
//     } else if (delta < 0) { 
//       for (let i = start + deleteCount; i < len; i++) {
//         this[i + delta] = this[i];
//         console.log(this,"left")
//       }
//     }
  
//     console.log(this,"ara")
//     for (let i = 0; i < elements.length; i++) {
//       this[start + i] = elements[i];
//     }
//     console.log(this,"after")
 
    
//   };
  

//   const fruits = ["Banana","Orange","l","k","p"];
// fruits.customsplice(1,2,"Lemon","priya","yadav","hello");
// console.log(fruits)


//  reverse polyfill

// Array.prototype.customreverse=function()
// {
//     let len=this.length;
//     let i=0;
//     let j=len-1;
//     while(i<=j)
//     {
//         let temp=this[i]
//         this[i]=this[j];
//         this[j]=temp
       
//         i++;
//         j--;
//     }
// }

// arr.customreverse();
// console.log(arr)


// shift polyfill

// Array.prototype.customshift=function()
// {
//     let len=this.length
//     let firstelement=this[0];
//     for(let  i=1; i<len; i++)
//     {
//         this[i-1]=this[i]
//     }
//     return this.length--;
// }
// arr.customshift();
// console.log(arr)




// Array.prototype.customunshift=function(element)
// {
//     let len=this.length
//     for(let  i=len-1; i>=0; i--)
//     {
//         this[i+1]=this[i]
//     }
//     this[0]=element;
//     return this.length;
// }
// arr.customunshift(909);
// console.log(arr)




// foreach polyfill


// Array.prototype.customforeach=function(callback)
// {
//     for(let i=0; i<this.length; i++)
//     {
//         callback(this[i], i, this)

//     }
   
// }
// arr.customforeach(function(ele){
//     console.log(ele)
// })




//  map polyfill


// Array.prototype.custommap=function(callback)
// {
//     let result=[];
//     for(let i=0; i<this.length; i++)
//     {
//         let ele=callback(this[i]);
//         result.push(ele)
//     }
//     return result;
    
// }

// let target=arr.custommap(function(ele){
//     console.log(ele*ele)
//     return ele*ele
// })

// console.log(target)



// filter polyfill

// Array.prototype.customfilter=function(callback)
// {
//     let result=[]
//     for(let i=0; i<this.length; i++)
//     {
//         let ele=callback(this[i]);
//         if(ele)
//         {
//             result.push(this[i])
//         }
//     }
//     return  result;
// }
// let target=arr.customfilter(function(ele)
// {
//     if(ele>5)
//     {
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(target)





// reduce polyfill


