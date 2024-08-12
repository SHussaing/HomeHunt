using System;
using System.Collections.Generic;

namespace HomeHuntBackend.Models;

public partial class Listing
{
    public int ListingId { get; set; }

    public int? UserId { get; set; }

    public string Name { get; set; } = null!;

    public decimal Price { get; set; }

    public string City { get; set; } = null!;

    public int HouseNumber { get; set; }

    public int RoadNumber { get; set; }

    public int BlockNumber { get; set; }

    public byte[]? Photo { get; set; }

    public bool? Wifi { get; set; }

    public bool? WaterElectricity { get; set; }

    public int? Views { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual User? User { get; set; }
}
