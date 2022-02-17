# hrw
HRW or HTML reactive writer is a javascript library that can write Reactive html a lot easier!
Example
elements = () => {
  H("p","Hello");//creates a p tag and sets it to hello.
  
  
  C("p",`
  color:blue;
  `); //adds css
  
  write();
  or
  write("html id","css id")
}

to add the library add this to your html 
<script src="https://noobmaster0.github.io/hrw/index.js"></script>
