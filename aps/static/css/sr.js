function check(){
    var soil = parseInt(document.getElementById('soil').value)
    var month = parseInt(document.getElementById('month').value)
    var state = parseInt(document.getElementById('state').value)
    
    let jsons = JSON.stringify({
      data:[soil,month,state]
    });
    
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST','http://127.0.0.1:8000/weight/');
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    var receivedData = {}
    xmlhttp.send(jsons)
    xmlhttp.onload = function () {
        receivedData = JSON.parse(this.responseText)
       // http://example.com/test
       let dat = []
       var val = receivedData[0]
       stringss = ['Rice','Wheat','Cotton','Sugar','Tea','Ragi','Maize','Millet','Barley'] 
        for (let value in val){
          if (val[value]==1){
            dat.push(value)
          }
        }
        words = []
        for(let d in val){
            if(val[d]==1){
            words.push(stringss[d])
          if(words){
            document.getElementById('showPredictword').innerHTML=words
            }
            else{
              document.getElementById('showPredictword').innerHTML='Nothing can be Cultivated'
              
            }
          }
        }
        
      }
    }