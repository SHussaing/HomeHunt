namespace HomeHuntBackend.Controllers
{
    public class CreateListingDTO
    {
        public int? UserId { get; set; }
        public string Name { get; set; } = null!;
        public decimal Price { get; set; }
        public string City { get; set; } = null!;
        public int HouseNumber { get; set; }
        public int RoadNumber { get; set; }
        public int BlockNumber { get; set; }
        public IFormFile? Photo { get; set; }
        public bool? Wifi { get; set; }
        public bool? WaterElectricity { get; set; }
    }
}
