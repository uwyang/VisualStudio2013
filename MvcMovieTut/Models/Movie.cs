using System;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace MvcMovieTut.Models
{
    public class Movie
    {
        public int ID { get; set; }

        [StringLength(100, MinimumLength=1)]
        [Required]
        public string Title { get; set; }

        [Display(Name="Release Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString="{0:yyyy-MM-dd}", ApplyFormatInEditMode=false)]
        public DateTime ReleaseDate { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
        [Required]
        [StringLength(30)]
        public String Genre { get; set; }

        [Range(0, 1000)]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z0-9''-'\s]*$")]
        [StringLength(5)]
        public string Rating { get; set; }

    }

    //database context, handling feching, storing and updating movie class. 
    public class MovieDBContext : DbContext
    {
        public DbSet<Movie> Movies {get; set;}
    }
}