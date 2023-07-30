const inputText=document.querySelector(".qrText")
const genBtn=document.querySelector(".generate")
const downBtn=document.querySelector(".download")
const imgBox=document.getElementById("imgBox")
const qrImg=document.getElementById("qrimg")
const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let generatevent=false;


 function generateQR(){
    if(inputText.value.length>0){
        qrImg.src=url + encodeURIComponent(inputText.value);
       
   imgBox.classList.add("show-img")
   generatevent=true
  
    }
    else{
        inputText.classList.add('error')
        inputText.style.border="1px solid red"
        inputText.setAttribute("placeholder","Hey you please enter text or url")
        setTimeout(()=>{
            inputText.classList.remove('error')
            inputText.style.border="1px solid #494eea"
            inputText.setAttribute("placeholder","Enter Text or URL ")
        },1000)
        generatevent=false
    }
}


async function downloadQR() {
    if (generatevent) {
      try {
        const response = await fetch(qrImg.src);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "qrcode.png";
        link.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.log("Error downloading QR code:", error);
      }
    } else {
        inputText.classList.add('error')
        inputText.style.border="1px solid red"
        inputText.setAttribute("placeholder","Cannot Download Generate QR First")
        setTimeout(()=>{
            inputText.classList.remove('error')
            inputText.style.border="1px solid #494eea"
            inputText.setAttribute("placeholder","Enter Text or URL ")
        },1000)
    }
  }
genBtn.addEventListener('click',()=>{
  
   generateQR()
})

inputText.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        generateQR()
    }
})

downBtn.addEventListener('click',()=>{
    downloadQR();
})