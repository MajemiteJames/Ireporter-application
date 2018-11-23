
/*function showImage(){
    if(this.file && this.files[0]){
        var obj = new fileReader();
        obj.onload = function(data){
            var image = document.getElementsByClassName("image");
            image.src = data.target.result;
            image.style.display = "block";
        }
        obj.readAsDataURL(this.files[0]);
    }
}*/

function previewFile(){
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

previewFile();  //calls the function named previewFile()