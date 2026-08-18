using ChamaJussaAPI.DTOs;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Utils; 
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LoginController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;

    public LoginController(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }

    [HttpPost]
    public async Task<IActionResult> Entrar([FromBody] LoginDto loginDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var usuario = await _usuarioRepository.ObterPorEmailAsync(loginDto.Email);

        if (usuario != null)
        {
            bool senhaValida = Criptografia.CompararHash(loginDto.Senha, usuario.Senha);

            if (senhaValida)
            {
                return Ok(new
                {
                    mensagem = "Login realizado com sucesso!",
                    tipoUsuario = usuario.TipoUsuario,
                    usuario = new
                    {
                        id = usuario.IdUsuario,
                        nome = usuario.Nome,
                        email = usuario.Email
                    }
                });
            }
        }

        return Unauthorized(new { mensagem = "E-mail ou senha inválidos." });
    }
}