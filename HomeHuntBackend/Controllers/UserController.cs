using HomeHuntBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace HomeHuntBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly HomeHuntDbContext _context;

        public UserController(HomeHuntDbContext context)
        {
            _context = context;
        }

        [HttpPost("createUser")]
        public async Task<ActionResult<User>> CreateUser(string email, string password, string firstName, string lastName, string phoneNumber)
        {
            // Check if a user with the same email already exists
            var existingUserByEmail = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (existingUserByEmail != null)
            {
                return BadRequest(new { message = "EmailAlreadyExists" });
            }

            // Check if a user with the same phone number already exists
            var existingUserByPhoneNumber = await _context.Users.FirstOrDefaultAsync(u => u.PhoneNumber == phoneNumber);
            if (existingUserByPhoneNumber != null)
            {
                return BadRequest(new { message = "PhoneNumberAlreadyExists" });
            }

            // Create the new user
            var user = new User
            {
                Email = email,
                FirstName = firstName,
                LastName = lastName,
                PhoneNumber = phoneNumber,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(password)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Created("", user);
        }

        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(string email, string password)
        {
            // Find the user by email
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
            {
                return Unauthorized(new { message = "InvalidCredentials" });
            }

            // Verify the password
            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(password, user.PasswordHash);
            if (!isPasswordValid)
            {
                return Unauthorized(new { message = "InvalidCredentials" });
            }

            // Return the userId, firstName, and lastName on successful authentication
            return Ok(new
            {
                message = "AuthenticationSuccessful",
                userId = user.UserId,
                firstName = user.FirstName,
                lastName = user.LastName
            });
        }

    }
}
