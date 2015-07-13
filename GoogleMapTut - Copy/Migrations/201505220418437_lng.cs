namespace GoogleMapTut.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lng : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ParkingSpots", "lng", c => c.Double(nullable: false));
            DropColumn("dbo.ParkingSpots", "log");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ParkingSpots", "log", c => c.Double(nullable: false));
            DropColumn("dbo.ParkingSpots", "lng");
        }
    }
}
