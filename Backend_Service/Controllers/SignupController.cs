using Backend_Service.Data;
using Backend_Service.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Collections.Generic;

namespace Backend_Service.Controllers
{
    public class SignupController : Controller
    {
        private Flight_DbContext _db;
        public SignupController(Flight_DbContext Flight_DbContext)
        {
            _db = Flight_DbContext;
        }

        [HttpGet]
        [Route("api/Signup/UserNameAvailability")]
        public async Task<IActionResult> UserNameAvailability(string UserName)
        {
            Response Response = new Response();
            try
            {
                int username = await _db.Users.Where(x => x.UserName == UserName)
                               .Select(x => x.UserId).FirstOrDefaultAsync();

                Response.Data = (username > 0) ? false : true;
                Response.Status = "Success";
                return Ok(Response);
            }
            catch
            {
                Response.Status = "Failed";
                return Ok(Response);
            }
        }

        [HttpPost]
        [Route("api/Signup")]
        public async Task<IActionResult> Signup([FromBody] Signup signup)
        {
            Response Response = new Response();
            try
            {
                Response.Status = "Success";
                //Response.Data = UserId;
                return Ok(Response);
            }
            catch
            {
                Response.Status = "Failed";
                return Ok(Response);
            }
        }
    }
}
