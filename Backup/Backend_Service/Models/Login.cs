using System;

namespace Backend_Service.Models
{
    public class Login
    {
        public int UserId { get; set; }
        public int? UserTypeId { get; set; }
        public bool LoginStatus { get; set; }
    }
}
