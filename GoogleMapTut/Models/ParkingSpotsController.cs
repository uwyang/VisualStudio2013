using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace GoogleMapTut.Models
{
    public class ParkingSpotsController : Controller
    {
        private ParkingDbContext db = new ParkingDbContext();

        public ActionResult getData()
        {
            return View();
        }

        public ActionResult TestPartialReload(int id = 0, double lat = 43.45, double lng = -80.492)
        {
            return View();
        }


        // GET: ParkingSpots
        public ActionResult Index(int id=0, double lat = 43.45, double lng = -80.492)
        {
            var parkingspots = from s in db.ParkingSpots select s;

            parkingspots = parkingspots.OrderBy(x => Math.Pow(x.lat - lat, 2) + Math.Pow(x.lng-lng, 2)).Take(3);

            ViewBag.lastLat = lat;
            ViewBag.lastLng = lng;

            return View(parkingspots.ToList());
            //return View();
        }

        // partial view, only the search result. 
        public ActionResult GetSearchResult(int id=0, double lat = 43.455, double lng = -80.4925)
        {
            var parkingspots = from s in db.ParkingSpots select s;

            parkingspots = parkingspots.OrderBy(x => Math.Pow(x.lat - lat, 2) + Math.Pow(x.lng-lng, 2)).Take(3);

            ViewBag.lastLat = lat;
            ViewBag.lastLng = lng;

            ViewBag.msg = "called: Getsearchresult at: " + DateTime.Now;

            return PartialView("_SearchResult", parkingspots.ToList());
        }


        public double GetRandomNumber(double minimum, double maximum)
        {
            Random random = new Random();
            return random.NextDouble() * (maximum - minimum) + minimum;
        }


        // GET: ParkingSpots/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ParkingSpot parkingSpot = db.ParkingSpots.Find(id);
            if (parkingSpot == null)
            {
                return HttpNotFound();
            }
            return View(parkingSpot);
        }

        // GET: ParkingSpots/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ParkingSpots/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,OwnerId,ShortName,Address,City,Province,Country,log,lat,Description")] ParkingSpot parkingSpot)
        {
            if (ModelState.IsValid)
            {
                db.ParkingSpots.Add(parkingSpot);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(parkingSpot);
        }

        // GET: ParkingSpots/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ParkingSpot parkingSpot = db.ParkingSpots.Find(id);
            if (parkingSpot == null)
            {
                return HttpNotFound();
            }
            return View(parkingSpot);
        }

        // POST: ParkingSpots/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,OwnerId,ShortName,Address,City,Province,Country,log,lat,Description")] ParkingSpot parkingSpot)
        {
            if (ModelState.IsValid)
            {
                db.Entry(parkingSpot).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(parkingSpot);
        }

        // GET: ParkingSpots/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ParkingSpot parkingSpot = db.ParkingSpots.Find(id);
            if (parkingSpot == null)
            {
                return HttpNotFound();
            }
            return View(parkingSpot);
        }

        // POST: ParkingSpots/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ParkingSpot parkingSpot = db.ParkingSpots.Find(id);
            db.ParkingSpots.Remove(parkingSpot);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        public static double getDistance(double lat)
        {
            return lat;
        }

        public static double getDistance(double lat1, double lng1, double lat2, double lng2)
        {
            double tmp = Math.Pow(lat1 - lat2, 2) + Math.Pow(lat2 - lng2, 2);
            return Math.Sqrt(tmp);
        }
    }

}
