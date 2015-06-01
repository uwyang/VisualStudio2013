namespace GoogleMapTut.Migrations
{
    using GoogleMapTut.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<GoogleMapTut.Models.ParkingDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(GoogleMapTut.Models.ParkingDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.ParkingSpots.AddOrUpdate(i => i.Id,
                new ParkingSpot
                {
                    Id = 0,
                    OwnerId = 0,
                    ShortName = "Communitech",
                    Address = "151 Charles Street West, Suite 100",
                    City = "Kitchener",
                    Province = "Ontario",
                    Country = "Canada",
                    lat = 43.451616,
                    lng = -80.498904
                },

                new ParkingSpot
                {
                    Id = 1,
                    OwnerId = 1,
                    ShortName = "Charles Street Bus Terminal",
                    Address = "15 Charles St W",
                    City = "Kitchener",
                    Province = "Ontario",
                    Country = "Canada",
                    lat = 43.449413,
                    lng = -80.492974
                },

                new ParkingSpot
                {
                    Id = 2,
                    OwnerId = 2,
                    ShortName = "School Of Pharmacy, University of Waterloo",
                    Address = "10A Victoria St. S.",
                    City = "Kitchener",
                    Province = "Ontario",
                    Country = "Canada",
                    lat = 43.452442,
                    lng = -80.499483
                },

                new ParkingSpot
                {
                    Id = 3,
                    OwnerId = 3,
                    ShortName = "Vincenzo's",
                    Address = "	150 Caroline St S",
                    City = "Waterloo",
                    Province = "Ontario",
                    Country = "Canada",
                    lat = 43.459480,
                    lng = -80.519782
                },

                new ParkingSpot
                {
                    Id = 4,
                    OwnerId = 2,
                    ShortName = "University of Waterloo",
                    Address = "200 University Ave W", 
                    City = "Waterloo", 
                    Province = "Ontario",
                    Country = "Canada",
                    lat = 43.473895,
                    lng = -80.544951
                },

                new ParkingSpot
                {
                    Id = 5, 
                    OwnerId = 4, 
                    ShortName = "Apartment Building",
                    Address = "75 York Street",
                    City = "Kitchener",
                    Province = "Ontario",
                    Country = "Canada",
                    lat = 43.455201,
                    lng = -80.515181
                }

             );
        }
    }
}
