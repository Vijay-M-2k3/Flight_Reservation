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
        public int ShopCount { get; set; }
        public string Name { get; set; }
        public string ContactNo { get; set; }
        public string EmailAddress { get; set; }
        public string UserName { get; set; }
        public string DoorNo { get; set; }
        public string Street { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string PinCode { get; set; }
        public string State { get; set; }
        public string CountryName { get; set; }
        public int? CountryCode { get; set; }
        public string CountryImage { get; set; }
        public string Alpha2 { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UserStatusId { get; set; }
        public string UserStatus { get; set; }
    }

    public class ShopDetails
    {
        public string ShopOwner { get; set; }
        public int ShopId { get; set; }
        public string ShopName { get; set; }
        public string Category { get; set; }
        public string EmailAddress { get; set; }
        public string ContactNo { get; set; }
        public string DoorNo { get; set; }
        public string Street { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string PinCode { get; set; }
        public string State { get; set; }
        public string CountryName { get; set; }
        public int? CountryCode { get; set; }
        public string CountryImage { get; set; }
        public string Alpha2 { get; set; }
        public int ProductsCount { get; set; }
        public int CustomersCount { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int ShopStatusId { get; set; }
        public string ShopStatus { get; set; }
    }
}
