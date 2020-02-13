using Microsoft.EntityFrameworkCore;
using PokemonMakeTier.Entity;
using System;

namespace PokemonMakeTier.Data
{
    public class PokemonMakeTierContext : DbContext, IDbContext
    {
        public PokemonMakeTierContext(DbContextOptions<PokemonMakeTierContext> options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {



            base.OnModelCreating(modelBuilder);
        }

        public new DbSet<TEntity> Set<TEntity>() where TEntity : BaseEntity
        {
            return base.Set<TEntity>();
        }
    }
}
