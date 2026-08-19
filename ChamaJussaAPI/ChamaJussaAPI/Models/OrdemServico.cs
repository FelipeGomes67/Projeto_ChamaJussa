using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Models;

public partial class OrdemServico
{
    public Guid IdOs { get; set; }

    public string Titulo { get; set; } = null!;

    public string Equipamento { get; set; } = null!;

    public string Local { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public string Imagem { get; set; } = null!;

    public string Status { get; set; } = null!;
}
