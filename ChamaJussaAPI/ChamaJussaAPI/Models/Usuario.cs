using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Models;

public partial class Usuario
{
    public Guid IdUsuario { get; set; }

    public string Nome { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string TipoUsuario { get; set; } = null!;

    public string Imagem { get; set; } = null!;
}
