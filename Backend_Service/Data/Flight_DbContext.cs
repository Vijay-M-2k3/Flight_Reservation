using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Backend_Service.Data
{
    public partial class Flight_DbContext : DbContext
    {
        public Flight_DbContext()
        {
        }

        public Flight_DbContext(DbContextOptions<Flight_DbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Usertypes> Usertypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=127.0.0.1; port=3306; Database=Flight; user=root; password=");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PRIMARY");

                entity.ToTable("users");

                entity.Property(e => e.UserId).HasColumnType("int(5)");

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasColumnType("varchar(100)");

                entity.Property(e => e.IsActive)
                    .HasColumnName("isActive")
                    .HasColumnType("bit(1)");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasColumnType("varchar(64)");

                entity.Property(e => e.UserTypeId).HasColumnType("int(5)");
            });

            modelBuilder.Entity<Usertypes>(entity =>
            {
                entity.HasKey(e => e.UserTypeId)
                    .HasName("PRIMARY");

                entity.ToTable("usertypes");

                entity.Property(e => e.UserTypeId).HasColumnType("int(5)");

                entity.Property(e => e.UserType).HasColumnType("varchar(50)");
            });
        }
    }
}
