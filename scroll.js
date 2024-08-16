let btn=document. getElementById('btn')
  onscroll=function(){
   if(scrollY >=1000) {
      btn.style.display='block';
      }
   else{btn.style.display='none';
       }
  };
    

 btn.onclick=function(){window. scroll({
    left:0,
  top:0,
  behavior:"smooth"
})}

//برنامج من