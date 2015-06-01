using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcMovieTut.Models;

namespace MvcMovieTut.Controllers
{
    public class MoviesController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        
        
        /*// GET: Movies
        public ActionResult Index()
        {
            return View(db.Movies.ToList());
        }*/
        
        /*
         
        //search for movies
        //the original Index() would not run since the code doens't konw which method to run. 
        //can not distinguish between searchstring been null. 
        public ActionResult Index(string searchstring)
        {
            //LINQ. Defined the query, but not ran yet. 
            var movies = from m in db.Movies
                         select m;
            if (!String.IsNullOrEmpty(searchstring))
            {
                //query still not ran. 
                //evaluation of an expression is delayed until its realized value
                //is actually iterated over or the ToList  method is called. 
                movies = movies.Where( s => s.Title.Contains(searchstring));
            }
            return View(movies);
        }
         * 
         * */

        /*
        [HttpPost]
        public string Index(FormCollection fc, string searchstring)
        {
            return "<h3> from [httppost] search index: " + searchstring + " </h3>";
        }*/


        public ActionResult Index(string moviegenre, string searchstring)
        {
            var genrelist = new List<string>();
            var genrequery = from d in db.Movies orderby d.Genre select d.Genre;

            genrelist.AddRange(genrequery.Distinct());
            ViewBag.movieGenre = new SelectList(genrelist);

            var movies = from m in db.Movies select m;

            if (!String.IsNullOrEmpty(searchstring))
            {
                movies = movies.Where(s => s.Title.Contains(searchstring));
            }

            if (!string.IsNullOrEmpty(moviegenre))
            {
                movies = movies.Where(s => s.Genre.Contains(moviegenre));
            }

            return View(movies);
        }


        // GET: Movies/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Movie movie = db.Movies.Find(id);
            if (movie == null)
            {
                return HttpNotFound();
            }
            return View(movie);
        }

        // GET: Movies/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Movies/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Title,ReleaseDate,Genre,Price,Rating")] Movie movie)
        {
            if (ModelState.IsValid)
            {
                db.Movies.Add(movie);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(movie);
        }

        // GET: Movies/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Movie movie = db.Movies.Find(id);
            if (movie == null)
            {
                return HttpNotFound();
            }
            return View(movie);
        }

        // POST: Movies/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Title,ReleaseDate,Genre,Price,Rating")] Movie movie)
        {
            if (ModelState.IsValid)
            {
                db.Entry(movie).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(movie);
        }

        // GET: Movies/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Movie movie = db.Movies.Find(id);
            if (movie == null)
            {
                return HttpNotFound();
            }
            return View(movie);
        }

        // POST: Movies/Delete/5
        // Problem: Post an Get have to be handeled differently. 
        //anothe rway to delete, without making a deleteConfirmed action method: 
        //public ActionResult Delete(FormCollection fcNotUsed, int id = 0)
        //where fcnot used is fake input that doesn't exsit. 
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Movie movie = db.Movies.Find(id);
            db.Movies.Remove(movie);
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
    }
}
