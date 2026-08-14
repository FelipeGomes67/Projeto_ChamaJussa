using ChamaJussaAPI.DTOs;
using ChamaJussaAPI.Interfaces;
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

        if (usuario == null || usuario.Senha != loginDto.Senha)
        {
            return Unauthorized(new { mensagem = "E-mail ou senha inválidos." });
        }

        var usuarioDto = new UsuarioDto
        {
            IdUsuario = usuario.IdUsuario,
            Nome = usuario.Nome,
            Email = usuario.Email,
            TipoUsuario = usuario.TipoUsuario
        };

        return Ok(new
        {
            mensagem = "Login efetuado com sucesso!",
            usuario = usuarioDto
        });
    }
}