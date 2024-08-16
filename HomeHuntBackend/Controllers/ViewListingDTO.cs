namespace HomeHuntBackend.Controllers
{
    public class ViewListingDTO
    {
        public int ListingID { get; set; }
        public int? UserID { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string City { get; set; }
        public int HouseNumber { get; set; }
        public int RoadNumber { get; set; }
        public int BlockNumber { get; set; }
        public byte[] Photo { get; set; }
        public bool? Wifi { get; set; }
        public bool? WaterElectricity { get; set; }
        public int? Views { get; set; }
        public DateTime? CreatedAt { get; set; }

        // User details
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string UserEmail { get; set; }
        public string UserPhoneNumber { get; set; }

    }
}
