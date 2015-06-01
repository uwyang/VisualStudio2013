using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcMovieTut.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: HelloWorld
        public ActionResult Index()
        {
            return View();
        }

        /*public String Index()
        {
            return "this is <b> Hello World </b> controller, index"; 
        }*/

        public ActionResult Welcome(String name="Yang", int numtimes = 4, int ID=3)
        {
            //return "this is the welcome method. ";
           //return  HttpUtility.HtmlEncode("Hello " + name + " numtimes is : " + numtimes + " id is: " + ID);

            ViewBag.message = "Hello " + name;
            ViewBag.numtimes = numtimes;


            return View();
        }
    }
}