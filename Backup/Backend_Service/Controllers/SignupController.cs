//using Backend_Service.Data;
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
        /*private JSRL_DbContext _db;
        public SignupController(JSRL_DbContext JSRL_DbContext)
        {
            _db = JSRL_DbContext;
        }

        [HttpGet]
        [Route("api/Signup/GetShopName")]
        public async Task<IActionResult> GetShopName(int ShopId)
        {
            Response Response = new Response();
            try
            {
                var ShopName = await _db.Shops.Where(x => x.ShopId == ShopId && x.ShopStatus != 2)
                                .Select(x => x.ShopName).FirstOrDefaultAsync();

                Response.Data = (ShopName != null && ShopName.Count() > 0) ? ShopName : "Invalid ShopId";
                Response.Status = "Success";
                return Ok(Response);
            }
            catch (Exception ex)
            {
                StackTrace trace = new StackTrace(ex, true);
                int ExceptionLine = trace.GetFrame(0).GetFileLineNumber();
                var obj = new ExceptionHandlingController();
                await obj.Exception(ex, "SignupController", "GetShopName(Get)", ExceptionLine, 0);
                Response.Status = "Failed";
                return Ok(Response);
            }
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
            catch (Exception ex)
            {
                StackTrace trace = new StackTrace(ex, true);
                int ExceptionLine = trace.GetFrame(0).GetFileLineNumber();
                var obj = new ExceptionHandlingController();
                await obj.Exception(ex, "SignupController", "UserNameAvailability(Get)", ExceptionLine, 0);
                Response.Status = "Failed";
                return Ok(Response);
            }
        }

        [HttpGet]
        [Route("api/Signup/ShopAvailability")]
        public async Task<IActionResult> ShopAvailability(string ShopName)
        {
            Response Response = new Response();
            var Data = new List<object>();
            try
            {
                var shopDetails = await (from u in _db.Users
                                         join s in _db.Shops on u.ShopId equals s.ShopId
                                         join a in _db.Address on s.AddressId equals a.AddressId
                                         join c in _db.Countries on a.CountryId equals c.CountryId
                                         where s.ShopName.ToLower() == ShopName.ToLower() && s.ShopId != 2 && a.IsActive == true
                                         select new ShopDetails
                                         {
                                             ShopId = s.ShopId,
                                             ShopName = s.ShopName,
                                             Category = s.Category,
                                             ContactNo = s.ContactNo,
                                             ShopOwner = u.Name,
                                             DoorNo = a.DoorNo,
                                             Street = a.Street,
                                             PinCode = a.PinCode,
                                             Locality = a.Locality,
                                             City = a.City,
                                             CountryName = c.CountryName,
                                             CountryCode = c.CountryCode,
                                             CountryImage = c.CountryImage,
                                             Alpha2 = c.Alpha2
                                         }).FirstOrDefaultAsync();

                Response.Data = shopDetails;
                Response.Status = "Success";
                return Ok(Response);
            }
            catch (Exception ex)
            {
                StackTrace trace = new StackTrace(ex, true);
                int ExceptionLine = trace.GetFrame(0).GetFileLineNumber();
                var obj = new ExceptionHandlingController();
                await obj.Exception(ex, "SignupController", "ShopAvailability(Get)", ExceptionLine, 0);
                Response.Status = "Failed";
                return Ok(Response);
            }
        }

        [HttpPost]
        [Route("api/Signup")]
        public async Task<IActionResult> Signup([FromBody] Signup signup)
        {
            Response Response = new Response();
            int userId = 0;
            try
            {
                Users db_users = new Users();
                Address db_address = new Address();
                Countries db_countries = new Countries();
                Shops db_shops = new Shops();
                int CountryId = await _db.Countries.Where(x => x.CountryName == signup.CountryName).Select(x => x.CountryId).FirstOrDefaultAsync();
                int AddressId = 0;
                int ShopId = 0;
                int UserId = 0;

                if ((signup.UserTypeId == 1 || signup.UserTypeId == 2) && !signup.IsShopAlreadyExists)
                {
                    if (CountryId == 0)
                    {
                        CountryId = (await _db.Countries.Select(x => x.CountryId).OrderByDescending(x => x).FirstOrDefaultAsync()) + 1;
                        db_countries.CountryId = CountryId;
                        db_countries.CountryName = signup.CountryName;
                        db_countries.CountryCode = signup.CountryCode;
                        db_countries.CountryImage = signup.CountryImage;
                        db_countries.Alpha2 = signup.Alpha2;

                        await _db.Countries.AddAsync(db_countries);
                        await _db.SaveChangesAsync();
                    }


                    AddressId = (await _db.Address.Select(x => x.AddressId).OrderByDescending(x => x).FirstOrDefaultAsync()) + 1;
                    db_address.AddressId = AddressId;
                    db_address.CountryId = CountryId;
                    db_address.DoorNo = signup.DoorNo;
                    db_address.City = signup.City;
                    db_address.PinCode = signup.PinCode;
                    db_address.State = signup.State;
                    db_address.Street = signup.Street;
                    db_address.CreatedOn = DateTime.Now;
                    db_address.IsActive = true;
                    if (signup.Locality != "No Data")
                    {
                        db_address.Locality = signup.Locality;
                    }

                    ShopId = (await _db.Shops.Select(x => x.ShopId).OrderByDescending(x => x).FirstOrDefaultAsync()) + 1;
                    db_shops.ShopId = ShopId;
                    db_shops.ShopName = signup.ShopName;
                    db_shops.Category = signup.ShopCategory;
                    db_shops.CreatedOn = DateTime.Now;
                    db_shops.ContactNo = signup.ShopContactNo;
                    db_shops.AddressId = AddressId;
                    db_shops.ShopStatus = 1;

                    await _db.Address.AddAsync(db_address);
                    await _db.Shops.AddAsync(db_shops);
                    await _db.SaveChangesAsync();
                }
                else if (signup.UserTypeId == 1 && signup.IsShopAlreadyExists)
                {
                    db_shops.ShopId = signup.ShopId;
                }
               
                UserId = (await _db.Users.Select(x => x.UserId).OrderByDescending(x => x).FirstOrDefaultAsync()) + 1;
                db_users.UserId = UserId;
                db_users.UserTypeId = signup.UserTypeId;
                db_users.Name = signup.Name;
                db_users.UserName = signup.UserName;
                db_users.ContactNo = signup.ContactNo;
                db_users.Password = signup.Password;
                db_users.CreatedOn = DateTime.Now;

                if (signup.UserTypeId == 2)
                {
                    db_address.CountryId = CountryId;
                    db_users.ShopId = signup.ShopId;
                    db_users.AddressId = AddressId;
                }
                else
                {
                    db_users.ShopId = ShopId;
                }
                db_users.UserStatus = 1;

                await _db.Users.AddAsync(db_users);
                await _db.SaveChangesAsync();

                Response.Status = "Success";
                Response.Data = UserId;
                userId = await _db.Users.Where(x => x.UserName == signup.UserName).Select(x => x.UserId).FirstOrDefaultAsync();
                return Ok(Response);
            }
            catch (Exception ex)
            {
                StackTrace trace = new StackTrace(ex, true);
                int ExceptionLine = trace.GetFrame(0).GetFileLineNumber();
                var obj = new ExceptionHandlingController();
                await obj.Exception(ex, "SignupController", "Signup(Post)", ExceptionLine, userId);
                Response.Status = "Failed";
                return Ok(Response);
            }
        }*/
    }
}
