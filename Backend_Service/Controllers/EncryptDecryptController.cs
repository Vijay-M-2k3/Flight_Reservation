using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace Backend_Service.Controllers
{
    public class EncryptDecryptController : Controller
    {
        private static string key = "@FLIGHT_#S786%kp!u";
        private static string iv = "@FLIGHT_#S786*@c=L";

        public static byte[] Encrypt(string plainText)
        {
            byte[] encrypted;
            using (AesManaged aes = new AesManaged())
            {
                ICryptoTransform encryptor = aes.CreateEncryptor(Encoding.UTF8.GetBytes(key), Encoding.UTF8.GetBytes(iv));
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter sw = new StreamWriter(cs))
                            sw.Write(plainText);
                        encrypted = ms.ToArray();
                    }
                }
            }
            return encrypted;
        }

        public static string Decrypt(string value)
        {
            Aes aes = GetEncryptionAlgorithm();
            value = value.Replace(" ", "+");
            int mod4 = value.Length % 4;
            if (mod4 > 0)
            {
                value += new string('=', 4 - mod4);
            }
            byte[] buffer = Convert.FromBase64String(value);
            MemoryStream memoryStream = new MemoryStream(buffer);
            ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);
            CryptoStream cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read);
            StreamReader streamReader = new StreamReader(cryptoStream);
            return streamReader.ReadToEnd();
        }

        private static Aes GetEncryptionAlgorithm()
        {
            Aes aes = Aes.Create();
            var secret_key = Encoding.UTF8.GetBytes(key);
            var initialization_vector = Encoding.UTF8.GetBytes(iv);
            aes.Key = secret_key;
            aes.IV = initialization_vector;
            return aes;
        }
    }
}
