fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
      const numOfCompletedPerUser = json.reduce((pre,cur) => {
        if(cur.completed){
            if(cur.userId in pre){
                pre[cur.userId]++
            }else{
                pre[cur.userId]=1
            }
        }
        return pre
      }, {})
        console.log(numOfCompletedPerUser);
    })
  .catch(function(err) { 
    console.log(err);
  });   