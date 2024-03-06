let tr='';

const addData =(i)=> {
    tr +=i;
    let a=tr.charAt(0)
    if(a==''  || a=='+'|| a=='*'|| a=='/' || a=='%'){
      tr='';
      return;
    }else{
    document.getElementById("no").value = tr;
    }
  }
  
  function getans() {
    let data= document.getElementById("no").value;
    let ans = eval(data);
    document.getElementById("no").value = ans;
    tr = '';
  }
  
  function clearAll() {
    document.getElementById("no").value = '';
    tr = '';
  }
  function newdelete() {
    let data = document.getElementById('no').value;
    newdata =data.toString().slice(0,-1);
    tr=newdata;
    document.getElementById('no').value = tr;
    // document.getElementById("tr").value = document.getElementById("tr").value.toString().slice(0,-1);
    
  }
  