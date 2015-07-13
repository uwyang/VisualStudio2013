namespace mockParkShare.Migrations
{
    using mockParkShare.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<mockParkShare.Models.ParkingDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(mockParkShare.Models.ParkingDbContext context)
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
                },

                new ParkingSpot
                {
                    Id = 6,
                    OwnerId = 0,
                    ShortName = "Wilfrid Laurier University",
                    Address = "75 University Avenue West",
                    City = "Waterloo",
                    Province = "ON",
                    Country = "Canada",
                    lat = 43.474474,
                    lng = -80.52815399999997,
                },

new ParkingSpot
{
    Id = 7,
    OwnerId = 0,
    ShortName = "New City Supermarket",
    Address = "236 King Street East",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.448466,
    lng = -80.48529100000002,
},

new ParkingSpot
{
    Id = 8,
    OwnerId = 22,
    ShortName = "Centre In The Square",
    Address = "101 Queen Street North",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.454308,
    lng = -80.48385999999999,
},


new ParkingSpot
{
    Id = 10,
    OwnerId = 10,
    ShortName = "Apartment Building",
    Address = "73 York St",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.454696,
    lng = -80.516165,
},

new ParkingSpot
{
    Id = 11,
    OwnerId = 11,
    ShortName = "House",
    Address = "329 Glasgow St",
    City = "kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.4499487,
    lng = -80.52149810000003,
},

new ParkingSpot
{
    Id = 12,
    OwnerId = 12,
    ShortName = "Conestoga Mall",
    Address = "550 King Street North",
    City = "Waterloo",
    Province = "ON",
    Country = "Canada",
    lat = 43.498807,
    lng = -80.52721600000001,
},

new ParkingSpot
{
    Id = 14,
    OwnerId = 14,
    ShortName = "12 Cardill Crescent",
    Address = "12 Cardill Crescent",
    City = "Waterloo",
    Province = "Ontario",
    Country = "Canada",
    lat = 43.4803825,
    lng = -80.53529559999998,
},

new ParkingSpot
{
    Id = 15,
    OwnerId = 15,
    ShortName = "Apartment Building",
    Address = "135 Greenbrier Dr",
    City = "Waterloo",
    Province = "ON",
    Country = "Canada",
    lat = 43.48899900000001,
    lng = -80.53820480000002,
},

new ParkingSpot
{
    Id = 16,
    OwnerId = 16,
    ShortName = "Apartment Building",
    Address = "89 Longwood Dr",
    City = "Waterloo",
    Province = "ON",
    Country = "Canada",
    lat = 43.490728,
    lng = -80.53669500000001,
},

new ParkingSpot
{
    Id = 9,
    OwnerId = 9,
    ShortName = "Bingemans",
    Address = "425 Bingemans Centre Drive",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.473983,
    lng = -80.45073100000002,
},


new ParkingSpot
{
    Id = 17,
    OwnerId = 17,
    ShortName = "Walmart Pharmacy",
    Address = "70 Bridgeport Road East",
    City = "Waterloo",
    Province = "ON",
    Country = "Canada",
    lat = 43.470261,
    lng = -80.51569899999998,
},

new ParkingSpot
{
    Id = 18,
    OwnerId = 18,
    ShortName = "Apartment Building",
    Address = "25 Doon Rd",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.43726239999999,
    lng = -80.46258230000001,
},

new ParkingSpot
{
    Id = 19,
    OwnerId = 19,
    ShortName = "House",
    Address = "32 Erb St W",
    City = "Waterloo",
    Province = "ON",
    Country = "Canada",
    lat = 43.4648707,
    lng = -80.52418310000002,
},

new ParkingSpot
{
    Id = 20,
    OwnerId = 20,
    ShortName = "Passport Canada",
    Address = "120 King Street West",
    City = "Hamilton",
    Province = "ON",
    Country = "Canada",
    lat = 43.25821,
    lng = -79.87323000000004,
},

new ParkingSpot
{
    Id = 21,
    OwnerId = 21,
    ShortName = "City of Waterloo (city hall)",
    Address = "100 Regina St S Waterloo",
    City = "Ontario",
    Province = "CA",
    Country = "Canada",
    lat = 43.463032,
    lng = -80.52051699999998,
},

new ParkingSpot
{
    Id = 23,
    OwnerId = 24,
    ShortName = "City Cafe Bakery",
    Address = "499 Lancaster Street West",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.476043,
    lng = -80.48440399999998,
},

new ParkingSpot
{
    Id = 24,
    OwnerId = 24,
    ShortName = "City Cafe Bakery",
    Address = "Ottawa Street South Mill Courtland Woodside Park",
    City = "Kitchener",
    Province = "Ontario",
    Country = "Canada",
    lat = 43.440876,
    lng = -80.47301600000003,
},

new ParkingSpot
{
    Id = 25,
    OwnerId = 25,
    ShortName = "Superstore",
    Address = "875 Highland Road West",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.429698,
    lng = -80.526835,
},

new ParkingSpot
{
    Id = 26,
    OwnerId = 10,
    ShortName = "House",
    Address = "25 Thorndale Dr",
    City = "Waterloo",
    Province = "ON",
    Country = "Canada",
    lat = 43.451094,
    lng = -80.55070899999998,
},

new ParkingSpot
{
    Id = 27,
    OwnerId = 11,
    ShortName = "Canadian Tire",
    Address = "1400 Ottawa Street South",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.416622,
    lng = -80.51310699999999,
},

new ParkingSpot
{
    Id = 28,
    OwnerId = 12,
    ShortName = "KFC",
    Address = "1020 Ottawa Street North",
    City = "Kitchener",
    Province = "ON",
    Country = "Canada",
    lat = 43.452299,
    lng = -80.44353699999999,
}





             );
        }
    }
}
