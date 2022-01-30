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
  write("html id","script id","css id")
}
