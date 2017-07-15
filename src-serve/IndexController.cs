using Microsoft.AspNetCore.Mvc;

namespace BeyondfulServer
{
    public class IndexController : Controller
    {
        public IActionResult Index(string paras)
        {
            IndexModel model = new IndexModel();
            return View("/Index.cshtml", model);
        }
    }
}

