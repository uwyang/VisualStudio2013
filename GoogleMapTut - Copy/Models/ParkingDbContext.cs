
namespace GoogleMapTut.Models
{
    using System.Data.Entity;

    public class ParkingDbContext : DbContext
    {
        public DbSet<ParkingSpot> ParkingSpots { get; set; }
    }
}