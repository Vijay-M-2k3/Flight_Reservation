//using Backend_Service.Data;
using Backend_Service.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Collections.Generic;

namespace Backend_Service.Controllers
{
    public class LoginController : Controller
    {
        /*private readonly JSRL_DbContext _db = new JSRL_DbContext();

        [HttpGet]
        [Route("api/Login/GetLoginStatus")]
        public async Task<IActionResult> GetLoginStatus(string UserName, string Password)
        {
            int userId = 0;
            Response Response = new Response();
            try
            {
                var LoginDetails = new Login();
                var UserDetails = await _db.Users.Where(x => x.UserName == UserName && x.UserStatus != 2)
                              .Select(x => new { x.UserId, x.UserTypeId, x.Password, x.UserName } ).FirstOrDefaultAsync();

                if (UserDetails != null)
                {
                    LoginDetails.LoginStatus = EncryptDecryptController.Decrypt(Password) == EncryptDecryptController.Decrypt(UserDetails.Password) ? true : false;
                }
                else
                {
                    LoginDetails.LoginStatus = false;
                }

                if (UserDetails != null)
                {
                    LoginDetails.UserId = UserDetails.UserId;
                    LoginDetails.UserTypeId = UserDetails.UserTypeId;
                }

                Response.Data = LoginDetails;
                Response.Status = "Success";
                userId = LoginDetails.LoginStatus == true ? UserDetails.UserId : 0;
                return Ok(Response);
            }
            catch (Exception ex)
            {
                StackTrace trace = new StackTrace(ex, true);
                int ExceptionLine = trace.GetFrame(0).GetFileLineNumber();
                var obj = new ExceptionHandlingController();
                await obj.Exception(ex, "LoginController", "GetLoginStatus(Get)", ExceptionLine, userId);
                Response.Status = "Failed";
                return Ok(Response);
            }
        }*/
    }
}
