fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const numOfCompleted = json.reduce((pre,cur)=>{
        if(cur.completed){
            pre++
        }
        return pre
     }, 0)
     console.log(numOfCompleted)
    })
  .catch(function(err) { 
    console.log(err)
  });   