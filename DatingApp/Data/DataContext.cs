using DatingApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {            
        }

        public DbSet<AppUser> Users { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<AppUser>().HasData(
        //        new AppUser() { Id = 1, UserName = "NewUserOne" },
        //        new AppUser() { Id = 2, UserName = "SomeUser" },
        //        new AppUser() { Id = 3, UserName = "AnotherUser" });

        //    base.OnModelCreating(modelBuilder);
        //}
    }
}
