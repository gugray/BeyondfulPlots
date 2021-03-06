﻿using Microsoft.AspNetCore.Mvc;

namespace BeyondfulServer
{
    public class IndexController : Controller
    {
        public IActionResult Index(string paras)
        {
            string userName = Request.Cookies["username"];
            IndexModel model = new IndexModel
            {
                LoggedIn = userName != null,
                HasPlugin = userName == "Gauss"
            };
            return View("/Index.cshtml", model);
        }
    }
}

