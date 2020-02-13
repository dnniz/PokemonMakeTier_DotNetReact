using System;
using System.Collections.Generic;
using System.Text;

namespace PokemonMakeTier.Entity
{
    public class BasePokemon
    {
        public string Nombre { get; set; }
        public IEnumerable<TipoPokemon> ListTipo { get; set; }
        public int IdCode { get; set; }
    }
}
