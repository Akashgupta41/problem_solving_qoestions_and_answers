function givebigstr(str) {
    let val=0
    let string=""
    let arr=str.split(" ");
    
    arr.map((e)=>{
      if(e.length>val){
        string=e
        val=e.length
        console.log(e,val);
        
      }
    })
  return console.log(string,);
  
  }
  
  givebigstr("jai mata di ")