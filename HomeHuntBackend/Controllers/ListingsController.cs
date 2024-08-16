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
        public async Task<ActionResult<IEnumerable<ViewListingDTO>>> GetListings()
        {
            var listings = await _context.Listings
                .Include(l => l.User)
                .Select(l => new ViewListingDTO
                {
                    ListingID = l.ListingId,
                    UserID = l.UserId,
                    Name = l.Name,
                    Price = l.Price,
                    City = l.City,
                    HouseNumber = l.HouseNumber,
                    RoadNumber = l.RoadNumber,
                    BlockNumber = l.BlockNumber,
                    Photo = l.Photo,
                    Wifi = l.Wifi,
                    WaterElectricity = l.WaterElectricity,
                    Views = l.Views,
                    CreatedAt = l.CreatedAt,
                    UserFirstName = l.User != null ? l.User.FirstName : "Unknown",
                    UserLastName = l.User != null ? l.User.LastName : "Unknown",
                    UserEmail = l.User != null ? l.User.Email : "Unknown",
                    UserPhoneNumber = l.User != null ? l.User.PhoneNumber : "Unknown"
                })
                .ToListAsync();

            return Ok(listings);
        }


        // POST: api/Listings
        [HttpPost]
        public async Task<ActionResult<Listing>> PostListing([FromForm] CreateListingDTO listingDto)
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
