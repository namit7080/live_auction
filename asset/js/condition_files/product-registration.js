let fileinput= document.getElementById('custom-file-input');
let imgcontainer=document.getElementById('preview-images');
let noffile=document.getElementById('file-choosen');

console.log(fileinput,imgcontainer,noffile);

function preview(){
    imgcontainer.innerHTML="";
    noffile.textContent= `${fileinput.files.length} File Selected`
    for(i of fileinput.files){
        let reader= new FileReader();
        let figure= document.createElement("figure");
        let figcap= document.createElement("figcaption");

        figcap.innerText=i.name;
        figure.appendChild(figcap);
        reader.onload=()=>{
            let img= document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figcap);
        }
        imgcontainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}