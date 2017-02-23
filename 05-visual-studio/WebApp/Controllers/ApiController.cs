using System.IO;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace WebApplication1.Controllers
{
    public class ApiController : Controller
    {
        public JsonResult GetData(string username, int? max = null, string seed = null)
        {
            return Json(new {test = 42});
        }

        [HttpPost]
        public void Save(SaveData data)
        {
            Directory.CreateDirectory(Server.MapPath("~/AppData"));
            var fileName = Path.Combine(Server.MapPath("~/AppData"), $"{data.Timestamp.Replace(":", ".")}-{data.UserName}-{data.IsDone}.json");
            System.IO.File.WriteAllText(fileName, JsonConvert.SerializeObject(data, Formatting.Indented));
        }
    }

    public class SaveData
    {
        public string Timestamp { get; set; }
        public string UserName { get; set; }
        public int Seed { get; set; }
        public int Max { get; set; }
        public string[][] Edges { get; set; }
        public string[] Games { get; set; }
        public bool IsDone { get; set; }
    }

    public class Game
    {
        public string name { get; }
        public string thumbnail { get; }
        public string image { get; }
        public ushort year { get; }

        public Game(string name, string thumbnail, string image, ushort year)
        {
            this.name = name;
            this.thumbnail = thumbnail;
            this.image = image;
            this.year = year;
        }
    }
}