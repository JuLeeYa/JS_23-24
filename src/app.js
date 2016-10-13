require(
    ['jquery-3.1.1.min','tmpl','model','view','controller'],
    function(){
        $(function(){
            var firstToDoList = ['Learn HTML','Lern CSS','Learn JavaScript'];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
    }); 
});