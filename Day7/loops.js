for(let i=0;i<4;i++){
    let line="";
    for(let j=0;j<4-i;j++){
        line+=" ";
    }
    for(let j=4-i;j<4+i+1;j++){
        line+="*";
    }
    console.log(line);
}