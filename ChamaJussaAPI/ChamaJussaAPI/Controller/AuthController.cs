using ChamaJussaAPI.DTOs;
using ChamaJussaAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;

    public AuthController(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }

    [HttpGet("me/{id:guid}")]
    public async Task<IActionResult> ObterUsuarioAutenticado(Guid id)
    {
        var usuario = await _usuarioRepository.ObterPorIdAsync(id);
        if (usuario == null)
            return NotFound(new { mensagem = "Sessão inválida ou usuário não encontrado." });

        var usuarioDto = new UsuarioDto
        {
            IdUsuario = usuario.IdUsuario,
            Nome = usuario.Nome,
            Email = usuario.Email,
            TipoUsuario = usuario.TipoUsuario
        };

        return Ok(usuarioDto);
    }

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        return Ok(new { mensagem = "Logout realizado com sucesso!" });
    }
}