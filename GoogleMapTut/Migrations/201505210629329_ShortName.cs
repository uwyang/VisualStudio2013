namespace GoogleMapTut.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ShortName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ParkingSpots", "ShortName", c => c.String(maxLength: 50));
            AddColumn("dbo.ParkingSpots", "log", c => c.Double(nullable: false));
            AddColumn("dbo.ParkingSpots", "lat", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ParkingSpots", "lat");
            DropColumn("dbo.ParkingSpots", "log");
            DropColumn("dbo.ParkingSpots", "ShortName");
        }
    }
}
