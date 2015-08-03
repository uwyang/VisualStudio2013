using PayPal.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mockParkShare.Controllers
{
    public class PaypalController : Controller
    {
        // GET: Paypal
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PaymentWithCreditCard()
        {
            Item item = new Item();
            item.name = "Test Donation";
            item.currency = "CAD";
            item.price = "5.0";
            item.quantity = "1";
            item.sku = "sku";
            return null;

        }
    }
}