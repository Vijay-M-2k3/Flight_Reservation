using System;

namespace Backend_Service.Models
{
    public class Response
    {
        public string Status { get; set; }
        public dynamic Data { get; set; }
    }

    public class UserDetails
    {
        public int UserId { get; set; }
        public int? UserTypeId { get; set; }
        public string EmailAddress { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime? CreatedOn { get; set; }
        public bool IsActive { get; set; }
    }
}
