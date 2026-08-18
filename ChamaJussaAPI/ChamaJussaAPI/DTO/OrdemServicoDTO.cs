using System.ComponentModel.DataAnnotations;

namespace ChamaJussaAPI.DTOs;

public class OrdemServicoDto
{

    [Required(ErrorMessage = "O título é obrigatório.")]
    [StringLength(100, ErrorMessage = "O título não pode ter mais de 100 caracteres.")]
    public string Titulo { get; set; } = null!;

    [Required(ErrorMessage = "O equipamento é obrigatório.")]
    [StringLength(100, ErrorMessage = "O equipamento não pode ter mais de 100 caracteres.")]
    public string Equipamento { get; set; } = null!;

    [Required(ErrorMessage = "O local é obrigatório.")]
    [StringLength(100, ErrorMessage = "O local não pode ter mais de 100 caracteres.")]
    public string Local { get; set; } = null!;

    [Required(ErrorMessage = "A descrição é obrigatória.")]
    public string Descricao { get; set; } = null!;

    [Required(ErrorMessage = "A imagem é obrigatória.")]
    public IFormFile Imagem { get; set; } = null!;

    public string Status { get; set; } = "Aberto";
}