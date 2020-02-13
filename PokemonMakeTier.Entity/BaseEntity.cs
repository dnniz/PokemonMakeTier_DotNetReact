using System;
using System.ComponentModel.DataAnnotations;

namespace PokemonMakeTier.Entity
{
    public class BaseEntity
    {
        public bool FlagActivo { get; set; }
        public bool FlagEliminado { get; set; }
        [MaxLength(120)]
        public string CreadoPor { get; set; }
        public DateTime? FechaCreacion { get; set; }
        [MaxLength(120)]
        public string ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }

        public BaseEntity() => (FlagActivo, FlagEliminado, FechaCreacion) = (true, false, DateTime.Now);
    }
}
