let arr=[1,2,3,4,5,6,7,8,9]


// push polyfill

// Array.prototype.custompush=function(element)
// {
//   let result=[...this];
//   result.push(element);
//   return result
  
// }

// console.log(arr.custompush(5))



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


Array.prototype.customslice=function(startindex, endindex)
{
  let result=[];
  if(startindex>endindex)
  {
    return result;
  }
  else{
    let start=startindex;
 
    if(startindex<0)
   {
    start=this.length+startindex
   }
   let end=endindex!=null? null : this.length;
   if(endindex<0)
   {
    end=this.length+endindex
   }
   start = start < 0 ? 0 : start;
   end = end > this.length ? this.length : end;
   for(let i=start; i<end; i++)
   {
    result.push(this[i])
   }
   return result;
  }
}
console.log("arr", arr)
console.log(arr.customslice(1 ))




// splice polyfill
