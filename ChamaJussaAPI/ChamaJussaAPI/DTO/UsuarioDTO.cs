using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace ChamaJussaAPI.DTOs;

public class UsuarioDto
{
    [Required(ErrorMessage = "O nome é obrigatório.")]
    [StringLength(100, ErrorMessage = "O nome não pode exceder 100 caracteres.")]
    public string Nome { get; set; } = null!;

    [Required(ErrorMessage = "O e-mail é obrigatório.")]
    [EmailAddress(ErrorMessage = "Formato de e-mail inválido.")]
    [StringLength(256, ErrorMessage = "O e-mail não pode exceder 256 caracteres.")]
    public string Email { get; set; } = null!;

    public string? Senha { get; set; }

    public string TipoUsuario { get; set; } = "Comum";

    public IFormFile? Imagem { get; set; }
}