const input=document.querySelector('.inputtext');
const outputDiv=document.querySelector('.output')
const output=document.querySelector('.outputtext');
const frq=document.querySelector('.frq');
const btn=document.querySelector('.btn');
const style=document.querySelectorAll('.st-btn')

const font=[
    "Arial",
    "Cursive",
    "Aclonica",
    
    "Arial Black",
    "Segoe Script"
]
btn.addEventListener('click',()=>{
    output.value=''
     var n=frq.value;
 
    while(n--){
       
    output.value+=input.value;
    output.value+='\n';
   
    outputDiv.style.opacity='100'
}
})
function myFunction() {
    var copyText = document.getElementById("myInput");
  
    output.select();
    navigator.clipboard.writeText(output.value);
  
  }
  
  for(var i=0;i<5;i++){
    style[i].style.fontFamily=font[i]
  }
  style.forEach(e => {
    e.addEventListener('click',()=>{

    output.style.fontFamily=font[e.id]
  })
  }); 