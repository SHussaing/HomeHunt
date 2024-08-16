using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HomeHuntBackend.Models;

namespace HomeHuntBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListingsController : ControllerBase
    {
        private readonly HomeHuntDbContext _context;

        public ListingsController(HomeHuntDbContext context)
        {
            _context = context;
        }

        // GET: api/Listings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Listing>>> GetListings()
        {
            return await _context.Listings.ToListAsync();
        }

        public class ListingDto
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



        // POST: api/Listings
        [HttpPost]
        public async Task<ActionResult<Listing>> PostListing([FromForm] ListingDto listingDto)
        {
            // Convert DTO to entity
            var listing = new Listing
            {
                UserId = listingDto.UserId,
                Name = listingDto.Name,
                Price = listingDto.Price,
                City = listingDto.City,
                HouseNumber = listingDto.HouseNumber,
                RoadNumber = listingDto.RoadNumber,
                BlockNumber = listingDto.BlockNumber,
                Photo = listingDto.Photo != null ? ConvertToBytes(listingDto.Photo) : null,
                Wifi = listingDto.Wifi,
                WaterElectricity = listingDto.WaterElectricity,
                Views = 0
            };

            _context.Listings.Add(listing);
            await _context.SaveChangesAsync();

            return Created("", listing);  // Or just return Ok(listing);
        }

        private byte[] ConvertToBytes(IFormFile file)
        {
            using (var memoryStream = new MemoryStream())
            {
                file.CopyTo(memoryStream);
                return memoryStream.ToArray();
            }
        }


        private bool ListingExists(int id)
        {
            return _context.Listings.Any(e => e.ListingId == id);
        }
    }
}
