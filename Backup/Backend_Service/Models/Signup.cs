namespace Backend_Service.Models
{
    public class Signup
    {
        public string Name { get; set; }
        public string ShopName { get; set; }
        public string ContactNo { get; set; }
        public string ShopContactNo { get; set; }
        public string DoorNo { get; set; }
        public string Street { get; set; }
        public string CountryName { get; set; }
        public int CountryCode { get; set; }
        public string CountryImage { get; set; }
        public string Alpha2 { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Locality { get; set; }
        public string PinCode { get; set; }
        public int ShopId { get; set; }
        public int UserTypeId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ShopCategory { get; set; }
        public bool IsShopAlreadyExists { get; set; }
    }
}
