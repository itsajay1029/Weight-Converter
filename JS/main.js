
document.getElementById('output').style.visibility='hidden'
document.getElementById('input').addEventListener('input',(e)=>{
    let pounds=e.target.value;
    document.getElementById('output').style.visibility='visible'
    document.getElementById('gOutput').innerHTML=`<i>${pounds/0.0022046}<i>`;
    document.getElementById('kgOutput').innerHTML=`<i>${pounds/2.2046}<i>`;
    document.getElementById('oOutput').innerHTML=`<i>${pounds*16}<i>`;


})