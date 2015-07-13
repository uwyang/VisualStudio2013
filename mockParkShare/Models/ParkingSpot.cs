using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace mockParkShare.Models
{
    public class ParkingSpot
    {
        public int Id { get; set; }

        public int OwnerId { get; set; }

        [Display(Name = "Building Type/Name")]
        [StringLength(50)]
        public string ShortName { get; set; }

        [Display(Name = "Street Address")]
        [StringLength(100, MinimumLength = 3)]
        [Required]
        public string Address { get; set; }

        [Display(Name = "City or Region")]
        [StringLength(50, MinimumLength = 2)]
        [Required]
        public string City { get; set; }

        [Display(Name = "State or Province")]
        [StringLength(50, MinimumLength = 2)]
        [Required]
        public string Province { get; set; }

        [Display(Name = "Country")]
        [StringLength(50, MinimumLength = 2)]
        [Required]
        public string Country { get; set; }

        public double lng { get; set; }

        public double lat { get; set; }

        [StringLength(300)]
        public string Description { get; set; }



    }
}