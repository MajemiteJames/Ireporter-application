
/* function showImage(){
    if(this.file && this.files[0]){
        var obj = new fileReader();
        obj.onload = function(data){
            var image = document.getElementsByClassName("image");
            image.src = data.target.result;
            image.style.display = "block";
        }
        obj.readAsDataURL(this.files[0]);
    }
    }
*/

/* function previewFile() {
  const preview = document.querySelector('img'), //selects the query named img
   var file  = document.querySelector('input[type=file]').files[0]; //sames as here
  let reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

// previewFile();  //calls the function named previewFile() */

if (window.FileReader) {
    
    var reader = new FileReader(), rFilter = /^(image\/bmp|image\/cis-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x-cmu-raster|image\/x-cmx|image\/x-icon|image\/x-portable-anymap|image\/x-portable-bitmap|image\/x-portable-graymap|image\/x-portable-pixmap|image\/x-rgb|image\/x-xbitmap|image\/x-xpixmap|image\/x-xwindowdump)$/i; 
    
    reader.onload = function (oFREvent) { 
      preview = document.getElementById("uploadPreview")
      preview.src = oFREvent.target.result;  
      preview.style.display = "block";
    };  

    function doTest() {
      
      if (document.getElementById("myfile").files.length === 0) { return; }  
      var file = document.getElementById("myfile").files[0];  
      if (!rFilter.test(file.type)) { alert("You must select a valid image file!"); return; }  
      reader.readAsDataURL(file); 
    }
      
} else {
  alert("FileReader object not found :( \nTry using Chrome, Firefox or WebKit");
}

