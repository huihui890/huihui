function Anagrams(str){
    var result=[];
    if(str.length ===0)
    return result
    if(str.length===2){
        return [str[0]+str[1],str[1]+str[0]];
    }
    for(var i=0;i<str.length;i++)
    {
        var tempstr=str.replace(str[i],"");
        for(var j=0;j<str.length-1;j++){
        result.push(str[i]+Anagrams(tempstr)[j])}
       
    }
    result.push(str);
    return result
}
function drop(str,n){
    var result=""
    for(i=0;i<str.length;i++)
    {

    }
}
module.export=Anagrams