using System.ComponentModel.DataAnnotations;

namespace ChamaJussaAPI.DTOs;

public class LoginDto
{
    [Required(ErrorMessage = "O e-mail é obrigatório.")]
    [EmailAddress(ErrorMessage = "E-mail inválido.")]
    public string Email { get; set; } = null!;

    [Required(ErrorMessage = "A senha é obrigatória.")]
    public string Senha { get; set; } = null!;
}