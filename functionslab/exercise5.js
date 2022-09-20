fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
      const uncompleted = json.reduce((pre,cur) => {
        if(!cur.completed){
            pre.push({ userId: cur.userId, title: cur.title})
        }
        return pre
      }, [])
        console.log(uncompleted);
    })
  .catch(function(err) { 
    console.log(err);
  });   