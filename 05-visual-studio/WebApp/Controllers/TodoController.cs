using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class TodoController : ApiController
    {
        private static int _nextId = 1;

        private static readonly List<Todo> Todos = new List<Todo>
        {
            new Todo {Id = _nextId++, Title = "Prepare CNUG talk", Completed = true},
            new Todo {Id = _nextId++, Title = "Practice", Completed = false},
        };

        public List<Todo> GetTodos()
        {
            return Todos;
        }

        [HttpPost]
        public Todo AddTodo(AddTodoDto dto)
        {
            var newTodo = new Todo {Id = _nextId++, Title = dto.Title};
            Todos.Add(newTodo);
            return newTodo;
        }

        [HttpPost]
        public bool ToggleCompletion(CompleteTodoDto dto)
        {
            var todo = Todos.FirstOrDefault(t => t.Id == dto.Id);

            if (todo != null)
            {
                todo.Completed = dto.Completed;
            }

            return dto.Completed;
        }

        [HttpPost]
        public List<Todo> ClearCompleted()
        {
            Todos.RemoveAll(t => t.Completed);
            return Todos;
        }
    }

    public class AddTodoDto
    {
        public string Title { get; set; }
    }

    public class CompleteTodoDto
    {
        public int Id { get; set; }
        public bool Completed { get; set; }
    }

    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool Completed { get; set; }
    }
}