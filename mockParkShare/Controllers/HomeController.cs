using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mockParkShare.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "ParkShare is about sharing parking spaces.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Who you should call when you have a question.";

            return View();
        }
    }
}